import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const PerformanceChart = () => {
  return (
    <div className="w-[24vw] bg-[#FFFFFF] py-[1.5vw] px-[3vw] space-y-[3vw]">
      <h3 className="text-[#7B7B7B] text-[1.2vw] font-[600]">
        Student's Performance for the month
      </h3>
      
      <div className="h-[13vw]">
        
      <PieChart
        lineWidth={40}
        startAngle={0}
        data={[
          { title: "Performing very well", value: 60, color: "#6D8B3A" },
          { title: "Average perfomance", value: 15, color: "#313948" },
        ]}
      />
      </div>

       <div className="space-y-5 font-inter text-[1.2vw] font-[600]">
       <div className="flex items-center gap-[2vw]">
            <div className="w-[2.5vw] h-[2.5vw]  bg-[#6D8B3A] rounded-full"></div>
            <p>Performing very well</p>
        </div>
        <div className="flex items-center gap-[2vw]">
            <div className="w-[2.5vw] h-[2.5vw]  bg-[#7B7B7B] rounded-full"></div>
            <p>Average perfomance</p>
        </div>
       </div>

    </div>
  );
};

export default PerformanceChart;
