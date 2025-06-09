import React from 'react';
import FactoryIcon from '../assets/factory-icon.png';
import RevenueIcon from '../assets/revenue-icon.png';
import TruckIcon from '../assets/truck-icon.png';
import IndiaMapIcon from '../assets/india-map-icon.png';
import HeroBackground from '../assets/hero-background.png';

export default function Hero() {
  return (
    <div
      className="relative bg-cover bg-center text-white min-h-[80vh] flex items-center px-6 md:px-16 py-16"
      style={{ backgroundImage: `url(${HeroBackground})` }}
    >
      {/* Semi-transparent black content area */}
      <div className="bg-black bg-opacity-40 w-full max-w-7xl mx-auto rounded-xl p-6 md:p-10 flex flex-col gap-6">
        
        {/* Heading and paragraph */}
        <div className="w-full md:w-[60%]">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            A Steel Company With Integrated <br /> Operations.
          </h1>
          <p className="text-lg mb-6">
            Shyam Metalics is the 6th largest metal producing company <br />
            based in India providing end-to-end solutions with
          </p>
        </div>

        {/* Button + Stats in same row */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Button */}
          <div className="w-full md:w-[40%]">
            <button className="bg-orange-500 text-white px-6 py-3 rounded border border-white hover:bg-orange-600 transition w-full md:w-auto">
              Explore More
            </button>
          </div>

          {/* Stats Box */}
          <div className="w-full md:w-[100%] bg-black bg-opacity-40 rounded-xl p-6 flex flex-wrap justify-between items-center gap-6">
            {/* Stat 1 */}
            <div className="flex items-center gap-3 w-[45%] md:w-auto">
              <img src={FactoryIcon} alt="Factory Icon" className="w-10 h-10" />
              <div>
                <h2 className="text-xl font-bold">15.15 MTPA</h2>
                <p className="text-sm">Installed Capacity</p>
              </div>
            </div>
            {/* Stat 2 */}
            <div className="flex items-center gap-3 w-[45%] md:w-auto">
              <img src={RevenueIcon} alt="Revenue Icon" className="w-10 h-10" />
              <div>
                <h2 className="text-xl font-bold">₹ 15,680 Cr</h2>
                <p className="text-sm">Revenue '24</p>
              </div>
            </div>
            {/* Stat 3 */}
            <div className="flex items-center gap-3 w-[45%] md:w-auto">
              <img src={TruckIcon} alt="Truck Icon" className="w-10 h-10" />
              <div>
                <h2 className="text-xl font-bold">2,500+</h2>
                <p className="text-sm">Delivered Nationwide</p>
              </div>
            </div>
            {/* Stat 4 */}
            <div className="flex items-center gap-3 w-[45%] md:w-auto">
              <img src={IndiaMapIcon} alt="India Map Icon" className="w-10 h-10" />
              <div>
                <h2 className="text-xl font-bold">8</h2>
                <p className="text-sm">Pan-India Presence</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
