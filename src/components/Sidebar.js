import React from "react";


const Sidebar = ({ tables, userAccess, settable , setAccess }) => {

  const handleTableClick = (table) => {
    settable(table);
  };
  const handlePrevilagesClick = (idx) => {
    console.log(idx)
    setAccess(userAccess[idx]);
  };
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Navigation</h2>
        <div className="space-y-2">
        {tables.map((table,idx) => (
            <button
              key={table}
              onClick={() => handleTableClick(table) & handlePrevilagesClick(idx)}
              className="block w-full text-left px-4 py-2 rounded-md transition-colors duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {table}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
