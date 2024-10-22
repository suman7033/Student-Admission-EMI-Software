import React from 'react'
import DealChart from './DealChart'
import RateChart from './RateChart'
import ApplicationChart from './ApplicationChart'
import VisitorChart from './VisitorChart'
import { useSelector } from 'react-redux'; // Import useSelector to get sidebar state


const DashboardSmallChart = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const divgap= isSidebarOpen ? "":"gap-16";
  return (
    <div className=''>
      <div className={`flex ${divgap}`}>
        <DealChart/>
        <RateChart/>
      </div>
      <div className={`flex ${divgap}`}>
        <VisitorChart/>
        <ApplicationChart/>
      </div>
    </div>
  )
}

export default DashboardSmallChart
