import React from 'react'
import TotalAIcon from "../img/TotalAIcon.png";

const TotalAdmission = () => {
  return (
    <div className='w-60'> 
      <div className='h-28 mr-2 rounded-xl bg-white border'>
        <div className='pt-3'> 
        <label className='text-[#000000] text-robot text-base font-semibold px-4'>Total Admission</label>
        </div>
        <div className='flex mt-7 ml-1'>
          <lable className="font-bold px-4 text-xl text-[#1ACA0A]">63782</lable>
          <img src={TotalAIcon} className='pl-20'/>
        </div>
      </div>
    </div>
  )
}

export default TotalAdmission