import React from 'react'
import Tranding from "../img/Tranding.png";

const TotalRevenue = () => {
  return (
    <div className='w-60'>
      <div className=' h-28 rounded-xl bg-white border'>
        <div className='pt-3'>
        <label className='text-robot text-base font-semibold px-4'>Total Revenue</label>
        </div>
        <div className='flex items-center mt-8'>
          <lable className="font-bold px-3 text-2xl text-[#1ACA0A]">63782</lable>
          <img src={Tranding} className='px-24'/>
        </div>
      </div>
    </div>
  )
}

export default TotalRevenue
