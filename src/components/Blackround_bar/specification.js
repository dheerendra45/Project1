import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Specifications() {
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

        <h3 className="text-2xl font-semibold mb-4">Product Specifications</h3>
        <div className="overflow-x-auto mb-10">
          <table className="min-w-full border border-gray-300 text-left text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Parameter</th>
                <th className="border border-gray-300 px-4 py-2">Specification</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-4 py-2">Material Grade</td><td className="border px-4 py-2">IS 2062 (E250, E350), EN8, EN9, SAE1018, SAE1045</td></tr>
              <tr><td className="border px-4 py-2">Diameter Range</td><td className="border px-4 py-2">20 mm to 130 mm (custom sizes on request)</td></tr>
              <tr><td className="border px-4 py-2">Length</td><td className="border px-4 py-2">3 to 6 meters (standard); customizable</td></tr>
              <tr><td className="border px-4 py-2">Tensile Strength</td><td className="border px-4 py-2">410 – 600 MPa (grade dependent)</td></tr>
              <tr><td className="border px-4 py-2">Yield Strength</td><td className="border px-4 py-2">≥ 250 MPa</td></tr>
              <tr><td className="border px-4 py-2">Surface Finish</td><td className="border px-4 py-2">Hot rolled black / smooth finish</td></tr>
              <tr><td className="border px-4 py-2">Tolerance</td><td className="border px-4 py-2">As per IS/EN/ASTM standards</td></tr>
              <tr><td className="border px-4 py-2">Applications</td><td className="border px-4 py-2">Fabrication, shafts, axles, construction, forgings</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
        <ul className="list-none space-y-3 text-sm sm:text-base mb-10">
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✔</span>
            <span><strong>High Machinability</strong> – Uniform microstructure for easy turning/drilling</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✔</span>
            <span><strong>Cost-Effective</strong> – No coating, lower price than galvanized bars</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✔</span>
            <span><strong>Weldable & Forgeable</strong> – Suitable for fabrication, welding, and heat treatment</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✔</span>
            <span><strong>Traceability</strong> – Batch-wise Mill Test Certificates (MTC) for quality assurance</span>
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Why Choose Shyam Metalics?</h3>
        <ul className="list-none space-y-3 text-sm sm:text-base">
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✅</span>
            <span><strong>Wide Size Range</strong> – From small precision bars to heavy-duty diameters</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✅</span>
            <span><strong>Custom Heat Treatment</strong> – Annealed, normalized, or quenched & tempered</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✅</span>
            <span><strong>Pan-India Supply</strong> – Reliable delivery to OEMs and fabricators</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}