import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { BsCircleFill } from "react-icons/bs";
const data = [
  { name: "Basic Tees", value: 550 },
  { name: "Custom Short Pants", value: 310 },
  { name: "Super Hoodies", value: 140 },
];

const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieComponent = () => {
  return (
    <div className="flex justify-between">
      <div>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>

      <div className="grid grid-col">
        {COLORS.map((item, index) => (
          <div
            className="h-[20px] w-[20px] rounded-full"
            style={{ backgroundColor: item }}
            key={index}
          ></div>
        ))}
      </div>

      <div className="grid grid-col text-gray-900">
        {data.map((item, index) => (
          <div key={index} className="cursor-pointer font-bold">
            <p>{item.name}</p>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PieComponent;
