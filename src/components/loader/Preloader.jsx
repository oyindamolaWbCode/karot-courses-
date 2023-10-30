import React from "react";
import "./preloader.css";
import bg from "../../assets/header_bcg.png";

const Preloader = () => {
  return (
    <div className=" h-[100vh] w-[100%] flex items-center  justify-center  overflow-y-hidden  absolute z-[1099990000000] bg-[#ffffff3d] overflow-hidden">
      {/* <div class="load-row">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
      <div className="loader overflow-hidden "></div>
    </div>
  );
};

export default Preloader;

