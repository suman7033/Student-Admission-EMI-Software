import React from 'react'
import { Chart, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import FocusIcon from "../../img/FocusIcon.png";

Chart.register(Tooltip, Title, ArcElement, Legend);

const data = {
  labels: [], // No labels needed since we're focusing on the center text
  datasets: [{
    data: [60, 22], // 78% deals, the remaining is 22% (adjust as per your data)
    backgroundColor: [
      '#F16365', // Blue color for percentage
      '#e6e6e6'  // Light gray for the remaining area
    ],
    hoverOffset: 4,
    cutout: '80%',  // Create the hollow center
    borderWidth: 2  // Remove the border to match the clean look
  }]
};

const plugins = [{
  id: 'centerImage',
  beforeDraw: function (chart) {
    const { ctx, width, height } = chart;
    const image = new Image(); 
    image.src = FocusIcon;  // Set the image source to the imported StoreIcon

    // Calculate the position of the icon in the center of the chart
    const iconSize = 22;  // Adjust icon size as needed
    const xPos = (width - iconSize) / 2;
    const yPos = (height - iconSize) / 1.8;

    image.onload = function () {
      ctx.drawImage(image, xPos, yPos, iconSize, iconSize);  // Draw the image on the canvas
    };
  }
}];

const RateChart = () => {
  return (
    <div>
      <div className='flex bg-white border border-[#dfdada] w-64 h-24 rounded-xl mx-0 my-2'>
        <div className='mx-2 my-1 w-20'>
          <Doughnut data={data} plugins={plugins} />
        </div>
        <div className='ml-3'>
          <div className='text-robot text-[#6B7280] mx-10 my-2 font-bold text-3xl'>60%</div>
          <div className='w-48'>
            <label className='text-sm text-robot font-bold text-[#313131]'>Hits Rate This Year</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RateChart
