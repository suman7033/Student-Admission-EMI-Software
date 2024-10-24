import React from 'react'
import { useSelector } from 'react-redux'; // Import useSelector to access sidebar state
import { Link } from 'react-router-dom';


const EditStudentIdCard = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen); // Get sidebar state from Redux
  const marginLeft= isOpen ? "ml-52": "ml-12";
  const marginTop=isOpen ? "mt-[-36.8rem]":"mt-[-36rem]";

  return (
      <div className={`${marginTop} ${marginLeft} p-8`}>
            
        {/* Form Body */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-3 gap-4">
              {/* Name */}
                <div className="flex flex-col">
                  <label className="font-semibold">Name *</label>
                    <input 
                      type="text" 
                      placeholder="Enter Full Name" 
                      className="border rounded-lg p-2" 
                    />
                </div>
            
              {/* Gender */}
            <div className="flex flex-col">
              <label className="font-semibold">Gender *</label>
                <select className="border rounded-lg p-2">
                  <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
            
            {/* Email */}
            <div className="flex flex-col">
                <label className="font-semibold">Email ID *</label>
                 <input 
                    type="email" 
                    placeholder="Enter Email" 
                    className="border rounded-lg p-2" 
                  />
              </div>
            
              {/* Phone Number */}
            <div className="flex flex-col">
            <label className="font-semibold">Phone No. *</label>
              <input type="text" placeholder="Enter Phone Number" className="border rounded-lg p-2"/>
            </div>
            
         {/* Blood Group */}
         <div className="flex flex-col">
            <label className="font-semibold">Blood Group *</label>
              <input type="text" placeholder="Enter Blood Group" className="border rounded-lg p-2"/>
          </div>              
            
       {/* Branch */}
       <div className="flex flex-col">
          <label className="font-semibold">Branch *</label>
            <select className="border rounded-lg p-2">
              <option>Select Branch</option>
              {/* Add branch options here */}
            </select>
        </div>                
            
      {/* Course */}
      <div className="flex flex-col">
          <label className="font-semibold">Course *</label>
            <input type="text" placeholder="Enter Course Name" className="border rounded-lg p-2"/>
      </div>                 
    {/* Student ID Number */}
    <div className="flex flex-col">
      <label className="font-semibold">Student I.D. No. *</label>
        <input type="text" placeholder="Enter Your ID No." className="border rounded-lg p-2"/>
    </div>
            
    {/* City Name */}
    <div className="flex flex-col">
      <label className="font-semibold">City Name *</label>
        <select className="border rounded-lg p-2">
          <option>Select City</option>
            {/* Add city options here */}
        </select>
    </div>                   
            
    {/* Address */}
    <div className="flex flex-col col-span-2">
      <label className="font-semibold">Address *</label>
        <input type="text" placeholder="Enter Address" className="border rounded-lg p-2"/>
    </div>                   
            
    {/* User Profile Picture Upload */}
    <div className="flex flex-col col-span-2">
      <label className="font-semibold">User Profile Pic *</label>
        <input type="file" className="border rounded-lg p-2"/>
    </div>
    </div>                   
            
     {/* Create Button */}
     <Link to='/student_id_card_list' className="flex justify-end mt-6">
       <button className="bg-[#637D9B] text-white px-6 py-2 rounded-md">Create</button>
     </Link>
</div>
</div>                                      
  )
}

export default EditStudentIdCard;
