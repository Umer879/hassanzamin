import React from 'react'
import Hero from "@/components/hero/Hero";
import SkillsMarquee from "@/common/marqueSlider/SkillsMarquee";
import About from "@/components/about/About";
import CompaniesWeWorkWith from '@/components/Companies/Companies';
import ServicesSection from "@/components/services/Services";
import LatestProjects from "@/components/showcase-portfolios/projects";
import Testimonial from "@/components/testimonial/Testimonial";
import Skills from "@/components/skills/Skills";
// import BlogSection from '@/components/blogs/Blogs';
import CTA from "@/common/CTA/CTA";
const HomePage = () => {
    return (
        <>
            <Hero />
            <SkillsMarquee />
            <About />
            <CompaniesWeWorkWith />
            <ServicesSection />
            <LatestProjects />
            <Testimonial />
            <Skills />
            {/* <BlogSection /> */}
            <CTA />
        </>
    )
}

export default HomePage
