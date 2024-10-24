import React from 'react';
import { useSelector } from 'react-redux';

const Edit_CourseList = () => {
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
            <label className="font-semibold">Course Name *</label>
            <select className="border rounded-lg p-2">
              <option>UI/UX DESIGNER</option>
              {/* Add more branches here */}
            </select>
          </div>
          
          <div className="flex flex-col">
            <label className="font-semibold">Course Price*</label>
            <input type="text" placeholder="Enter Phone Number" className="border rounded-lg p-2" />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end mt-2">
        <button className="bg-[#637D9B] text-white px-6 py-2 rounded-lg hover:bg-blue-500">
          Update
        </button>
      </div>
    </div>
  );
};

export default Edit_CourseList;
