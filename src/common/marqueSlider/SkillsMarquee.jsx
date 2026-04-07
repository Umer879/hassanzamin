"use client";

export default function SkillsMarquee() {
  const skills = [
    "Digital Marketing",
    "Web developement",
    "UI / UX Designer",
    "Marketing & Advertisement",
    "Project Management"
  ];

  return (
    <div className="relative w-full bg-black overflow-hidden py-6">

      <div className="flex marquee-track text-white font-bold text-[24px] md:text-[40px] gap-16">

        {/* 2x content for seamless loop */}
        {[...skills, ...skills].map((skill, index) => (
          <span key={index} className={`whitespace-nowrap uppercase font-semibold ${index % 2 === 0 ? "text-white" : "text-[#f1f45d]"
            }`}>
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
}