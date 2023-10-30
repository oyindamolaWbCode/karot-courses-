import React from "react";
import { RiMailFill } from "react-icons/ri";
import profile from '../assets/userImage.svg'



const ParentNameTag = () => {
  return (
    <div className="flex justify-between bg-white shadow-sm py-[2vw] px-[2.5vw] items-center font-inter">

        <div className="flex gap-[1.5vw] items-center">
            <img src={profile} alt="" />
            <div>
                <p className="text-[#7B7B7B] ">Parent’s profile</p>
                <h3 className="text-[#313948] font-[700] text-[1.5vw]">Akpan Chidiebere</h3>
            </div>
        </div>





    <div>
    <button
        className="bg-[#6D8B3A] px-[1vw] py-[0.6vw] text-[0.9vw] font-[500] items-center text-white flex gap-[0.4vw] rounded-[0.2vw]"
        onClick={onclick}
      >
        <RiMailFill className="text-[1.7vw]"/>   Send a mail
      </button>
    </div>
    </div>
  );
};

export default ParentNameTag;
