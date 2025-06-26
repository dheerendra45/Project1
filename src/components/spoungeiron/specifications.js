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
              <tr className="bg-orange-500 text-white">
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
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base mb-10">
          <li>Exceptional reducibility due to its high porosity (25–30%)</li>
          <li>Spherical shape and consistent size ensure excellent bed permeability</li>
          <li>High strength (150–200 kg) or more for acid pellets</li>
          <li>Heat consumption is significantly lower compared to sintering</li>
          <li>Elevated iron content and consistent chemical composition lead to reduced flux and fuel needs in the furnace</li>
          <li>Low FeO levels</li>
          <li>Simple to handle</li>
          <li>Outstanding carbon and FeO levels benefit carbon control in DRI-based steel mills</li>
          <li>Minimized inner lining wear due to lime-free pellet production</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
          <li>
            <span className="font-medium">High-Quality & Consistency:</span> Premium-grade sponge iron with 82–86% metallization and low impurity levels, ensuring efficient steel production.
          </li>
          <li>
            <span className="font-medium">Cost-Efficient Alternative:</span> Reduces reliance on costly scrap metal, delivering better yield and lower melting costs in EAF/IF (Electric Arc Furnace / Induction Furnace) steelmaking.
          </li>
          <li>
            <span className="font-medium">Sustainable & Reliable Supply:</span> Eco-friendly production with energy-efficient processes, backed by Shyam Metalics’ strong logistics network for timely deliveries.
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
