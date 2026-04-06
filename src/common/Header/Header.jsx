"use client";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full bg-[#1c3f39] px-7">
      <div className="mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Left - Logo */}
        <div>
          <Image width={100} height={70} src="/assets/logo/logo.png" alt="" />
        </div>

        {/* Center - Nav Links */}
        <nav className="hidden md:flex text-white items-center gap-8 font-medium">
          <a href="#" className="hover:text-[#f1f45d] transition">Home</a>
          <a href="#" className="hover:text-[#f1f45d] transition">About</a>
          <a href="#" className="hover:text-[#f1f45d] transition">Services</a>
          <a href="#" className="hover:text-[#f1f45d] transition">Blogs</a>
          <a href="#" className="hover:text-[#f1f45d] transition">Portfolio</a>
          <a href="#" className="hover:text-[#f1f45d] transition">Contact Us</a>
        </nav>

        {/* Right - WhatsApp Button */}
        <div className="whatsapp-btn">
          <a
            href="https://wa.me/923358069145"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center uppercase gap-2  text-white px-5 py-2.5 border border-[#f1f45d] rounded-[4px]"
          >
            Whatsapp: (208) 555-0112
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;