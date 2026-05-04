"use client";
import React from "react";
import { projects } from '@/data/ServiceData'

const ProjectPageCard = () => {
    return (
        <section className="w-full bg-[#f5f5f5]">
            <div className=" mx-auto">
                <div className="text-center bg-[#ffffff]  text-[#201c3f]">
                    <div className="py-10 px-6 md:px-12">
                        <h4 className=" text-[22px] uppercase font-bold  mb-3">
                            Hassan Zamin Digital Growth Expert
                        </h4>
                        <p className="text-[18px]">
                            Hassan Zamin is a seasoned Digital Marketing Strategist and Business Growth Expert with over 15 years of experience including 9 years in digital and performance marketing. He combines corporate and FMCG background with modern strategies to deliver measurable growth for brands across pharma beauty cosmetics FMCG and service industries. He specializes in lead generation brand positioning funnel optimization and business development. His approach is data driven practical and ROI focused. He helps businesses scale through strategic marketing systems and consulting services for sustainable growth success
                        </p>
                    </div>
                </div>

                <div className="training-section text-center">
                    <h2 className="font-bold text-[20px] mt-10 text-center">
                        Creative Strategies. Measurable Results.
                    </h2>

                    <div className="grid grid-cols-2 py-10 px-6 md:px-12 lg:px-20 sm:grid-cols-3 md:grid-cols-4 gap-8">

                        {projects.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white shadow-sm my-cards border h-[220px] rounded-[18px]"
                            >
                                <img
                                    src={item.img}
                                    className="rounded-t-[18px] h-[70%] w-full object-cover"
                                    alt={item.title}
                                />
                                <h2 className="mt-4 font-bold text-center">
                                    {item.title}
                                </h2>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectPageCard;