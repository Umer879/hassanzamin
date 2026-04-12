"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import testimonials from "@/data/testimonial";
import "swiper/css";



const Testimonial = () => {
  const swiperRef = useRef(null);

  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <div>
          <h4 className="text-[#201c3f] font-bold mb-3">CLIENTS REVIEWS</h4>

          <h2 className="text-3xl md:text-[40px] font-bold mb-6 text-[#201c3f]">
            your talent with our
            Latest portfolio
          </h2>

          {/* Arrows */}
          <div className="flex gap-2 md:mt-20 mt-5">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-15 h-15 flex text-[#201c3f] items-center justify-center border border-[#f1f45d] rounded-full  hover:bg-[#f1f45d] transition"
            >
              <MdArrowBack size={25} />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-15 h-15 flex items-center justify-center  border border-[#f1f45d] rounded-full text-[#201c3f]  hover:bg-[#f1f45d] transition"
            >
              <MdArrowForward size={25} />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full min-w-0">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
              speed={3000}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="!w-full">
                <div className="bg-[#f1f45d] text-black py-12 px-2 sm:px-15   h-full">
                  {/* User Info */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />

                      <div>
                        <h3 className="font-semibold text-[26px] text-[#201c3f]">{item.name}</h3>
                        <p className="text-[16px] mt-1">{item.role}</p>
                      </div>
                    </div>
                    {/* Quote Icon */}
                    <div className=" w-20 h-20  mb-3 hidden sm:flex">
                      <img src="/assets/icons/quote-icon.svg" className="w-full h-full" alt="" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[16px] mt-6 leading-relaxed">{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;