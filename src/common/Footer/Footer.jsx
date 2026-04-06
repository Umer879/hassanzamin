"use client";
import React from "react";
import { socialLinks } from "@/data/FooterData";
import { servicesLinks } from "@/data/FooterData"
import {  MdSend } from "react-icons/md";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="">
            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div>
                    <div>
                        <img src="/assets/logo/logo2.png" alt="" />
                    </div>
                    <p className="text-sm my-6 text-[#1c3f39]">
                        We help businesses grow with modern digital marketing strategies and tools.
                    </p>

                    <div className="flex gap-4 text-lg ">
                        {socialLinks.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className="border p-2 text-[#1c3f39] rounded-full hover:bg-[#1c3f39] hover:text-white border-gray-500"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-[#1c3f39]  mb-4">Our Services</h3>
                    <ul className="space-y-3">
                        {servicesLinks.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-2 text-[#1c3f39]   cursor-pointer"
                            >
                                <FaChevronRight size={16} />
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="text-lg font-bold text-[#1c3f39] mb-4">Address</h3>
                    <ul className="space-y-3 text-sm text-[#1c3f39] ">
                    
                        <li className="flex text-[16px] items-center gap-2">
                            <FaPhone size={18} /> +92 300 0000000
                        </li>
                            <li className="flex text-[16px]  items-center gap-2 my-4">
                            <FaEnvelope size={18} /> abc@gmail.com
                        </li>
                        <li className="flex text-[16px] items-center gap-2">
                            <FaMapMarkerAlt size={18} /> Rawalpindi, Pakistan
                        </li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <h3 className="text-lg font-bold text-[#1c3f39]  mb-4">
                        Get a Free Quote
                    </h3>
                    <p className="text-sm mb-4">
                        Enter your email and we’ll contact you.
                    </p>

                    <form className="relative w-full max-w-sm">
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="w-full px-4 py-4 border-[#f1f45d] pr-10 rounded-md border  focus:outline-none "
                        />
                        <button
                            type="submit"
                            className="absolute right-2 cursor-pointer top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-[4px]  transition"
                        >
                            <MdSend size={22} />
                        </button>
                    </form>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t md:px-16 px-6 flex flex-col md:flex-row items-center justify-between border-gray-800 py-4 text-sm text-gray-500 gap-3">

                {/* Left */}
                <div className="text-[#1C3F39]">
                    © {new Date().getFullYear()} UG Digital. All rights reserved.
                </div>

                {/* Right */}
                <ul className="flex items-center text-[#223f1c] gap-6">
                    <li><Link href="#">Terms & Condition</Link></li>
                    <li><Link href="#">Privacy Policy</Link></li>
                    <li><Link href="#">Contact Us</Link></li>
                </ul>

            </div>
        </footer>
    );
};

export default Footer;