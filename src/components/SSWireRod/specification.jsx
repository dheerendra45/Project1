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
        <h1 className="text-4xl font-bold mb-6">Specifications</h1>

        {/* 1. Standard Grades */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">1. Standard Grades</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">Grade</th>
                  <th className="border px-4 py-2">Type</th>
                  <th className="border px-4 py-2">Tensile Strength (MPa)</th>
                  <th className="border px-4 py-2">Elongation (%)</th>
                  <th className="border px-4 py-2">Hardness (HV)</th>
                  <th className="border px-4 py-2">Key Features</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["304", "Austenitic", "650-850", "≥40", "≤200", "Excellent corrosion resistance, food-safe"],
                  ["304L", "Austenitic", "550-750", "≥45", "≤180", "Low carbon, weldable"],
                  ["316", "Austenitic", "600-800", "≥40", "≤217", "Mo-added, pitting resistance"],
                  ["316L", "Austenitic", "500-700", "≥45", "≤200", "Marine/chemical applications"],
                  ["430", "Ferritic", "450-600", "≥22", "≤183", "Magnetic, heat-resistant"],
                  ["410", "Martensitic", "700-1000", "≥15", "200–300", "Heat-treatable, high hardness"],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className="border px-4 py-2">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. Dimensional Specifications */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">2. Dimensional Specifications</h3>
          <ul className="list-disc list-inside text-base space-y-2">
            <li><strong>Diameter Range:</strong> 0.1mm – 10mm (custom sizes available up to 16mm)</li>
            <li><strong>Tolerance:</strong> ±0.02mm (precision) to ±0.05mm (standard)</li>
            <li><strong>Form:</strong> Coiled (50kg–500kg) or Straight (1m–6m)</li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Features</h3>
          <ul className="list-disc list-inside text-base space-y-2">
            <li><strong>High Corrosion Resistance</strong> – Ideal for extreme environments</li>
            <li><strong>Superior Strength & Flexibility</strong> – Ensures long-lasting performance</li>
            <li><strong>Precise Manufacturing</strong> – Delivers consistent quality for diverse applications</li>
            <li><strong>Custom Specifications Available</strong> – Tailored to industry needs</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Why Choose Shyam Metalics?</h3>
          <ul className="list-disc list-inside text-base space-y-2">
            <li><strong>Wide Size Range</strong> – From small precision bars to heavy-duty diameters</li>
            <li><strong>Custom Heat Treatment</strong> – Options include annealing, normalization, and quenching & tempering</li>
            <li><strong>Pan-India Supply</strong> – Reliable delivery to OEMs and fabricators across the country</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
