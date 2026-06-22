"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  // Show button after scroll
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      className={`fixed bottom-6 cursor-pointer right-6 z-50 p-4 rounded-full bg-[#f1f45d] text-[#201c3f] shadow-lg transition-all duration-300 
        ${show ? "opacity-100 visible" : "opacity-0 invisible"}
        hover:scale-110`}
    >
      <FaArrowUp />
    </button>
  );
}