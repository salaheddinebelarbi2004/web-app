import React, { useState, useEffect } from "react";

const Table = ({ tablename, access }) => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    async function fetchData() {
      const url = `http://192.168.8.154:5445/select?name=${tablename}`;

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        if (Array.isArray(result)) {
          setData(result);
        } else {
          console.error("Fetched data is not an array:", result);
          setData([]); // Set empty array if data is invalid
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]); // Handle error case by setting empty data
      }
    }

    fetchData(); // Call fetchData directly
  }, [tablename]); // Runs when `tablename` changes

  const [selectedRow, setSelectedRow] = useState(null);
  // `formData` holds the current values for the edit/create form.
  const [formData, setFormData] = useState({});

  // Get the column headers from the data.
  const headers = data.length > 0 ? Object.keys(data[0]) : [];
  console.log(headers);

  // Triggered when clicking the "Edit" button in a row.
  const handleSelectRow = (index) => {
    setSelectedRow(index);
    setFormData({ ...data[index] });
  };

  // Triggered when clicking the "Delete" button in a row.
  const handleDeleteRow = (condition) => {
    const firstHeader = headers[0];
    const rowToDelete = data[condition];
    const conditionValue = rowToDelete[firstHeader];

    // Construct the request body
    const requestBody = {
      name: tablename,
      data: {
        [firstHeader]: conditionValue, // Use the first header as the key and its value as the condition
      },
    };

    console.log(requestBody);
    fetch("http://192.168.8.154:5445/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json()) // Assuming the response is JSON
      .then((data) => console.log(data)) // Handle the response data
      .catch((error) => console.error("Error:", error)); // Handle errors

    setSelectedRow(null);
    setFormData({});
  };

  // Handle input changes in the edit/create form.
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Save changes after editing an existing row.
  const handleSaveEdit = () => {
    if (selectedRow === null) return;

    fetch("http://192.168.8.154:5445/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        name: `${tablename}`,
        data: formData,
      }),
    })
      .then((response) => response.json()) // Assuming the response is JSON
      .then((data) => console.log(data)) // Handle the response data
      .catch((error) => console.error("Error:", error)); // Handle errors

    // const newData = data.map((item, i) =>
    //   i === selectedRow ? formData : item
    // );
    // // setData(newData);
    setSelectedRow(null);
    setFormData({});
  };

  // Prepare the form for adding a new row.
  const handleAddRow = () => {
    // Create an empty row object based on the headers.
    const emptyRow = {};

    headers.forEach((header) => {
      emptyRow[header] = "";
    });
    console.log(emptyRow);
    setSelectedRow("new");
    setFormData(emptyRow);
  };

  // Save a newly created row.
  const handleSaveNewRow = () => {
    fetch("http://192.168.8.154:5445/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        name: `${tablename}`,
        data: formData,
      }),
    })
      .then((response) => response.json()) // Assuming the response is JSON
      .then((data) => console.log(data)) // Handle the response data
      .catch((error) => console.error("Error:", error)); // Handle errors

    setSelectedRow(null);
    setFormData({});
  };

  return (
    <div>
      {/* The data table */}
      <div className="overflow-x-auto shadow-lg border rounded-lg">
        {data.length === 0 ? (
          <p className="text-center text-gray-500">No data available</p>
        ) : (
          <table className="min-w-full bg-white table-auto">
            <thead className="bg-gray-800 text-white">
              <tr>
                {headers.map((header) => (
                  <th key={header} className="px-6 py-3 text-left">
                    {header}
                  </th>
                ))}
                {access && <th className="px-6 py-3 text-left">Actions</th>}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  {headers.map((header) => (
                    <td key={header} className="px-6 py-4 border-b text-center">
                      {item[header]}
                    </td>
                  ))}
                  {access && (
                    <td className="px-6 py-4 border-b text-center">
                      <button
                        onClick={() => handleSelectRow(index)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteRow(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Button to add a new row */}
      {access && (
        <div className="mt-4">
          <button
            onClick={handleAddRow}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add New Row
          </button>
        </div>
      )}

      {/* Edit/Create Form (displayed when a row is selected or a new row is being added) */}
      {selectedRow !== null && (
        <div className="mt-4 p-4 border rounded">
          <h2 className="mb-4 text-xl font-semibold">
            {selectedRow === "new" ? "Add New Row" : "Edit Row"}
          </h2>
          <form>
            {headers.map((header, idx) => (
              <div key={header} className="mb-2">
                <label className="block font-medium mb-1">{header}</label>
                <input
                  type="text"
                  name={header}
                  value={formData[header]}
                  onChange={handleInputChange}
                  className="border rounded px-2 py-1 w-full"
                />
              </div>
            ))}
            <div className="mt-4">
              {selectedRow === "new" ? (
                <button
                  type="button"
                  onClick={handleSaveNewRow}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                >
                  Save New Row
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSaveEdit}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
                >
                  Save Changes
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setSelectedRow(null);
                  setFormData({});
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
export default Table;
