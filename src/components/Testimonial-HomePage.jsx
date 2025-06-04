import a1 from "./images-testimonial-homepage/1.png";
import a2 from "./images-testimonial-homepage/2.png";
import a3 from "./images-testimonial-homepage/3.png";
import a4 from "./images-testimonial-homepage/4.png";
import a5 from "./images-testimonial-homepage/5.png";
import a6 from "./images-testimonial-homepage/6.png";
import a7 from "./images-testimonial-homepage/7.png";
import a8 from "./images-testimonial-homepage/8.png";
import a9 from "./images-testimonial-homepage/9.png";
import a10 from "./images-testimonial-homepage/10.png";
import a11 from "./images-testimonial-homepage/11.png";
import a12 from "./images-testimonial-homepage/12.png";
import a13 from "./images-testimonial-homepage/13.png";

import React from 'react';

const TestimonialHomePage = () => {
  // Images arrays
  const leftMembers = [a1, a2, a3, a4, a5];
  const rightMembers = [a6, a7, a8, a9, a10];
  const topMembers = [a11, a12, a13];

  return (
    <div className="bg-gray-50 py-5 overflow-hidden relative" style={{ height: '735px', margin: '0 auto' }}>
      <div
        className="relative h-full"
        style={{ top: '20px', left: '20px', width: '1400px', height: '695px' }}
      >
        {/* Left Side Images */}
        <div
          className="absolute z-20"
          style={{
            width: '419px',
            height: '395px',
            top: '50px',
            left: '40px'
          }}
        >
          {[...leftMembers].map((src, i) => {
            const positions = [
              { top: 58, left: 0 },
              { top: 233, left: 0 },
              { top: 0, left: 143 },
              { top: 171, left: 143 },
              { top: 73, left: 287 },
            ];
            const pos = positions[i];
            return (
              <div
                key={i}
                className="absolute overflow-hidden shadow-lg"
                style={{
                  width: '132px',
                  height: '161px',
                  top: pos.top,
                  left: pos.left,
                  borderRadius: '10px',
                }}
              >
                <img
                  src={src}
                  alt={`Team member ${i + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
                />
              </div>
            );
          })}
        </div>

        {/* Center Images */}
        <div
          className="absolute z-20"
          style={{
            width: '418px',
            height: '204px',
            top: '50px',
            left: '480px'
          }}
        >
          {[...topMembers].map((src, i) => {
            const positions = [
              { top: 5, left: 0 },
              { top: 42, left: 142 },
              { top: 0, left: 285 },
            ];
            const pos = positions[i];
            return (
              <div
                key={i}
                className="absolute overflow-hidden shadow-lg"
                style={{
                  width: '132px',
                  height: '161px',
                  top: pos.top,
                  left: pos.left,
                  borderRadius: '10px',
                }}
              >
                <img
                  src={src}
                  alt={`Team member center ${i + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
                />
              </div>
            );
          })}
        </div>

        {/* Right Side Images */}
        <div
          className="absolute z-20"
          style={{
            width: '419px',
            height: '396px',
            top: '50px',
            left: '900px'
          }}
        >
          {[...rightMembers].map((src, i) => {
            const positions = [
              { top: 73, left: 0 },
              { top: 0, left: 144 },
              { top: 192, left: 144 },
              { top: 59, left: 287 },
              { top: 235, left: 287 },
            ];
            const pos = positions[i];
            return (
              <div
                key={i}
                className="absolute overflow-hidden shadow-lg"
                style={{
                  width: '132px',
                  height: '161px',
                  top: pos.top,
                  left: pos.left,
                  borderRadius: '10px',
                }}
              >
                <img
                  src={src}
                  alt={`Team member right ${i + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
                />
              </div>
            );
          })}
        </div>

        {/* Center Content */}
        <div className="flex items-end justify-center min-h-screen pb-[75px]">
          <div className="text-center space-y-8 relative z-10 max-w-4xl px-4">
            {/* Static Header */}
            <div className="space-y-4">
              <p className="text-orange-500 font-semibold tracking-wide text-sm lg:text-base">
                TESTIMONIALS
              </p>

              <h2 className="text-4xl lg:text-6xl xl:text-6xl font-bold text-gray-900">
                Voices of Trust in Shyam Metalics
              </h2>
            </div>

            {/* Static Description */}
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              "Shyam Metalics’ TMT bars have been the backbone of our infrastructure projects— their strength and reliability ensure long-lasting quality."
              <br />
              <span className="mt-4 block font-semibold">– Rajiv Mehta, Project Head, National Highway Authority</span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialHomePage;
