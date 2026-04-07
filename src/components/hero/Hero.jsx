"use client";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#1c3f39] px-20 flex  justify-between">

      {/* Background Decoration Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/icons/hero-bg.png"
          alt="background pattern"
          fill
          className="object-cover opacity-70 scale-100 -translate-y-16"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10  pt-20 w-full text-white">

        <h1 className="text-4xl sm:text-5xl lg:text-[80px] font-bold leading-tight mb-6">
          Courtney Henry
        </h1>

        <p className="text-base sm:text-lg lg:text-[18px] max-w-2xl mb-8 text-white/90">
          Lorem ipsum dolor sit amet consectetur. Amet lectus Lorem ipsum dolor sit amet consectetur.
          Amet lectus mi ultricies dictum facilisis the sem. Imperdiet massa turpis sit proin..
        </p>
        {/* Buttons */}
        <div className="flex flex-wrap gap-4">

          <button className="flex items-center gap-3 px-6 py-4 uppercase text-sm bg-[#f1f45d] border border-[#f1f45d] text-[#1c3f39] font-bold rounded-sm hover:bg-transparent hover:text-white transition">
            Read More
            <MdArrowForward size={18} />
          </button>

          <button className="flex items-center gap-3 px-6 py-4 uppercase text-sm border border-[#f1f45d] text-white font-bold rounded-sm hover:bg-[#f1f45d] hover:text-[#1c3f39] transition">
            Our Services
            <MdArrowForward size={18} />
          </button>

        </div>
      </div>

<div className="hero-img w-[450px] h-[400px] mt-10 relative group">
  <img
    src="/assets/profile.avif"
    alt=""
    className="w-full h-full object-cover rounded-3xl border border-[#f1f45d]/30 shadow-xl transition duration-500  group-hover:shadow-[0_20px_60px_rgba(241,244,93,0.3)]"
  />
</div>
    </section>
  );
}