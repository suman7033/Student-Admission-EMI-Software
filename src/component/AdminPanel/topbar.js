import React from 'react';
import MenuIcon from "../img/MenuIcon.png";
import SettingIcon from "../img/SettingIcon.png";
import NotificationIcon from "../img/NotificationIcon.png";
import ProfileManIcon from "../img/ProfileManIcon.png";
import { useDispatch} from 'react-redux';
import { toggleSidebar } from '../../Redux/sidebarSlice';

const Topbar = () => {
  const dispatch=useDispatch();

  return (
    <div className='w-full h-16 rounded-r-md border bg-[#FFFFFF]'>
      {/* Left side (Menu + Dashboard label) */}
      <div className='flex my-2'>
        <div className='px-4 flex items-center'>
          <img
            className="cursor-pointer"
            src={MenuIcon}
            alt="Menu Icon"
            onClick={() => dispatch(toggleSidebar())}  // Trigger sidebar toggle when clicked
          />
          <label className='font-semibold text-xl mx-2'>Dashboard</label>
        </div>

        {/* Right side (Settings, Notification, Profile icons) */}
        <div className='flex items-center ml-auto'>
          <img className="mx-5 cursor-pointer" src={SettingIcon} alt="Settings Icon" />
          <img className="mx-5 cursor-pointer" src={NotificationIcon} alt="Notification Icon" />
          <img className="mx-5 cursor-pointer" src={ProfileManIcon} alt="Profile Icon" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
