import React from 'react'
import Sidebar from './sidebar'
import Topbar from './topbar'
import Dashboard from '../Dashboard/dashboard'
 
const adminPanel = () => {
  return (
    <div>
        <div className=' flex bg-[#f6f7f8] min-h-screen'>
       <div className='w-64'>
       <Sidebar/>
       </div>
       <div className='w-screen'>
       <Topbar/>
       </div>
    </div>
    {/* <div>
      <Dashboard/>
    </div> */}
    </div>
     
  )
}

export default adminPanel;
