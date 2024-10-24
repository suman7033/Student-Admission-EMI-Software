import React from 'react';
import { useSelector } from 'react-redux';

const EditCityList = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen); // Get sidebar state from Redux

  // Set the dynamic margin based on the sidebar's state
  const marginLeft = isOpen ? 'ml-52' : 'ml-12';

  const marginTop=isOpen ? "mt-[-36.8rem]":"mt-[-36rem]";


  return (
    <div className={`p-8 transition-all duration-300 ${marginLeft} ${marginTop}`}>
      <div className="bg-white p-6 rounded-lg shadow-md">
        
          <div className="flex flex-col">
            <label className="font-semibold pb-2">City Name*</label>
            <input type="text" placeholder="Enter City Name" className="w-52 border rounded-lg p-2" />
          </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end mt-2">
        <button className="bg-[#637D9B] text-white px-6 py-2 rounded-lg">
          Update City
        </button>
      </div>
    </div>
  );
};

export default EditCityList;
