import React from 'react';
import { useSelector } from 'react-redux';

const AddCityList = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen); // Get sidebar state from Redux

  // Set the dynamic margin based on the sidebar's state
  const marginLeft = isOpen ? 'ml-52' : 'ml-12';

  const marginTop=isOpen ? "mt-[-36.8rem]":"mt-[-36rem]";

  return (
    <div className={`p-8 transition-all duration-300 ${marginLeft} ${marginTop}`}>      
      <div className="flex bg-white p-6 rounded-lg shadow-md">
        {/* Branch */}
         <div className="flex flex-col mr-4">
            <label className="font-semibold pb-3">Branch *</label>
            <select className="w-60 border rounded-lg p-2">
              <option>Select Branch</option>
              {/* Add more branches here */}
            </select>
          </div>
          <div className="flex flex-col ml-20">
            <label className="font-semibold pb-3">City Name*</label>
            <input type="text" placeholder="Enter City Name" className="w-60 border rounded-lg p-2" />
          </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end mt-2">
        <button className="bg-[#637D9B] text-white px-6 py-2 rounded-lg hover:bg-blue-500">
          Add City
        </button>
      </div>
    </div>
  );
};

export default AddCityList;
