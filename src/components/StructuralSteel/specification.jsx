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
        className="max-w-5xl mx-auto space-y-10"
      >
        <h1 className="text-4xl font-bold">SPECIFICATIONS</h1>

        {/* Grades & Standards */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Grades & Standards</h3>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>IS 2062 (Fe 410, Fe 415, Fe 500) – includes recognized structural steel grades</li>
            <li>ASTM A36/A572 (Export-grade)</li>
            <li>EN 10025 (S235JR, S355JR)</li>
          </ul>
        </div>

        {/* Sizes & Forms */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Sizes & Forms</h3>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>Sections: Beams (I, H), channels, angles (including ms angle)</li>
            <li>Plates: 6mm–100mm thickness</li>
            <li>Custom Profiles: Manufactured as per project drawings</li>
          </ul>
        </div>

        {/* Key Parameters Table */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Key Parameters</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-left text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Property</th>
                  <th className="border border-gray-300 px-4 py-2">Range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Yield Strength</td>
                  <td className="border border-gray-300 px-4 py-2">250–500 MPa</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Tensile Strength</td>
                  <td className="border border-gray-300 px-4 py-2">410–650 MPa</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Elongation</td>
                  <td className="border border-gray-300 px-4 py-2">≥22%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Carbon Equivalent (CEV)</td>
                  <td className="border border-gray-300 px-4 py-2">≤0.45%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FEATURES */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">FEATURES</h3>
          <ul className="list-disc list-inside text-base space-y-2">
            <li><strong>Outstanding Strength-to-Weight Ratio</strong> — Designed to handle seismic and wind forces in tall buildings and extensive bridges.</li>
            <li><strong>Superb Weldability</strong> — Low Carbon Equivalent Value (CEV) minimizes the risk of cracking during the welding process.</li>
            <li><strong>Resistance to Corrosion</strong> — Optional weathering steel grades (IS 11587) available for extreme environmental conditions.</li>
            <li><strong>Precision in Dimensions</strong> — CNC-cut with a tight tolerance of ±1mm suitable for modular steel structure construction.</li>
            <li><strong>Eco-Friendly</strong> — Incorporates 30% recycled content and is manufactured using energy-efficient Electric Arc Furnace (EAF) methods.</li>
          </ul>
        </div>

        {/* WHY CHOOSE US */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">WHY CHOOSE US</h3>
          <ul className="list-disc list-inside text-base space-y-2">
            <li> <strong>End-to-End Solutions</strong> – From raw materials to fabricated sections</li>
            <li> <strong>R&D-Driven Grades</strong> – Custom chemical compositions tailored to specific project requirements.</li>
            <li> <strong>Pan-India Logistics</strong> – Reliable just-in-time delivery to construction sites nationwide</li>
            <li> <strong>Technical Support</strong> – Comprehensive welding/fabrication guidance</li>
            <li> <strong>Competitive Pricing & Quality</strong> – Competitive ms angle price and high-quality ms angle supply options</li>
          </ul>
          <p className="mt-4 text-base">
            Whether your project demands industrial structural steel or the best steel for construction, <strong>Shyam Metalics</strong> ensures long-term value and reliability.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
