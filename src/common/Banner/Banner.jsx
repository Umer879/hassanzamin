"use client";
import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";

const Banner = ({ title, subtitle, current }) => {
  return (
    <section className="relative w-full h-[250px]  bg-[#201c3f] flex items-center justify-center overflow-hidden">

      {/* Background Decoration Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/icons/banner-bg.png"
          alt="bg-shape"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">

        {/* Page Title */}
        <h1 className="text-3xl md:text-[40px] font-bold mb-3">
          {title}
        </h1>
        <h2 className="text-[26px] font-semibold mb-3">
          {subtitle}
        </h2>


        <div className="flex justify-center items-center">
          <div className="flex items-center p-2 justify-center gap-2 text-sm md:text-base bg-black w-fit">

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