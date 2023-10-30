import React from 'react'

const ParentSubscription = () => {
  return (
    <div className='bg-white shadow-sm py-[2vw] px-[2.5vw] font-inter space-y-[1.5vw]'>
    <h3 className='text-[1.1vw] font-[600] text-[#7B7B7B]'>Subscription</h3>
    <div className=' grid grid-cols-2 gap-[2vw] '>
        <div className=' col-span-1 relative'>
            <input readOnly placeholder='David' type="text" className='w-full placeholder:text-[#7B7B7B] placeholder:text-[1vw] px-[2vw] rounded-[0.5vw] bg-[#F9F9F9] h-[4vw]    outline-none text-right' />
            <p className='absolute  top-[1.2vw] left-[2vw]  font-[400] text-[#7B7B7B] text-[1vw]'>First name </p>
        </div>

        <div className=' col-span-1 relative'>
            <input readOnly placeholder='Chidiebere' type="text" className='w-full px-[2vw] placeholder:text-[#7B7B7B] placeholder:text-[1vw] rounded-[0.5vw] bg-[#F9F9F9] h-[4vw]   outline-none text-right' />
            <p className='absolute  top-[1.2vw] left-[2vw]  font-[400] text-[#7B7B7B] text-[1vw]'>Last name </p>
        </div>
        <div className=' col-span-1 relative'>
            <input readOnly placeholder='akpanchidi234@yahoomail.com' type="text" className='w-full px-[2vw] placeholder:text-[1vw] placeholder:text-[#7B7B7B] rounded-[0.5vw] bg-[#F9F9F9] h-[4vw]   outline-none text-right' />
            <p className='absolute  top-[1.2vw] left-[2vw]  font-[400] text-[#7B7B7B] text-[1vw]'>Email address </p>
        </div>
        <div className=' col-span-1 relative'>
            <input readOnly placeholder='09876543213' type="text" className='w-full px-[2vw] placeholder:text-[#7B7B7B] placeholder:text-[1vw] rounded-[0.5vw] bg-[#F9F9F9] h-[4vw]   outline-none text-right' />
            <p className='absolute  top-[1.2vw] left-[2vw]  font-[400] text-[#7B7B7B] text-[1vw]'>Mobile number </p>
        </div>
        <div className=' col-span-1 relative'>
            <input readOnly placeholder='04/8/2023' type="text" className='w-full px-[2vw] placeholder:text-[#7B7B7B] placeholder:text-[1vw] rounded-[0.5vw] bg-[#F9F9F9] h-[4vw]   outline-none text-right' />
            <p className='absolute  top-[1.2vw] left-[2vw]  font-[400] text-[#7B7B7B] text-[1vw]'>Registration date </p>
        </div>
        <div className=' col-span-1 relative'>
            <input readOnly placeholder='Male' type="text" className='w-full px-[2vw] placeholder:text-[#7B7B7B] placeholder:text-[1vw] rounded-[0.5vw] bg-[#F9F9F9] h-[4vw]   outline-none text-right' />
            <p className='absolute  top-[1.2vw] left-[2vw]  font-[400] text-[#7B7B7B] text-[1vw]'>Gender </p>
        </div>
        

    </div>

</div>
  )
}

export default ParentSubscription
