import React from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { login } from "../../hooks/slices/authSlice";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, data, error } = useSelector((state) => state.auth);

  return (
    <>
    {data ? (
     
        <div className="overflow-hidden">
          <header>
            <DashboardHeader />
          </header>

          <main className="flex">
            <Sidebar />
            <Outlet />
          </main>
        </div>
          ) : (
          
            <Navigate to="/" />
          )}
 
    </>
  );
};

export default AdminDashboard;

