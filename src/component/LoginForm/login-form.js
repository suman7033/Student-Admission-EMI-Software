import React, { useState } from 'react';
import login_corner1 from "../img/Group 1000006545.png";
import login_corner2 from "../img/Group 1000006544.png";
import login_image from "../img/Cybersecurity and cyber risk mitigation.jpg";
import login_corner3 from "../img/Group 1000006546.png";
import login_corner4 from "../img/Group 1000006547.png";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-3/4 h-4/5 flex'> 
        {/* left side */}
        <div className='hidden md:block w-4/5'>
          <div className='w-full flex justify-between'>
            <img className='rounded-xl w-20 h-16' src={login_corner1} />
            <img className='w-30 h-12' src={login_corner2} />
          </div>

          <div className='w-full'>
            <img className="h-96" src={login_image} />
          </div>

          <div className='w-full flex justify-between'>  
            <img className='rounded-xl w-20 h-16' src={login_corner3} />
            <img className='w-30 h-16' src={login_corner4} />
          </div>
        </div>

        {/* right side */}
        <div className='flex flex-col items-center justify-center rounded-2xl sm:rounded-r-2xl bg-[#637D9B94] w-full'>
          <div className=' bg-[#FFFFFF] rounded-2xl w-64 md:w-3/4 h-80 flex flex-col items-center text-[#374151]  '>
            <span className='text-xl font-bold mt-3'>Welcome!</span>
            <span className='text-sm text-center'>Please sign in to your account.</span><br/>

            <div className='w-4/5 mb-3'>
              <label className='text-left font-semibold text-gray-700'>Email</label><br/>
              <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bebeea]" type='text' placeholder='Enter your Email' />
            </div>

            <div className='w-4/5 mb-1'>
              <label className='text-left font-semibold text-gray-700'>Password</label>
              <div className="w-full flex items-center px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bebeea]">
                <input className="w-full focus:outline-none" type={showPassword ? 'text' : 'password'} placeholder='Enter your password' />
                {/* Toggle visibility icon */}
                {showPassword ? (
                  <VisibilityIcon className="cursor-pointer" onClick={togglePasswordVisibility} />
                ) : (
                  <VisibilityOffIcon className="cursor-pointer" onClick={togglePasswordVisibility} />
                )}
              </div>
            </div>

            <div className='w-4/5 text-left mb-3'>
              <a href="#" className='text-sm text-blue-500 hover:underline'>Forgot Password?</a>
            </div>
            <button className='w-4/5 bg-[#637D9B] text-white py-1 rounded-lg hover:bg-[#93b3d8] transition duration-200'>
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
