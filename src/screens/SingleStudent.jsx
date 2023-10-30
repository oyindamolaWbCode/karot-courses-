import React from 'react'
import BackButton from '../components/BackButton'
import StudentNameTag from '../components/StudentNameTag'
import StudentPersonalProfile from '../components/StudentPersonalProfile'
import ParentRegisteredChildren from '../components/ParentRegisteredChildren'
import ParentSubscription from '../components/ParentSubscription'


const SingleStudent = () => {
  return (
    <div  className="px-[48px] py-[23px]  w-full font-inter bg-[#F7F5F8]   overflow-y-scroll space-y-[5vh] h-[90vh]">
        <BackButton/>
        <StudentNameTag/>
        <StudentPersonalProfile/>
        <ParentRegisteredChildren/>
        <ParentSubscription/>
      
    </div>
  )
}

export default SingleStudent
