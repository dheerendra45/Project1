import React from 'react';
import a1 from "../assets/businessareasbg.png";
import a2 from "../assets/business1.png";
import a3 from "../assets/business2.png";
import a4 from "../assets/business3.png";
import a5 from "../assets/business4.png";

export default function BusinessAreas() {
  return (
    <div
      className="relative bg-cover bg-center text-white py-16 px-6"
      style={{
        backgroundImage: `url(${a1})`,
      }}
    >
      {/* Orange overlay */}
      <div className="absolute inset-0 bg-orange-600 opacity-60 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Lorem ipsum is simply dummy text of the printing
        </h1>

        <div className="flex flex-col md:flex-row gap-4 items-start">
          {/* Left 60% block */}
          <div className="w-full md:w-3/5 space-y-4">
            {/* First Row */}
            <div className="flex gap-2">
              {[a2, a3].map((img, idx) => (
                <div key={idx} className="relative w-1/2">
                  <img src={img} alt={`Business ${idx + 1}`} className="rounded-lg shadow-lg w-full object-cover" />
                  <div className="absolute bottom-2 left-2 text-xs font-medium">
                    Lorem Ipsum is simply dummy
                  </div>
                  <button className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-orange-500 text-white text-base flex items-center justify-center shadow-md hover:bg-orange-600 transition">
                    →
                  </button>
                </div>
              ))}
            </div>

            {/* Second Row */}
            <div>
              <div className="relative w-full">
                <img src={a4} alt="Business 3" className="rounded-lg shadow-lg w-full object-cover" />
                <div className="absolute bottom-2 left-2 text-xs font-medium">
                  Lorem Ipsum is simply dummy
                </div>
                <button className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-orange-500 text-white text-base flex items-center justify-center shadow-md hover:bg-orange-600 transition">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Right 40% block */}
          <div className="w-full md:w-2/5 flex justify-end">
            <div className="relative w-full md:w-[95%]">
              <img src={a5} alt="Business 4" className="rounded-lg shadow-lg w-full object-cover" />
              <div className="absolute bottom-2 left-2 text-xs font-medium">
                Lorem Ipsum is simply dummy
              </div>
              <button className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-orange-500 text-white text-base flex items-center justify-center shadow-md hover:bg-orange-600 transition">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
