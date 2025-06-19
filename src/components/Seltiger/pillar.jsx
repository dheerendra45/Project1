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
      className="text-center px-4 sm:px-8 py-20"
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
        SEL Tiger stands for Safety, Efficiency, and Longevity — the three pillars that define our mission to <br />
        revolutionize construction materials.
      </motion.h3>

      {/* Cards Row */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
        {[
          {
            title: "S - Safety",
            desc: "Uncompromising protection against earthquakes, fire, and corrosion.",
            topImg: a1,
            bottomImg: a2,
          },
          {
            title: "E - Efficiency",
            desc: "Smarter, faster, and cost-effective construction solutions.",
            topImg: a3,
            bottomImg: a4,
          },
          {
            title: "L - Longevity",
            desc: "Materials built to withstand generations of use.",
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
            className="bg-white border-t-4 border-orange-500 p-6 rounded-2xl w-full md:w-1/3 flex flex-col justify-between h-full"
          >
            {/* Top Section */}
            <div className="flex flex-col items-center flex-grow">
              <div className="w-20 h-20 mb-4">
                <img
                  src={pillar.topImg}
                  alt=""
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
    </div>
  );
}
