"use client";
import { useState } from "react";
import {services} from "@/data/ServiceData";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";

export default function ServicesSection() {
    const [activeService, setActiveService] = useState(services[0]);

    return (
        <section className="w-full pb-10 md:px-12 px-6  lg:px-16 bg-[#201c3f]">
            <div className="service-heading flex sm:flex-row flex-col justify-between items-center py-20">
                <div className=" font-bold text-center sm:text-start">
                    <h4 className="text-[#f1f45d] text-[18px] uppercase tracking-widest">Latest Services</h4>
                    <p className="text-white text-[24px] sm:text-4xl sm:leading-12">Showcasing excellence <br /> through portfolios</p>
                </div>
                <div>
                    <Link href={"/services"}>           <button className="mt-5 sm:mt-0 flex items-center gap-3 px-6 py-4 uppercase text-sm border border-[#f1f45d] text-white font-bold rounded-sm hover:bg-[#f1f45d] hover:text-[#201c3f] transition">
                        Our Services
                        <MdArrowForward size={18} />
                    </button></Link>
                </div>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-0">

                {/* Left Image */}
                <div className="w-full lg:w-[35%] h-[350px] relative">
                    <img
                        src={activeService.image}
                        alt={activeService.title}
                        className="w-full h-full object-cover   transition-all duration-300"
                    />
                </div>

                <div className="w-full lg:w-[65%] flex flex-col gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setActiveService(service)}
                            className={`cursor-pointer p-4 rounded-lg transition-all duration-300
        ${activeService.title === service.title
                                    ? "text-[#f1f45d]"      // Active service text color
                                    : "text-white hover:text-[#f1f45d]" // Default + hover color
                                }`}
                        >
                            {/* Count + Title */}
                            <div className="flex items-center gap-4 mb-1">
                                <span className={`font-bold text-lg tracking-wider
          ${activeService.title === service.title ? "text-[#f1f45d]" : "text-white"}`}
                                >
                                    {service.count}
                                </span>
                                <h3 className="text-xl font-semibold">{service.title}</h3>
                            </div>

                            {/* Horizontal line */}
                            <div className="border-b border-gray-100 opacity-25 mt-7"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}