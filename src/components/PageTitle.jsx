import React, { useEffect, useState } from "react";
import { BsCalendarEventFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleStories } from "../hooks/slices/AllCoursesSlice";

const PageTitle = ({page, button}) => {
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
    <div className=" space-y-[0.4vw] flex justify-between">
      <div>
      <h1 className="text-[1.6vw] font-[700] text-[#313948] font-inter">
      An overview of all the {page}
      </h1>
      <p className="text-[1vw] font-[400] text-[#313948] flex items-center gap-2">
        {" "}
        <BsCalendarEventFill className="text-[1.5vw] text-[#6D8B3A]" />{" "}
        {days[currentDateTime.getDay()]}, {currentDateTime.getDate()}{" "}
        {months[currentDateTime.getMonth()].substring(0, 3)}.{" "}
        {currentDateTime.getUTCFullYear()}
      </p>
      </div>

      <div>
     {button}
      </div>
    </div>
  );
};

export default PageTitle;
