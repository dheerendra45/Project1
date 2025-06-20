import React, { useState } from "react";
import a1 from "../assets/start1.png";
import a2 from "../assets/start2.png";
import { Globe, Menu } from "lucide-react";

export default function Start() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative w-full bg-black text-white">
      {/* Sidebar for Mobile and md */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 z-50 transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 p-6 flex flex-col gap-6`}
      >
        <button
          className="self-end text-white text-xl"
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>
        <button className="hover:underline text-left">
          Employee Login &gt;
        </button>
        <button className="flex items-center gap-2 hover:underline text-left">
          <Globe size={18} /> Global (English) &gt;
        </button>
      </div>

      {/* Image Container */}
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Background Image */}
        <img src={a1} alt="Image 1" className="w-full h-auto" />

        {/* Center Overlay Image */}
        <img
          src={a2}
          alt="Image 2"
          className="absolute top-1/2 left-1/2 h-full w-auto transform -translate-x-1/2 -translate-y-1/2"
        />

        {/* Left Center Price Text (Responsive Size) */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 font-semibold text-white text-sm sm:text-lg md:text-xl lg:text-2xl">
          € 208.00 +2.72
        </div>

        {/* Top-right Options and Hamburger Toggle */}
        <div className="absolute top-0 right-0 z-50">
          {/* Desktop buttons only on lg and above */}
          <div className="hidden lg:flex gap-6 items-center text-sm p-4">
            <button className="hover:underline">Employee Login &gt;</button>
            <button className="flex items-center gap-1 hover:underline">
              <Globe size={16} className="text-white" />
              Global (English) &gt;
            </button>
          </div>

          {/* Hamburger Menu for md and below */}
          <div className="lg:hidden">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2"
              aria-label="Open sidebar menu"
            >
              <Menu size={24} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
