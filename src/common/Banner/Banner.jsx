"use client";
import Link from "next/link";

const Banner = ({ title, current}) => {
  return (
    <section className="relative w-full h-[250px] md:h-[300px] bg-[#201c3f] flex items-center justify-center overflow-hidden">
      
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
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          {title}
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-sm md:text-base">
          <Link href="/" className="hover:text-[#f1f45d] transition">
            Home
          </Link>

          <span>/</span>

          <span className="text-[#f1f45d]">
            {current}
          </span>
        </div>

      </div>
    </section>
  );
};

export default Banner;