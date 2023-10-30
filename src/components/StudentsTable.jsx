import React, { useState } from 'react';
import { GrMoreVertical } from 'react-icons/gr';
import { RiFilterFill, RiSearchFill } from 'react-icons/ri';
import ResponsivePagination from 'react-responsive-pagination';
import { useNavigate } from 'react-router-dom';
// import 'react-responsive-pagination/themes/classic.css';

const StudentsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [inputActive, setInputActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleInputFocus = () => {
    setInputActive(true);
  };

  const handleInputBlur = () => {
    setInputActive(false);
  };

  const dummyData = [
    {
      firstname: 'Josiah',
      Lastname: 'David',
      email: 'david.josiah@gmail.com',
      tel: '09023146613',
      Reg: '02/23/2023',
      option: <GrMoreVertical/>
    },
    {
      firstname: 'Josiah',
      Lastname: 'David',
      email: 'david.josiah@gmail.com',
      tel: '09023146613',
      Reg: '02/23/2023',
      option: <GrMoreVertical/>
    },
    {
      firstname: 'Josiah',
      Lastname: 'David',
      email: 'david.josiah@gmail.com',
      tel: '09023146613',
      Reg: '02/23/2023',
      option: <GrMoreVertical/>
    },
    {
      firstname: 'Josiah',
      Lastname: 'David',
      email: 'david.josiah@gmail.com',
      tel: '09023146613',
      Reg: '02/23/2023',
      option: <GrMoreVertical/>
    },
    {
      firstname: 'Josiah',
      Lastname: 'David',
      email: 'david.josiah@gmail.com',
      tel: '09023146613',
      Reg: '02/23/2023',
      option: <GrMoreVertical/>
    },
    {
      firstname: 'Josiah',
      Lastname: 'David',
      email: 'david.josiah@gmail.com',
      tel: '09023146613',
      Reg: '02/23/2023',
      option: <GrMoreVertical/>
    },
    {
      firstname: 'Josiah',
      Lastname: 'David',
      email: 'david.josiah@gmail.com',
      tel: '09023146613',
      Reg: '02/23/2023',
      option: <GrMoreVertical/>
    },
    {
      firstname: 'Josiah',
      Lastname: 'David',
      email: 'david.josiah@gmail.com',
      tel: '09023146613',
      Reg: '02/23/2023',
      option: <GrMoreVertical/>
    },
    {
      firstname: 'Josiah',
      Lastname: 'David',
      email: 'david.josiah@gmail.com',
      tel: '09023146613',
      Reg: '02/23/2023',
      option: <GrMoreVertical/>
    },
    {
      firstname: 'Josiah',
      Lastname: 'David',
      email: 'david.josiah@gmail.com',
      tel: '09023146613',
      Reg: '02/23/2023',
      option: <GrMoreVertical/>
    },




  ];

  const totalPages = Math.ceil(dummyData.length / itemsPerPage);
const navigate =useNavigate()
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  
  const search =(e)=>{
      setSearchQuery(e.target.value)
      handleSearch()
  }
  const handleSearch = () => {
      const trimmedQuery = searchQuery.trim().toLowerCase();
      if (trimmedQuery === '') {
          setFilteredData([]);
          return;
        }

    const filteredResults = dummyData.filter((row) => {
      return (
        row.firstname.toLowerCase().includes(trimmedQuery) ||
        row.Lastname.toLowerCase().includes(trimmedQuery)
      );
    });

    setFilteredData(filteredResults);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Determine which data to use for rendering based on search results
  const dataToRender = filteredData.length > 0 ? filteredData : dummyData;

  const handleSingleStudent=(id)=>{
    navigate(`/admin/student/${id}`)
}

  return (
    <div>
      <div className="rounded bg-[white] p-[2vw] font-inter w-[100%]">
        <div className="flex pb-[1vw] items-center group">
          <h1 className="text-[1vw] font-[600] text-[#7B7B7B]">Parent’s table</h1>

          <div className="input w-[19vw] ml-auto relative">
            <p
              className={`font-[400] font-inter text-[0.9vw] text-[#000000] absolute left-[1vw] top-[0.5vw] ${
                inputActive ? 'hidden' : 'block'
              }`}
            >
              Search
            </p>
            <input
              type="text"
              name=""
              id=""
              className="group w-full h-[2.5vw] px-[1vw] bg-[#FAFAFA] outline-[#C4C4C4] border-none"
              value={searchQuery}
              onChange={search}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <RiSearchFill
              className="text-[2vw] text-[#C4C4C4] absolute right-[1vw] top-[0.2vw] cursor-pointer"
              onClick={handleSearch}
            />
          </div>
          <RiFilterFill className="text-[#C4C4C4] ml-[11vw] text-[1.8vw]" />
        </div>

        <table className="w-full table-auto mb-[1vw] border-[1px] border-[#F3F3F3]">
          <thead>
            <tr className="bg-[#F9F9F9] text-gray-600  text-[1vw] leading-normal">
              <th className="py-3 px-6 text-left">First Name</th>
              <th className="py-3 px-6 text-left">Last Name</th>
              <th className="py-3 px-6 text-left">Parent's Email</th>
              <th className="py-3 px-6 text-left">Parent's Phone no.</th>
              <th className="py-3 px-6 text-left"> Reg.date</th>
              <th className="py-3 pl-[2.3vw] text-center"> <GrMoreVertical /></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {dataToRender.slice(startIndex, endIndex).map((row, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100  bg-white rounded-[1vw] py-4 border-[1px] border-[#F3F3F3] transition-all duration-700"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center text-[1vw] text-[#10182899] font-[500]">
                    <p>{row.firstname}</p>
                  </div>
                </td>
                <td className="py-3 px-6 text-left text-[1vw] font-[500]">
                  <p>{row.Lastname}</p>
                </td>
                <td className="py-3 px-6 text-left text-[#10182899] text-[1vw] font-[500]">
                  <p>{row.email}</p>
                </td>
                <td className="py-3 px-6 text-left text-[#10182899] text-[1vw] font-[500]">
                  <p>{row.tel} </p>
                </td>
                  <td className="py-3 px-6 text-left text-[#10182899] text-[1vw] font-[500]">
                  <p>{row.Reg} </p>
                </td>
                <td className="py-3  px-6 text-center cursor-pointer text-[#10182899] text-[1vw] font-[500]">
                  <p onClick={()=>handleSingleStudent(index)} className='shadow-md py-[1vw] pl-[0.9vw] rounded-lg '>{row.option} </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ResponsivePagination
          current={currentPage}
          total={Math.ceil(dataToRender.length / itemsPerPage)}
          onPageChange={handlePageChange}
          maxWidth={5}
          className='flex gap-4 text-[22px] w-full  justify-center'
          pageItemClassName='w-[2vw] text-center rounded-[4px] text-black border'
          activeItemClassName='border-[black]'
          disabledItemClassName='text-gray-400'
          nextClassName='active:bg-green-700'
        />
      </div>
    </div>
  );
};

export default StudentsTable;
