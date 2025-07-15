import React, { useRef, useEffect } from "react";
import e1 from "../assets/e1.png";
import video from "../assets/sus_home.mp4";

const VideoHoverSection = ({ videoSrc, overlayImage }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Preload the video when component mounts
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
        threshold: 0.1, // More sensitive trigger
        rootMargin: "100px", // Load when 100px away from viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((e) => console.log("Playback failed:", e));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) videoRef.current.pause();
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] my-[2vh] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Video - Optimized */}
      <video
        ref={videoRef}
        src={video}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="auto" // Preload the video
      />

      {/* Semi-transparent Overlay Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Gradient overlay to enhance contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />

        {/* Primary overlay image with enhanced blending */}
        <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center z-20">
          <img
            src={e1}
            alt="Overlay"
            className="w-full h-full object-contain pointer-events-none opacity-80"
            style={{
              mixBlendMode: "lighten",
              filter: `
          brightness(1.4) 
          contrast(1.2) 
          saturate(1.1)
          drop-shadow(0 0 5px rgba(255,255,255,0.3))
        `,
            }}
          />
        </div>

        {/* Secondary subtle overlay for extra highlights */}
        <div
          className="absolute inset-0 z-30 pointer-events-none"
          style={{
            background: `
        radial-gradient(
          circle at 75% 30%,
          rgba(255,255,255,0.15) 0%,
          transparent 40%
        )
      `,
            mixBlendMode: "overlay",
          }}
        />
      </div>
    </div>
  );
};

export default VideoHoverSection;
