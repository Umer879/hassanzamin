"use client";
import React from "react";
import { socialLinks } from "@/data/FooterData";
import { servicesLinks } from "@/data/FooterData"
import { MdSend } from "react-icons/md";
import { FaChevronRight, FaCheck, FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {

    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("LOADING");

        const res = await fetch("https://formspree.io/f/xkokwgjg", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });

        if (res.ok) {
            setStatus("SUCCESS");
            setEmail("");
        } else {
            setStatus("ERROR");
        }
    };

    return (
        <footer className="">
            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div>
                    <div>
                        <Image src="/assets/logo/white-logo.png" width={150} height={80} alt="" />
                    </div>
                    <p className="text-sm my-6 text-[#201c3f]">
                        We help businesses grow with modern digital marketing strategies and tools.
                    </p>

                    <div className="flex gap-4 text-lg ">
                        {socialLinks.map((item, index) => (
                            <a
                                key={index}
                                tar
                                href={item.link}
                                className="border p-2 text-[#201c3f] rounded-full hover:bg-[#201c3f] hover:text-white border-gray-200"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-[#201c3f]  mb-4">Our Services</h3>
                    <ul className="space-y-3">
                        {servicesLinks.map((item, index) => (
                            <li
                                key={index}
                                className=" w-fit text-[#201c3f]"
                            >
                                <Link href={item.link} className="flex items-center gap-2 text-[#201c3f]   cursor-pointer">
                                    <FaChevronRight size={16} />
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="text-lg font-bold text-[#201c3f] mb-4">Address</h3>
                    <ul className="space-y-3 text-sm text-[#201c3f]">
                        <li className="flex text-[16px] items-center gap-2">
                            <FaPhone size={18} />
                            <a href="https://wa.me/923453884988" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5f836] transition">
                                +92 345 3884988
                            </a>
                        </li>

                        <li className="flex text-[16px] items-center gap-2 my-4">
                            <FaEnvelope size={18} />
                            <a href="mailto:info@hassanzamin.com" className="hover:text-[#f2f540] blue-600 transition">
                                info@hassanzamin.com
                            </a>
                        </li>

                        <li className="flex text-[16px] items-center gap-2">
                            <FaMapMarkerAlt size={18} /> Islamabad Capital Territory, Pakistan
                        </li>
                    </ul>
                </div>


                {/* Column 4 */}
                <div>
                    <h3 className="text-lg font-bold text-[#201c3f]  mb-4">
                        Get a Free Quote
                    </h3>
                    <p className="text-sm mb-4">
                        Enter your email and we’ll contact you.
                    </p>

                    <form className="relative w-full max-w-sm" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Your Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-4 border-[#f1f45d] pr-10 rounded-md border  focus:outline-none "
                        />
                        <input type="text" name="_gotcha" className="hidden" />
                        <button
                            type="submit"
                            className="absolute right-2 cursor-pointer top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-[4px]  transition"
                        >
                            <MdSend size={22} />
                        </button>
                    </form>

                    {/* Status Messages */}
                    {status === "SUCCESS" && (
                        <p className="text-green-700 mt-4 flex items-center justify-center gap-2">
                            <FaCheck className="text-lg" />
                            <span>You are subscribed!</span>
                        </p>
                    )}

                    {status === "ERROR" && (
                        <p className="text-red-700 mt-4 flex items-center justify-center gap-2">
                            <FaPaperPlane className="text-lg" />
                            <span>Something went wrong</span>
                        </p>
                    )}

                </div>

            </div>

            {/* Bottom */}
            <div className="border-t md:px-16 px-6 flex flex-col md:flex-row items-center justify-between border-gray-800 py-4 text-sm text-gray-500 gap-3">

                {/* Left */}
                <div className="text-[#201c3f]">
                    © {new Date().getFullYear()} UG Digital. All rights reserved.
                </div>

                {/* Right */}
                <ul className="flex items-center text-[#223f1c] gap-6">
                    <li><Link href="/terms-&-condition">Terms & Condition</Link></li>
                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link href="/contact-us">Contact Us</Link></li>
                </ul>

            </div>
        </footer>
    );
};

export default Footer;