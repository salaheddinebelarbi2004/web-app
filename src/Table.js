// Table.js
import React from 'react';

const Table = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">No data available</p>;
  }

  const headers = Object.keys(data[0]); // Dynamically generate headers from data

  return (
    <div className="overflow-x-auto shadow-lg border rounded-lg">
      <table className="min-w-full bg-white table-auto">
        <thead className="bg-gray-800 text-white">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-6 py-3 text-left">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              {headers.map((header) => (
                <td key={header} className="px-6 py-4 border-b text-center">{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
