import React from "react";
import { TfiDashboard } from "react-icons/tfi";
import { AiOutlineTransaction, AiOutlineSchedule } from "react-icons/ai";
// import { AiOutlineSchedule } from "react-icons/gr";
import { FiUsers, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="bg-gray-900 h-screen rounded">
      <div className="px-[15px] py-[30px] flex item-center justify-center ">
        <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">
          Board.
        </h1>{" "}
      </div>
      <div className="flex items-center justify-center gap-[15px] py-[20px] cursor-pointer">
        <TfiDashboard />
        <p>Dashboard</p>
      </div>
      <div className="flex items-center justify-center gap-[15px] py-[20px] cursor-pointer ">
        <AiOutlineTransaction />
        <p>Transactions</p>
      </div>
      <div className="flex items-center justify-center mr-4 gap-[15px] py-[20px] cursor-pointer">
        <AiOutlineSchedule />
        <p>Schedules</p>
      </div>
      <div className="flex items-center justify-center mr-12 gap-[15px] py-[20px] cursor-pointer ">
        <FiUsers />
        <p>Users</p>
      </div>
      <div className="flex items-center justify-center mr-9 gap-[15px] py-[20px] cursor-pointer">
        <FiSettings />
        <p>Settings</p>
      </div>
    </div>
  );
};
export default Sidebar;
