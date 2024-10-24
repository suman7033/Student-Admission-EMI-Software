import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';  // Import necessary hooks from Redux
import { setAdmissionTitles, setActiveSection } from '../../Redux/sidebarSlice';  // Import actions
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
import thexlacademy_logo from "../img/thexlacademy_logo.jpg";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);  // Access sidebar state from Redux
  const activeSection = useSelector((state) => state.sidebar.activeSection);  // Access the active section
  
  const sidebarWidth = isOpen ? 'w-64' : 'w-16';  // Dynamic sidebar width
  const labelClass = isOpen ? 'ml-3 cursor-pointer' : 'hidden';  // Show/hide labels based on sidebar state
  const itemClass = 'cursor-pointer flex items-center px-4 py-2 my-2 rounded-lg';
  const hoverClass = isOpen ? 'hover:bg-[#637D9B] hover:text-white' : 'active:bg-[#637D9B] h-12 pb-5';  // Hover effect
  
  // Handler for setting the top bar title and active section
  const handleSetAdmissionTitles = (admissionFormTitle, addNewAdmissionTitle = '', activeSection) => {
    dispatch(setAdmissionTitles({ admissionForm: admissionFormTitle, addNewAdmission: addNewAdmissionTitle }));
    dispatch(setActiveSection(activeSection));  // Set the active section
  };

  return (
    <div className={`max-h-screen shadow-md transition-all duration-300 bg-white ${sidebarWidth}`}>
      {/* Academy Icon at the top */}
      <div className='px-4 py-4'>
        <img src={isOpen ? Academilcon : thexlacademy_logo} alt="Academy Icon" />
      </div>

      {/* Dashboard Link */}
      <Link
        to="/dashboard"
        className={`${itemClass} ${hoverClass} ${activeSection === 'Dashboard' ? 'bg-gray-300' : ''}`}
        onClick={() => handleSetAdmissionTitles('Dashboard', '', 'Dashboard')}
      >
        <img className={`bg-[#101112] ${!isOpen ? 'mt-4' : ''}`} src={Chart} alt="Chart Icon" />
        <label className={`font-bold ${labelClass}`}>Dashboard</label>
      </Link>

      {/* Admission List Link */}
      <Link
        to="/admission_list"
        className={`${itemClass} ${hoverClass} ${activeSection === 'Admission Form' ? 'bg-gray-300' : ''}`}
        onClick={() => handleSetAdmissionTitles('Admission List', 'Add New Admission', 'Admission Form')}
      >
        <img className={` ${!isOpen ? 'mt-4' : ''}`} src={Admission} alt="Admission Icon" />
        <label className={`font-bold ${labelClass}`}>Admission List</label>
      </Link>

      {/* Student ID Card Link */}
      <Link
        to="/student_id_card_list"
        className={`${itemClass} ${hoverClass} ${activeSection === 'Student ID Card' ? 'bg-gray-300' : ''}`}
        onClick={() => handleSetAdmissionTitles('Student ID Card', 'Add Admission', 'Student ID Card')}
      >
        <img className={`${!isOpen ? 'mt-4' : ''} `} src={Student} alt="Student Icon" />
        <label className={`font-bold ${labelClass}`}>Student ID Card</label>
      </Link>

      {/* Maintenance Label */}
      {isOpen && (
        <div className='px-8 py-1 my-1 font-semibold'>
          <label>Maintenance</label>
        </div>
      )}

      {/* Team List Link */}
      <Link
        to="/team_list"
        className={`${itemClass} ${hoverClass} ${activeSection === 'Team List' ? 'bg-gray-300' : ''}`}
        onClick={() => handleSetAdmissionTitles('Team List', 'Add Admission', 'Team List')}
      >
        <img className={`${!isOpen ? 'mt-4' : ''}`} src={TeamIcon} alt="Team Icon" />
        <label className={`font-bold ${labelClass}`}>Team List</label>
      </Link>

      {/* Source List Link */}
      <Link
        to="/source_list"
        className={`${itemClass} ${hoverClass} ${activeSection === 'Source List' ? 'bg-gray-300' : ''}`}
        onClick={() => handleSetAdmissionTitles('Source List', 'Add Admission', 'Source List')}
      >
        <img className={`${!isOpen ? 'mt-4 ml-1' : ''}`} src={SourceIcon} alt="Source Icon" />
        <label className={`font-bold ${labelClass}`}>Source List</label>
      </Link>

      {/* Course List Link */}
      <Link
        to="/course_list"
        className={`${itemClass} ${hoverClass} ${activeSection === 'Course List' ? 'bg-gray-300' : ''}`}
        onClick={() => handleSetAdmissionTitles('Course List', 'Add Admission', 'Course List')}
      >
        <img className={`${!isOpen ? 'mt-4' : ''}`} src={CourseIcon} alt="Course Icon" />
        <label className={`font-bold ${labelClass}`}>Course List</label>
      </Link>

      {/* Branch List Link */}
      <Link
        to="/branch"
        className={`${itemClass} ${hoverClass} ${activeSection === 'Branch List' ? 'bg-gray-300' : ''}`}
        onClick={() => handleSetAdmissionTitles('Branch List', 'Add Admission', 'Branch List')}
      >
        <img className={`${!isOpen ? 'mt-4' : ''}`} src={BranchIcon} alt="Branch Icon" />
        <label className={`font-bold ${labelClass}`}>Branch List</label>
      </Link>

      {/* City List Link */}
      <Link
        to="/city"
        className={`${itemClass} ${hoverClass} ${activeSection === 'City List' ? 'bg-gray-300' : ''}`}
        onClick={() => handleSetAdmissionTitles('City List', 'Add Admission', 'City List')}
      >
        <img className={`${!isOpen ? 'mt-4' : ''}`} src={CityIcon} alt="City Icon" />
        <label className={`font-bold ${labelClass}`}>City List</label>
      </Link>

      {/* Promotional Label */}
      {isOpen && (
        <div className='px-8 py-1 my-1 font-semibold'>
          <label>Promotional</label>
        </div>
      )}

      {/* WhatsApp Link */}
      <Link
        to="/whatsapp"
        className={`${itemClass} ${hoverClass} ${activeSection === 'WhatsApp' ? 'bg-gray-300' : ''}`}
        onClick={() => handleSetAdmissionTitles('WhatsApp', 'Add Admission', 'WhatsApp')}
      >
        <img className={`${!isOpen ? 'mt-4' : ''}`} src={WhatsAppIcon} alt="WhatsApp Icon" />
        <label className={`font-bold ${labelClass}`}>WhatsApp</label>
      </Link>

      {/* Mail List Link */}
      <Link
        to="/mail"
        className={`${itemClass} ${hoverClass} ${activeSection === 'Mail List' ? 'bg-gray-300' : ''}`}
        onClick={() => handleSetAdmissionTitles('Mail List', 'Add Admission', 'Mail List')}
      >
        <img className={`${!isOpen ? 'mt-4' : ''}`} src={CityIcon} alt="Mail Icon" />
        <label className={`font-bold ${labelClass}`}>Mail List</label>
      </Link>
    </div>
  );
};

export default Sidebar;
