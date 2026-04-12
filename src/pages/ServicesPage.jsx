import React from 'react'
import Banner from '@/common/Banner/Banner'
import Services from '@/components/services/ServiceCard'
const ServicesPage = () => {
  return (
    <div>
      <Banner title={"Services"} current={"services"} />
      <Services />
    </div>
  )
}

export default ServicesPage
