import React from "react";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import ProjectCounter from "@/common/projectCounter/ProjectCounter";
import SkillsCard from "@/components/skills/SkillsCard";

const Skills = () => {
  return (
    <section className="relative w-full pb-10 md:px-12 px-6 lg:px-16 bg-[#201c3f] overflow-hidden">
      
      {/* Background Decoration Image */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src="/assets/icons/skill-bg.png"
          alt="background decoration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        <ProjectCounter />

        <div className="service-heading flex flex-col md:flex-row justify-between items-start md:items-center gap-6 py-20">
          
          <div className="font-bold">
            <h4 className="text-[#f1f45d] text-[18px] uppercase tracking-widest">
              My Skills
            </h4>
            <p className="text-white text-3xl md:text-4xl leading-snug">
              Crafting strategies <br /> that drive growth and long-term success
            </p>
          </div>

          <div>
            <Link href={"/services"}>
              <button className="flex items-center gap-3 px-6 py-4 uppercase text-sm border border-[#f1f45d] text-white font-bold rounded-sm hover:bg-[#f1f45d] hover:text-[#201c3f] transition">
                See more
                <MdArrowForward size={18} />
              </button>
            </Link>
          </div>
        </div>

        <SkillsCard />
      </div>
    </section>
  );
};

export default Skills;