import React, { useEffect, useState } from 'react'
import ButtonLoader from './loader/ButtonLoader'
import { useDispatch, useSelector } from 'react-redux'
import { getCourses } from '../hooks/slices/AllCoursesSlice'

const MostEnrolledCoursesTable = () => {

    const {data: courses, loading} = useSelector((state)=> state.allcourses)
    const [totalCourses, setTotalCourses] = useState()
    const dispatch = useDispatch();

//     useEffect(()=>{
//       dispatch(getCourses())
//       // dispatch(getStudents())
//     }, [dispatch])
  
//   useEffect(()=>{
//       if(courses){
//         setTotalCourses(courses.courses)
//       }
//   }, [courses])

const dummyData = [
    {
      courseTitle: 'Introduction to UI/UX design',
      duration: '6 weeks',
      task: 'Task 1',
      enrolled: 100,
    },
    {
      courseTitle: 'Introduction to UI/UX design',
      duration: '8 weeks',
      task: 'Task 2',
      enrolled: 80,
    },
    {
      courseTitle: 'Introduction to UI/UX design',
      duration: '10 weeks',
      task: 'Task 3',
      enrolled: 120,
    },
    {
      courseTitle: 'Introduction to UI/UX design',
      duration: '6 weeks',
      task: 'Task 1',
      enrolled: 100,
    },
    {
      courseTitle: 'Introduction to UI/UX design',
      duration: '8 weeks',
      task: 'Task 2',
      enrolled: 80,
    },
    {
      courseTitle: 'Introduction to UI/UX design',
      duration: '10 weeks',
      task: 'Task 3',
      enrolled: 120,
    },
    {
      courseTitle: 'Introduction to UI/UX design',
      duration: '6 weeks',
      task: 'Task 1',
      enrolled: 100,
    },
    {
      courseTitle: 'Introduction to UI/UX design',
      duration: '8 weeks',
      task: 'Task 2',
      enrolled: 80,
    },
    {
      courseTitle: 'Introduction to UI/UX design',
      duration: '10 weeks',
      task: 'Task 3',
      enrolled: 120,
    },
    {
      courseTitle: 'Introduction to UI/UX design',
      duration: '6 weeks',
      task: 'Task 1',
      enrolled: 100,
    },
    {
      courseTitle: 'Introduction to UI/UX design',
      duration: '8 weeks',
      task: 'Task 2',
      enrolled: 80,
    },
    {
      courseTitle: 'Introduction to UI/UX design',
      duration: '10 weeks',
      task: 'Task 3',
      enrolled: 120,
    },
    {
      courseTitle: 'Introduction to UI/UX design',
      duration: '6 weeks',
      task: 'Task 1',
      enrolled: 100,
    },
    {
      courseTitle: 'Introduction to UI/UX design',
      duration: '8 weeks',
      task: 'Task 2',
      enrolled: 80,
    },
    {
      courseTitle: 'Introduction to UI/UX design',
      duration: '10 weeks',
      task: 'Task 3',
      enrolled: 120,
    },
    {
      courseTitle: 'Introduction to UI/UX design',
      duration: '6 weeks',
      task: 'Task 1',
      enrolled: 100,
    },
    {
      courseTitle: 'Introduction to UI/UX design',
      duration: '8 weeks',
      task: 'Task 2',
      enrolled: 80,
    },
    {
      courseTitle: 'Introduction to UI/UX design',
      duration: '10 weeks',
      task: 'Task 3',
      enrolled: 120,
    },
  ];



  console.log(totalCourses)
  return (
    <div>
      
      <div className="rounded bg-[white] p-[2vw] font-inter w-[51vw]">
              <h1 className=' pb-[1.4vw] font-[600] text-[#7B7B7B]'>Most enrolled courses</h1>
            <table className="w-full table-auto border-[1px] border-[#F3F3F3]">
              <thead>
                <tr className="bg-[#F9F9F9] text-gray-600  text-[14px] leading-normal">
                  <th className="py-3 px-6 text-left">Course Title</th>
                  <th className="py-3 px-6 text-left">Duration</th>
                  <th className="py-3 px-6 text-center">Task</th>
                  <th className="py-3 px-6 text-center"> Enrolled</th>
                
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                  <p className='text-white text-[5px]'>j</p>
           
              {dummyData.splice(0, 6).map((row, index) => (
           <>
              <tr
                key={index}
                className="hover:bg-gray-100  bg-white rounded-[1vw] py-4 border-[1px] border-[#F3F3F3] transition-all duration-700 "
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center text-[1vw] text-[#10182899] font-[500]">
                    <p>{row.courseTitle}</p>
                  </div>
                </td>
                <td className="py-3 px-6 text-left text-[1vw] font-[500]">
                  <p>{row.duration}</p>
                </td>
                <td className="py-3 px-6 text-center text-[#10182899] text-[1vw] font-[500]">
                  <p>{row.task}</p>
                </td>
                <td className="py-3 px-6 text-center text-[#10182899] text-[1vw] font-[500]">
                  <p>{row.enrolled} students</p>
                </td>
              </tr>
             
              <p className='text-white text-[5px]'>j</p>
           </>
            ))}
               
              </tbody>
            </table>
          </div>

    </div>
  )
}

export default MostEnrolledCoursesTable
