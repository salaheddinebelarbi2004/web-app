// User1Page.js
import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./components/Sidebar";
import Table from "./Table"; // Import the table component
import previlages from "./Previlages.json";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [table, SetTable] = useState("");
  useEffect(() => {
    const fetchuserData = () => {
      try {
        // Get user data from previlages.json based on userId
        const userData = previlages[userId]; // Now using the actual userId from URL
        if (!userData) {
          throw new Error("User not found");
        }
        setUserData(userData);
        console.log(userData);
      } catch (error) {
        console.error("Error fetching user privileges:", error);
      }
    };

    fetchuserData();
  }, [userId]);
  console.log(userId);
  if (!userData) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar privileges={userData} settable={SetTable} />
        <div className="flex-1 p-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mt-6">{table && <Table tablename={table} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
