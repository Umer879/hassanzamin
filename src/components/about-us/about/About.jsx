import React from 'react'
import { HiOutlineCheckCircle } from "react-icons/hi";

const About = () => {
    return (
        <section className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 pt-20 pb-20 sm:pb-0  px-6 md:px-16 '>
            <div className="imgae  h-fit">
                <div className="about-image flex justify-evenly">
                    <div>
                        <img src="/assets/icons/arrow-shape.png" alt="" />
                    </div>
                    <div className='border-3 about-1 pb-3 mr-10 border-[#f1f45d] '>
                        <img src="/assets/about/about-1.jpeg" className='about-1 w-[250px]' alt="" />
                    </div>
                </div>
                <div className="about-image  relative bottom-30 right-0  flex justify-evenly items-end">
                    <div className=''>
                        <img src="/assets/about/about-2.png" className=' rounded-2xl' alt="" />
                    </div>
                    <div className=' bg-[#f1f45d] px-6 py-2  rounded-[4px] flex items-center gap-1 justify-between'>
                        <div className="achivement-icon">
                            <img src="/assets/icons/1.svg" className='w-10 h-10' alt="" />
                        </div>
                        <div>
                            <div className="project-counts font-bold text-[30px]">250+</div>
                            <div className="project-counts">Project Complete</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-text">
                <div className='font-bold'>
                    <h4 className='uppercase text-[20px] '>About Us</h4>
                    <h2 className='text-[24px] sm:text-[40px]  sm:leading-13'>Digital Growth Strategist & Business Transformation Expert</h2>
                </div>
                <p className='my-7 leading-7 text-[#201c3f]'>Hassan Zamin delivers strategic digital marketing solutions that empower brands to grow through data-driven campaigns, performance optimization, and result oriented methods focused on sustainable business growth success outcomes.</p>
                <div><hr className='border-gray-400' /></div>
                {/* Bullet Points */}
                <div className="mt-8  mx-auto">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 leading-5">

                        {/* Column 1 */}
                        <li className="flex items-start gap-3 text-[#201c3f]">
                            <HiOutlineCheckCircle className="text-[#f1f45d] w-6 h-6 flex-shrink-0" />
                            Digital marketing strategy expert
                        </li>

                        <li className="flex items-start gap-3 text-[#201c3f]">
                            <HiOutlineCheckCircle className="text-[#f1f45d] w-6 h-6 flex-shrink-0" />
                            Performance and growth specialist
                        </li>

                        {/* Column 2 */}
                        <li className="flex items-start gap-3 text-[#201c3f]">
                            <HiOutlineCheckCircle className="text-[#f1f45d] w-6 h-6 flex-shrink-0 mt-1" />
                            Brand development and positioning
                        </li>

                        <li className="flex items-start gap-3 text-[#201c3f]">
                            <HiOutlineCheckCircle className="text-[#f1f45d] w-6 h-6 flex-shrink-0" />
                            Lead generation and funnels
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default About
