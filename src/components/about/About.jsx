import React from 'react'
import { HiOutlineCheckCircle } from "react-icons/hi";

const About = () => {
    return (
        <section className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 pt-20 px-6 md:px-16 '>
            <div className="imgae   h-fit">
              <div className="about-image flex justify-evenly">
                  <div>
                    <img src="/assets/icons/arrow-shape.png" alt="" />
                </div>
                <div className='border-3 about-1 pb-3 mr-10 border-[#f1f45d] '>
                    <img src="/assets/about/about-1.jpg" className='about-1 w-[250px]' alt="" />
                </div>
              </div>
              <div className="about-image  relative bottom-30 right-0  flex justify-evenly items-end">
                <div className=''>
                    <img src="/assets/about/about-2.jpg" className='w-[270px]' alt="" />
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
                    <h2 className='text-[40px] leading-13'>Elevate your brand with a the stunning portfolio</h2>
                </div>
                <p className='my-7 leading-7 text-[#1c3f39]'>In embracing frontier science, our objective is to contribute to advancements that directly benefit humanity, aligning our talents with a purpose-driven of commitment to create tangible, positive outcomes.</p>
                <div><hr className='border-gray-400' /></div>
                {/* Bullet Points */}
                <div className="mt-8  mx-auto">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 leading-5">

                        {/* Column 1 */}
                        <li className="flex items-start gap-3 text-[#1c3f39]">
                            <HiOutlineCheckCircle className="text-yellow-400 w-6 h-6 flex-shrink-0" />
                            Expert in Digital Marketing
                        </li>

                        <li className="flex items-start gap-3 text-[#1c3f39]">
                            <HiOutlineCheckCircle className="text-yellow-400 w-6 h-6 flex-shrink-0" />
                             Web & Mobile Development
                        </li>

                        {/* Column 2 */}
                        <li className="flex items-start gap-3 text-[#1c3f39]">
                            <HiOutlineCheckCircle className="text-yellow-400 w-6 h-6 flex-shrink-0 mt-1" />
                            Creative UI/UX Design Solutions
                        </li>

                        <li className="flex items-start gap-3 text-[#1c3f39]">
                            <HiOutlineCheckCircle className="text-yellow-400 w-6 h-6 flex-shrink-0" />
                            Project Management
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default About
