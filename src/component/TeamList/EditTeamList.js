import React from 'react';
import { useSelector } from 'react-redux';

const EditTeamList = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen); // Get sidebar state from Redux

  // Set the dynamic margin based on the sidebar's state
  const marginLeft = isOpen ? 'ml-52' : 'ml-12';

  const marginTop=isOpen ? "mt-[-36.8rem]":"mt-[-36rem]";


  return (
    <div className={`p-8 shadow-md transition-all duration-300 ${marginLeft} ${marginTop}`}>      
      {/* Form Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        
        {/* Section for User Details */}
        <div className="grid grid-cols-3 gap-4">
          
          <div className="flex flex-col">
            <label className="font-semibold">Name *</label>
            <input type="text" placeholder="Enter Full Name" className="border rounded-lg p-2" />
          </div>
          
          <div className="flex flex-col">
            <label className="font-semibold">Phone No. *</label>
            <input type="text" placeholder="Enter Phone Number" className="border rounded-lg p-2" />
          </div>
          
          <div className="flex flex-col">
            <label className="font-semibold">Email ID *</label>
            <input type="email" placeholder="Enter Email" className="border rounded-lg p-2" />
          </div>
          
          <div className="flex flex-col">
            <label className="font-semibold">Branch *</label>
            <input type="text" placeholder="Enter Branch Name" className="border rounded-lg p-2" />
          </div>
          
          <div className="flex flex-col">
            <label className="font-semibold">City Name *</label>
            <input type="text" placeholder="Enter City Name" className="border rounded-lg p-2" />
          </div>
          
          <div className="flex flex-col">
            <label className="font-semibold">User Permission *</label>
            <select className="border rounded-lg p-2">
              <option>Select User Permission</option>
              <option>Admin</option>
              <option>Editor</option>
              <option>Viewer</option>
            </select>
          </div>
          
          <div className="flex flex-col">
            <label className="font-semibold">User Type *</label>
            <input type="text" placeholder="Enter User Type" className="border rounded-lg p-2" />
          </div>
          
          <div className="flex flex-col">
            <label className="font-semibold">Designation</label>
            <input type="text" placeholder="Enter Designation" className="border rounded-lg p-2" />
          </div>

          <div className="flex flex-col col-span-2">
            <label className="font-semibold">User Profile Pic *</label>
            <input type="file" className="border rounded-lg p-2" />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end mt-2">
        <button className="bg-[#637D9B] text-white px-6 py-2 rounded-lg hover:bg-blue-500">
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditTeamList;
