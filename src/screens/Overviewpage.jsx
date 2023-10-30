/* eslint-disable react/style-prop-object */
import React from "react";
import WelcomeCard from "../components/WelcomeCard";
import OverviewCards from "../components/OverviewCards";
import MostEnrolledCoursesTable from "../components/MostEnrolledCoursesTable";
import PerformanceChart from "../components/PerformanceChart";


const Overviewpage = () => {
  return (
    <div className="px-[48px] py-[23px]  w-full font-inter bg-[#F7F5F8]   overflow-y-scroll space-y-[5vh] h-[90vh]">
        <WelcomeCard/>
        <OverviewCards/>
        <div className="flex justify-between">
        <MostEnrolledCoursesTable/>
        <PerformanceChart/>

        </div>
    </div>
  );
};

export default Overviewpage;
