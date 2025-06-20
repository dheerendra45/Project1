import { useState, useEffect, useRef } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";

// Add your original imports back:
import a1 from "../../assets/location/logo.png";
import a2 from "../../assets/location/homelocation.png";

export default function Hero() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white relative"
      style={{
        backgroundImage: `url(${a2})`,
        backgroundPosition: "center calc(50% - 50px)",
      }}
    >
      {/* Hero Text Content */}
      <div className="px-9 pt-20 max-w-2xl w-full ml-auto lg:ml-12 lg:w-1/2 text-left">
        <h1 className="text-4xl sm:text-6xl font-bold text-white leading-snug">
          Locations
        </h1>
        <br />
        <h3 className="text-white">
          Fusce et diam nisl. Curabitur est orci, tempus nec iaculis non,
          hendrerit eget est. Fusce nisi lorem, scelerisque vitae tempus eget,
          consequat ultracies nulls
        </h3>
        <hr
          className="my-6 h-1 border-0 rounded"
          style={{ background: "linear-gradient(to right, orange, white)" }}
        />
        <a href="#" className="text-base sm:text-lg text-white">
          Home &gt; Locations
        </a>
      </div>
    </div>
  );
}
