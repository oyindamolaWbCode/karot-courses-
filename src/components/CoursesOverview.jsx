import React, { useEffect, useState } from "react";
import {
  RiBook3Fill,
  RiBookFill,
  RiBookReadFill,
  RiParentFill,
  RiTeamFill,
} from "react-icons/ri";
import project from "../assets/Group 15.png";
import project2 from "../assets/Group 16 (1).png";
import chart from "../assets/bar-chart-line-1.png";
import chart2 from "../assets/bar-chart-line-2.png";
import chart3 from "../assets/bar-chart-line.png";
import { useSelector } from "react-redux";

const CourseOverview = () => {
  const [totalCourses, setTotalCourses] = useState();
  const { data: courses } = useSelector((state) => state.allcourses);

  useEffect(() => {
    if (courses) {
      setTotalCourses(courses.courses);
    }
  }, [courses]);
  // console.log(totalCourses.length)

  return (
    <div div className="flex justify-between">
      <div className="bg-[#FFFFFF] w-[24vw] h-[9vw] py-[1vw] px-[2vw] font-inter rounded-[0.4vw] flex flex-col justify-between">
        <p className="flex items-center gap-3 text-[#7B7B7B] font-[600] text-[1.2vw]">
          {" "}
          <RiBookFill className="text-[#6D8B3ACC] text-[2vw]" /> Total courses
        </p>
        <div className="flex  justify-between items-center xl:flex-row ">
          <h1 className="text-[2.3vw] font-[600] text-[#313948] ">72</h1>
          <div className="w-[6vw] flex">
            <img src={chart} alt="illustrate" className=" " />
            <img src={chart3} alt="illustrate" className=" " />
            <img src={chart2} alt="illustrate" className=" " />
          </div>
          {/* <img src={project} alt="illustrate" className=' w-[6vw]' /> */}
        </div>
      </div>

      <div className="bg-[#FFFFFF] w-[24vw] h-[9vw] py-[1vw] px-[2vw] font-inter rounded-[0.4vw] flex flex-col justify-between">
        <p className="flex items-center gap-3 text-[#7B7B7B] font-[600] text-[1.2vw]">
          {" "}
          <RiBookReadFill className="text-[#FF7F29CC] text-[2vw]" /> Enrolled
          courses
        </p>
        <div className="flex  justify-between items-center xl:flex-row ">
          <h1 className="text-[2.3vw] font-[600] text-[#313948] ">180</h1>
          <img src={project2} alt="illustrate" className=" w-[6vw]" />
        </div>
      </div>

      <div className="bg-[#FFFFFF] w-[24vw] h-[9vw] py-[1vw] px-[2vw] font-inter rounded-[0.4vw] flex flex-col justify-between">
        <p className="flex items-center gap-3 text-[#7B7B7B] font-[600] text-[1.2vw]">
          {" "}
          <RiBook3Fill className="text-[#313948CC] text-[2vw]" /> Unenrolled
          courses
        </p>
        <div className="flex  justify-between items-center xl:flex-row ">
          <h1 className="text-[2.3vw] font-[600] text-[#313948] ">
            78
          </h1>
          <div className="w-[6vw] flex">
            <svg
              width="76"
              height="24"
              viewBox="0 0 76 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3863_368)">
                <path
                  d="M29 12H31V21H29V12ZM45 8H47V21H45V8ZM37 2H39V21H37V2Z"
                  fill="#D00404"
                />
              </g>
              <g clip-path="url(#clip1_3863_368)">
                <path
                  d="M3 12H5V21H3V12ZM19 8H21V21H19V8ZM11 2H13V21H11V2Z"
                  fill="#D00404"
                />
              </g>
              <g clip-path="url(#clip2_3863_368)">
                <path
                  d="M55 12H57V21H55V12ZM71 8H73V21H71V8ZM63 2H65V21H63V2Z"
                  fill="#D00404"
                />
              </g>
              <defs>
                <clipPath id="clip0_3863_368">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(26)"
                  />
                </clipPath>
                <clipPath id="clip1_3863_368">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
                <clipPath id="clip2_3863_368">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(52)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
