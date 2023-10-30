import React from "react";
import BackButton from "../components/BackButton";
import CreateCourseHeader from "../components/CreateCourseHeader";

const CreateCourse = () => {
  return (
    <div className="px-[48px] py-[23px]  w-full font-inter bg-[#F7F5F8]   overflow-y-scroll space-y-[5vh] h-[90vh]">
      <BackButton />
      <CreateCourseHeader />
      <div className="bg-[#FFFFFF] px-[38px] py-[23px]">
        <p className="text-[#7B7B7B] font-inter font-semibold text-base ">
          Course details
        </p>
        <form className="py-[23px]">
          <input
            type="text"
            name=""
            id=""
            placeholder="Course Title"
            className="group w-full h-[2.8vw] px-[1vw] bg-[#FAFAFA] outline-[#C4C4C4] border-none"
          />
          <div className=" grid grid-cols-2 mt-6 gap-6">
            <div className="col-span-1 relative">
              <input
                type="text"
                name=""
                id=""
                placeholder="Course Duration"
                className="group w-full h-[2.8vw] px-[1vw] bg-[#FAFAFA] outline-[#C4C4C4] border-none"
              />
              <span className="flex justify-end -mt-8 px-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3940_17297)">
                    <path
                      d="M13.2134 4.476L14.3032 3.38625L15.3637 4.44675L14.2739 5.5365C15.3507 6.88438 15.8706 8.59341 15.7267 10.3126C15.5829 12.0318 14.7862 13.6306 13.5003 14.7808C12.2144 15.9309 10.5369 16.5451 8.81241 16.4971C7.08788 16.4491 5.44718 15.7425 4.22728 14.5226C3.00737 13.3027 2.30087 11.662 2.25286 9.93751C2.20485 8.21298 2.81899 6.53551 3.96913 5.24963C5.11928 3.96375 6.71813 3.16706 8.43732 3.02319C10.1565 2.87931 11.8655 3.39917 13.2134 4.476ZM8.24992 6V10.5H9.74992V6H8.24992ZM5.99992 0.75H11.9999V2.25H5.99992V0.75Z"
                      fill="#C4C4C4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3940_17297">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
            <div className="col-span-1">
              <input
                type="text"
                name=""
                id=""
                placeholder="No of lessons"
                className="group w-full h-[2.8vw] px-[1vw] bg-[#FAFAFA] outline-[#C4C4C4] border-none"
              />
            </div>
          </div>
          <div className=" grid grid-cols-2 mt-6 gap-6">
            <div className="col-span-1">
              <select
                placeholder=""
                name=""
                id="select"
                autocomplete="off"
                required
                className="group w-full h-[2.8vw] px-[1vw] bg-[#FAFAFA] outline-[#C4C4C4] border-none text-[#7B7B7B]"
              >
                <option className="text-[#7B7B7B] py-10">
                  Choose a category
                </option>
                <option className="text-[#7B7B7B]">Frontend</option>
                <option className="text-[#7B7B7B]">Backend</option>
                <option className="text-[#7B7B7B]">Cloud</option>
              </select>
            </div>
            <div className="col-span-1">
              <input
                type="text"
                name=""
                id=""
                placeholder="Name of instructor"
                className="group w-full h-[2.8vw] px-[1vw] bg-[#FAFAFA] outline-[#C4C4C4] border-none"
              />
            </div>
          </div>
        </form>
        <div className="py-[23px] flex gap-8">
          <div className="h-48 w-48 bg-[#F9F9F9] relative flex flex-col justify-center items-center">
            <input type="file" id="fileInput" className="hidden" />
            <label
              for="fileInput"
              className="absolute inset-0 cursor-pointer font-inter text-center font-normal text-[#7B7B7B] px-8 mt-[7rem]"
            >
              Upload Course thumbnail
            </label>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4410_2731)">
                  <path
                    d="M3 19H21V21H3V19ZM13 10V18H11V10H4L12 2L20 10H13Z"
                    fill="#7B7B7B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4410_2731">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="h-48 w-48 bg-[#F9F9F9] relative flex flex-col justify-center items-center">
            <input type="file" id="fileInput" className="hidden" />
            <label
              for="fileInput"
              className="absolute inset-0 cursor-pointer flex flex-col justify-center items-center font-inter font-normal text-[#7B7B7B] px-8 mt-20"
            >
              Upload Lesson
            </label>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4410_2731)">
                  <path
                    d="M3 19H21V21H3V19ZM13 10V18H11V10H4L12 2L20 10H13Z"
                    fill="#7B7B7B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4410_2731">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-[#6D8B3A] text-[#FFFFFF] px-8 py-2.5 rounded ">
            {" "}
            Save Course
          </button>
        </div>
      </div>
      <div className="bg-[#FFFFFF] px-[38px] py-[23px]">
        <p className="text-[#7B7B7B] font-inter font-semibold text-base my-4">
          Upload course lessons
        </p>

        <p className="text-[#7B7B7B] font-inter font-semibold text-base my-4">
          Lesson 1
        </p>
        <div className="grid grid-cols-5 grid-rows-4 gap-[24px] h-[240px]">
          <div className="col-span-1 row-span-2">
            <form>
              <div className=" w-full h-[111px] bg-[#F9F9F9] relative flex flex-col justify-center items-center">
                <input type="file" id="fileInput" className="hidden" />
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_4410_2731)">
                      <path
                        d="M3 19H21V21H3V19ZM13 10V18H11V10H4L12 2L20 10H13Z"
                        fill="#7B7B7B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4410_2731">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <label
                  for="fileInput"
                  className="inset-0 cursor-pointer text-center font-inter font-normal text-[#7B7B7B] px-8"
                >
                  Upload lesson's thumbnail
                </label>
              </div>
            </form>
          </div>

          <form className="col-span-2 ">
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Lesson Title"
                className="group w-full h-[2.8vw] px-[1vw] bg-[#FAFAFA] outline-[#C4C4C4] border-none"
              />
            </div>
          </form>

          <form className="col-span-2">
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Course Duration"
                className="group w-full h-[2.8vw] px-[1vw] bg-[#FAFAFA] outline-[#C4C4C4] border-none"
              />
            </div>
          </form>
          <form className="col-span-2 row-span-1">
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Course Duration"
                className="group w-full h-[2.8vw] px-[1vw] bg-[#FAFAFA] outline-[#C4C4C4] border-none"
              />
              <span className="flex justify-end -mt-8 px-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3940_17297)">
                    <path
                      d="M13.2134 4.476L14.3032 3.38625L15.3637 4.44675L14.2739 5.5365C15.3507 6.88438 15.8706 8.59341 15.7267 10.3126C15.5829 12.0318 14.7862 13.6306 13.5003 14.7808C12.2144 15.9309 10.5369 16.5451 8.81241 16.4971C7.08788 16.4491 5.44718 15.7425 4.22728 14.5226C3.00737 13.3027 2.30087 11.662 2.25286 9.93751C2.20485 8.21298 2.81899 6.53551 3.96913 5.24963C5.11928 3.96375 6.71813 3.16706 8.43732 3.02319C10.1565 2.87931 11.8655 3.39917 13.2134 4.476ZM8.24992 6V10.5H9.74992V6H8.24992ZM5.99992 0.75H11.9999V2.25H5.99992V0.75Z"
                      fill="#C4C4C4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3940_17297">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </form>
          <div className="col-span-2 row-span-3">
            <textarea
              className=" w-full h-full bg-[#F9F9F9] py-[14px] px-[12px] placeholder:text-[#7B7B7B] placeholder:text-[14px] outline-[#C4C4C4] border-none"
              placeholder="Write Transcript"
              name=""
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="col-span-1 row-span-2">
            <form>
              <div className=" w-full h-[111px] bg-[#F9F9F9] relative flex flex-col justify-center items-center">
                <input type="file" id="fileInput" className="hidden" />
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_4410_2731)">
                      <path
                        d="M3 19H21V21H3V19ZM13 10V18H11V10H4L12 2L20 10H13Z"
                        fill="#7B7B7B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4410_2731">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <label
                  for="fileInput"
                  className="inset-0 cursor-pointer text-center font-inter font-normal text-[#7B7B7B] px-8"
                >
                  Upload Lessons
                </label>
              </div>
            </form>
          </div>
          <div className="col-span-2 row-span-2 ">
            <textarea
              className=" w-full h-full bg-[#F9F9F9] py-[14px] px-[12px] placeholder:text-[#7B7B7B] placeholder:text-[14px] outline-[#C4C4C4] border-none"
              placeholder="Write Tasks"
              name=""
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-[#6D8B3A] text-[#FFFFFF] px-8 py-2.5 mt-10 rounded ">
            {" "}
            Save lesson
          </button>
        </div>
      </div>
      <div className="flex">
        <button className="bg-[#6D8B3A] text-[#FFFFFF] px-3 py-2.5 mt-10 rounded flex gap-2">
          {" "}
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3942_17345)">
                <path
                  d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_3942_17345">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          Add another lesson
        </button>
      </div>
    </div>
  );
};

export default CreateCourse;
