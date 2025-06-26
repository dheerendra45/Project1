import React from "react";

const Specifications = () => {
  return (
    <div className="py-10 px-16 sm:px-16 lg:px-18">
      <h1 className="text-3xl font-bold text-center mb-6">Product Specifications</h1>

      {/* Material Grades Table */}
      <div className="overflow-x-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. Material Grades</h2>
        <table className="min-w-full border border-gray-300 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Grade</th>
              <th className="border px-4 py-2">Equivalent (EN Standard)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2" rowSpan="2">Austenitic</td>
              <td className="border px-4 py-2">304 / 304L</td>
              <td className="border px-4 py-2">1.4301 / 1.4307</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">316 / 316L</td>
              <td className="border px-4 py-2">1.4401 / 1.4404</td>
            </tr>
            <tr>
              <td className="border px-4 py-2" rowSpan="2">Martensitic</td>
              <td className="border px-4 py-2">410</td>
              <td className="border px-4 py-2">1.4006</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">420</td>
              <td className="border px-4 py-2">1.4021</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Ferritic</td>
              <td className="border px-4 py-2">430</td>
              <td className="border px-4 py-2">1.4016</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Standard Specifications */}
      <div className="overflow-x-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. Standard Specifications</h2>
        <table className="min-w-full border border-gray-300 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Parameter</th>
              <th className="border px-4 py-2">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Width Range</td>
              <td className="border px-4 py-2">10 mm – 300 mm</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Thickness</td>
              <td className="border px-4 py-2">3 mm – 50 mm</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Length</td>
              <td className="border px-4 py-2">3 m / 6 m (Standard); up to 12 m (Custom)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Tolerance</td>
              <td className="border px-4 py-2">±0.1 mm (Precision-cut)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Features */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="space-y-2 text-gray-700">
          <li>✔ <strong>High Load-Bearing Capacity</strong> – Uniform thickness for structural stability</li>
          <li>✔ <strong>Easy to Weld & Cut</strong> – Compatible with all standard fabrication techniques</li>
          <li>✔ <strong>Cost-Effective</strong> – Competitive pricing per kg in the Indian market</li>
          <li>✔ <strong>Traceability</strong> – Batch-wise Mill Test Certificates (MTC) provided</li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Why Choose Shyam Metalics Flats?</h2>
        <ul className="space-y-4 text-gray-700">
          <li>✅ <strong>Wide Inventory</strong> – Ready stock of standard sizes available</li>
          <li>✅ <strong>Custom Cutting</strong> – Plasma/oxy-fuel cutting services tailored to your drawings</li>
          <li>✅ <strong>Pan-India Supply</strong> – Timely and reliable delivery to OEMs & fabricators</li>
        </ul>
      </div>
    </div>
  );
};

export default Specifications;
