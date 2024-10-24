import React from 'react'

const DocumentAttached = () => {
  return (
    <div className='h-28 bg-white mb-4 rounded-lg shadow-md'>
       <div className='pt-2 ml-5 font-bold'>
          <label className=''>Document Attached</label>
          <label className='ml-48'>Course Details</label>
       </div>
       <div className='pb-2 ml-5 pt-2'>
         <label className='pl-8'>Pan Card</label>
         <label className='ml-24'>Aadhar Card</label>
         <label className='ml-16'>Course Name</label>
         <label className='ml-20'>Course Price</label>
       </div>
       <div className='pb-1 ml-5 pt-2'>
          <button className='text-center w-28 rounded-md mx-2 bg-[#637D9BB8]'>View</button>
          <button className='w-28 rounded-md ml-12 bg-[#637D9BB8]'>View</button>
          <label className='ml-16'>Python</label>
          <label className='ml-32'>₹ 4000</label>
       </div>
    </div>
  )
}

export default DocumentAttached
