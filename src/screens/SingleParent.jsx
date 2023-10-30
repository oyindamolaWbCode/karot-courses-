import React from 'react'
import BackButton from '../components/BackButton'
import ParentNameTag from '../components/ParentNameTag'
import ParentPersonalProfile from '../components/ParentPersonalProfile'
import ParentRegisteredChildren from '../components/ParentRegisteredChildren'
import ParentSubscription from '../components/ParentSubscription'





const SingleParent = () => {
  return (
    <div className="px-[48px] py-[23px]  w-full font-inter bg-[#F7F5F8]   overflow-y-scroll space-y-[5vh] h-[90vh]">
      <BackButton/>
      <ParentNameTag/>
      <ParentPersonalProfile/>
      <ParentRegisteredChildren/>
      <ParentSubscription/>

   
    </div>
  )
}

export default SingleParent
