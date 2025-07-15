import React from "react";
import { motion } from "framer-motion";

// Import your images here
import energy from "../assets/energy.png";
import aluminium from "../assets/aluminium.png";
import ironSteel from "../assets/iron-steel.png";

function BusinessVerticals() {
  const verticals = [
    {
      title: "Iron and Steel",
      description: "At the heart of our operations is a fully integrated iron and steel value chain, covering the production of TMT bars, structural steel, wire rods, billets, and sponge iron. We are also among the largest producers of Ferro alloys in India, supplying high-grade iron and steel materials and driving innovation in advanced metallurgy.",
      cta: "Read More",
      backgroundImage: ironSteel
    },
    {
      title: "Aluminium",
      description: "Our aluminium business is driven by precision engineering, advanced automation, and adherence to stringent global standards. Backed with cutting-edge manufacturing facilities, we produce a broader range of premium-quality aluminium foils tailored for sectors such as pharmaceuticals, energy storage, and FMCG, meeting the global benchmarks for performance.",
      cta: "Read More",
      backgroundImage: aluminium
    },
    {
      title: "Energy and Others",
      description: "Our integrated energy and allied businesses form the backbone of our operations, as nearly 83% of our total power requirement is met in-house through advanced captive power plants. In addition to energy, we are actively expanding into high-impact infrastructure segments, including railway wagon manufacturing, crash barriers, and other downstream innovations.",
      cta: "Read More",
      backgroundImage: energy
    }
  ];

  return (
    <div className="relative py-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Business Vertical heading with 10% left margin */}
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-left mb-12 text-gray-800 ml-[10%]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Business <span className="text-orange-500">Verticals</span>
      </motion.h2>
      
      {/* Grid container with 10% left and right margins */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-[10%]">
        {verticals.map((vertical, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Card with fixed dimensions and centered text */}
            <div 
              className="relative rounded-xl overflow-hidden w-full h-[410px] flex flex-col"
              style={{
                backgroundImage: `url(${vertical.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                imageRendering: 'crisp-edges'
              }}
            >
              {/* Lighter overlay for better image visibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70"></div>
              
              {/* Content with centered text */}
              <div className="relative z-10 px-6 py-6 flex flex-col h-full text-white text-center items-center">
                {/* Title */}
                <div className="mb-6 mt-3">
                  <h3 className="text-2xl font-bold">
                    {vertical.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-100 mb-6 text-sm md:text-base leading-relaxed">
                  {vertical.description}
                </p>
                
                {/* Button at bottom */}
                <div className="mt-auto">
                  <button className="inline-flex items-center px-4 py-2 bg-orange-500 text-white font-medium rounded hover:bg-orange-600 transition-colors shadow-lg">
                    {vertical.cta}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Centered Explore All button */}
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors shadow-lg">
          Explore All →
        </button>
      </motion.div>
    </div>
  );
}

export default BusinessVerticals;