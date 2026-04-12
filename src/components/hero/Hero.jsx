"use client";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full  h-fit lg:min-h-screen bg-[#201c3f] px-4 sm:px-20 pb-5 flex flex-col md:flex-row items-center md:items-start  justify-between">

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
      <div className="relative z-10  pt-8 sm:pt-20 w-full text-white text-center md:text-start">

        <h1 className="text-4xl sm:text-5xl lg:text-[80px] font-bold leading-tight mb-6">
          Hassan Zamin
        </h1>

        <p className="text-base sm:text-lg lg:text-[18px] max-w-2xl mb-8 text-white/90">
          Hassan Zamin is a Digital Marketing and Business Growth expert with 15+ years of experience, helping brands in FMCG, pharma, and services grow through data-driven strategies, lead generation, and ROI-focused marketing.
        </p>
        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">

          <Link href="/about-us">
            <button className="flex items-center gap-3 px-3 sm:px-6 py-4 uppercase text-sm bg-[#f1f45d] border border-[#f1f45d] text-[#201c3f] font-bold rounded-sm hover:bg-transparent hover:text-white transition">
              Read More
              <MdArrowForward size={18} />
            </button>
          </Link>

          <Link href="/services">
            <button className="flex items-center gap-3 px-3 sm:px-6 py-4 uppercase text-sm border border-[#f1f45d] text-white font-bold rounded-sm hover:bg-[#f1f45d] hover:text-[#201c3f] transition">
              Our Services
              <MdArrowForward size={18} />
            </button>
          </Link>

        </div>
      </div>

      <div className="hero-img sm:w-[450px] h-[400px] mt-10  relative group">
        <img
          src="/assets/photo.jpeg"
          alt=""
          className="w-full h-full object-cover rounded-3xl border border-[#f1f45d]/30 shadow-xl transition duration-500  group-hover:shadow-[0_20px_60px_rgba(241,244,93,0.3)]"
        />
      </div>
    </section>
  );
}