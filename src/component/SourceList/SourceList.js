import React from 'react';
import { useSelector } from 'react-redux'; // To manage sidebar state
import EditIcon from '@mui/icons-material/Edit'; // Edit icon
import SearchIcon from '@mui/icons-material/Search';
import ToggleOnIcon from '@mui/icons-material/ToggleOn'; // Toggle for status ON
import ToggleOffIcon from '@mui/icons-material/ToggleOff'; // Toggle for status OFF
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const SourceList = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen); // Sidebar state
  const marginLeft = isOpen ? 'ml-52' : 'ml-12'; // Adjust content margin based on sidebar state
  const marginTop=isOpen ? "mt-[-36.8rem]":"mt-[-36rem]";

  return (
    <div className={`pt-8 px-6 shadow-md transition-all duration-300 ${marginLeft} ${marginTop}`}>
      {/* Team List Header */}
      <div className="h-20 bg-[#637D9B80] flex justify-between items-center">
        <h1 className="text-xl pl-4 text-white font-semibold">Source List</h1>
        <div className='w-60 flex ml-[35rem] border border-[#d6d3d3] rounded-lg'>
          <input type='search' placeholder='Search' className='w-52 border-none rounded-lg p-2 focus:outline-none'/>
          <SearchIcon className='mt-1 pr-1' fontSize='large' />
        </div>
        <Link to="/add_source_list">
        <button className="mr-5 bg-[#637D9B] text-white px-4 py-2 rounded-md">Add Course</button>
        </Link>
      </div>

      {/* Team List Table */}
      <div className="mt-6 bg-white p-3 rounded-md shadow">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-2 py-2">#</th>
              <th className="px-2 py-2">Date Created</th>
              <th className="px-2 py-2">Source Name</th>
              <th className="px-2 py-2">Description</th>
              <th className="px-2 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr className="text-center border-t">
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">07/11/2022</td>
              <td className="px-4 py-2">FB-MA</td>
              <td className="px-4 py-2">Facebook</td>
              <td className="px-4 py-5 flex justify-center">
                <Link to='/edit_source_list'>
                <EditIcon className="bg-white cursor-pointer mx-2" />
                </Link>
                <Link>
                 <DeleteIcon fontSize='large' className="cursor-pointer mx-2" />
                </Link>
              </td>
            </tr>
            {/* Add more rows similarly */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SourceList;
