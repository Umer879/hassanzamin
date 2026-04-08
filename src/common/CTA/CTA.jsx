"use client";
import React from "react";

const CTA = () => {
  return (
    <section className="mx-auto bg-[#f1f45d] rounded-[4px] my-20 w-[90%] py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      
      {/* Background Decoration Image */}
      <img
        src="/assets/icons/banner-bg.png"
        alt="bg decoration"
        className="absolute right-0 top-0 h-full py-5 object-contain pointer-events-none"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1c3f39] mb-6">
          Explore the art of portfolios
        </h2>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-5 py-4 rounded-[4px] outline-none border border-[#1c3f39]"
          />

          <button className="px-6 py-4 rounded-[4px] uppercase bg-white text-[#1c3f39] font-semibold hover:bg-[#1c3f39] hover:text-white transition-all duration-300">
            Subscribe Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default CTA;