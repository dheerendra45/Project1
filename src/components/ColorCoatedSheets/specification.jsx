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
        <h1 className="text-4xl font-bold mb-6">Product Range</h1>

        {/* Product Descriptions */}
        <div className="space-y-6 text-base sm:text-lg">
          <div>
            <h3 className="text-xl font-semibold">Ultra-Premium Colour Coated Steel – S-E-L Tiger Royale</h3>
            <p>
              Tiger Royale presents a sophisticated finish along with remarkable durability, making it suitable for various construction applications. It offers superior weather resistance with lasting performance and is backed by a paint durability warranty. Designed for both residential and commercial use, it ensures dependability and a polished finish that endures over time.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Premium Colour Coated Steel – S-E-L Tiger Elite</h3>
            <p>
              Tiger Elite combines high-quality base steel with a robust coating for superior protection against elements. Ideal for residential and commercial applications, it offers reliability, exceptional durability, and a long-lasting refined finish.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Galvalume Coils – S-E-L Tiger Azure</h3>
            <p>
              Tiger Azure is a Galvalume coil with a subtle blue tint visible in certain lighting. It delivers excellent strength, corrosion resistance, and aesthetic appeal. Suitable for roofing, cladding, and demanding environments.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Galvalume Corrugated Sheets – S-E-L Tiger Alfa</h3>
            <p>
              Tiger Alfa is designed for industrial and construction uses with advanced coatings for all-weather protection. It provides excellent corrosion resistance and durability, ideal for roofing and cladding in harsh conditions.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>
              <strong>Strength –</strong> Backed by “S-E-L Tiger”, we deliver steel known for exceptional strength and endurance.
            </li>
            <li>
              <strong>Technique –</strong> Advanced galvanizing and coating ensures long-lasting, high-performance steel.
            </li>
            <li>
              <strong>Supply Chain –</strong> Strategically located plants ensure quick production and delivery.
            </li>
            <li>
              <strong>Established Leadership –</strong> With 15.13 MTPA capacity, we maintain strong profitability and industry leadership.
            </li>
          </ul>
        </div>

        {/* Capacity & Dimensions */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Capacity & Dimensions</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-left text-sm mb-4">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">Line</th>
                  <th className="border px-4 py-2">Phase 1</th>
                  <th className="border px-4 py-2">Phase 2</th>
                  <th className="border px-4 py-2">Total</th>
                  <th className="border px-4 py-2">Thickness (mm)</th>
                  <th className="border px-4 py-2">Width (mm)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">CRM</td>
                  <td className="border px-4 py-2">15000</td>
                  <td className="border px-4 py-2">30000</td>
                  <td className="border px-4 py-2">45000</td>
                  <td className="border px-4 py-2">0.1 – 2.5</td>
                  <td className="border px-4 py-2">Up to 1500</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">GL</td>
                  <td className="border px-4 py-2">12000</td>
                  <td className="border px-4 py-2">30000*</td>
                  <td className="border px-4 py-2">42000</td>
                  <td className="border px-4 py-2">0.14 – 2.5</td>
                  <td className="border px-4 py-2">Up to 1500</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">GP</td>
                  <td className="border px-4 py-2">–</td>
                  <td className="border px-4 py-2">30000*</td>
                  <td className="border px-4 py-2">30000</td>
                  <td className="border px-4 py-2">0.20 – 2.5</td>
                  <td className="border px-4 py-2">Up to 1500</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Colour Coating</td>
                  <td className="border px-4 py-2">15000</td>
                  <td className="border px-4 py-2">12000</td>
                  <td className="border px-4 py-2">27000</td>
                  <td className="border px-4 py-2">0.25 – 2</td>
                  <td className="border px-4 py-2">Up to 1500</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm italic">* Dual Pot Configuration</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
