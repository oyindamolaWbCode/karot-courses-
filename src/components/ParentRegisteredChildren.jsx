import React from 'react'
import { useState } from 'react';

const ParentRegisteredChildren = () => {
const [expand, setExpand] = useState(false)

    const childrenData = [
        {
          firstName: 'David',
          middleName: 'Chidiebere',
          lastName: 'akpanchidi234@yahoomail.com',
          studentID: '09876543213',
          username: '04/8/2023',
          gender: 'Male',
        },
        {
          firstName: 'David',
          middleName: 'Chidiebere',
          lastName: 'akpanchidi234@yahoomail.com',
          studentID: '09876543213',
          username: '04/8/2023',
          gender: 'Male',
        },
        {
          firstName: 'David',
          middleName: 'Chidiebere',
          lastName: 'akpanchidi234@yahoomail.com',
          studentID: '09876543213',
          username: '04/8/2023',
          gender: 'Male',
        },
        {
          firstName: 'David',
          middleName: 'Chidiebere',
          lastName: 'akpanchidi234@yahoomail.com',
          studentID: '09876543213',
          username: '04/8/2023',
          gender: 'Male',
        },

      ];
  return (
    <div className={`bg-white shadow-sm py-[2vw] px-[2.5vw] font-inter space-y-[1.5vw] h-[31vw]  overflow-hidden ${expand && 'h-auto'}`}>
            <div className='flex justify-between'>
                        <h3 className='text-[1.1vw] font-[600] text-[#7B7B7B]'>Registered children</h3>
                        <button className='bg-[#FFE9CE] text-[0.9vw] text-[#7B7B7B] p-[0.4vw]'>{childrenData.length} children</button>
                        </div>
          {
            childrenData.map((child, index)=>(
                <main className='space-y-[1.5vw]' key={index}>

                <p className='bg-[#FAFAFA] text-center text-[#7B7B7B] text-[0.8vw] flex  items-center justify-center p-[0.8vw] rounded-full w-[0.3vw] h-[0.3vw]'>{index + 1}</p>

                <div className=' grid grid-cols-2 gap-[2vw]  border-[#F3F3F3] border-[1px] p-[1vw]'>
                    <div className=' col-span-1 relative'>
                        <input readOnly placeholder={child.firstName} type="text" className='w-full placeholder:text-[#7B7B7B] placeholder:text-[1vw] px-[2vw] rounded-[0.5vw] bg-[#F9F9F9] h-[4vw]    outline-none text-right' />
                        <p className='absolute  top-[1.2vw] left-[2vw]  font-[400] text-[#7B7B7B] text-[1vw]'>First name </p>
                    </div>

                    <div className=' col-span-1 relative'>
                        <input readOnly placeholder={child.middleName} type="text" className='w-full px-[2vw] placeholder:text-[#7B7B7B] placeholder:text-[1vw] rounded-[0.5vw] bg-[#F9F9F9] h-[4vw]   outline-none text-right' />
                        <p className='absolute  top-[1.2vw] left-[2vw]  font-[400] text-[#7B7B7B] text-[1vw]'>Middle name </p>
                    </div>
                    <div className=' col-span-1 relative'>
                        <input readOnly placeholder={child.lastName} type="text" className='w-full px-[2vw] placeholder:text-[1vw] placeholder:text-[#7B7B7B] rounded-[0.5vw] bg-[#F9F9F9] h-[4vw]   outline-none text-right' />
                        <p className='absolute  top-[1.2vw] left-[2vw]  font-[400] text-[#7B7B7B] text-[1vw]'>Last name </p>
                    </div>
                    <div className=' col-span-1 relative'>
                        <input readOnly placeholder={child.studentID} type="text" className='w-full px-[2vw] placeholder:text-[#7B7B7B] placeholder:text-[1vw] rounded-[0.5vw] bg-[#F9F9F9] h-[4vw]   outline-none text-right' />
                        <p className='absolute  top-[1.2vw] left-[2vw]  font-[400] text-[#7B7B7B] text-[1vw]'>Student’s ID </p>
                    </div>
                    <div className=' col-span-1 relative'>
                        <input readOnly placeholder={child.username} type="text" className='w-full px-[2vw] placeholder:text-[#7B7B7B] placeholder:text-[1vw] rounded-[0.5vw] bg-[#F9F9F9] h-[4vw]   outline-none text-right' />
                        <p className='absolute  top-[1.2vw] left-[2vw]  font-[400] text-[#7B7B7B] text-[1vw]'>Username </p>
                    </div>
                    <div className=' col-span-1 relative'>
                        <input readOnly placeholder={child.gender} type="text" className='w-full px-[2vw] placeholder:text-[#7B7B7B] placeholder:text-[1vw] rounded-[0.5vw] bg-[#F9F9F9] h-[4vw]   outline-none text-right' />
                        <p className='absolute  top-[1.2vw] left-[2vw]  font-[400] text-[#7B7B7B] text-[1vw]'>Gender </p>
                    </div>
                    

                </div>
                <button onClick={()=>setExpand(true)} className= {`ml-auto border-[#F3F3F3] border-[0.1vw] flex text-[#7B7B7B] p-[0.3vw] ${expand ? 'hidden' : 'block'}`}>Expand 
                <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4440_317)"><path d="M12 16L6 10H18L12 16Z" fill="#C4C4C4"/></g><defs><clipPath id="clip0_4440_317"><rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg></span>
                
                </button>
            </main>
            ))
          }

            <button onClick={()=>setExpand(!expand)} className=' ml-auto border-[#F3F3F3] border-[0.1vw] flex text-[#7B7B7B] p-[0.3vw]'>{expand ? 'Collapse' : 'Expand'}
                <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4440_317)"><path d="M12 16L6 10H18L12 16Z" fill="#C4C4C4"/></g><defs><clipPath id="clip0_4440_317"><rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg></span>
                
                </button>
</div>
  )
}

export default ParentRegisteredChildren
