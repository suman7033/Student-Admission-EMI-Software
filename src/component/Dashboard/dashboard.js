import React from 'react'
import TotalAdmission from './TotalAdmission'
import Pending from './Pending'
import PortalAdmission from './PortalAdmission'
import TotalRevenue from './TotalRevenue'
import CoursesPaiChart from './CoursesPaiChart'
import PerformanceChart from './PerformanceChart'
import PaymentChart from './PaymentChart'
import DashboardSmallChart from './DashboardCharts/DashboardSmallChart'

const Dashboard = () => {
  return (
    <div className=' mt-[-35.3rem] ml-72 overflow-hidden'>
        <div className=' flex gap-8'>
          <TotalAdmission/>
          <Pending/>
          <PortalAdmission/>
          <TotalRevenue/>
          
        </div>

    <div className=' flex mt-3'>
        <CoursesPaiChart/>
       <PerformanceChart/>
    </div>
      
      <div className=' flex mt-2'>
        <PaymentChart/>
        <DashboardSmallChart/>
      </div>
      </div>
  )
}

export default Dashboard
