import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Specification() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeTab, setActiveTab] = useState("physical");

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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const tabs = [
    { id: "physical", label: "Physical Parameters" },
    { id: "chemical", label: "Chemical Parameters" },
    { id: "size", label: "Size Analysis" },
    { id: "features", label: "Features" },
  ];

  const renderTable = () => {
    switch (activeTab) {
      case "physical":
        return (
          <table className="min-w-full border border-gray-300 text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Parameter</th>
                <th className="border px-4 py-2">Unit</th>
                <th className="border px-4 py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">CCS Avg.</td>
                <td className="border px-4 py-2">Kg/p</td>
                <td className="border px-4 py-2">180 - 220</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Tumbler Index</td>
                <td className="border px-4 py-2">%</td>
                <td className="border px-4 py-2">94.00 - 96.00</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Abrasion Index</td>
                <td className="border px-4 py-2">%</td>
                <td className="border px-4 py-2">2.00 - 3.00</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Bulk Density</td>
                <td className="border px-4 py-2">T/M³</td>
                <td className="border px-4 py-2">2.1 - 2.2</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Porosity</td>
                <td className="border px-4 py-2">%</td>
                <td className="border px-4 py-2">24.00 (min)</td>
              </tr>
            </tbody>
          </table>
        );
      case "chemical":
        return (
          <table className="min-w-full border border-gray-300 text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Parameter</th>
                <th className="border px-4 py-2">Unit</th>
                <th className="border px-4 py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Fe</td>
                <td className="border px-4 py-2">%</td>
                <td className="border px-4 py-2">64.00 ± 0.20</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">LOI</td>
                <td className="border px-4 py-2">%</td>
                <td className="border px-4 py-2">0.06 – 0.12</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">FeO</td>
                <td className="border px-4 py-2">%</td>
                <td className="border px-4 py-2">0.70 – 0.80</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">SiO2</td>
                <td className="border px-4 py-2">%</td>
                <td className="border px-4 py-2">5.00 (Max)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Al2O3</td>
                <td className="border px-4 py-2">%</td>
                <td className="border px-4 py-2">2.50 ± 0.50</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">CaO</td>
                <td className="border px-4 py-2">%</td>
                <td className="border px-4 py-2">0.80 – 1.12</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">MgO</td>
                <td className="border px-4 py-2">%</td>
                <td className="border px-4 py-2">0.18 – 0.25</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Basicity</td>
                <td className="border px-4 py-2">%</td>
                <td className="border px-4 py-2">0.16 – 0.18</td>
              </tr>
            </tbody>
          </table>
        );
      case "size":
        return (
          <table className="min-w-full border border-gray-300 text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Parameter</th>
                <th className="border px-4 py-2">Unit</th>
                <th className="border px-4 py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">+5mm to -18 mm</td>
                <td className="border px-4 py-2">%</td>
                <td className="border px-4 py-2">95 min</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">-5mm, +18 mm</td>
                <td className="border px-4 py-2">%</td>
                <td className="border px-4 py-2">5 max</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">MPS</td>
                <td className="border px-4 py-2">mm</td>
                <td className="border px-4 py-2">9.50 – 10</td>
              </tr>
            </tbody>
          </table>
        );
      case "features":
        return (
          <ul className="space-y-2 text-sm">
            <li>
              🧲 <strong>High Iron Content (65–72%)</strong> – Maximizes output
              and minimizes slag during smelting.
            </li>
            <li>
              📏 <strong>Uniform Size (8–16 mm)</strong> – Promotes smooth gas
              flow and consistent furnace operation.
            </li>
            <li>
              🧪 <strong>Low Impurity Levels (&lt;2%)</strong> – Alumina,
              silica, and phosphorus kept minimal.
            </li>
            <li>
              💪 <strong>High Crushing Strength</strong> – 250–350 kg/pellet
              strength for handling and furnace loads.
            </li>
            <li>
              🌬️ <strong>High Porosity (&gt;25%)</strong> – Ensures faster
              reduction and better fuel efficiency.
            </li>
            <li>
              🔥 <strong>Thermal Stability</strong> – Resists sudden thermal
              shocks in furnaces.
            </li>
            <li>
              🌱 <strong>Eco-Friendly Pellet Plant</strong> – Green
              manufacturing and emission-controlled environment.
            </li>
            <li>
              ⚗️ <strong>Custom Chemistry Options</strong> – Basic and acidic
              pellets tailored to client needs.
            </li>
            <li>
              🧹 <strong>Minimal Dust Generation</strong> – Safe, clean handling
              during logistics.
            </li>
            <li>
              ✅ <strong>Verified Quality</strong> – ISO 9001, BIS, ASTM
              compliant.
            </li>
          </ul>
        );
      default:
        return null;
    }
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

        <div className="flex space-x-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md text-sm font-semibold border ${
                activeTab === tab.id
                  ? "bg-orange-600 text-white"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">{renderTable()}</div>
      </motion.div>
    </div>
  );
}
