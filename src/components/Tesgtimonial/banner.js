// src/components/Banner.jsx
import React from 'react';
import banner from '../../assets/Testimonials/banner1.jpg';

const Banner = () => {
  return (
    <div
      className="relative h-[542.65px] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${banner})` }} // Fixed: wrap in url() and use template literal
    >
      {/* Grey overlay for better text readability */}
      <div className="absolute inset-0 bg-gray-500 bg-opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 text-white px-4 max-w-4xl mx-auto">
        <p className="uppercase text-sm tracking-widest mb-4 text-orange-400 font-semibold">
          Our Mission
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
          Custom solutions, unique
          <br />
          manufacturing process &
          <br />
          quality, crafted by <span className="text-orange-500 underline underline-offset-4 decoration-2">skill.</span>
        </h1>
        <div className="mt-8 text-sm text-gray-200">
          <p className="font-semibold text-base">Piter Bowman</p>
          <p className="text-gray-300">Creative Director</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;