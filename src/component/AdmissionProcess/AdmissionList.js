import React from 'react';
import { useSelector } from 'react-redux'; // Importing to manage sidebar state
import VisibilityIcon from '@mui/icons-material/Visibility'; // For view icon
import EditIcon from '@mui/icons-material/Edit'; // For edit icon
import DeleteIcon from '@mui/icons-material/Delete'; // For delete icon
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const AdmissionList = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen); // Sidebar state
  const marginLeft = isOpen ? 'ml-52' : 'ml-12'; // Adjust content margin based on sidebar state
  const marginTop=isOpen ? "mt-[-36.8rem]":"mt-[-36rem]";

  return (
    <div className={`pt-8 px-6 shadow-md transition-all duration-300 ${marginLeft} ${marginTop}`}>
      {/* Admission List Header */}

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6 grid grid-cols-4 gap-4">
        <div className="flex flex-col">
          <label>Select City</label>
          <select className="border rounded-lg p-2">
            <option>City</option>
            {/* Add city options */} 
          </select>
        </div>
        <div className="flex flex-col">
          <label>Select Counsellor Name</label>
          <select className="border rounded-lg p-2">
            <option>Counsellor</option>
            {/* Add counsellor options */}
          </select>
        </div>
        <div className="flex flex-col">
          <label>Select Branch</label>
          <select className="border rounded-lg p-2">
            <option>Branch</option>
            {/* Add branch options */}
          </select>
        </div>
        <div className="flex flex-col">
          <label>Select Course</label>
          <select className="border rounded-lg p-2">
            <option>Course</option>
            {/* Add branch options */}
          </select>
        </div>

        <div className='flex flex-col'>
          <label>Select Installment Date</label>
          <input type='date' placeholder='Installment Date' className='border rounded-lg p-2'/>
        </div>
        <div className='flex flex-col'>
          <label>Select Admission Date</label>
          <input type='date' placeholder='Admission Date' className='border rounded-lg p-2'/>
        </div>
        {/* <SearchIcon/> */}
        <div className='flex flex-col '>
          <label>Search Here</label>
          <div className='w-60 flex border border-[#d6d3d3] rounded-lg'>
          <input type='search' placeholder='Search' className='w-52 border-none rounded-lg p-2 focus:outline-none'/>
          <SearchIcon className='mt-1 pr-1' fontSize='large' />
        </div>
     </div>
      </div>

      {/* Admission Table */}
      <div className=" bg-white p-2 rounded-lg shadow-md">
        <div className='font-bold pb-3 pl-3 w-80 flex'>
          <label className='cursor-pointer mr-2 w-24 rounded-md text-center text-[#637D9B] bg-[]'>Today</label>
          <label className='cursor-pointer mr-2 w-32 rounded-md text-center text-[#637D9B] bg-[]'>Follow up</label>
          <label className='cursor-pointer mr-2 w-24 rounded-md text-center text-white bg-[#637D9B]'>All</label>
        </div>
         
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-2 py-1">ID</th>
              <th className="px-2 py-1">Photo</th>
              <th className="px-2 py-1">Name</th>
              <th className='px-2 py-1'>Number</th>
              <th className="px-2 py-1">City</th>
              <th className="px-2 py-1">Branch</th>
              <th className="px-2 py-1">Course Name</th>
              <th className="px-2 py-1">Course Price</th>
              <th className="px-2 py-1">Adm. Date</th>
              <th className="px-2 py-1">Adm. Status</th>
              <th className="px-2 py-1">Install. Type</th>
              <th className="px-1 py-1">Install. Date</th>
              <th className="px-1 py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            
            {/* Data Rows */}
            <tr className="text-center border">
              <td className=" px-2 py-1">1</td>
              <td className=" px-2 py-1"><img src="https://s3-alpha-sig.figma.com/img/e8f8/cf4b/ec0dd1dfb676ae223bde1405a1eb8c63?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QMRoAj5h5b4ks8fzr04E69ZbMYnPm~rLNAQe2JMRbRr0LdJxS7WTuD95XxCIOc2NWimY2raZM1dbucnD1Li8wsKd-FW4icuC0f5WdgDr0MpLZy9pIu8yRWMsIOmEtw54ZdabG2t4JPVKWqQCToQk7LuLcmxQ8kKqmMR4KsZ3mAz8eXpaHy83~zsV7ODUMhV0SZv4gPB2tewcgCs3dwz2rmX7XQRCwuSop0hXxqGNCZE54iFe8ZvJ4jpLkgb7o3Xu2X7CJ7vZXsbB73XdULOJVzMf8mwN-Napfi7Mv4Q~QDVPun9DpwbWB4hzUvyP9fkZN4YR6kpKNINu639TglQWYg__" alt="student" className="h-10 w-10 rounded-full" /></td>
              <td className=" px-2 py-1">Shikha</td>
              <td className=' px-2 py-1'>7033020947</td>
              <td className=" px-2 py-1">Delhi</td>
              <td className=" px-2 py-1">Delhi</td>
              <td className=" px-2 py-1">Python</td>
              <td className=" px-2 py-1">₹4000</td>
              <td className=" px-2 py-1">19/03/2024</td>
              <td className=" px-2 py-1 text-yellow-500">Pending</td>
              <td className=" px-2 py-1">Full-Final</td>
              <td className=" px-2 py-1">N/A</td>
              <td className=" px-2 py-1 flex justify-center space-x-2">
                <Link to="/personal_details">
                <VisibilityIcon className="text-blue-500 cursor-pointer my-2" />
                </Link>
                <Link to='/edit_admission_form'>
                <EditIcon className="text-green-500 cursor-pointer my-2" />
                </Link>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-end mt-4">
          <button className="bg-gray-300 px-3 py-1 mx-1">1</button>
          <button className="bg-gray-300 px-3 py-1 mx-1">2</button>
          <button className="bg-gray-300 px-3 py-1 mx-1">3</button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionList;
