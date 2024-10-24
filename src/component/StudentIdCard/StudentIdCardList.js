import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'; // For edit icon
import SearchIcon from '@mui/icons-material/Search';


const StudentIdCardList = () => {
   const dispatch = useDispatch();
   const isOpen = useSelector((state) => state.sidebar.isOpen);  // Access sidebar state from Redux
   const marginTop=isOpen ? "mt-[-36.8rem]":"mt-[-36rem]";
   const marginLeft = isOpen ? 'ml-52' : 'ml-12'; 
  return (
      <div className={`pt-8 px-6 shadow-md transition-all duration-300 ${marginLeft} ${marginTop}`}>
         <div className="bg-white p-2 rounded-lg shadow-md">
          {/* Header */}
         <div className="h-20 mb-2 bg-[#637D9B80] flex justify-between items-center">
        <h1 className="text-xl pl-4 text-white font-semibold">Team List</h1>
        <div className='w-60 flex ml-[35rem] border border-[#d6d3d3] rounded-lg'>
          <input type='search' placeholder='Search' className='w-52 border-none rounded-lg p-2 focus:outline-none'/>
          <SearchIcon className='mt-1 pr-1' fontSize='large' />
        </div>
        <Link to="/add_user">
        <button className="mr-5 bg-[#637D9B] text-white px-4 py-2 rounded-md">Add User</button>
        </Link>
      </div>

        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-2 py-1">#</th>
              <th className="px-2 py-1">Photo</th>
              <th className="px-2 py-1">Name</th>
              <th className='px-2 py-1'>Email ID</th>
              <th className="px-2 py-1">Phone No.</th>
              <th className="px-2 py-1">Student Id No.</th>
              <th className="px-2 py-1">Branch</th>
              <th className="px-2 py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            
            {/* Data Rows */}
            <tr className="text-center border">
              <td className=" px-2 py-1">1</td>
              <td className=" px-2 py-1"><img src="https://s3-alpha-sig.figma.com/img/e8f8/cf4b/ec0dd1dfb676ae223bde1405a1eb8c63?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QMRoAj5h5b4ks8fzr04E69ZbMYnPm~rLNAQe2JMRbRr0LdJxS7WTuD95XxCIOc2NWimY2raZM1dbucnD1Li8wsKd-FW4icuC0f5WdgDr0MpLZy9pIu8yRWMsIOmEtw54ZdabG2t4JPVKWqQCToQk7LuLcmxQ8kKqmMR4KsZ3mAz8eXpaHy83~zsV7ODUMhV0SZv4gPB2tewcgCs3dwz2rmX7XQRCwuSop0hXxqGNCZE54iFe8ZvJ4jpLkgb7o3Xu2X7CJ7vZXsbB73XdULOJVzMf8mwN-Napfi7Mv4Q~QDVPun9DpwbWB4hzUvyP9fkZN4YR6kpKNINu639TglQWYg__" alt="student" className="h-10 w-10 ml-7 rounded-full" /></td>
              <td className=" px-2 py-1">Shikha</td>
              <td className=' px-2 py-1'>test@gmail.com</td>
              <td className=" px-2 py-1">7033020947</td>
              <td className=" px-2 py-1">123456</td>
              <td className=" px-2 py-1">Delhi-Ncr</td>
              <td className=" px-2 py-1 flex justify-center space-x-2">
                <Link to="/id_card">
                <VisibilityIcon className="text-blue-500 cursor-pointer my-2" />
                </Link>
                <Link to='/edit_student_id_card'>
                <EditIcon className="text-green-500 cursor-pointer my-2" />
                </Link>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        </div>
      
      </div>
  )
}

export default StudentIdCardList
