import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Specification() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeTab, setActiveTab] = useState("specifications");

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

  const tabs = [
    { id: "specifications", label: "Specifications" },
    { id: "aisi-grades", label: "AISI Grades" },
    { id: "din-grades", label: "DIN Grades" },
    { id: "features", label: "Features & Details" }
  ];

  return (
    <div className="py-16 px-6 bg-white text-black" ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeUp}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">Stainless Steel Precision Bars</h1>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 mx-2 mb-2 font-semibold transition-colors duration-300 border-b-2 ${
                activeTab === tab.id
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-600 border-transparent hover:text-blue-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {activeTab === "specifications" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
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
                    <tr><td className="border px-4 py-2">Diameter Range</td><td className="border px-4 py-2">5 mm to 150 mm</td></tr>
                    <tr><td className="border px-4 py-2">Length</td><td className="border px-4 py-2">3 to 6 meters (custom cut-to-length available)</td></tr>
                    <tr><td className="border px-4 py-2">Tolerance</td><td className="border px-4 py-2">h9/h11 (as per ISO 286 standards)</td></tr>
                    <tr><td className="border px-4 py-2">Tensile Strength</td><td className="border px-4 py-2">410 – 600 MPa (grade dependent)</td></tr>
                    <tr><td className="border px-4 py-2">Yield Strength</td><td className="border px-4 py-2">≥ 250 MPa</td></tr>
                    <tr><td className="border px-4 py-2">Surface Finish</td><td className="border px-4 py-2">Hot rolled black / smooth finish</td></tr>
                    <tr><td className="border px-4 py-2">Applications</td><td className="border px-4 py-2">Fabrication, shafts, axles, construction, forgings</td></tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {activeTab === "aisi-grades" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">AISI Designation Grades</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3 text-blue-600">200 SERIES</h4>
                  <ul className="space-y-1 text-sm">
                    <li>AISI 201</li>
                    <li>AISI 202</li>
                    <li>AISI 204 Cu</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3 text-blue-600">300 SERIES</h4>
                  <ul className="space-y-1 text-sm">
                    <li>AISI 301, AISI 304 L</li>
                    <li>AISI 303, 316</li>
                    <li>AISI 304, 304 H</li>
                    <li>AISI 316, 304 LSi</li>
                    <li>AISI 304J, 308</li>
                    <li>AISI 304 L, 309</li>
                    <li>AISI 304, 310</li>
                    <li>AISI 309, 310S</li>
                    <li>AISI 310S, 314</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3 text-blue-600">400 SERIES</h4>
                  <ul className="space-y-1 text-sm">
                    <li>AISI 410</li>
                    <li>AISI 410L</li>
                    <li>AISI 420</li>
                    <li>AISI 430</li>
                    <li>AISI 430L</li>
                    <li>AISI 434</li>
                    <li>AISI 410</li>
                    <li>AISI 420</li>
                    <li>AISI 431</li>
                    <li>AISI 431 etc.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "din-grades" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">DIN Designation Grades</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <ul className="space-y-1 text-sm">
                      <li>1.4372</li>
                      <li>1.4373</li>
                      <li>1.4310</li>
                      <li>1.4300</li>
                      <li>1.4305</li>
                      <li>1.4306</li>
                      <li>1.4404</li>
                      <li>1.4401</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-1 text-sm">
                      <li>1.4316</li>
                      <li>1.4828</li>
                      <li>1.4845</li>
                      <li>1.4841</li>
                      <li>1.4550</li>
                      <li>1.4661</li>
                      <li>1.4056</li>
                      <li>1.4051</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-1 text-sm">
                      <li>1.4541</li>
                      <li>1.4571</li>
                      <li>1.4916</li>
                      <li>1.4113</li>
                      <li>1.4006</li>
                      <li>1.4021</li>
                      <li>1.4057</li>
                    </ul>
                  </div>
                </div>
                <div className="text-center border-t pt-4">
                  <h4 className="text-lg font-semibold mb-2 text-blue-600">SPECIAL GRADE: DUPLEX</h4>
                  <div className="text-2xl font-bold text-blue-700">1.4462</div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "features" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Size & Tolerances */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold">📏</span>
                    </div>
                    <h4 className="text-xl font-semibold">SIZE & TOLERANCES</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Size Range: 5 mm - 100 mm</li>
                    <li>• Length: 2500 mm to 7316 (8.2 ft - 24 ft)</li>
                    <li>• Tolerance Classes: h8, h9, h10, h11, f8, e8, k10, k12</li>
                  </ul>
                </div>

                {/* Supply Conditions */}
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold">⚙️</span>
                    </div>
                    <h4 className="text-xl font-semibold">SUPPLY CONDITIONS</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Cold Drawn Polished, Peeled & Polished</li>
                    <li>• Centreless Ground, Annealed</li>
                    <li>• Buffed (Mirror Finish)</li>
                    <li>• QT 700 / 800 / 850 / 1900</li>
                    <li>• PSQ (Pump Shaft Quality)</li>
                    <li>• Hardened & Tempered</li>
                  </ul>
                </div>

                {/* Applications */}
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold">🔧</span>
                    </div>
                    <h4 className="text-xl font-semibold">APPLICATIONS</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Automotive Shafts & Fasteners</li>
                    <li>• Engineering Machinery</li>
                    <li>• Textile & Food-grade Equipment</li>
                    <li>• Construction & Infrastructure Fittings</li>
                  </ul>
                </div>

                {/* Testing & Quality */}
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold">🧪</span>
                    </div>
                    <h4 className="text-xl font-semibold">TESTING & QUALITY ASSURANCE</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Chemical Analysis: Optical Emission, Wet</li>
                    <li>• Mechanical: Tensile, Torsion, Bend, Wrap</li>
                    <li>• NDT: Ultrasonic, Magnetic Particle, Liquit</li>
                    <li>• Corrosion: IOC, Macro Etch BIS, ISO 9001, ISO 14001, REACH, RoHS</li>
                  </ul>
                </div>
              </div>

              {/* Key Features */}
              <div className="mt-10">
                <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                <ul className="list-none space-y-3 text-sm sm:text-base mb-10">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✔</span>
                    <span><strong>Precision Dimensional Accuracy</strong> – ±0.05mm tolerance for critical applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✔</span>
                    <span><strong>Burr-Free Edges</strong> – Ready for CNC machining without pre-treatment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✔</span>
                    <span><strong>Custom Heat Treatment</strong> – Options include annealing, hardening, and tempering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✔</span>
                    <span><strong>Corrosion-Resistant Variants</strong> – Stainless steel grades suitable for chemical/food industries</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4">Why Choose Shyam Metalics?</h3>
                <ul className="list-none space-y-3 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">✅</span>
                    <span><strong>In-House Testing Lab</strong> – Spectroanalysis, hardness testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">✅</span>
                    <span><strong>Custom Packaging</strong> – PVC wrapping, wooden crates for export</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">✅</span>
                    <span><strong>Just-in-Time Delivery</strong> – Pan-India and global supply</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}