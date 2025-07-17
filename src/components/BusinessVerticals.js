import React from "react";
import { motion } from "framer-motion";

// Import your images
import energy from "../assets/energy.png";
import aluminium from "../assets/aluminium.png";
import ironSteel from "../assets/iron-steel.png";
const wordContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const wordItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

function BusinessVerticals() {
  const verticals = [
    {
      title: "Iron and Steel",
      description:
        "At the heart of our operations is a fully integrated iron and steel value chain, covering the production of TMT bars, structural steel, wire rods, billets, and sponge iron. We are also among the largest producers of Ferro alloys in India, supplying high-grade iron and steel materials and driving innovation in advanced metallurgy.",
      cta: "Read More",
      backgroundImage: ironSteel,
    },
    {
      title: "Aluminium",
      description:
        "Our aluminium business is driven by precision engineering, advanced automation, and adherence to stringent global standards. Backed with cutting-edge manufacturing facilities, we produce a broader range of premium-quality aluminium foils tailored for sectors such as pharmaceuticals, energy storage, and FMCG, meeting the global benchmarks for performance.",
      cta: "Read More",
      backgroundImage: aluminium,
    },
    {
      title: "Energy and Others",
      description:
        "Our integrated energy and allied businesses form the backbone of our operations, as nearly 83% of our total power requirement is met in-house through advanced captive power plants. In addition to energy, we are actively expanding into high-impact infrastructure segments, including railway wagon manufacturing, crash barriers, and other downstream innovations.",
      cta: "Read More",
      backgroundImage: energy,
    },
  ];

  return (
    <div className="relative py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      <div className="mx-5 md:ml-[10%] md:mr-[10%]">
        <motion.h2
          className="text-2xl md:text-4xl text-header-style  font-bold text-left mb-8 md:mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Business <span className="text-orange-500 ">Verticals</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {verticals.map((vertical, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 18,
                duration: 0.8,
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div
                className="relative rounded-xl overflow-hidden h-80 md:h-96 flex flex-col"
                style={{
                  backgroundImage: `url(${vertical.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70"></div>

                <div className="relative z-10 px-4 py-4 md:px-6 md:py-6 flex flex-col h-full text-white text-center items-center">
                  <div className="mb-2 md:mb-4">
                    <h3 className="text-xl md:text-2xl pt-[3%] font-bold">
                      {vertical.title}
                    </h3>
                  </div>

                  <motion.div
                    variants={wordContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-gray-100 text-paragraph-style mb-4 md:mb-6 text-xs md:text-sm leading-relaxed text-left flex flex-wrap gap-x-1"
                  >
                    {vertical.description.split(" ").map((word, idx) => (
                      <motion.span key={idx} variants={wordItem}>
                        {word}&nbsp;
                      </motion.span>
                    ))}
                  </motion.div>

                  <div className="mt-auto">
                    <button className="inline-flex items-center mb-[4%] px-3 py-1 md:px-4 md:py-2 bg-orange-500 text-white text-sm md:text-base font-medium rounded hover:bg-orange-600 transition-colors shadow-lg">
                      {vertical.cta}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 md:h-4 md:w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-8 md:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <button className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 border border-transparent text-sm md:text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors shadow-lg">
            Explore All →
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default BusinessVerticals;
