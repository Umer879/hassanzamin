"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import companies from "@/data/companiesData";


export default function CompaniesWeWorkWith() {
    return (
        <section className="py-16 bg-white border-t border-gray-200">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <p className="text-sm font-semibold tracking-[0.25em] text-[#201c3f] uppercase">Trusted Partners</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#201c3f] mt-2">Companies We Work With</h2>
                    <p className="text-[#201c3f] mt-3 max-w-2xl mx-auto">We proudly collaborate with innovative brands and growing businesses worldwide.</p>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    breakpoints={{
                        0: { slidesPerView: 3 },
                        640: { slidesPerView: 4 },
                        768: { slidesPerView: 7 },
                    }}
                >
                    {companies.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="flex items-center justify-center bg-white border border-gray-200 w-[100px] rounded-2xl p-1 shadow-md">
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="  object-contain opacity-80 hover:opacity-100 transition"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
