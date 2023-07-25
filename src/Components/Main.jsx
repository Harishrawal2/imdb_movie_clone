import React from "react";
import { FaMoneyBill } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineLike, AiOutlineTransaction } from "react-icons/ai";

const Main = () => {
  return (
    <div className="grid grid-flow-col justify-stretch text-gray-500">
      <div className="m-2 h-[100px] rounded-lg shadow-md">
        <div className="flex w-full h-full py-2 px-4 bg-green-100 rounded-lg justify-between">
          <div className="my-auto mt-5">
            <p className="text-sm">Total Revenues</p>
            <p className="text-2xl font-bold">$2,129,430</p>
          </div>
          <div className="text-2xl ml-5 mt-1">
            <FaMoneyBill />
          </div>
        </div>
      </div>

      <div className="m-2 h-[100px] rounded-lg shadow-md">
        <div className="flex w-full h-full bg-yellow-100 py-2 px-4 bg-green-50 rounded-lg justify-between">
          <div className="my-auto mt-5">
            <p className="text-sm">Total Transactions</p>
            <p className="text-2xl font-bold">1,520</p>
          </div>
          <div className="text-2xl ml-5 mt-1">
            <AiOutlineTransaction />
          </div>
        </div>
      </div>

      <div className="m-2 h-[100px] rounded-lg shadow-md">
        <div className="flex w-full bg-pink-100 h-full py-2 px-4 bg-green-50 rounded-lg justify-between">
          <div className="my-auto mt-5">
            <p className="text-sm">Total Likes</p>
            <p className="text-2xl font-bold">9,721</p>
          </div>
          <div className="text-2xl ml-5 mt-1">
            <AiOutlineLike />
          </div>
        </div>
      </div>

      <div className="m-2 h-[100px] rounded-lg shadow-md">
        <div className="flex w-full h-full py-2 px-4 bg-slate-100 rounded-lg justify-between">
          <div className="my-auto mt-5">
            <p className="text-sm">Total Users</p>
            <p className="text-2xl font-bold">892</p>
          </div>
          <div className="text-2xl ml-5 mt-1">
            <FiUsers />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
