import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import a1 from '../../assets/Seltiger/pillar1.png';
import a2 from '../../assets/Seltiger/pillar2.png';
import a3 from '../../assets/Seltiger/pillar3.png';
import a4 from '../../assets/Seltiger/pillar4.png';
import a5 from '../../assets/Seltiger/pillar5.png';
import a6 from '../../assets/Seltiger/pillar6.png';

export default function Pillar() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    triggerOnce: false,
    amount: 0.2,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  return (
    <div
      ref={sectionRef}
      className="text-center px-4 sm:px-8 py-20 font-inter"
      style={{ backgroundColor: '#F5F5F5' }}
    >
      {/* Intro Text */}
      <motion.p
        className="text-orange-500 text-lg font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        Introduction
      </motion.p>

      <motion.h1
        className="text-black text-3xl sm:text-4xl font-bold my-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        What is SEL Tiger?
      </motion.h1>

      <motion.h3
        className="text-gray-700 text-lg max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        S-E-L Tiger is a symbol of Strength, Elasticity, and Longevity — three core pillars that define the quality and trust behind every product the brand offers. As the flagship steel brand from Shyam Metalics, S-E-L Tiger is engineered to build not just structures, but lasting legacies.
      </motion.h3>

      <motion.h1
        className="text-black text-3xl sm:text-4xl font-bold my-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        SEL Pillars
      </motion.h1>

      {/* Cards Row */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
        {[
          {
            title: "S - Strength",
            desc: "Designed to withstand the harshest elements—resistant to earthquakes, fireproof, and immune to corrosion for vital infrastructure.",
            topImg: a1,
            bottomImg: a2,
          },
          {
            title: "E - Efficiency",
            desc: "Strength withstands load, Flexibility meets structural integrity.",
            topImg: a3,
            bottomImg: a4,
          },
          {
            title: "L - Longevity",
            desc: "High-quality materials engineered to endure for decades, guaranteeing legacy-level strength for projects built to last.",
            topImg: a5,
            bottomImg: a6,
          },
        ].map((pillar, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white border-t-4 border-orange-500 p-6 rounded-2xl w-full md:w-1/3 flex flex-col justify-between shadow-lg"
          >
            {/* Top Section */}
            <div className="flex flex-col items-center flex-grow">
              <div className="w-20 h-20 mb-4">
                <img
                  src={pillar.topImg}
                  alt={pillar.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-xl font-bold mb-2">{pillar.title}</h2>
              <p className="text-gray-600 text-center">{pillar.desc}</p>
            </div>

            {/* Bottom Image */}
            <div className="w-full mt-6">
              <img
                src={pillar.bottomImg}
                alt=""
                className="w-full h-40 object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Statement */}
      <motion.div
        className="mt-16 text-left max-w-4xl mx-auto text-gray-700 text-lg space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p>
          At Tiger, we don’t just supply materials—we engineer future-ready structures that endure. From homes to high-rises, from sea bridges to industrial sheds—our products are trusted to perform under pressure, always.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>🔥 For the family who wants a safer home in earthquake zones.</li>
          <li>🌊 For the engineer who builds bridges that even oceans can’t corrode.</li>
          <li>☀️ For the factory owner who needs a heat-defying roof that lasts for decades.</li>
        </ul>
        <p className="font-semibold">This isn’t just construction. It’s a revolution in materials science. It’s the Tiger Promise.</p>
      </motion.div>
    </div>
  );
}
