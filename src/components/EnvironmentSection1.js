import React, { useRef, useEffect, useState } from "react";
import video from "../assets/sus_home.mp4";
import cloud from "../assets/env/3.png";
import green from "../assets/env/1.png";
import earth from "../assets/env/2.png";

const VideoHoverSection = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [actualImpact, setActualImpact] = useState(0);
  const [offsets, setOffsets] = useState(0);
  const [netImpact, setNetImpact] = useState(0);

  // Counter animation function
  const animateCounter = (target, setter, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.ceil(start));
      }
    }, 16);
  };

  // Start and repeat counters every 8 seconds
  useEffect(() => {
    const targetValues = {
      actual: 314519,
      offsets: 219482,
      net: 95037
    };

    const animateAll = () => {
      animateCounter(targetValues.actual, setActualImpact);
      animateCounter(targetValues.offsets, setOffsets);
      animateCounter(targetValues.net, setNetImpact);
    };

    // Initial animation
    animateAll();

    // Repeat every 8 seconds
    const interval = setInterval(animateAll, 8000);

    return () => clearInterval(interval);
  }, []);

  // Rest of your existing useEffect for video handling
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
    <div>
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-8 ml-[10%]">
        Green <span className="text-orange-500">Vision</span>
      </h2>

      <div
        ref={containerRef}
        className="relative w-full h-[640px] my-[4vh] overflow-hidden group flex items-center justify-center"
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
            <img src={cloud} alt="Cloud" className="w-[100px] h-18" />
            <p className="text-lg font-medium text-white mt-4">
              2021 ACTUAL IMPACT
            </p>
            <p className="text-5xl font-bold text-white my-4">
              {actualImpact.toLocaleString()}
            </p>
            <p className="text-lg text-white/80">MtCO₂e</p>
          </div>

          {/* Divider */}
          <div className="h-24 w-px bg-white/20"></div>

          {/* OFFSETS */}
          <div className="text-center min-w-[200px] flex flex-col items-center py-[50px]">
            <img src={green} alt="Green" className="w-[100px] h-18" />
            <p className="text-lg font-medium text-white mt-4">2021 OFFSETS</p>
            <p className="text-5xl font-bold text-white my-4">
              {offsets.toLocaleString()}
            </p>
            <p className="text-lg text-white/80">MtCO₂e</p>
          </div>

          {/* Divider */}
          <div className="h-24 w-px bg-white/20"></div>

          {/* NET IMPACT */}
          <div className="text-center min-w-[200px] flex flex-col items-center py-[50px]">
            <img src={earth} alt="Earth" className="w-[100px] h-18" />
            <p className="text-lg font-medium text-white mt-4">
              2021 NET IMPACT
            </p>
            <p className="text-5xl font-bold text-white my-4">
              {netImpact.toLocaleString()}
            </p>
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
    </div>
  );
};

export default VideoHoverSection;