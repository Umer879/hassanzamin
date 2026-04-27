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
                            Customized Corporate Trainings in Pakistan
                        </h4>
                        <p className="text-[18px]">Welcome to Abacus International Training & Consultancy the top leading corporate and customized HSE training provider in Lahore, Islamabad, and Karachi, Pakistan. We prioritize fostering a culture of safety and sustainability across diverse industries and global landscapes. Our comprehensive HSE corporate safety training modules are meticulously designed to meet the unique needs of organizations, empowering their workforce with the knowledge and skills necessary to navigate complex HSE challenges confidently. Our expert will identify your needs and create a training program that is right for you.</p>
                    </div>
                </div>

                    <div className="training-section text-center">
                    <h2 className="font-bold text-[20px] mt-10">Quality, Safety, Health, & Environment</h2>

                    <div className="grid grid-cols-2 py-10 px-6 md:px-12 lg:px-20 sm:grid-cols-3 md:grid-cols-4 gap-8">

                        {projects.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white shadow-sm my-cards border h-[200px] rounded-[18px]"
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