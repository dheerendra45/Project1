import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import a1 from "../../assets/p1/logo.png";
import a2 from "../../assets/p1/sustainability.png";
import { ChevronDown, Search, Menu, X } from "lucide-react";

export default function Hero() {
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white relative"
      style={{
        backgroundImage: `url(${a2})`,
        backgroundPosition: "center calc(50% - 50px)",
      }}
    >
      {/* Top Navbar */}

      <div className="px-9 pt-[275px] max-w-6xl w-full ml-auto lg:ml-12 text-left">
        <h1 className="text-[62px] leading-[62px] font-space-grotesk font-bold mb-6">
          Building a Sustainable
          <br />
          Future – Responsibly
        </h1>
        <p>
          Committed to Environmental Stewardship, Social Impact, and Ethical
          Governance
        </p>
        <hr
          className="my-6 h-1 border-0 rounded"
          style={{ background: "linear-gradient(to right, orange, white)" }}
        />
        <a href="#" className="text-base sm:text-lg text-white">
          Home &gt; Sustainability
        </a>
      </div>
    </div>
  );
}
