import React from 'react';
import p1 from '../../assets/knowledgehub/p1.jpg';

const SheetMetalFabrication = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Part 1 - The basics section */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-24 gap-12">
          {/* Left side text */}
          <div className="lg:w-[532px] space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Part 1</p>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">The basics</h1>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-base">
              Get an introduction to sheet metal fabrication. This section explains the 
              sheet metal fabrication process, how precision sheet metal fabrication 
              differs, the main advantages and disadvantages, as well as its common 
              applications.
            </p>
          </div>
          
          {/* Right side image */}
          <div className="lg:w-[532px] h-[352px] bg-gray-200 rounded-sm overflow-hidden shadow-lg">
            <img 
              src={p1} 
              alt="Sheet Metal Fabrication" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* How does sheet metal fabrication work section */}
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center">
            How does sheet metal fabrication work?
          </h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              There are several different ways to shape sheet metal, but they all boil down to two broad 
              categories: <span className="font-semibold">sheet metal can either be cut or formed</span>.
            </p>
            
            <p>
              As there are many different ways of cutting and forming sheet metal, many specific tooling 
              types are needed which can drive up costs. This is why developing a good understanding of 
              the various sheet metal fabrication processes available is essential to producing the most 
              efficient design for a particular application is essential.
            </p>
            
            <p>
              The most basic form of sheet metal fabrication begins with a flat sheet of metal and a 
              blueprint (usually a DXF or CAD file). This blueprint will serve as the instructions on how to 
              cut, form, and finish the base material.
            </p>
            
            <p>
              It could be as simple as a single bend to turn it into angle iron, or laser cut and bent at the 
              edges to make computer enclosure panels. When these processes are combined, the material 
              is first cut and later formed, followed by finishing and joining.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SheetMetalFabrication;