import React from 'react'
import Banner from '@/common/Banner/Banner'
import LatestProjects from '@/components/showcase-portfolios/projectsPageCard'
const PortfolioPage = () => {
  return (
    <>
      <Banner title={"Corporate Trainings"} subtitle={"Build a Safer, Smarter Workforce"} current={"Corporate Trainings"} />
      <LatestProjects />
    </>
  )
}

export default PortfolioPage
