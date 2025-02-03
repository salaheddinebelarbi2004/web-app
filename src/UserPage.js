// User1Page.js
import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./components/Sidebar";
import Table from "./Table"; // Import the table component
import previlages from "./Previlages.json";
import { useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useLocation } from "react-router-dom";

const UserPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location.pathname); // Returns the path (e.g., "/home/user1")
  const token = localStorage.getItem("token") || null;
  // console.log(token);
  useEffect(() => {
    if (!token) {
      console.log("&&&&&&&&&&&&&");
      navigate("/");
    }
  },[navigate,token]);
  const Realusername = jwtDecode(token).username;
  console.log("############");

  console.log(Realusername);
  const pathSegments = (location.pathname || "").split("/"); // [ "", "home", "user1" ]

  const username = pathSegments[2];
  console.log(username);

  useEffect(() => {
    if (username !== Realusername) {
      console.log("9IIIIIIIIIIIIIWWWWWWWWWWWWWW");
      navigate(`/home/${Realusername}`);
    }
  }, [username, Realusername, navigate]);

  // if (token != )

  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [userAccess, setUserAccess] = useState(null);
  const [table, SetTable] = useState("");
  const [access, setAccess] = useState(null);

  useEffect(() => {
    const fetchuserData = () => {
      try {
        // Get user data from previlages.json based on userId
        const userData = Object.keys(previlages[userId]); // Now using the actual userId from URL
        const userAccess = Object.values(previlages[userId]);
        if (!userData) {
          throw new Error("User not found");
        }
        setUserData(userData);
        setUserAccess(userAccess);
        console.log(userData);
        console.log(userAccess);
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
        <Sidebar
          tables={userData}
          userAccess={userAccess}
          settable={SetTable}
          setAccess={setAccess}
        />
        <div className="flex-1 p-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mt-6">
              {table && <Table tablename={table} access={access} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
