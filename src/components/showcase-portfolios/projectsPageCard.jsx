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
                            className="group relative flex flex-col items-center overflow-hidden transition-all duration-300 h-[350px]"
                        >
                            {/* Image */}
                            <img
                                src={service.img}
                                alt={service.headline}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Static Headline (Always Visible) - Gradient for readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 group-hover:opacity-0 transition-all duration-500 ease-in-out flex flex-col justify-end p-6">
                                {/* Headline Badge */}
                                <span className="bg-[#f1f45d] text-[#201c3f] text-[11px] px-4 py-1.5 rounded-[4px] w-fit mb-2 uppercase tracking-[0.15em] font-bold shadow-sm backdrop-blur-sm">
                                    {service.headline}
                                </span>
                            </div>

                            {/* Hover Content (Title & Description) */}
                            <div className="absolute inset-0 bg-[#201c3f]/60 flex flex-col justify-end p-6 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <h4 className="text-[#f1f45d] mb-1 text-xs uppercase tracking-[0.2em] font-bold">
                                    {service.headline}
                                </h4>
                                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                    {service.title}
                                </h3>
                                <div className="w-10 h-[2px] bg-[#f1f45d] my-3 transition-all duration-500 delay-100 group-hover:w-full"></div>
                                <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
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