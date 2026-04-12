"use client";
import React from "react";
import skills from "@/data/SkillsData";

const SkillsCard = () => {
  return (
    <section className="w-full">
      
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-8">
        
        {skills.map((item, index) => {
          const Icon = item.logo;

          return (
            <div
              key={index}
              className="relative pt-16 py-12 px-8 rounded-[4px] bg-white transition-all duration-300 group"
            >
              {/* Icon (Centered + Floating) */}
              <div className="absolute -top-10 left-[20%] -translate-x-1/2 bg-[#262e55] w-20 h-20 flex justify-center items-center rounded-full shadow-lg">
                <Icon
                  size={30}
                  className="text-[#f1f45d]  transition"
                />
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-bold text-[#201c3f] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-black text-[16px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default SkillsCard;