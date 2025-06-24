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
        <h3 className="text-2xl font-semibold mb-4">Chemical Composition</h3>

        <div className="overflow-x-auto mb-10">
          <table className="min-w-full border border-gray-300 text-left text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Constituent</th>
                <th className="border border-gray-300 px-4 py-2">Grade 1</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">% Total Iron</td>
                <td className="border border-gray-300 px-4 py-2">87 ± 1</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">% Metallic Iron</td>
                <td className="border border-gray-300 px-4 py-2">78, min</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">% Metallization</td>
                <td className="border border-gray-300 px-4 py-2">88, min</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">% C</td>
                <td className="border border-gray-300 px-4 py-2">0.08 – 0.10</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">% S, max</td>
                <td className="border border-gray-300 px-4 py-2">0.03</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">% P, max</td>
                <td className="border border-gray-300 px-4 py-2">0.07</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">% Gangue, max</td>
                <td className="border border-gray-300 px-4 py-2">8</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold mb-4">Features</h3>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
          <li>Very good reducibility because of high porosity (25–30%)</li>
          <li>Spherical shape and uniform size give very good bed permeability</li>
          <li>High strength (150–200 kg) or more for acid pellets</li>
          <li>Heat consumption is much less than that of sintering</li>
          <li>High iron content and uniform chemical composition, hence lower flux and fuel requirement in the furnace</li>
          <li>Low FeO</li>
          <li>Easy handling</li>
          <li>Its Carbon & FeO is very excellent. Steel mills who are using DRI for reducing the carbon will benefit from our pellet sponge's low FeO, which helps in better carbon control</li>
          <li>Wearing of inner lining will not take place, as in the pellet making we are not using lime</li>
        </ul>
      </motion.div>
    </div>
  );
}
