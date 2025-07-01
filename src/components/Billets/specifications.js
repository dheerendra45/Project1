import React from "react";

const Specifications = () => {
  return (
    <div className="py-10 px-4 sm:px-8 lg:px-10">
      <h1 className="text-3xl font-bold text-center mb-6">Product Specification</h1>

      {/* Chemical Composition Table */}
      <div className="overflow-x-auto mb-10">
        <table className="min-w-full border border-gray-300 text-left text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Size (mm)</th>
              <th className="border border-gray-300 px-4 py-2">Grade/Designation</th>
              <th className="border border-gray-300 px-4 py-2">Qualities (Chemical Composition)</th>
              <th className="border border-gray-300 px-4 py-2">IS Spec.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2" rowSpan="6">100×100, 125×125, 160×160</td>
              <td className="border border-gray-300 px-4 py-2">Grade : A</td>
              <td className="border border-gray-300 px-4 py-2">S : 0.050, max<br />P : 0.050, max</td>
              <td className="border border-gray-300 px-4 py-2" rowSpan="6">IS 2830 : 2012</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Grade : B</td>
              <td className="border border-gray-300 px-4 py-2">S : 0.045, max<br />P : 0.045, max</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Grade : C</td>
              <td className="border border-gray-300 px-4 py-2">S : 0.040, max<br />P : 0.040, max</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Design. : C20 MMn</td>
              <td className="border border-gray-300 px-4 py-2">C : 0.17 – 0.23<br />P : 0.60 – 1.00</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Design. : C18 MMn</td>
              <td className="border border-gray-300 px-4 py-2">C : 0.15 – 0.21<br />P : 0.60 – 1.00</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Design. : C15 MMn</td>
              <td className="border border-gray-300 px-4 py-2">C : 0.12 – 0.18<br />P : 0.60 – 1.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Features Section */}
      <div className="space-y-6 px-2 sm:px-6 lg:px-12">
        <h2 className="text-2xl font-semibold mb-2">Features</h2>
        
        <div>
          <h3 className="font-semibold text-lg mb-1">1. High-Quality Steel Composition</h3>
          <p className="text-sm text-gray-700">
            Manufactured from primary steel (utilizing EAF/IF methods) with top-grade sponge iron/scrap.<br />
            Low impurity levels (S, P ≤ 0.045%) ensuring outstanding weldability and ductility.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1">2. Precise Dimensional Accuracy</h3>
          <p className="text-sm text-gray-700">
            Available in standard sizes ranging from 100x100mm to 130x130mm with length adjustments (6-12m).<br />
            Tight dimensional tolerance (±0.5mm) supports seamless rolling mill operations.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1">3. Superior Surface Finish</h3>
          <p className="text-sm text-gray-700">
            Free of scale, with minimal surface defects (no cracks or laps).<br />
            Consistent cross-section maintained throughout entire length.
          </p>
        </div>

        {/* Why Choose Section */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">Why Choose Shyam Metalics Billets?</h2>

        <div className="space-y-4">
          <div>
            <span className="font-bold text-green-600">✅ Consistent Quality – Supported by ISO 9001 Certification</span>
            <p className="text-sm text-gray-700">
              Our billets are produced using state-of-the-art continuous casting technology and go through thorough quality control assessments at every stage. With ISO 9001 certification, we guarantee uniform chemical composition, surface finish, and mechanical properties, making them suitable for essential structural and industrial uses.
            </p>
          </div>

          <div>
            <span className="font-bold text-green-600">✅ Wide Range of Sizes for Diverse Applications</span>
            <p className="text-sm text-gray-700">
              Shyam Metalics provides an extensive selection of billet sizes and grades to meet various industry requirements — from construction and automotive to engineering and manufacturing. This versatility enables clients to find the ideal match for downstream processes like rolling, forging, and extrusion.
            </p>
          </div>

          <div>
            <span className="font-bold text-green-600">✅ Dependable Supply Chain with Nationwide Logistics</span>
            <p className="text-sm text-gray-700">
              With strategically positioned integrated steel plants and a strong logistics network throughout India, we guarantee prompt and efficient delivery of billets, no matter the order size or location. Our reliable supply chain ensures uninterrupted operations for our partners and clients across the country.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
