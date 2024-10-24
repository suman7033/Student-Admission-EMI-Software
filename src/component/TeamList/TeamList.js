import React from 'react';
import { useSelector } from 'react-redux'; // To manage sidebar state
import EditIcon from '@mui/icons-material/Edit'; // Edit icon
import SearchIcon from '@mui/icons-material/Search';
import ToggleOnIcon from '@mui/icons-material/ToggleOn'; // Toggle for status ON
import ToggleOffIcon from '@mui/icons-material/ToggleOff'; // Toggle for status OFF
import { Link } from 'react-router-dom';

const TeamList = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen); // Sidebar state
  const marginLeft = isOpen ? 'ml-52' : 'ml-12'; // Adjust content margin based on sidebar state
  const marginTop=isOpen ? "mt-[-36.8rem]":"mt-[-36rem]";

  return (
    <div className={`pt-8 px-6 shadow-md transition-all duration-300 ${marginLeft} ${marginTop}`}>
      {/* Team List Header */}
      <div className="h-20 bg-[#637D9B80] flex justify-between items-center">
        <h1 className="text-xl pl-4 text-white font-semibold">Team List</h1>
        <div className='w-60 flex ml-[35rem] border border-[#d6d3d3] rounded-lg'>
          <input type='search' placeholder='Search' className='w-52 border-none rounded-lg p-2 focus:outline-none'/>
          <SearchIcon className='mt-1 pr-1' fontSize='large' />
        </div>
        <Link to="/add_user">
        <button className="mr-5 bg-[#637D9B] text-white px-4 py-2 rounded-md">Add User</button>
        </Link>
      </div>

      {/* Team List Table */}
      <div className="mt-6 bg-white p-3 rounded-md shadow">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-2 py-2">#</th>
              <th className="px-2 py-2">Photo</th>
              <th className="px-2 py-2">Name</th>
              <th className="px-2 py-2">Email ID</th>
              <th className="px-2 py-2">Phone No.</th>
              <th className="px-2 py-2">User Designation</th>
              <th className="px-2 py-2">User Type</th>
              <th className="px-2 py-2">Branch</th>
              <th className="px-2 py-2">City</th>
              <th className="px-2 py-2">Status</th>
              <th className="px-2 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr className="text-center border-t">
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2"><img src="https://via.placeholder.com/40" alt="Profile" className="h-10 w-10 rounded-full" /></td>
              <td className="px-4 py-2">Nidhi</td>
              <td className="px-4 py-2">nidhi21kumar@gmail.com</td>
              <td className="px-4 py-2">7484846578</td>
              <td className="px-4 py-2">Counsellor</td>
              <td className="px-4 py-2">Counsellor</td>
              <td className="px-4 py-2">Delhi-NCR</td>
              <td className="px-4 py-2">Delhi-NCR</td>
              <td className="px-4 py-2">
                <ToggleOnIcon fontSize='large' className="text-green-500" />
              </td>
              <td className="px-4 py-5 flex justify-center">
                <Link to='/edit_team_list'>
                <EditIcon className="text-green-500 cursor-pointer mx-2" />
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

export default TeamList;
