"use client";
import { FaArrowRight } from "react-icons/fa";
import { serviceCards } from "@/data/ServiceData";



export default function Services() {
    return (
        <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {serviceCards.map((service) => (
                        <div
                            key={service.id}
                            className="p-6 border border-gray-200  transition duration-300 group"
                        >
                            {/* Icon */}
                            <div className="text-[#201c3f] mb-4 w-20 h-20 bg-[#f1f45d] flex justify-center items-center rounded-full">
                                {service.icon}
                            </div>

                            {/* Title */}
                        <h3 className="text-xl font-bold uppercase text-[#201c3f] mb-5">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#201c3f]  mb-6 text-[16px] leading-relaxed">
                                {service.desc}
                            </p>

                            {/* Read More */}
                            <button className="flex text-sm items-center uppercase gap-2 text-[#201c3f] font-semibold">
                                Read More
                                <FaArrowRight className="text-sm transition transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}