import React from 'react'
import PageTitle from '../components/PageTitle'
import ParentsTable from '../components/ParentsTable'

const ParentsPage = () => {
  return (
    <div className="px-[48px] py-[23px]  w-full font-inter bg-[#F7F5F8]   overflow-y-scroll space-y-[5vh] h-[90vh]">
      <PageTitle page={'Parents'}/>
      <ParentsTable/>
    </div>
  )
}

export default ParentsPage
