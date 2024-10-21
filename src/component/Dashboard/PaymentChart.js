import React from 'react'
import { Chart, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(Tooltip, Title, ArcElement, Legend);

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
    cutout: '70%'  // This will create a doughnut with a hollow center
  }]
};

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
  return (
    <div className=''>
       <div className='my-2 py-2 font-bold text-left w-[31rem] h-[12rem] rounded-xl bg-white border border-[#e0dddd] border-spacing-8'>
        <div className='flex'>
           <label  className='text-lg px-5'>Payment</label>
           <div className='mx-56'>
           <button className='rounded-md h-8 w-32 font-bold text-lg bg-[#637D9B]'>Full Chart</button>
       </div>
        </div>
        
        <div className='flex'>
          <div className='w-32 mx-1'>
            <Doughnut data={data} plugins={plugins} />
          </div>

          <div className='flex text-left my-0 mx-1'>
            <ul className='list-none my-1'>
              <li className='my-2 text-xs'>#3250 payment request to (mark angel)</li>
              <li className='my-2 text-xs'>#3250 payment due of  (altain chopal)</li>
              <li className='my-2 text-xs'>#3250 payment received from (roger federa)</li>
              <li className='my-2 text-xs'>#3250 payment pending of(angellina k.)</li>
              <li className='my-2 text-xs'>#3250 payment due of  (altain chopal)</li>
            </ul>
            <div className=''>
              <div className='w-28 rounded-md text-center text-sm my-2 mx-1 bg-[#637D9B]'>Payment Send</div>
              <div className='w-28 rounded-md text-center text-sm my-2 mx-1 bg-[#637D9B]'>Due</div>
              <div className='w-28 rounded-md text-center text-sm my-2 mx-1 bg-[#637D9B]'>Received</div>
              <div className='w-28 rounded-md text-center text-sm my-2 mx-1 bg-[#637D9B]'>Pending</div>
              <div className='w-28 rounded-md text-center text-sm my-2 mx-1 bg-[#637D9B]'>Received</div>
            </div>
            {/* <ul>
              <li className='bg-[#637D9B] rounded-sm mx-0 py-1'><span>Payment send</span></li>
              <li><span className='bg-[#637D9B] rounded-sm mx-5 py-1'>Due</span></li>
              <li><span className='bg-[#637D9B] rounded-sm mx-4 py-1'>Received</span></li>
              <li><span className='bg-[#637D9B] rounded-sm mx-3 py-1'>Pending</span></li>
              <li><span className='bg-[#637D9B] rounded-sm mx-3 py-1'>Received</span></li>
            </ul> */}
          </div>

        </div>
 
        
       </div>
       
    </div>
  )
}

export default PaymentChart
