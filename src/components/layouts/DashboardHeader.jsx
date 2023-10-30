import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authReset } from "../../hooks/slices/authSlice";
import { resetStateAction } from "../../hooks/store";
import logo from '../../assets/img_005.png'
import { GoBell, GoBellFill } from 'react-icons/go';
import ProfileDropdown from '../ProfileDropdown'

const DashboardHeader = () => {
  const dispatch = useDispatch()
  const navigate  = useNavigate()


  const tokenGen = JSON.parse(localStorage.getItem("user"));
  const expireAt = tokenGen.expiration;


  const today = new Date();
  const timeExpired = new Date(expireAt)
  console.log('Expire at:', today >= timeExpired)
  
  useEffect(() => {
    if (today >= timeExpired) {
      handleLogOut();
    }
  }, [expireAt]);

  const handleLogOut = ()=>{
  
    dispatch(authReset())
    navigate('/')
    setTimeout(()=>{
      dispatch(resetStateAction())
      localStorage.removeItem('user')
  
    }, 2000)
  
  
  }
  


  const [open, setOpen] = useState(false)

  const handleOpen = ()=>{
    setOpen(!open)
  }  


  return (
    <div className='h-[4.5vw] px-[48px] py-[14px] flex justify-between items-center  bg-[#FFFFFF] shadow-md '>
       <img src={logo} alt="logo" width={'100%'} className='w-[7vw] h-[2.7vw] ' title='IjapaFx' /> 
        <ul className='flex items-center gap-5'>
          
            <li className='w-[3vw] h-[3vw] border-[#FFE9CE] border-[1px] bg-[#FFE9CE]   rounded-[50%] flex items-center justify-center cursor-pointer hover:text-white transition-all duration-500 hover:bg-[#101828] text-[1.9vw]' onClick={handleOpen}><GoBellFill className=""/>
            
            {
            open && (<ProfileDropdown/>)
           }</li>
            {/* <li className='w-[3vw] h-[3vw] bg-[#101828] text-[white] rounded-[50%] flex items-center justify-center cursor-pointer  text-[1.5vw] relative' >PJ   
           
               </li> */}
         
        </ul>
    </div>
  )
}

export default DashboardHeader
