import React from "react";
import SingleCourses from "./SingleCourses";
import courseImg from "../assets/coursesimg.png";
const ListofCourses = () => {
  const courses = [
    {
      img: courseImg,
      title: "Introduction to Web Design",
      video: "23 Videos",
      task: "48 tasks",
    },
    {
      img: courseImg,
      title: "Introduction to Web Design",
      video: "23 Videos",
      task: "48 tasks",
    },
    {
      img: courseImg,
      title: "Introduction to Web Design",
      video: "23 Videos",
      task: "48 tasks",
    },
    {
      img: courseImg,
      title: "Introduction to Web Design",
      video: "23 Videos",
      task: "48 tasks",
    },
    {
      img: courseImg,
      title: "Introduction to Web Design",
      video: "23 Videos",
      task: "48 tasks",
    },
    {
      img: courseImg,
      title: "Introduction to Web Design",
      video: "23 Videos",
      task: "48 tasks",
    },
    {
      img: courseImg,
      title: "Introduction to Web Design",
      video: "23 Videos",
      task: "48 tasks",
    },
    {
      img: courseImg,
      title: "Introduction to Web Design",
      video: "23 Videos",
      task: "48 tasks",
    },
  ];

  return (
    <div className="">
      <h2 className="font-[600] text-[1.2vw] font-inter text-[#313948]">
        List of courses
      </h2>
      <div className="grid grid-cols-4 gap-[3vw] py-[0.5vw]">
        {
            courses.map((course)=>(
                <SingleCourses courseImg={course.img} title={course.title} videos={course.video} tasks={course.task} />
            ))
        }
      </div>
    </div>
  );
};

export default ListofCourses;
