"use client";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function VideoSection() {
  const [play, setPlay] = useState(false);

  return (
    <section className="w-full h-screen relative overflow-hidden pt-10 sm:px-15 px-4">

      {/* If NOT playing → Show Thumbnail */}
      {!play ? (
        <div
          className="w-full h-full relative cursor-pointer group"
          onClick={() => setPlay(true)}
        >
          {/* Background Image */}
          <img
            src="/assets/about/about-video.jpg"
            alt="video thumbnail"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

            {/* Play Button */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-[#f1f45d] text-[#201c3f] rounded-full shadow-lg transition group-hover:scale-110">
              <FaPlay className="ml-1 text-lg sm:text-xl" />
            </div>

          </div>
        </div>
      ) : (
        /* Video Iframe */
        <iframe
          className="w-full h-full"
        src="https://www.youtube.com/embed/xuF6TlAQCO0?si=AmHdr-wyKDNSrTS7"  title="YouTube video player"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}
    </section>
  );
}