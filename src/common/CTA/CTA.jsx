"use client";
import React, { useState } from "react";
import { FaCheck, FaPaperPlane } from "react-icons/fa";

const CTA = () => {

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("LOADING");

    const res = await fetch("https://formspree.io/f/xkokwgjg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("SUCCESS");
      setEmail("");
    } else {
      setStatus("ERROR");
    }
  };

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
        <h2 className="text-3xl md:text-4xl font-bold text-[#201c3f] mb-6">
          Explore the art of portfolios
        </h2>

        {/* ✅ FORM WRAPPED (IMPORTANT) */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full sm:w-80 px-5 py-4 rounded-[4px] outline-none border border-[#201c3f]"
          />

          {/* hidden anti-spam */}
          <input type="text" name="_gotcha" className="hidden" />

          <button
            type="submit"
            className="px-6 py-4 w-full sm:w-fit rounded-[4px] uppercase bg-white text-[#201c3f] font-semibold hover:bg-[#201c3f] hover:text-white transition-all duration-300"
          >
            {status === "LOADING"
              ? "Subscribing..."
              : status === "SUCCESS"
                ? "Subscribed!"
                : "Subscribe Now"}
          </button>
        </form>

        {/* Status Messages */}
        {status === "SUCCESS" && (
          <p className="text-green-700 mt-4 flex items-center justify-center gap-2">
            <FaCheck className="text-lg" />
            <span>You are subscribed!</span>
          </p>
        )}

        {status === "ERROR" && (
          <p className="text-red-700 mt-4 flex items-center justify-center gap-2">
            <FaPaperPlane className="text-lg" />
            <span>Something went wrong</span>
          </p>
        )}

      </div>
    </section>
  );
};

export default CTA;