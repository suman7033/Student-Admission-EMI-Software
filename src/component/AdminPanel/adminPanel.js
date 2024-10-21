import React from 'react'
import Sidebar from './sidebar'
import Topbar from './topbar'
 
const adminPanel = () => {
  return (
    <div className=' flex bg-[#f6f7f8] min-h-screen'>
       <div className='w-64'>
       <Sidebar/>
       </div>
       <div className='w-screen'>
       <Topbar/>
       </div>
    </div>
  )
}

export default adminPanel;
