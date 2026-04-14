"use client";
import React from "react";
import { projects } from '@/data/ServiceData'

const ProjectPageCard = () => {
    return (
        <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-[#f8f9fa]">
            <div className=" mx-auto">
                <div className="text-center mb-5 font-bold text-[#201c3f]">
                    <h4 className=" text-[18px] uppercase font-bold  mb-3">
                        Featured Programs
                    </h4>
                    <h2 className="text-[24px] md:text-[34px]">
                        Mastering modern skills
                    </h2>
                    <h2 className="text-[24px] md:text-[34px]">
                        through expert training

                    </h2>
                </div>

                {/* Grid for services */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((service) => (
                        <div
                            key={service.id}
                            className="group relative flex flex-col items-center overflow-hidden transition-all duration-300 rounded-lg"
                        >
                            {/* Image */}
                            <img
                                src={service.img}
                                alt={service.headline}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Gray Overlay & Text Content */}
                            <div className="absolute inset-0 bg-gray-900/60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h4 className="text-white/80 mb-1 text-sm uppercase tracking-wider">
                                    {service.headline}
                                </h4>
                                <h3 className="text-xl md:text-2xl font-bold text-white">
                                    {service.title}
                                </h3>
                                {/* Agar aap description bhi add karna chahen */}
                                <p className="text-white/90 text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectPageCard;