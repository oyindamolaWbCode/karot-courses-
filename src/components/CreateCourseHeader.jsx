import React, { useEffect, useState } from "react";
import { BsCalendarEventFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleStories } from "../hooks/slices/AllCoursesSlice";

const CreateCourseHeader = () => {
  const { loading, data, error } = useSelector((state) => state.auth);
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(data.user);
  }, [data]);

  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [days, setDays] = useState([
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]);

  const [months, setMonths] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);

  return (
    <div className=" space-y-[0.4vw] flex   justify-between">
      <div>
        <h1 className="text-[1.6vw] font-[700] text-[#313948] font-inter">
          Upload a new course
        </h1>
        <p className="text-[1vw] font-[400] text-[#313948] flex items-center gap-2">
          {" "}
          <BsCalendarEventFill className="text-[1.5vw] text-[#6D8B3A]" />{" "}
          {days[currentDateTime.getDay()]}, {currentDateTime.getDate()}{" "}
          {months[currentDateTime.getMonth()].substring(0, 3)}.{" "}
          {currentDateTime.getUTCFullYear()}
        </p>
      </div>

      <div className=" ">
        <button
          disabled
          className="bg-[#F3F3F3] p-[0.5vw] text-[12px] font-[500] items-center text-[#7B7B7B] flex gap-[0.4vw] rounded-[0.2vw]"
          onClick={""}
        >
          {" "}
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3939_17149)">
                <path
                  d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"
                  fill="#7B7B7B"
                />
              </g>
              <defs>
                <clipPath id="clip0_3939_17149">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>{" "}
          Register new course{" "}
        </button>
      </div>
    </div>
  );
};

export default CreateCourseHeader;
