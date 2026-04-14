import React from 'react'
import Banner from '@/common/Banner/Banner'
import LatestProjects from '@/components/showcase-portfolios/projectsPageCard'
const PortfolioPage = () => {
  return (
    <>
      <Banner title={"Trainings"} current={"trainings"} />
      <LatestProjects />
    </>
  )
}

export default PortfolioPage
