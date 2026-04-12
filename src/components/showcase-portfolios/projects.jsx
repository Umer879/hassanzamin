"use client";
import React from "react";
import { projects } from '@/data/ServiceData'

const LatestProjects = () => {
    return (
        <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-[#f8f9fa]">
            <div className=" mx-auto">
                <div className="text-center mb-5 font-bold text-[#201c3f]">
                    <h4 className=" text-[18px] uppercase font-bold  mb-3">
                        Latest service
                    </h4>
                    <h2 className="text-[24px] md:text-[34px]">
                        Showcasing excellence
                    </h2>
                    <h2 className="text-[24px] md:text-[34px]">
                        through portfolios

                    </h2>
                </div>

                {/* Grid for services */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {projects.map((service) => (
                        <div
                            key={service.id}
                            className="flex flex-col  items-center  gap-6  transition-all duration-300"
                        >
                            {/* Image */}
                            <img
                                src={service.img}
                                alt={service.headline}
                                className=" object-contain"
                            />

                            {/* Text Content */}
                            <div className="flex flex-col justify-start   w-full">
                                <h4 className="text-[#201c3f]  mb-2 text-lg ">
                                    {service.headline}
                                </h4>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                                    {service.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestProjects;