import React from 'react'
import PendingIcon from "../img/PendingIcon.png";

const Pending = () => {
  return (
    <div className='w-60'>
      <div className=' px-1 h-28 rounded-xl bg-white border border-[#e6e3e3] border-spacing-8 shadow-md'>
        <div className='mt-3'> 
        <label className='text-robot text-base font-semibold px-3'>Pending For Approval</label>
        </div>
        <div className='flex items-center mt-7'>
          <lable className="font-bold px-3 text-xl text-[#1ACA0A]">782</lable>
          <img src={PendingIcon} className='pl-32 mt-2'/>
        </div>
      </div>
    </div>
  )
}

export default Pending
