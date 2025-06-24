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
        <h1 className="text-4xl font-bold">Product Specifications</h1>

        {/* Available Grades */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">1. Available Grades</h3>
          <ul className="list-disc list-inside text-base space-y-2">
            <li><strong>Austenitic Grades</strong></li>
            <ul className="ml-6 space-y-2">
              <li><strong>304/304L</strong> – Exceptional corrosion resistance, suitable for food manufacturing and architectural uses.</li>
              <li><strong>316/316L</strong> – Provides excellent resistance to pitting, making it suitable for marine and chemical environments.</li>
            </ul>
            <li><strong>Ferritic Grades</strong></li>
            <ul className="ml-6 space-y-2">
              <li><strong>430</strong> – Heat and corrosion resistant, ideal for automotive applications and household appliances.</li>
            </ul>
            <li><strong>Martensitic Grades</strong></li>
            <ul className="ml-6 space-y-2">
              <li><strong>410/420</strong> – High strength and hardness, commonly used in cutlery and tools.</li>
            </ul>
          </ul>
        </div>

        {/* Dimensions */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">2. Dimensions</h3>
          <ul className="list-disc list-inside text-base space-y-2">
            <li><strong>Size Range:</strong> 100x100mm to 200x200mm</li>
            <li><strong>Length:</strong> 3m to 6m (custom lengths available)</li>
          </ul>
        </div>

        {/* Chemical Composition */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">3. Chemical Composition</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-left text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">Grade</th>
                  <th className="border px-4 py-2">Cr (Min)</th>
                  <th className="border px-4 py-2">Ni</th>
                  <th className="border px-4 py-2">C (Max)</th>
                  <th className="border px-4 py-2">Mo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">304</td>
                  <td className="border px-4 py-2">18-20</td>
                  <td className="border px-4 py-2">8-11</td>
                  <td className="border px-4 py-2">0.08</td>
                  <td className="border px-4 py-2">-</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">316</td>
                  <td className="border px-4 py-2">16-18</td>
                  <td className="border px-4 py-2">10-14</td>
                  <td className="border px-4 py-2">0.08</td>
                  <td className="border px-4 py-2">2-3</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">430</td>
                  <td className="border px-4 py-2">16-18</td>
                  <td className="border px-4 py-2">-</td>
                  <td className="border px-4 py-2">0.12</td>
                  <td className="border px-4 py-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mechanical Properties */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">4. Mechanical Properties</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-left text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">Grade</th>
                  <th className="border px-4 py-2">YS (MPa)</th>
                  <th className="border px-4 py-2">TS (MPa)</th>
                  <th className="border px-4 py-2">Elongation (%)</th>
                  <th className="border px-4 py-2">Hardness (HB)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">304</td>
                  <td className="border px-4 py-2">≥205</td>
                  <td className="border px-4 py-2">515–750</td>
                  <td className="border px-4 py-2">≥40</td>
                  <td className="border px-4 py-2">≤200</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">316</td>
                  <td className="border px-4 py-2">≥205</td>
                  <td className="border px-4 py-2">515–690</td>
                  <td className="border px-4 py-2">≥40</td>
                  <td className="border px-4 py-2">≤217</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">430</td>
                  <td className="border px-4 py-2">≥310</td>
                  <td className="border px-4 py-2">450–600</td>
                  <td className="border px-4 py-2">≥22</td>
                  <td className="border px-4 py-2">≤183</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Why Choose Shyam Metalics?</h3>
          <ul className="list-disc list-inside text-base space-y-2">
            <li><strong>End-to-End Production</strong> – From melting to billet casting under one roof</li>
            <li><strong>R&D-Backed Alloys</strong> – Custom grades tailored for niche industrial needs</li>
            <li><strong>Reliable Supply Chain</strong> – Pan-India and export logistics support</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
