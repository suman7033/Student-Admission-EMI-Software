import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to get sidebar state
import { Chart, Tooltip, Title, ArcElement, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Registering the chart components
Chart.register(Tooltip, Title, ArcElement, Legend, BarElement, CategoryScale, LinearScale);

// Bar chart data without label and background color
const data = {
  labels: ['2020', '2021', '2022', '2023', '2024'], // Years for each bar
  datasets: [{
    data: [60, 45, 70, 90, 100], // Sample data matching performance
    backgroundColor: [
      '#0A9AE3',   // Blue for 2020
      '#1ACA0A',   // Green for 2021
      '#0AC9E3',   // Purple for 2022
      '#C451ED',   // Orange for 2023
      '#E30A0A'    // Red for 2024
    ],
    barThickness: 20, // Adjust the thickness here
    maxBarThickness: 20,
  }]
};

// Chart options for removing label and adjusting padding
const options = {
  responsive: true,
  maintainAspectRatio: false, // Allow the chart to fill the container size
  plugins: {
    legend: {
      display: false // Hide legend completely
    }
  }
};

const PerformanceChart = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen); // Get sidebar state from Redux

  // Dynamically adjust width based on sidebar state
  const chartWidth = isSidebarOpen ? 'w-[33rem]' : 'w-[38rem]'; // Wider chart when sidebar is open

  return (
    <div className={`bg-white overflow-hidden ${chartWidth} mr-2 py-2 font-bold text-left mx-6 h-56 rounded-xl shadow-md`}>
      <label className='text-lg px-5'>Performance</label>

      <div className='h-48 px-5 py-3'>
        {/* Bar chart with updated data and options */}
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default PerformanceChart;
