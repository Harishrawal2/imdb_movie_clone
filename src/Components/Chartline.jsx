import React from "react";
import { BsCircleFill } from "react-icons/bs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Week 1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Week 2",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Week 3",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Weel 4",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

const Chartline = () => {
  return (
    <div className="flex mt-[22px] w-full gap-[30px]">
      <div
        className="basis-[100%] border bg-white shadow-md rounded-[4px] 
      cursor-pointer"
      >
        <div className="bg-white text-gray-900 flex item-center justify-between py-[15px] px-[20px] border-b-[1px] border-white mb-[20px]">
          <div>
            <h1 className="font-bold">Activities</h1>
            <p>
              <input type="date" name="date" id="date" />
            </p>
          </div>
          <div className="flex">
            <BsCircleFill className="mt-3 text-green-600" />{" "}
            <p className="m-2">Guest</p>
            <BsCircleFill className="mt-3 text-blue-600" />{" "}
            <p className="m-2">User</p>
          </div>
        </div>
        <LineChart
          width={1000}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
};
export default Chartline;
