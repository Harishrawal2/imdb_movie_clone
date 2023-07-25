import React from "react";
import { Timeline } from "antd";

const ProcessComponent = () => {
  return (
    <div className="m-6">
      <Timeline
        items={[
          {
            children: "Meeting with suppliers from Kuta Bali",
          },
          {
            children: "14.00-15.00",
          },
          {
            children: "at Sunset Road, Kuta, Bali",
          },
          {
            children: "Check operation at Giga Factory 1",
          },
          {
            children: "18.00-20.00",
          },
          {
            children: "at Center Jakarta",
          },
        ]}
      />
    </div>
  );
};
export default ProcessComponent;
