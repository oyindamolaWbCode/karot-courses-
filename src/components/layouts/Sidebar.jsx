import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import illustrate from "../../assets/dashboardIllustrate.svg";
import userImage from "../../assets/userImage.svg";
import { useDispatch, useSelector } from "react-redux";
import { getCourses, handleStories } from "../../hooks/slices/AllCoursesSlice";
import { BiSolidBookAlt, BiSolidDashboard } from "react-icons/bi";
import { AiTwotoneSetting } from "react-icons/ai";
import {
  RiBubbleChartFill,
  RiParentFill,
  RiTeamFill,
  RiWallet3Fill,
} from "react-icons/ri";
import { getStudents } from "../../hooks/slices/AllStudentsSlice";

const Sidebar = () => {
  const { loading, data, error } = useSelector((state) => state.auth);
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(
    localStorage.getItem("activeRoute") || location.pathname
  );
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCourses())
    // dispatch(getStudents())
  }, [dispatch])



  useEffect(() => {
    setUser(data.user);

    // dispatch(handleStories());
  }, [data]);

  console.log(user);

  const handleRouteClick = (route) => {
    setActiveRoute(route);
    localStorage.setItem("activeRoute", route); // Store the active route in local storage
  };

  const sidebarLinks = [
    { to: "overview", text: "Overview", icon: <BiSolidDashboard /> },
    { to: "parents", text: "Parents", icon: <RiParentFill /> },
    { to: "students", text: "Students", icon: <RiTeamFill /> },
    { to: "courses", text: "Courses", icon: <BiSolidBookAlt /> },
    { to: "subscription", text: "Subscription", icon: <RiWallet3Fill /> },
    { to: "analytics", text: "Analytics", icon: <RiBubbleChartFill /> },
    { to: "settings", text: "Settings", icon: <AiTwotoneSetting /> },
  ];

  return (
    <div className="min-w-[15vw] h-[90vh] shadow-md break-all font-inter overflow-hidden">
      <main className="fixed h-full min-w-[15vw]    z-[9999999] space-y-[1.5vw]">
        <header className="w-[13vw] p-[0.4vw]  rounded-[0.5vw] ml-[1.6vw] mt-[4vw]  py-[8px] bg-[#F7F5F8]   flex items-center gap-2">
          <img
            src={userImage}
            alt=""
            width={"100%"}
            className="w-[2.5vw] h-[2.5vw]"
          />
          <div>
            <h3 className="font-[400] text-[#101828] text-[0.8vw]  tracking-wider">
              {user.firstName} {user.lastName}
            </h3>
            <p className="mdl:text-[0.8vw] font-[400] text-[#313948] ">
              {user.email}
            </p>
          </div>
        </header>

        <main className="text-[#667085] text-[1vw] font-[500] flex flex-col leading-[3.5vw] ml-[2vw] overflow-hidden">
          {sidebarLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={
                activeRoute === link.to
                  ? "text-[#313948] font-semibold flex items-center gap-[1vw] justify-start bg-[#6D8B3A3D] w-[13vw] px-[0.5vw]"
                  : "flex items-center gap-[1vw] justify-start px-[0.5vw]"
              }
              onClick={() => handleRouteClick(link.to)}
            >
              <p className={activeRoute === link.to ? "text-[#6D8B3A] text-[1.6vw]" : "text-[#7B7B7B] text-[1.6vw]"}>{link.icon}</p>{" "}
              {link.text}
            </Link>
          ))}
        </main>
      </main>
    </div>
  );
};

export default Sidebar;
