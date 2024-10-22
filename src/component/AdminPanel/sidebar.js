import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';  // Import necessary hooks from Redux
import { toggleSidebar } from '../../Redux/sidebarSlice';  // Import the toggle action
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
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);  // Access sidebar state from Redux

  const sidebarWidth = isOpen ? 'w-64' : 'w-16';  // Dynamic sidebar width
  const labelClass = isOpen ? 'ml-3 cursor-pointer' : 'hidden';  // Show/hide labels based on sidebar state
  const itemClass = 'cursor-pointer flex items-center px-4 py-2 my-2 rounded-lg';
  const hoverClass = 'hover:bg-gray-200';  // Hover effect

  return (
    <div className={`transition-all duration-300 bg-white ${sidebarWidth} h-screen`}>
      <div className='px-4 py-4'>
        <img src={Academilcon} alt="Academy Icon" />
      </div>

      {/* Dashboard Link */}
      <Link to="/dashboard" className={`${itemClass} ${hoverClass}`}>
        <img className={`bg-[#101112] ${!isOpen ? 'mt-4' : ''}`} src={Chart} alt="Chart Icon" />
        <label className={`font-bold ${labelClass}`}>Dashboard</label>
      </Link>

      {/* Admission List Link */}
      <Link to="/admission_form" className={`${itemClass} ${hoverClass}`}>
        <img className={`${!isOpen ? 'mt-4' : ''}`} src={Admission} alt="Admission Icon" />
        <label className={`font-bold ${labelClass}`}>Admission List</label>
      </Link>

      {/* Student ID Card Link */}
      <Link to="/student" className={`${itemClass} ${hoverClass}`}>
        <img className={`${!isOpen ? 'mt-4' : ''}`} src={Student} alt="Student Icon" />
        <label className={`font-bold ${labelClass}`}>Student ID Card</label>
      </Link>

      {isOpen && (
        <div className='px-8 py-1 my-1 font-semibold'>
          <label>Maintenance</label>
        </div>
      )}

      {/* Team List Link */}
      <Link to="/team" className={`${itemClass} ${hoverClass}`}>
        <img className={`${!isOpen ? 'mt-4' : ''}`} src={TeamIcon} alt="Team Icon" />
        <label className={`font-bold ${labelClass}`}>Team List</label>
      </Link>

      {/* Source List Link */}
      <Link to="/source" className={`${itemClass} ${hoverClass}`}>
        <img className={`${!isOpen ? 'mt-4 ml-1' : ''}`} src={SourceIcon} alt="Source Icon" />
        <label className={`font-bold ${labelClass}`}>Source List</label>
      </Link>

      {/* Course List Link */}
      <Link to="/course" className={`${itemClass} ${hoverClass}`}>
        <img className={`${!isOpen ? 'mt-4' : ''}`} src={CourseIcon} alt="Course Icon" />
        <label className={`font-bold ${labelClass}`}>Course List</label>
      </Link>

      {/* Branch List Link */}
      <Link to="/branch" className={`${itemClass} ${hoverClass}`}>
        <img className={`${!isOpen ? 'mt-4' : ''}`} src={BranchIcon} alt="Branch Icon" />
        <label className={`font-bold ${labelClass}`}>Branch List</label>
      </Link>

      {/* City List Link */}
      <Link to="/city" className={`${itemClass} ${hoverClass}`}>
        <img className={`${!isOpen ? 'mt-4' : ''}`} src={CityIcon} alt="City Icon" />
        <label className={`font-bold ${labelClass}`}>City List</label>
      </Link>

      {isOpen && (
        <div className='px-8 py-1 my-1 font-semibold'>
          <label>Promotional</label>
        </div>
      )}

      {/* WhatsApp Link */}
      <Link to="/whatsapp" className={`${itemClass} ${hoverClass}`}>
        <img className={`${!isOpen ? 'mt-4' : ''}`} src={WhatsAppIcon} alt="WhatsApp Icon" />
        <label className={`font-bold ${labelClass}`}>WhatsApp</label>
      </Link>

      {/* Mail List Link */}
      <Link to="/mail" className={`${itemClass} ${hoverClass}`}>
        <img className={`${!isOpen ? 'mt-4' : ''}`} src={CityIcon} alt="Mail Icon" />
        <label className={`font-bold ${labelClass}`}>Mail List</label>
      </Link>
    </div>
  );
};

export default Sidebar;
