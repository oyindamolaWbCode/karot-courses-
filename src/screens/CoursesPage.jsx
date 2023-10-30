import React from "react";
import PageTitle from "../components/PageTitle";
import CourseOverview from "../components/CoursesOverview";
import ListofCourses from "../components/ListofCourses";
import { useNavigate } from "react-router-dom";

const CoursesPage = () => {
  const navigate = useNavigate();
  const CreateCourse = () => {
    navigate("/admin/create-course");
  };
  return (
    <div className="px-[48px] py-[23px]  w-full font-inter bg-[#F7F5F8]   overflow-y-scroll space-y-[5vh] h-[90vh]">
      <PageTitle
        page={"courses"}
        button={
          <button
            className="bg-[#6D8B3A] p-[0.5vw] text-[12px] font-[500] items-center text-white flex gap-[0.4vw] rounded-[0.2vw]"
            onClick={() => CreateCourse()}
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
                <g clip-path="url(#clip0_3890_16215)">
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3890_16215">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>{" "}
            Register new course{" "}
          </button>
        }
      />

      <CourseOverview />
      <ListofCourses />
    </div>
  );
};

export default CoursesPage;
