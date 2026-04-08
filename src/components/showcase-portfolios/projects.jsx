"use client";
import React from "react";
import { projects } from '@/data/ServiceData'

const LatestProjects = () => {
    return (
        <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-[#f8f9fa]">
            <div className=" mx-auto">
                <div className="text-center mb-5 font-bold text-[#1c3f39]">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((service) => (
                        <div
                            key={service.id}
                            className="flex flex-col items-center    gap-6 hover:scale-105 transition-all duration-300"
                        >
                            {/* Image */}
                            <img
                                src={service.img} // final path yahan dalna
                                alt={service.headline}
                                className="w-48 h-48 md:w-56 md:h-56 object-contain"
                            />

                            {/* Text Content */}
                            <div className="flex flex-col items-center text-center">
                                <h4 className="text-yellow-500 font-semibold mb-2 text-lg md:text-xl">
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