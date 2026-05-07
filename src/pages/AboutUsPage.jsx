import React from 'react'
import Banner from '@/common/Banner/Banner'
import About from '@/components/about/About'
import SkillsMarquee from '@/common/marqueSlider/SkillsMarquee'
import AboutVideo from '@/components/AboutVideo/AboutVideo'
import Testimonial from '@/components/testimonial/Testimonial'
import ServicesSection from '@/components/services/Services'
const AboutUsPage = () => {
  
  return (
    <div>
         <Banner title={"Digital Growth Experts"}current={"about-Us"} />
         <About />
         <SkillsMarquee />
         <AboutVideo />
         <Testimonial />
         <ServicesSection />
    </div>
  )
}

export default AboutUsPage
