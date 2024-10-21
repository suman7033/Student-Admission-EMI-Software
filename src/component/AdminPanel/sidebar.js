import React, { useState } from 'react';
import Academilcon from "../img/AcademyIcon.png";
import Chart from "../img/Chart.png";
import Admission from "../img/Vector.png";
import Student from "../img/Vector (1).png";
import TeamIcon from "../img/TeamIcon.png";
import SourceIcon from "../img/SourceIcon.png";
import CourseIcon from "../img/CourseIcon.png";
import BranchIcon from "../img/BranchIcon.png";
import CityIcon from "../img/CityIcon.png";
import WhatsAppIcon from "../img/whatsappIcon.png";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  // Common classes for items
  const itemClass = 'cursor-pointer flex items-center px-8 py-2 my-2 rounded-lg';
  const activeClass = 'bg-gray-500 text-white';  // Active state styles
  const hoverClass = 'hover:bg-gray-200';  // Hover effect styles

  return (
    <div className='px-0 w-full'>
      <div className='w-64 rounded-l-2xl border bg-[#FFFFFF] h-screen'>
        <div className='px-8 py-4'>
          <img src={Academilcon} alt="Academy Icon" />
        </div>

        {/* Dashboard */}
        <div
          className={`${itemClass} ${activeItem === 'dashboard' ? activeClass : hoverClass}`}
          onClick={() => handleItemClick('dashboard')}
        >
          <img className="bg-[#101112]" src={Chart} alt="Chart Icon" />
          <label className='cursor-pointer font-bold ml-3'>Dashboard</label>
        </div>

        {/* Admission List */}
        <div
          className={`${itemClass} ${activeItem === 'admission' ? activeClass : hoverClass}`}
          onClick={() => handleItemClick('admission')}
        >
          <img src={Admission} alt="Admission Icon" />
          <label className='cursor-pointer font-bold ml-3'>Admission List</label>
        </div>

        {/* Student ID Card */}
        <div
          className={`${itemClass} ${activeItem === 'student' ? activeClass : hoverClass}`}
          onClick={() => handleItemClick('student')}
        >
          <img src={Student} alt="Student Icon" />
          <label className='cursor-pointer font-bold ml-3'>Student ID Card</label>
        </div>

        {/* Maintenance */}
        <div className='px-8 py-1 my-1 font-semibold'>
          <label>Maintenance</label>
        </div>

        {/* Team List */}
        <div
          className={`${itemClass} ${activeItem === 'team' ? activeClass : hoverClass}`}
          onClick={() => handleItemClick('team')}
        >
          <img src={TeamIcon} alt="Team Icon" />
          <label className='cursor-pointer font-bold ml-3'>Team List</label>
        </div>

        {/* Source List */}
        <div
          className={`${itemClass} ${activeItem === 'source' ? activeClass : hoverClass}`}
          onClick={() => handleItemClick('source')}
        >
          <img src={SourceIcon} alt="Source Icon" />
          <label className='cursor-pointer font-bold ml-3'>Source List</label>
        </div>

        {/* Course List */}
        <div
          className={`${itemClass} ${activeItem === 'course' ? activeClass : hoverClass}`}
          onClick={() => handleItemClick('course')}
        >
          <img src={CourseIcon} alt="Course Icon" />
          <label className='cursor-pointer font-bold ml-3'>Course List</label>
        </div>

        {/* Branch List */}
        <div
          className={`${itemClass} ${activeItem === 'branch' ? activeClass : hoverClass}`}
          onClick={() => handleItemClick('branch')}
        >
          <img src={BranchIcon} alt="Branch Icon" />
          <label className='cursor-pointer font-bold ml-3'>Branch List</label>
        </div>

        {/* City List */}
        <div
          className={`${itemClass} ${activeItem === 'city' ? activeClass : hoverClass}`}
          onClick={() => handleItemClick('city')}
        >
          <img src={CityIcon} alt="City Icon" />
          <label className='cursor-pointer font-bold ml-3'>City List</label>
        </div>

        {/* Promotional */}
        <div className='px-8 py-0 my-1 font-semibold'>
          <label>Promotional</label>
        </div>

        {/* WhatsApp */}
        <div
          className={`${itemClass} ${activeItem === 'whatsapp' ? activeClass : hoverClass}`}
          onClick={() => handleItemClick('whatsapp')}
        >
          <img src={WhatsAppIcon} alt="WhatsApp Icon" />
          <label className='cursor-pointer font-bold ml-3'>WhatsApp</label>
        </div>

        {/* Mail List */}
        <div
          className={`${itemClass} ${activeItem === 'mail' ? activeClass : hoverClass}`}
          onClick={() => handleItemClick('mail')}
        >
          <img src={CityIcon} alt="Mail Icon" />
          <label className='cursor-pointer font-bold ml-3'>Mail List</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
