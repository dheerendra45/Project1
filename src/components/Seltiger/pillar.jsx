import React from "react";
import { motion } from "framer-motion";

// Replace these imports with your real images
import i1 from "../../assets/Seltiger/i1.gif";
import i3 from "../../assets/Seltiger/i3.gif";
import rightimage from "../../assets/Seltiger/rimage.png";

export default function Products() {
  return (
    <motion.div className="bg-gray-100 text-black px-6 py-12 lg:px-20 font-sans">
      {/* Introduction Section */}
      <div className="mb-12">
        <p className="text-black text-5xl font-bold mb-4">Introduction</p>
        <h1 className="text-4xl text-orange-500 lg:text-lg font-bold mb-8">
          What is <span className="text-orange-500">SEL</span> Tiger?
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <p className="text-lg mb-8 leading-relaxed">
              <strong>S-E-L Tiger</strong> is a symbol of Strength, Elasticity,
              and Longevity. Three core pillars that define the quality and
              trust behind every product the brand offers. As the flagship steel
              brand from Shyam Metalics, S-E-L Tiger is engineered to build not
              just structures, but lasting legacies.
            </p>

            {/* Features List */}
            <div className="space-y-8">
              {/* Strength */}
              <div className="flex items-start gap-4">
                <img
                  src={i1}
                  alt="strength-icon"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">
                    S – Strength
                  </h3>
                  <p className="text-gray-700">
                    Designed to withstand the harshest elements—resistant to
                    earthquakes, fireproof, and immune to corrosion for vital
                    infrastructure.
                  </p>
                </div>
              </div>

              {/* Elasticity */}
              <div className="flex items-start gap-4">
                <img
                  src={i3}
                  alt="elasticity-icon"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">
                    E – Elasticity
                  </h3>
                  <p className="text-gray-700">
                    Strength withstands load, Flexibility meets structural
                    integrity.
                  </p>
                </div>
              </div>

              {/* Longevity */}
              <div className="flex items-start gap-4">
                <img
                  src={i1}
                  alt="longevity-icon"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">
                    L – Longevity
                  </h3>
                  <p className="text-gray-700">
                    High-quality materials engineered to endure for decades,
                    guaranteeing legacy-level strength for projects built to
                    last.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Construction Site Image */}
          <div className="flex-1 max-w-2xl">
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <img
                src={rightimage}
                alt="Construction site"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* s2, s3, s4 in same row */}

      {/* Section Title */}

      {/* Final Headings */}
    </motion.div>
  );
}
