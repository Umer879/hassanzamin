import React from "react";

const project = [
  {
    title: "Winning Award",
    counts: "200+",
  },
  {
    title: "Total Project",
    counts: "650+",
  },
  {
    title: "Happy Clients",
    counts: "120+",
  },
  {
    title: "Clients Review",
    counts: "210+",
  },
];

const ProjectCounter = () => {
  return (
    <section className="w-full bg-transparent pt-10 pb-0 md:py-20">
      <div className=" mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {project.map((item, index) => (
            <div
              key={index}
              className="bg-[#201c3f] rounded-[4px] py-6 text-center border-2 border-[#33534d] hover:border-[#f1f45d] transition-all duration-300 group"
            >
              <p className="text-gray-400 mt-2 text-sm md:text-[18px] group-hover:text-white transition">
                {item.title}
              </p>
              {/* Count */}
              <h3 className="text-3xl md:text-[44px] font-bold text-white group-hover:text-[#f1f45d] transition">
                {item.counts}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectCounter;
