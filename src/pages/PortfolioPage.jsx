import React from 'react'
import Banner from '@/common/Banner/Banner'
import LatestProjects from '@/components/showcase-portfolios/projects'
const PortfolioPage = () => {
  return (
    <>
        <Banner title={"Portfolio"} current={"portfolio"} />
        <LatestProjects />
    </>
  )
}

export default PortfolioPage
