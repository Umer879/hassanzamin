import React from "react";
import Image from "next/image";
import { FaUser, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import blogs from "@/data/blogsData";


const BlogSection = () => {
    return (
        <section className="w-full px-6 md:px-12 lg:px-16 py-12">
            <div className="text-center py-6">
                <h4 className="font-bold uppercase text-[16px]">Our LATEST BLOG AND NEWS</h4>
                <h2 className="font-bold text-2xl sm:text-[34px]">Stand out from the crowd</h2>
                <h2 className="font-bold text-2xl sm:text-[34px]">professional portfolio</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="flex flex-col border py-3 ps-3 border-gray-200 sm:flex-row gap-4 bg-white overflow-hidden"
                    >
                        {/* Image */}
                        <div className="w-full sm:w-[40%] relative h-56 sm:h-auto">
                            <Image
                                src={blog.img}
                                alt={blog.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="w-full sm:w-[60%] p-4 flex flex-col justify-between">
                            {/* Author & Date */}
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                                <span className="flex items-center gap-1">
                                    <FaUser /> {blog.author}
                                </span>
                                <span className="flex items-center gap-1">
                                    <FaCalendarAlt /> {blog.date}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-[24px] font-semibold mb-2">
                                {blog.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-[16px] mb-4">
                                {blog.desc}
                            </p>

                            {/* Button */}
                          <Link href={`/blogs/${blog.slug}`}>
                            <button className="flex items-center gap-2 border border-[#1c3f393a] w-fit py-4 px-6 rounded-[4px] text-[#201c3f] font-medium hover:bg-[#201c3f] hover:text-white transition">
                                Read More <FaArrowRight />
                            </button>
                          </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;