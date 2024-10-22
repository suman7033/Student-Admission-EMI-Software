// adminPanel.js
import React from 'react';
import Sidebar from './sidebar';
import Topbar from './topbar';

const AdminPanel = () => {
  return (
    <div className='flex bg-[#f6f7f8] min-h-screen'>
      <Sidebar />
      <div className='w-full'>
        <Topbar />
      </div>
    </div>
  );
};

export default AdminPanel;
