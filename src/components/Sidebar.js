import React from "react";


const Sidebar = ({ privileges, settable }) => {

  const handleTableClick = (privilege) => {
    settable(privilege);
  };
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Navigation</h2>
        <div className="space-y-2">
          {privileges.map((privilege) => (
            <button
              key={privilege}
              onClick={() => handleTableClick(privilege)}
              className="block w-full text-left px-4 py-2 rounded-md transition-colors duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {privilege}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
