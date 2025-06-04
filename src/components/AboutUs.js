import React, { useState } from 'react';
import a1 from '../assets/aboutUs.png';
import a2 from "../assets/1.png";
import a3 from "../assets/2.png";
import a4 from "../assets/3.png";
import a5 from "../assets/4.png";
import a6 from "../assets/5.png";

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const messages = [
    "Empowering industries with innovation.",
    "Trusted by thousands across the nation.",
    "Quality and strength you can count on.",
    "Engineering the future of steel.",
    "Sustainable solutions for tomorrow.",
    "Built on legacy, powered by vision.",
  ];

  const years = ["1848", "1902", "1964", "1998", "2008", "2023"];
  const galleryImages = [a2, a3, a4, a5, a6, a6];

  return (
    <div className="p-8">
      {/* ABOUT US Section */}
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Left Text Section */}
        <div className="lg:w-1/2 text-black space-y-4">
          <h1 className="text-orange-500 text-xl font-semibold">ABOUT US</h1>
          <h1 className="text-2xl font-bold leading-snug">
            A Steel Company With Integrated <br /> Operations.
          </h1>
          <p>
            Shyam Metalics is the 6th largest metal producing company based in India providing end-to-end solutions with integrated capabilities (Source: CRISIL Report) with a focus on long steel products and ferro alloys...
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
            Read More -&gt;
          </button>
        </div>

        {/* Image and Stats Section */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <img src={a1} alt="About Us" className="w-full max-w-md" />
          <div className="flex gap-6 mt-6">
            {[
              { title: '16,660', desc: 'Employee Strength' },
              { title: 'AA/Stable', desc: 'Credit Rating' },
              { title: '15.13 MTPA', desc: 'Production Capacity' },
            ].map((stat, i) => (
              <div key={i} className="border border-orange-500 p-4 rounded-lg shadow-lg bg-white w-40 text-center">
                <div className="flex items-center justify-center gap-2 text-xl font-bold text-black mb-1">
                  <span className="text-orange-500 text-2xl">↑</span>
                  <h1>{stat.title}</h1>
                </div>
                <p>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Gallery with Horizontal Line */}
      <div className="relative mt-20">
        {/* Orange Horizontal Line - passes vertically through selected image center */}
        <div
          className="absolute left-0 right-0 h-1 bg-orange-500 z-0"
          style={{ top: 'calc(50% + 12px)' }}
        />

        {/* Timeline Gallery */}
        <div className="relative z-10 flex justify-between items-center gap-4 max-w-6xl mx-auto">
          {galleryImages.map((img, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className="flex flex-col items-center gap-1 cursor-pointer"
              >
                {/* For active: message on top, year below it, both centered above the image */}
                {isActive && (
                  <>
                    <div className="mb-1 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded shadow whitespace-nowrap">
                      {messages[index]}
                    </div>
                    <div className="text-orange-600 font-semibold mb-2 whitespace-nowrap">
                      {years[index]}
                    </div>
                  </>
                )}

                {/* For inactive: only year visible above, with bottom margin */}
                {!isActive && (
                  <div className="text-orange-600 font-semibold mb-6 whitespace-nowrap">
                    {years[index]}
                  </div>
                )}

                {/* Image container with fixed size and shape */}
                <div
                  className={`w-16 h-16 rounded-full p-1 flex items-center justify-center transition-all duration-300
                    ${isActive ? 'bg-orange-500' : 'bg-gray-300'}`}
                >
                  <img
                    src={img}
                    alt={`img-${index}`}
                    className={`object-contain transition-transform duration-300
                      ${isActive ? 'translate-y-0' : '-translate-y-3'}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
