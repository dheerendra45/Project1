import React from "react";

const Specifications = () => {
  return (
    <div className="py-10 px-4 sm:px-8 lg:px-10">
      <h1 className="text-3xl font-bold text-center mb-6">Product Specification</h1>

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
    </div>
  );
};

export default Specifications;
