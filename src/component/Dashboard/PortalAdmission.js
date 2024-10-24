import React from 'react'
import PortalIcon from "../img/PortalIcon.png";

const PortalAdmission = () => {
  return (
    <div className='w-60'> 
      <div className=' h-28 rounded-xl shadow-md bg-white border border-[#eae1e1] border-spacing-8'>
        <div className='pt-3'> 
        <label className='font-semibold px-4 text-robot text-base'>Portal Admission</label>
        </div>
        <div className='flex items-center mt-8'>
          <lable className="font-bold px-4 text-xl text-[#1ACA0A]">63782</lable>
          <img src={PortalIcon} className='pl-24'/>
        </div>
      </div>
    </div>
  )
}

export default PortalAdmission
