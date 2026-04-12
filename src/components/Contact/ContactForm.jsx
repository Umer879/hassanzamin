"use client";
import React, { useRef, useState } from "react";
import { MdArrowForward } from "react-icons/md";
import emailjs from "@emailjs/browser";

const ContactSection = () => {

    const formRef = useRef()
    const [isSending, setIsSending] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            formRef.current,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
        )

            .then(
                () => {
                    alert('Email sent successfuly');
                    formRef.current.reset();
                    setIsSending(false)
                },
                (error) => {
                    alert('Failed to send Email')
                    console.error(error)
                    setIsSending(false)
                }
            )

        setIsSending(true)
    }

    return (
        <section className="w-full py-16 px-6 md:px-12 lg:px-16">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left Content */}
                <div className=" space-y-5 pr-4">
                    <h4 className=" uppercase font-bold tracking-widest">
                        GET IN TOUCH
                    </h4>

                    <h2 className="text-3xl md:text-[40px] font-bold leading-snug">
                        Elevate your brand with a the
                    </h2>

                    <p className=" leading-relaxed text-[18px]">
                        ished fact that a reader will be distrol acted bioiiy desig ished fact that a reader will acted ished fact that a reader will be distrol acted
                    </p>
                </div>

                {/* Right Form */}
                <form className="space-y-8 text-[#201c3f]" ref={formRef} onSubmit={sendEmail}>

                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                        {/* Name */}
                        <input
                            name="from_name"
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-md bg-transparent border border-gray-200 outline-none focus:border-[#f1f45d] focus:border"
                        />

                        {/* Email */}
                        <input
                            name="from_email"
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded-md bg-transparent border border-gray-200  outline-none focus:border-[#f1f45d] focus:border"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                        {/* Phone */}
                        <input
                        name="from_phone"
                            type="text"
                            placeholder="Phone Number"
                            className="w-full p-3 rounded-md bg-transparent border border-gray-200  outline-none focus:border-[#f1f45d] focus:border"
                        />

                        {/* Subject */}
                        <input
                            name="subject"
                            type="text"
                            placeholder="Subject"
                            className="w-full p-3 rounded-md bg-transparent border border-gray-200  outline-none focus:border-[#f1f45d] focus:border"
                        />
                    </div>

                    {/* Message */}
                    <textarea
                        name="message"
                        rows="4"
                        placeholder="Your Message"
                        className="w-full p-3 rounded-md bg-transparent border border-gray-200 outline-none focus:border-[#f1f45d] focus:border"
                    ></textarea>

                    {/* Submit Button */}
                    <button

                        type="submit"
                        disabled={isSending}
                        className=" px-6 flex items-center justify-center gap-2 bg-[#f1f45d] text-black font-semibold py-3 rounded-md hover:bg-[#201c3f] hover:text-white transition-all duration-300"
                    >
                        {isSending ? "Sending" : "Submit Message"}
                        <MdArrowForward size={20} />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;