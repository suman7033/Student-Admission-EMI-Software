import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to get sidebar state
import TotalAdmission from './TotalAdmission';
import Pending from './Pending';
import PortalAdmission from './PortalAdmission';
import TotalRevenue from './TotalRevenue';
import CoursesPaiChart from './CoursesPaiChart';
import PerformanceChart from './PerformanceChart';
import PaymentChart from './PaymentChart';
import DashboardSmallChart from './DashboardCharts/DashboardSmallChart';

const Dashboard = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen); // Access the sidebar state from Redux

  const dashboardMargin = isSidebarOpen ? 'ml-60' : 'ml-20'; // Dynamically adjust the margin
  const chartGap = isSidebarOpen ? 'gap-5' : 'gap-12'; // Correctly set the gap utility
  const divgap = isSidebarOpen ? "gap-12":'gap-24';
  return (
    <div className={`mt-[-35.3rem] overflow-hidden transition-all duration-300 ${dashboardMargin}`}>
      <div className={`flex ${divgap}`}>
        <TotalAdmission />
        <Pending />
        <PortalAdmission />
        <TotalRevenue />
      </div>

      <div className={`flex mt-3 ${chartGap}`}> {/* Use chartGap here */}
        <CoursesPaiChart />
        <PerformanceChart />
      </div>

      <div className={`flex mt-2 ${chartGap}`}>
        <PaymentChart />
        <DashboardSmallChart />
      </div>
    </div>
  );
};

export default Dashboard;
