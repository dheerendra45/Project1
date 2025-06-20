import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import a1 from "../../assets/Seltiger/product1.png";

export default function Tmtbars() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    triggerOnce: false,
    amount: 0.2,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      ref={sectionRef}
      className="flex flex-col md:flex-row items-stretch bg-white"
    >
      {/* Left Half - Image with Centered Text */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-auto">
        <img
          src={a1}
          alt="TMT Bars"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold"
          >
            TMT BARS
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg mt-2"
          >
            Built for unbreakable strength
          </motion.p>
        </div>
      </div>

      {/* Right Half - Text and Table */}
      <div className="w-full md:w-1/2 p-8 text-left">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl font-bold text-black"
        >
          TMT BARS
        </motion.h1>

        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-orange-500 text-xl font-semibold mt-2"
        >
          STEEL THAT BENDS, BUT NEVER BREAKS
        </motion.h3>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-700 mt-4"
        >
          When the Bhuj earthquake struck, thousands of buildings collapsed—
          except the few reinforced with the right TMT bars. Inspired by such
          resilience, Tiger TMT Bars are engineered lifelines that ensure
          safety, even during nature’s worst.
        </motion.p>

        {/* Gray Horizontal Line */}
        <hr className="my-6 border-gray-300" />

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <motion.table
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="min-w-full text-left border-collapse"
          >
            <thead>
              <tr className="bg-gray-100 text-gray-800">
                <th className="px-4 py-3 border-b border-gray-300">FEATURE</th>
                <th className="px-4 py-3 border-b border-gray-300">HOW LONG CONVENTIONAL BARS</th>
                <th className="px-4 py-3 border-b border-gray-300">TIGER TMT BARS</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3">Earthquake Safety</td>
                <td className="px-4 py-3">Brittle, snaps under stress</td>
                <td className="px-4 py-3">Bends up to 18% without breaking</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3">Corrosion</td>
                <td className="px-4 py-3">Prone to rust in 5–7 years</td>
                <td className="px-4 py-3">Fe-550D grade resists over 50 years</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3">Thermal Safety</td>
                <td className="px-4 py-3">Weakens at 300°C</td>
                <td className="px-4 py-3">Withstands up to 600°C</td>
              </tr>
            </tbody>
          </motion.table>
        </div>
      </div>
    </div>
  );
}
