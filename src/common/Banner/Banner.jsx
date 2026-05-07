"use client";
import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";

const Banner = ({ title, subtitle, current }) => {
  return (
    <section className="relative w-full h-[250px] bg-[#201c3f] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/banner/banner.jpg"
          alt="bg-shape"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#201c3f]/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white p-4 bg-white/50 rounded-2xl basis-[80%] sm:basis-[50%]">

        {/* Page Title */}
        <h1 className="text-3xl md:text-[40px] font-bold mb-3">
          {title}
        </h1>

        <h2 className="text-[26px] font-semibold mb-3">
          {subtitle}
        </h2>

        <div className="flex justify-center items-center mt-5">
          <div className="flex items-center p-2 justify-center gap-2 text-sm md:text-base bg-black backdrop-blur-sm rounded-md w-fit">

            <Link
              href="/"
              className="flex items-center gap-1 hover:text-[#f1f45d] transition"
            >
              <FaHome />
              Home
            </Link>

            <FaChevronRight className="text-gray-400" />

            <span className="text-white flex items-center gap-1">
              {current}
            </span>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;