import React, { useEffect, useState } from 'react'
import { RiBookFill, RiParentFill, RiTeamFill } from 'react-icons/ri'
import project from '../assets/Group 15.png'
import project2 from '../assets/Group 16 (1).png'
import chart from  '../assets/bar-chart-line-1.png'
import chart2 from  '../assets/bar-chart-line-2.png'
import chart3 from  '../assets/bar-chart-line.png'
import { useSelector } from 'react-redux'


const OverviewCards = () => {
const [totalCourses, setTotalCourses] = useState()
  const {data: courses} = useSelector((state)=> state.allcourses)

  useEffect(()=>{
      if(courses){
        setTotalCourses(courses.courses)
      }
  }, [courses])
  // console.log(totalCourses.length)

  return (
    <div div className='flex justify-between'>
    <div className='bg-[#FFFFFF] w-[24vw] h-[9vw] py-[1vw] px-[2vw] font-inter rounded-[0.4vw] flex flex-col justify-between'>
     <p className='flex items-center gap-3 text-[#7B7B7B] font-[600] text-[1.2vw]'> <RiParentFill  className='text-[#6D8B3ACC] text-[2vw]' /> All Parents</p>
     <div className='flex  justify-between items-center xl:flex-row '>
        <h1 className='text-[2vw] font-[600] text-[#313948] '>72</h1>
        <img src={project} alt="illustrate" className=' w-[6vw]' />
     </div>
    </div>


    <div className='bg-[#FFFFFF] w-[24vw] h-[9vw] py-[1vw] px-[2vw] font-inter rounded-[0.4vw] flex flex-col justify-between'>
     <p className='flex items-center gap-3 text-[#7B7B7B] font-[600] text-[1.2vw]'> <RiTeamFill  className='text-[#FF7F29CC] text-[2vw]' /> All Students</p>
     <div className='flex  justify-between items-center xl:flex-row '>
        <h1 className='text-[2vw] font-[600] text-[#313948] '>72</h1>
        <img src={project2} alt="illustrate" className=' w-[6vw]' />
     </div>
    </div>

    <div className='bg-[#FFFFFF] w-[24vw] h-[9vw] py-[1vw] px-[2vw] font-inter rounded-[0.4vw] flex flex-col justify-between'>
     <p className='flex items-center gap-3 text-[#7B7B7B] font-[600] text-[1.2vw]'> <RiBookFill  className='text-[#313948CC] text-[2vw]' /> All Courses</p>
     <div className='flex  justify-between items-center xl:flex-row '>
        <h1 className='text-[2vw] font-[600] text-[#313948] '>{totalCourses && totalCourses.length}</h1>
        <div className='w-[6vw] flex'>
        <img src={chart} alt="illustrate" className=' ' />
        <img src={chart3} alt="illustrate" className=' ' />
        <img src={chart2} alt="illustrate" className=' ' />
        </div>
     </div>
    </div>
    
    </div>
  )
}

export default OverviewCards
