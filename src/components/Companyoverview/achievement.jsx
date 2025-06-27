import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Achievement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const animateItem = (delay = 0) =>
    isInView
      ? {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay,
          },
        }
      : {};

  return (
    <div ref={ref} className="w-full bg-white py-16 px-6 lg:px-20">
      {/* Heading */}
      <motion.div
        className="mb-16 text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={animateItem(0)}
      >
        <h1 className="text-gray-600 text-sm uppercase">Company Statistics</h1>
        <h2 className="text-4xl font-bold text-black">
          KEY COMPANY STATISTICS (FY 2023-24)
        </h2>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {[
          ["₹13,195.22 crore", "Revenue from Operations"],
          ["11.90%", "EBITDA Margin"],
          ["₹1,029 crore", "Profit After Tax (PAT)"],
          ["7.80%", "PAT Margin"],
          ["₹39.54", "Basic EPS"],
          ["11.93%", "Return on Net Worth (RoNW)"],
          ["₹8,623.45 crore", "Net Worth"],
          ["₹2,092 crore", "Cash & Cash Equivalents"],
          ["0.06", "Debt-Equity Ratio"],
          ["₹9,215 crore", "(₹4,640 crore spent till FY24) Capex in FY24"],
          ["₹1,543 crore", "Capex in FY24"],
          ["₹9,215 crore", "(₹4,640 crore spent till FY24)"],
        ].map(([value, label], index) => (
          <motion.div
            key={index}
            className="bg-gray-100 text-center p-6 border border-gray-300 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={animateItem(0.1 + index * 0.05)}
          >
            <h1 className="text-3xl font-bold text-black">{value}</h1>
            <p className="text-xl text-gray-700 mt-2">{label}</p>
          </motion.div>
        ))}
      </div>

      {/* Production Capacities Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={animateItem(0.5)}
        className="mt-10"
      >
        <h2 className="text-3xl font-bold mb-6 text-black">
          PRODUCTION CAPACITIES
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left text-base">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 border-b border-gray-300 border-r text-black text-lg">
                  Production Unit
                </th>
                <th className="p-4 border-b border-gray-300 text-black text-lg">
                  Capacity
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {[
                ["Iron Making", "3.05 MTPA"],
                ["Liquid Steel", "2.01 MTPA"],
                ["Finished Steel", "2.07 MTPA"],
                ["Stainless Steel", "0.27 MTPA"],
                ["Aluminium Foil", "24,000 TPA"],
                ["Ferro Alloys", "0.22 MTPA"],
                ["Power Generation (Captive)", "357 MW (to be expanded to 600 MW)"],
                ["Renewable Energy (Wind + Solar)", "109 MW (planned)"],
              ].map(([unit, cap], index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-4 border-b border-gray-300 border-r">
                    {unit}
                  </td>
                  <td className="p-4 border-b border-gray-300">
                    {cap}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
