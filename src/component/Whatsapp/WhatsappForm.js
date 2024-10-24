import React from 'react';
import { useSelector } from 'react-redux'; // For sidebar state management
import { Link } from 'react-router-dom';

const WhatsappForm = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen); // Manage sidebar state
  const marginLeft = isOpen ? 'ml-52' : 'ml-12'; // Adjust content margin based on sidebar state
  const marginTop = isOpen ? 'mt-[-36.8rem]' : 'mt-[-36rem]';

  return (
    <div className={`pt-8 px-6 transition-all duration-300 ${marginLeft} ${marginTop}`}>
      {/* WhatsApp Form Header */}
      <div className=" p-6 rounded-lg mb-6">
        <h1 className="text-2xl font-semibold mb-4">WhatsApp Form</h1>

        {/* WhatsApp Form Fields */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Message Title *</label>
          <input
            type="text"
            className="w-full shadow-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Message Title"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
          <textarea
            className="w-full shadow-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Enter Message Content"
          ></textarea>
        </div>

        {/* Add WhatsApp Button */}
        <Link to='/whatsapp_list'>
        <div className="flex justify-center">
          <button className="shadow-md bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600">
            Add WhatsApp
          </button>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default WhatsappForm;
