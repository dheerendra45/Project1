import React from 'react';
import { Factory, Zap, Recycle, Users } from 'lucide-react';

import a1 from "./images/1.png";
import a2 from "./images/2.png";

const AboutUsSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT GRID */}
        <div className="relative grid grid-cols-2 grid-rows-2 gap-2 bg-white p-2 rounded shadow-lg">
          {/* Image a1 (Left side, spans two rows) */}
          <div className="row-span-2 relative">
            <img
              src={a1}
              alt="Main"
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Orange Stat Box (Top-right) */}
          <div className="bg-orange-500 text-white p-6 rounded flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-1">377 MW</h3>
            <h4 className="text-lg font-semibold mb-2">Captive Power</h4>
            <p className="text-sm">
              In-house power plants including solar capacity ensuring uninterrupted operations and sustainable manufacturing.
            </p>
          </div>

          {/* Image a2 (Bottom-right) */}
          <div className="relative">
            <img
              src={a2}
              alt="Overlay"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-orange-500 font-semibold mb-2">About Shyam Metalics</p>
          <h2 className="text-3xl font-bold mb-8">WORLD-CLASS STEEL SOLUTIONS</h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Factory className="text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">End-to-End Integrated Manufacturing</h4>
                <p className="text-gray-600">
                  Complete in-house control from mines to finished products - Sponge Iron, Billets, TMT & Wire Rods with zero waste through 92% by-product recycling.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">AI & Innovation-Driven Processes</h4>
                <p className="text-gray-600">
                  Predictive maintenance achieving 99% uptime, green steel technology trials, and tailored alloys for construction, automotive, and defense sectors.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Recycle className="text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Sustainable & Ethical Operations</h4>
                <p className="text-gray-600">
                  4MW solar capacity, 2.5M trees planted, 70% local hiring, and ISO-certified quality with real-time ESG reporting driving India's infrastructure growth.
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mt-8 mb-8">
            Our customer-centric approach includes just-in-time delivery through pan-India logistics, on-site metallurgical support, and comprehensive after-sales digital tracking for complete product lifecycle management.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold w-full">
            View Our Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;