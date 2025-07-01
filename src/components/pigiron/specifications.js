import React from "react";

const Specifications = () => {
  return (
    <div className="py-10 px-16 sm:px-16 lg:px-18">

      <h1 className="text-3xl font-bold text-center mb-6">Pig Iron Specifications</h1>

      {/* Grades & Standards */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Grades & Standards</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Foundry Grade Pig Iron (FG Grade)</li>
          <li>Basic Grade Pig Iron (BG Grade)</li>
          <li>Steel Making Grade Pig Iron (SG Grade)</li>
        </ul>
      </div>

      {/* Typical Composition Table */}
      <div className="overflow-x-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4">Typical Composition</h2>
        <table className="min-w-full border border-gray-300 text-left text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Element</th>
              <th className="border border-gray-300 px-4 py-2">Composition (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Iron (Fe)</td>
              <td className="border border-gray-300 px-4 py-2">92-94%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Carbon (C)</td>
              <td className="border border-gray-300 px-4 py-2">3.5-4.5%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Silicon (Si)</td>
              <td className="border border-gray-300 px-4 py-2">1-3%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Manganese (Mn)</td>
              <td className="border border-gray-300 px-4 py-2">0.5-2%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Sulfur (S)</td>
              <td className="border border-gray-300 px-4 py-2">≤ 0.05%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Phosphorus (P)</td>
              <td className="border border-gray-300 px-4 py-2">≤ 0.15%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Features */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="space-y-2 text-gray-700">
          <li>✅ <strong>High Purity</strong> – Minimal impurities for superior casting and steelmaking</li>
          <li>✅ <strong>Energy-Efficient Production</strong> – Optimized blast furnace processes</li>
          <li>✅ <strong>Customizable Grades</strong> – Tailored compositions for foundry, steelmaking, and specialty applications</li>
          <li>✅ <strong>Strict Quality Control</strong> – Batch-wise testing for guaranteed performance</li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            🔹 <strong>Leading Pig Iron Manufacturer in India</strong><br />
            Shyam Metalics is trusted by top foundries, casting units, and steel manufacturers for consistent quality and performance.
          </li>
          <li>
            🔹 <strong>Competitive Pig Iron Prices</strong><br />
            Offering cost-effective solutions without compromising on quality to optimize your production efficiency.
          </li>
          <li>
            🔹 <strong>Reliable Supply Chain & Nationwide Reach</strong><br />
            Strategically located units and robust logistics ensure timely deliveries and smooth operations.
          </li>
          <li>
            🔹 <strong>Technical Expertise & Customized Solutions</strong><br />
            Tailored pig iron compositions based on client needs, including carbon adjustments and furnace optimization.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Specifications;
