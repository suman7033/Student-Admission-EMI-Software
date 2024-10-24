import React from 'react'
import ArrowIcon from "../../img/ArrowIcon.png";
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend);

const data = {
  labels: ["","","","","","","",""],
  datasets: [
    {
      label: '', // You can set a label or leave it empty
      data: [0,3,1,2,2,3,3,3], // Your actual data points
      borderColor: '#000000', // Line color (black)
      fill: false, // Set to false to have no fill
      tension: 0.5, // This makes the line curved. Set to 0 for straight lines
      pointRadius: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false, // Hide legend if not needed
    },
    Tooltip:{
      enabled: false,
    }
  },
  scales: {
    x: {
      display: false,  // Hides the x-axis
    },
    y: {
      display: false,  // Hides the y-axis
    }
  }
};
const VisitorChart = () => {
  return (
    <div className=''>
      <div className='flex bg-white border shadow-md w-64 h-24 rounded-xl mx-6'>
        <div className="mx-4 h-10 w-44" >
          <Line data={data} options={options}/>
        </div>
         
        <div className='mx-[-6.5rem] w-32 my-[2.8rem]'>
            
             <lable className=' text-robot text-[#6B7280] font-bold text-sm'>10256</lable>
           <div className='w-48'>
               <label className='text-sm text-robot font-bold text-[#313131]'>Visitors This Year</label>
           </div>
        </div>
         

      <div className='flex my-[4.4rem] w-10 mx-36 font-bold'>
             <div className='text-[#EF4444] font-bold '>1.5</div>
             <img src={ArrowIcon} className='w-3 h-3 my-2 mx-1'/>
      </div>
             
      </div>
    </div>
    )
}

export default VisitorChart
