"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about-us" },
        { name: "Services", href: "/services" },
        { name: "Trainings", href: "/trainings" },
        { name: "Contact Us", href: "/contact-us" },
    ];


    return (
        <nav className="relative bg-[#201c3f] z-[100]">
            <div className=" mx-auto px-8  md:px-12">
                <div className="flex nav-parent  items-center justify-between h-20">

                    {/* --- LAPTOP NAVBAR (Left Col: Logo) --- */}
                    <div className="flex-shrink-0" >
                        <Link href="/">
                            <Image width={150} height={80} src="/assets/logo/final-logo.jpg" alt="hassan zamin logo" />
                        </Link>
                    </div>

                    {/* --- LAPTOP NAVBAR (Center Col: Links) - Desktop Only --- */}
                    <div className="hidden min-[900px]:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className=" text-white hover:text-[#f1f45d] font-medium transition-all">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="whatsapp-btn hidden sm:flex  mr-10 ">
                        <a
                            href="https://wa.me/923453884988"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center uppercase gap-2 hover:bg-[#f1f45d] transition-all  text-white px-5 py-2.5 border hover:text-black border-[#f1f45d] rounded-[4px]"
                        >
                            Whatsapp: +92 345 3884988
                        </a>
                    </div>


                    {/* --- MOBILE TOGGLE BUTTON (Right Side) --- */}
                    <div className="min-[900px]:hidden right-8 absolute">
                        <button onClick={() => setIsOpen(true)} className="p-2 text-white " aria-label='Mobile toggle button'>
                            <HiOutlineMenuAlt3 size={30} />
                        </button>
                    </div>
                </div>
            </div>


            {/* Overlay (Pichla background blackish karne ke liye) */}
            <div
                className={`fixed inset-0 bg-black/50 transition-opacity duration-300 min-[900px]:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Drawer */}
            <div className={`fixed top-0 left-0 h-full bg-white w-[280px] bg-transparent shadow-2xl transform transition-transform duration-300 ease-in-out z-[101] lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                <div className="p-5 flex flex-col h-full">
                    {/* Close Button & Logo */}
                    <div className="flex justify-between items-center mb-10">
                        <div>
                            <Link href="/">
                                <Image width={150} height={80} src="/assets/logo/white-logo.png" alt="" />
                            </Link>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-100 rounded-full" aria-label='Toggle Close button'>
                            <HiOutlineX size={24} />
                        </button>
                    </div>

                    {/* Mobile Links */}
                    <div className="flex flex-col space-y-4 ">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-semibold text-gray-800  border-gray-50 pb-2 hover:text-blue-500 transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="whatsapp-btn">
                        <a
                            href="https://wa.me/923453884988"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center uppercase gap-2  text-[#201c3f] px-5 py-2.5 border hover:text-white hover:bg-[#201c3f] border-[#201c3f] rounded-[4px]"
                        >
                            Whatsapp: +92 345 3884988
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;