import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Specification() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-16 px-6 bg-white text-black" ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeUp}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">Specification</h1>
        <h3 className="text-2xl font-semibold mb-4">Physical Parameters</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Parameter</th>
                <th className="border border-gray-300 px-4 py-2">Unit</th>
                <th className="border border-gray-300 px-4 py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">CCS Avg.</td>
                <td className="border border-gray-300 px-4 py-2">Kg/p</td>
                <td className="border border-gray-300 px-4 py-2">180 - 220</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Tumbler Index</td>
                <td className="border border-gray-300 px-4 py-2">%</td>
                <td className="border border-gray-300 px-4 py-2">94.00 - 96.00</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Abrasion Index</td>
                <td className="border border-gray-300 px-4 py-2">%</td>
                <td className="border border-gray-300 px-4 py-2">2.00 - 3.00</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Bulk Density</td>
                <td className="border border-gray-300 px-4 py-2">T/M<sup>3</sup></td>
                <td className="border border-gray-300 px-4 py-2">2.1 - 2.2</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold bg-gray-50" colSpan="3">
                  Metallurgical Properties
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Porosity</td>
                <td className="border border-gray-300 px-4 py-2">%</td>
                <td className="border border-gray-300 px-4 py-2">24.00 (min)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
