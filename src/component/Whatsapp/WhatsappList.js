import React from 'react';
import { useSelector } from 'react-redux'; // For sidebar state management
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'; // Edit icon

const WhatsappList = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen); // Manage sidebar state
  const marginLeft = isOpen ? 'ml-52' : 'ml-12'; // Adjust content margin based on sidebar state
  const marginTop = isOpen ? 'mt-[-36.8rem]' : 'mt-[-36rem]';

  return (
    <div className={`pt-8 px-6 shadow-md transition-all duration-300 ${marginLeft} ${marginTop}`}>
      {/* WhatsApp List Header */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">

        {/* Search Bar */}
        <div className="flex items-center mt-4 mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-1/2 shadow-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* WhatsApp List Table */}
        <div className="overflow-x-auto text-center">
          <table className="min-w-full table-auto border-collapse">
            <thead className='bg-[#B0BDCC]'>
              <tr>
                <th className="px-4 py-2 border">Title</th>
                <th className="px-4 py-2 border">Message</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* You can map through your data to generate more rows */}
              <tr className="bg-white">
                <td className="px-4 py-2 border">XYZ</td>
                <td className="px-4 py-2 border">XYZ</td>
                <td className="px-4 py-2 border">
                  <label className="inline-flex items-center">
                    <input type="radio" className="form-radio"name="status2"value="Active"checked/>
                    <span className="ml-2 text-green-600">Active</span>
                  </label>
                  <label className="inline-flex items-center ml-4">
                    <input type="radio"className="form-radio"name="status2"value="Inactive"/>
                    <span className="ml-2 text-gray-600">Inactive</span>
                  </label>
                </td>
                <td className="px-4 py-5 border flex justify-center">
                <Link to='/edit_branch_list'>
                <EditIcon className="bg-white cursor-pointer mx-2" />
                </Link>
                <Link>
                 <DeleteIcon fontSize='medium' className="text-red-500 cursor-pointer mx-2" />
                </Link>
              </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WhatsappList;
