import React, { useRef, useEffect } from "react";
import video from "../assets/sus_home.mp4";
import { Factory, Leaf, TrendingUp } from "lucide-react";

const VideoHoverSection = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.preload = "auto";
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current
              .play()
              .catch((e) => console.log("Playback failed:", e));
          } else {
            videoRef.current.pause();
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
      }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (videoRef.current)
      videoRef.current.play().catch((e) => console.log("Playback failed:", e));
  };

  const handleMouseLeave = () => {
    if (videoRef.current) videoRef.current.pause();
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[640px] my-[2vh] overflow-hidden group flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src={video}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Horizontal Glassy Statistics Panel - Increased transparency */}
      <div className="relative z-10 p-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex gap-12 items-center justify-between transform transition-all duration-300 group-hover:scale-[1.02]">
        {/* ACTUAL IMPACT */}
        <div className="text-center min-w-[200px] flex flex-col items-center py-[50px]">
          <Factory className="w-8 h-8 text-white" />
          <p className="text-lg font-medium text-white mt-4">
            2021 ACTUAL IMPACT
          </p>
          <p className="text-5xl font-bold text-white my-4">314,519</p>
          <p className="text-lg text-white/80">MtCO₂e</p>
        </div>

        {/* Divider */}
        <div className="h-24 w-px bg-white/20"></div>

        {/* OFFSETS */}
        <div className="text-center min-w-[200px] flex flex-col items-center py-[50px]">
          <Leaf className="w-8 h-8 text-white" />
          <p className="text-lg font-medium text-white mt-4">2021 OFFSETS</p>
          <p className="text-5xl font-bold text-white my-4">219,482</p>
          <p className="text-lg text-white/80">MtCO₂e</p>
        </div>

        {/* Divider */}
        <div className="h-24 w-px bg-white/20"></div>

        {/* NET IMPACT */}
        <div className="text-center min-w-[200px] flex flex-col items-center py-[50px]">
          <TrendingUp className="w-8 h-8 text-white" />
          <p className="text-lg font-medium text-white mt-4">2021 NET IMPACT</p>
          <p className="text-5xl font-bold text-white my-4">95,037</p>
          <p className="text-lg text-white/80">MtCO₂e</p>
        </div>

        {/* Glass reflection effect - made more subtle */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 transform rotate-45 translate-x-16 -translate-y-16"></div>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none" />
    </div>
  );
};

export default VideoHoverSection;
