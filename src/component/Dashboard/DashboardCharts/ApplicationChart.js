import React from 'react'
import { Chart, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import PdfIcon from "../../img/PdfIcon.png";

Chart.register(Tooltip, Title, ArcElement, Legend);

const data = {
  labels: [], // No labels needed since we're focusing on the center text
  datasets: [{
    data: [60, 22], // 78% deals, the remaining is 22% (adjust as per your data)
    backgroundColor: [
      '#FFBF00', // Blue color for percentage
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
    image.src = PdfIcon;  // Set the image source to the imported StoreIcon

    // Calculate the position of the icon in the center of the chart
    const iconSize = 22;  // Adjust icon size as needed
    const xPos = (width - iconSize) / 2;
    const yPos = (height - iconSize) / 1.8;

    image.onload = function () {
      ctx.drawImage(image, xPos, yPos, iconSize, iconSize);  // Draw the image on the canvas
    };
  }
}];


const ApplicationChart = () => {
  return (
    <div>
      <div className='flex bg-white border border-[#e0d3d3] shadow-md w-64 h-24 rounded-xl'>
      <div className='mx-2 my-1 w-20'>
          <Doughnut data={data} plugins={plugins} />
      </div>

      <div className='ml-3'>
        <div className=' text-robot text-[#6B7280] ml-10 my-2 font-bold text-3xl'>74%</div>
            <div className='w-48 mr-4'>
             <label className='text-robot text-sm font-bold text-[#313131]'>Application This Year</label>
            </div>
        </div>
      </div>
       
    </div>
  )
}

export default ApplicationChart
