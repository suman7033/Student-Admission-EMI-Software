import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to get sidebar state
import { Chart, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(Tooltip, Title, ArcElement, Legend);

// Data for the courses
const data = {
  labels: [],  // No need for labels if you are using a custom legend
  datasets: [{
    data: [30, 20, 15, 25, 10],  // Adjust the data as per the course purchase numbers
    backgroundColor: [
      '#FF6384', // Red for UI/UX Designer
      '#FFCE56', // Yellow for Backend Developer
      '#36A2EB', // Blue for Frontend Developer
      '#FF9F40', // Orange for Graphic Design
      '#9966FF'  // Purple for Artificial Intelligence
    ],
    hoverOffset: 4,
    cutout: '70%',  // This will create a doughnut with a hollow center
  }]
};

// Plugin to add text in the center of the doughnut chart
const plugins = [{
  id: 'centerText',
  beforeDraw: function (chart) {
    const width = chart.width;
    const height = chart.height;
    const ctx = chart.ctx;
    ctx.restore();
    const fontSize = (height / 160).toFixed(2);
    ctx.font = `${fontSize}em sans-serif`;
    ctx.textBaseline = 'middle';

    const text = 'Analytics';
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 1.90;
    ctx.fillText(text, textX, textY);
    ctx.save();
  }
}];

const PaymentChart = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen); // Get sidebar state from Redux

  // Dynamically adjust width based on sidebar state
  const chartWidth = isSidebarOpen ? 'w-[33rem]' : 'w-[37.5rem]'; // Adjusted widths
  const chartGap = isSidebarOpen ? 'gap-5' : 'gap-16'; // Correctly set the gap utility
  const marginTop=isSidebarOpen ? "my-2": "my-3";
  const marginLeft=isSidebarOpen ? "ml-4":"ml-20";
  return (
       <div className={`my-2 py-2 font-bold text-left ${chartWidth} h-[12rem] rounded-xl bg-white border border-[#e0dddd] border-spacing-8`}>
        <div className='flex'>
           <label className='text-lg px-5'>Payment</label>
           <div className='ml-64'>
           <button className={`rounded-md h-8 w-32 ${marginLeft} font-bold text-lg bg-[#a2b3c6]`}>Full Chart</button>
           </div>
        </div>
        
        <div className={`flex ${chartGap}`}>
          <div className='w-32 ml-3'>
            <Doughnut data={data} plugins={plugins} />
          </div>

          <div className='flex text-left my-0 mx-1'>
            <ul className='list-none my-1'>
              <li className='my-1 text-xs'>#3250 payment request to (mark angel)</li>
              <li className={`${marginTop} text-xs`}>#3250 payment due of  (altain chopal)</li>
              <li className={`${marginTop} text-xs`}>#3250 payment received from (roger federa)</li>
              <li className={`${marginTop} text-xs`}>#3250 payment pending of(angellina k.)</li>
              <li className={`${marginTop} text-xs`}>#3250 payment due of  (altain chopal)</li>
            </ul>
            <div className=''>
              <div className='w-28 rounded-md text-center text-sm my-2 mx-1 bg-[#a2b3c6]'>Payment Send</div>
              <div className='w-28 rounded-md text-center text-sm my-2 mx-1 bg-[#a2b3c6]'>Due</div>
              <div className='w-28 rounded-md text-center text-sm my-2 mx-1 bg-[#a2b3c6]'>Received</div>
              <div className='w-28 rounded-md text-center text-sm my-2 mx-1 bg-[#a2b3c6]'>Pending</div>
              <div className='w-28 rounded-md text-center text-sm my-2 mx-1 bg-[#a2b3c6]'>Received</div>
            </div>
          </div>
        </div>
       </div>
  );
}

export default PaymentChart;
