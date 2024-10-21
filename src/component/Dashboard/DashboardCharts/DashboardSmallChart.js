import React from 'react'
import DealChart from './DealChart'
import RateChart from './RateChart'
import ApplicationChart from './ApplicationChart'
import VisitorChart from './VisitorChart'

const DashboardSmallChart = () => {
  return (
    <div className=''>
      <div className='flex'>
        <DealChart/>
        <RateChart/>
      </div>
      <div className='flex'>
        <VisitorChart/>
        <ApplicationChart/>
      </div>
    </div>
  )
}

export default DashboardSmallChart
