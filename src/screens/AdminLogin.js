import React, { useEffect, useState } from "react";

import logo from "../assets/img_005.png";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../hooks/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ButtonLoader from "../components/loader/ButtonLoader";
import { BiUser } from "react-icons/bi";
import { BsEyeSlash, BsEye } from "react-icons/bs";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hide, setHide] = useState(true)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, data, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      "userName": username,
      "password": password,
    };
    dispatch(login(payload));
        // navigate("/admin");
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/admin");
      setUsername("");
      setPassword("");
    } else if (error) {
      // console.log(error.response.data.message);
      toast.error('Username and password does not match', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
      navigate("/");
      setUsername("");
      setPassword("");
    }
  }, [data, error, navigate]);





  return (
    <>
      <div className="h-[100vh] flex items-center flex-col bg-[#F3F3F3]">

        <div className="h-[4.5vw] bg-white shadow-[2px] w-full px-[4vw] py-[1vw]">

          <img
            src={logo}
            className=" w-[6vw] h-[2vw] "
            alt="brand"
          />
        </div>


        <div className="h-[28vw] w-[40vw] px-[5.4vw] py-[1.5vw]  bg-white mx-auto my-auto  shadow-2xl">

          <form
            className="space-y-[1.5vw] flex flex-col  justify-between"
            onSubmit={handleSubmit}
          >
            <h2 className="text-[2.3vw] font-inter  font-semibold text-left text-[#1D2939]">
              Sign in
            </h2>

            {/* Username */}
            <div className="relative mx-auto w-full space-y-[0.5vw]">
            <label className="text-[1.1vw] font-[500] text-[#333333]">Username</label>
              <input
                required
                type="name"
                placeholder="User Name"
                className="w-[100%] placeholder:text-[1vw]  h-[3.8vw] px-[18px] py-[14px] border outline-none  mx-auto rounded-[8px]"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
                <BiUser className="text-[#CCCED0] text-[1.6vw] aspect-auto absolute top-[2.8vw] right-3"/>
         
            </div>
            {/* password*/}
            <div className="relative mx-auto w-full space-y-[0.5vw]">
              <label className="text-[1.1vw] font-[500] text-[#333333]">Password</label>
              <input
                required
                type={hide ? "password" : "text"}
                placeholder="Password"
                className="w-[100%]  h-[3.8vw] placeholder:text-[1vw] px-[18px] py-[14px] border outline-none mx-auto rounded-[8px]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

          {
            hide ? (
              <BsEyeSlash onClick={()=> setHide(!hide)} className="text-[#CCCED0] text-[1.6vw] aspect-auto absolute top-[2.8vw] right-3"/>

            ) : (
              <BsEye onClick={()=> setHide(!hide)} className="text-[#CCCED0] text-[1.6vw] aspect-auto absolute top-[2.8vw] right-3"/>

            )
          }
  
            </div>

       {
        loading ? <ButtonLoader/> : (
          <button
                type="submit"
                className="py-[1.2vw] px-[1.8vw] mx-auto bg-[#6D8B3A] hover:bg-green-800 transition-all duration-[1s] w-[100%]  rounded-[4px] text-[1.2vw] font-[600] text-white"
              >
               Sign in
              </button>
        )
       }
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
