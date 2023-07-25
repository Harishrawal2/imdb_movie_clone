import React, { PureComponent } from "react";
import PieComponent from "./PieComponent";
import { LiaGreaterThanSolid } from "react-icons/lia";
import ProcessComponent from "./ProcessComponent";

const ViewProductChart = () => {
  return (
    <div className="flex mt-[22px] w-full gap-[30px] text-gray-900">
      <div className="basis-[65%] border bg-white shadow-md cursor-pointer rounded-[4px]">
        <div className="bg-white flex item-center justify-between py-[15px] px-[20px] border-b-[1px] border-white">
          <h1 className="text-bold text-2xl">Top Product</h1>
          <p>
            <input type="date" />
          </p>
        </div>
        <div>
          <PieComponent />
        </div>
      </div>

      <div className="basis-[35%] border bg-white shadow-md cursor-pointer rounded-[4px]">
        <div className="bg-white flex item-center justify-between py-[15px] px-[20px] border-b-[1px] border-white">
          <h1 className="text-bold text-2xl">Today's Schedule</h1>
          <p className="mr-6 flex">
            See All <LiaGreaterThanSolid className="mt-1 text-slate-500" />
          </p>
        </div>
        <div>
          <ProcessComponent />
        </div>
      </div>
    </div>
  );
};
export default ViewProductChart;
