import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authReset } from "../hooks/slices/authSlice";
import { resetStateAction } from "../hooks/store";

const ProfileDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tokenGen = JSON.parse(localStorage.getItem("user"));
  const token = tokenGen.token;
  const expireAt = tokenGen.expiration;


  const today = new Date();
  const timeExpired = new Date(expireAt)
  console.log('Expire at:', today >= timeExpired)
  
  useEffect(() => {
    if (today >= expireAt) {
      handleLogOut();
    }
  }, [expireAt]);

  const handleLogOut = () => {
    dispatch(authReset());
    navigate("/");
    setTimeout(() => {
      dispatch(resetStateAction());
      localStorage.removeItem("user");
      localStorage.clear();
    }, 2000);
  };

  return (
    <div className="  bg-[#FFFFFFDD] shadow-md shadow-gray-400 w-[10vw] h-[7vw] rounded-[1vw] text-[#344054] flex px-[1.2vw] flex-col py-[1.4vw]  absolute top-[4vw] right-[1.6vw] gap-[0.5vw] font-[400] text-[1.2vw] space-y-[0.8vw] font-inter justify-left text-left z-[1] ">
      <button className="text-left" to="">
        <Link to={"panel"}>My Profile</Link>
      </button>

      <button className="text-left border-t-2" onClick={() => handleLogOut()}>
        Logout
      </button>

      <div className="bg-[#FFFFFFDD] w-[2vw] h-[2vw] rotate-[140deg] text-[#FFFFFFDD] shadow-t-sm shadow-gray-400 rounded-tr-[160%] top-[-1.4vw] right-3 absolute">
        .
      </div>
    </div>
  );
};

export default ProfileDropdown;
