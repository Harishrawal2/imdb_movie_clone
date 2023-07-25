import React, { useEffect } from "react";
import Sidebar from "../Components/sidebar/Sidebar";
import Navbar from "../Components/Navbar";
import Main from "../Components/Main";
import Chartline from "../Components/Chartline";
import ViewProductChart from "../Components/ViewProductChart";

const Dashboard = () => {
  const ValidateUser = () => {
    const getuser = localStorage.getItem("user_login");

    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      console.log(user);
    }
  };

  useEffect(() => {
    ValidateUser();
  }, []);

  return (
    <div className="flex text-white">
      <div className="basis-[15%] border m-4">
        <Sidebar />
      </div>
      <div className="basis-[88%] border m-4">
        <Navbar />
        <Main />
        <Chartline />
        <ViewProductChart />
      </div>
    </div>
  );
};
export default Dashboard;
