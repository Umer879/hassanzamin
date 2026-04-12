"use client";
import data from "@/data/ContactData";
const ContactInfo = () => {
  return (
    <section className="w-full py-12 px-6 md:px-12 lg:px-16 bg-white">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {data.map((item) => (
          <div
            key={item.id}
            className="border border-[#cecece8f] text-white  px-6 py-12 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="mb-4 w-20 h-20 text-[#f1f45d] bg-[#201c3f] flex items-center justify-center rounded-full">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-[26px] font-bold mb-2 text-[#201c3f]">
              {item.title}
            </h3>

            {/* Detail */}
            <p className="text-[18px]  text-[#201c3f]">
              {item.detail}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default ContactInfo;