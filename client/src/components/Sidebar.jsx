import React from 'react'
import { CiSearch } from "react-icons/ci";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { PiBuildingLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { BsMoonStars } from "react-icons/bs";
import { BiSolidToggleLeft } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className='min-h-screen w-[232px] flex flex-col justify-between shandow-md sticky border-r'>
     <div>
     <div className='flex justify-center items-center py-5 px-3 border-b'>
        <img src="./logo.png" alt="" />
      </div>

      <div className='px-3 py-2'>
      <div className="flex justify-center items-center text-[#B5B5BE] mb-1 rounded-lg bg-[#F3F3F3] p-1 gap-2 text-[14px]">
          <CiSearch size={20} />
          <input
            type="search"
            placeholder="Search"
            className="border-none outline-none text-[#B5B5BE] font-normal bg-[#F3F3F3]"
            name=""
            id=""
          />
        </div>

        <span className='text-[#92929D] text-[13px] font-normal'>Home</span>

        <div className='my-3 space-y-5 text-[#6B6B6B]'>
           <div className='flex text-sm font-medium space-x-2 items-center'>
              <RiDashboardHorizontalLine />
              <p>Dashboard</p>
           </div>
           <div className='flex text-sm font-medium space-x-2 items-center'>
              <PiBuildingLight />
              <p>My Company</p>
           </div>
           <div className='flex text-sm font-medium space-x-2 items-center'>
              <CiUser size={16} />
              <p>Employees</p>
           </div>
        </div>
      </div>
     </div>

     <div className='px-3 py-2 bg-[#F5F6F8] text-[#232323] text-sm font-medium flex justify-between items-center'>
       <div className='flex space-x-2 items-center'>
       <BsMoonStars />
       <p>Dark Mode</p>
       </div>
      <div>
        <BiSolidToggleLeft size={26} className='text-[#9CA0B2]' />
      </div>
     </div>
    </div>
  )
}

export default Sidebar
