import React from 'react';

const EMIDetails = () => {
  return (
    <div>
      {/* EMI Summary */}
      <div className='font-bold flex justify-between px-10 pt-3 bg-[#637D9B2E] h-24'>
        <label>Payment Type</label>
        <label>Down Payment</label>
        <label>Total EMI</label>
        <label>Payment Mode</label>
      </div>
      <div className='flex justify-between px-12 mt-[-3rem]'>
        <label>Installment</label>
        <label>₹ 1,000.00</label>
        <label>04</label>
        <label className='pr-4'>Online UPI</label>
      </div>
      
      {/* EMI Details */}
      <div className='flex w-full my-8'> 
         <div className='w-1/2'>
         <label className='text-lg font-semibold'>EMI Details</label>
         <table className='w-5/6 border border-gray-300 border-collapse'>
           <thead className='text-center text-white bg-[#254974b8]'>
             <tr>
               <th className='p-2 border border-gray-300'>S.No</th>
               <th className='p-2 border border-gray-300'>Installment Amount</th>
               <th className='p-2 border border-gray-300'>Installment Date</th>
             </tr>
           </thead>
           <tbody className=''>
             <tr className='my-2 text-center'>
               <td className='p-2 border border-gray-300'>01</td>
               <td className='p-2 border border-gray-300'>₹ 2300</td>
               <td className='p-2 border border-gray-300'>05-10-2024</td>
             </tr>
           </tbody>
         </table>
      </div>
       
      <div className='w-1/2 pr-2'>
         <label className='font-bold'>Approver Comment*</label>
         <textarea className='w-full h-20 p-2 border border-gray-300'></textarea>
         <button className='bg-[#0A9AE3] w-32 h-10 rounded-md mx-5 my-2'>Back</button>
         <button className='bg-[#EF4444] w-32 h-10 rounded-md mx-5 my-2'>Reject</button>
         <button className='bg-[#1ACA0A] w-32 h-10 rounded-md mx-5 my-2'>Approve</button>
      </div>
      </div>
    </div>
  );
}

export default EMIDetails;
