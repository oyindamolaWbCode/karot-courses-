import React from 'react'
import PageTitle from '../components/PageTitle'
import StudentsTable from '../components/StudentsTable'

const StudentsPage = () => {
  return (
    <div className="px-[48px] py-[23px]  w-full font-inter bg-[#F7F5F8]   overflow-y-scroll space-y-[5vh] h-[90vh]">
     <PageTitle page={'Students'}/>
     <StudentsTable/>
    </div>
  )
}

export default StudentsPage
