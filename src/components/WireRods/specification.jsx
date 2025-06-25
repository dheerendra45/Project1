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
        <h1 className="text-4xl font-bold">SPECIFICATION</h1>

        {/* Chemical & Mechanical Properties */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Chemical & Mechanical Properties</h3>

          {/* Chemical Composition Table */}
          <h4 className="text-lg font-semibold mb-2">Chemical Composition</h4>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">% C</th>
                  <th className="border px-4 py-2">% Mn</th>
                  <th className="border px-4 py-2">% S</th>
                  <th className="border px-4 py-2">% P</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">0.08 – 0.13</td>
                  <td className="border px-4 py-2">0.45 – 0.55</td>
                  <td className="border px-4 py-2">0.050 Max</td>
                  <td className="border px-4 py-2">0.050 Max</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mechanical Properties Table */}
          <h4 className="text-lg font-semibold mb-2">Mechanical Properties</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">UTS (MPa)</th>
                  <th className="border px-4 py-2">% Elongation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">480 ± 20</td>
                  <td className="border px-4 py-2">30 Min</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">FEATURES</h3>
          <ul className="list-disc list-inside text-base space-y-3">
            <li>
              <strong>Premium Material & Grades</strong><br />
               Grades Available: Low Carbon (IS 5524 / ASTM A510), High Carbon (IS 1786 / ASTM A510), Alloy Steel (Customizable)<br />
               Sizes: 5.5mm – 16mm (Coiled & Straight)
            </li>
            <li>
              <strong>Superior Mechanical Properties</strong><br />
              High Tensile Strength: 350–1200 MPa (varies by grade)<br />
              Excellent Ductility and Uniform Elongation
            </li>
            <li>
              <strong>Precision Manufacturing</strong><br />
              🔹 Continuous Casting & Rolling<br />
              🔹 Controlled Cooling<br />
              🔹 Smooth Surface Finish
            </li>
            <li>
              <strong>Corrosion Resistance</strong><br />
              Low Sulfur & Phosphorus (&lt;0.05%)<br />
              Optional Galvanization
            </li>
            <li>
              <strong>Wide Industrial Applications</strong><br />
              Construction (nails, mesh), Automotive (springs, fasteners), General Engineering (welding rods, fencing)
            </li>
            <li>
              <strong>Certifications & Quality Assurance</strong><br />
              🏅 BIS Certified (IS 5524, IS 1786)<br />
              🏅 ISO 9001:2015<br />
              🏅 Mill Test Certificates (MTC) per batch
            </li>
            <li>
              <strong>Sustainable & Reliable Supply</strong><br />
              ♻️ Eco-friendly processes<br />
              🚛 Pan-India just-in-time delivery
            </li>
          </ul>
        </div>

        {/* Why Choose Shyam Metalics Wire Rods */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Why Choose Shyam Metalics Wire Rods?</h3>
          <ul className="list-none text-base space-y-2">
            <li>✔ <strong>Consistent Quality</strong> – Batch-wise testing for reliability</li>
            <li>✔ <strong>Customizable Grades</strong> – Tailored for specific industry needs</li>
            <li>✔ <strong>Competitive Pricing</strong> – Best-in-class wire rod price in India</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
