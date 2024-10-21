import React from 'react'
import DealChart from './DealChart'
import RateChart from './RateChart'
import ApplicationChart from './ApplicationChart'
import VisitorChart from './VisitorChart'

const DashboardSmallChart = () => {
  return (
    <div className=''>
      <div className='flex gap-12'>
        <DealChart/>
        <RateChart/>
      </div>
      <div className='flex gap-12'>
        <VisitorChart/>
        <ApplicationChart/>
      </div>
    </div>
  )
}

export default DashboardSmallChart
