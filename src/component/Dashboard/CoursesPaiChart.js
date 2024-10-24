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

const CoursesPaiChart = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen); // Get sidebar state from Redux

  // Dynamically adjust width based on sidebar state
  const chartWidth = isSidebarOpen ? 'w-[33rem]' : 'w-[38rem]'; // Adjusted widths
  const chartGap = isSidebarOpen ? 'gap-10' : 'gap-24'; // Correctly set the gap utility
  return (
    <div className={`py-2 font-bold shadow-md text-center ${chartWidth} h-56 rounded-xl bg-white border border-spacing-8`}>
      <label className='text-lg'>Top Courses Purchased</label>
      <div className={`flex ${chartGap}`}>
        {/* Custom legend for the courses */}
        <div className='text-left my-4 mx-8'>
          <ul className='list-none'>
            <li className='my-0'><span className="inline-block w-4 h-4 bg-red-500 mr-2 rounded-full"></span> UI/UX Designer</li>
            <li className='my-2'><span className="inline-block w-4 h-4 bg-yellow-500 mr-2 rounded-full"></span> Backend Developer</li>
            <li className='my-2'><span className="inline-block w-4 h-4 bg-blue-500 mr-2 rounded-full"></span> Frontend Developer</li>
            <li className='my-2'><span className="inline-block w-4 h-4 bg-orange-500 mr-2 rounded-full"></span> Graphic Design</li>
            <li className='my-2'><span className="inline-block w-4 h-4 bg-purple-500 mr-2 rounded-full"></span> Artificial Intelligence</li>
          </ul>
        </div>

        {/* Doughnut chart with center text */}
        <div className='w-44 mx-3'>
          <Doughnut data={data} plugins={plugins} />
        </div>
      </div>
    </div>
  );
}

export default CoursesPaiChart;
