import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import aeroimg from '../../assets/knowledgehub/aerospace.jpg'
import part2img from '../../assets/knowledgehub/part2.jpg'
import cuttingimg from '../../assets/knowledgehub/cutting.jpg'
const SheetMetalGuide1 = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const cuttingComparison = [
    {
      type: "Laser cutting",
      pros: [
        "Wide range of materials available",
        "Can engrave and part mark using its depth control functionality",
        "Small to no residual burrs, the thinner the material the smaller the burr",
        "Small deformation",
        "Low surface roughness"
      ],
      cons: [
        "Heat distortion may occur in a small area around the cut",
        "High cost",
        "Leaves HAZ"
      ],
      tolerances: "0.05 mm (0.002 in)",
      idealRange: "0.30-1.02 mm (0.12-0.4 in)",
      cost: "$$$",
      application: "Medium-thin sheets of material. Becomes less efficient as the material thickness increases."
    },
    {
      type: "Plasma cutting",
      pros: [
        "Much cheaper than laser cutting"
      ],
      cons: [
        "Leaves HAZ",
        "Produces rough cut with large burr",
        "Poor perpendicularity of cutting surface",
        "Operates on electrically conductive materials only"
      ],
      tolerances: "0.5 mm (0.02 in)",
      idealRange: "0.5-180 mm (0.02-7.01 in)",
      cost: "$",
      application: "Thicker pieces of electrically conductive metal where aesthetics are not so important."
    },
    {
      type: "Water jet cutting",
      pros: [
        "No burr or dross",
        "Can cut variety of materials",
        "High level of accuracy",
        "No HAZ"
      ],
      cons: [
        "Cannot be used for part marking or engraving",
        "Much larger kerf width (0.5-1 mm) than laser cutting",
        "Less precise than laser cutting",
        "High cost"
      ],
      tolerances: "0.2 mm (0.008 in)",
      idealRange: "10.16-50.8 mm (0.4-2 in)",
      cost: "$$$$$",
      application: "Parts with intricate details where the finish is worth the extra expense."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Sheet Metal Fabrication Guide</h1>
        <p className="text-lg text-gray-600">Comprehensive guide to sheet metal fabrication techniques and applications</p>
      </div>

      {/* Aerospace Section */}
      <section className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Aerospace</h2>
            <p className="text-gray-700 mb-4">
              Aerospace engineers used sheet metal for quite a few different lightweight and space ready parts. They create designs for the aircraft or spacecraft out of sheet materials including aluminum and steel, but also use other less common sheet materials like titanium, and tungsten.
            </p>
            <p className="text-gray-700">
              The ability to make large, smooth contoured pieces make sheet metal an ideal material for airfoils and other aerodynamic applications.
            </p>
          </div>
          <div className="lg:w-1/2">
            {/* Replace with your rocket launch image */}
            <img 
              src={aeroimg}
              alt="Rocket launch - Replace with your aerospace image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Part 2 - Types of Sheet Metal Fabrication */}
      <section className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Part 2</h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Types of sheet metal fabrication</h3>
            <p className="text-gray-700">
              In this section, we'll cover and compare fourteen different types of sheet metal fabrication including cutting, forming, stamping, holemaking and threading.
            </p>
          </div>
          <div className="lg:w-1/2">
            {/* Replace with your sheet metal fabrication image */}
            <img 
              src={part2img}
              alt="Sheet metal fabrication process - Replace with your fabrication image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Cutting Sheet Metal Section */}
      <section className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cutting sheet metal</h2>
            <p className="text-gray-700">
              There are numerous ways of effectively cutting through sheet metal. This section will briefly cover the many different approaches to cut through sheet metal, split into two key groups: cutting with and without shear forces.
            </p>
          </div>
          <div className="lg:w-1/2">
            {/* Replace with your laser cutting image */}
            <img 
              src={cuttingimg}
              alt="Laser cutting process - Replace with your laser cutting image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Cutting without Shear */}
      <section className="mb-12 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Cutting - without shear</h2>
        <p className="text-gray-700 mb-8">
          Several processes including extreme heat, vaporization, and high pressure abrasive blasting, make it possible to cut through sheet metal without shear. In this section, we'll cover three main types: laser cutting, plasma cutting and water jet cutting.
        </p>

        {/* Cutting Types Accordion */}
        <div className="space-y-4 mb-8">
          {['Laser cutting', 'Plasma cutting', 'Water jet cutting'].map((type) => (
            <div key={type} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleSection(type)}
                className="w-full px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 flex justify-between items-center"
              >
                {type}
                {expandedSections[type] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {expandedSections[type] && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">Click to expand detailed information about {type.toLowerCase()}.</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Comparison of cutting types without shear</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Types</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Pros</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cons</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Tolerances</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ideal Mt. range</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cost</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Application</th>
              </tr>
            </thead>
            <tbody>
              {cuttingComparison.map((method, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">{method.type}</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {method.pros.map((pro, i) => (
                        <li key={i}>{pro}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {method.cons.map((con, i) => (
                        <li key={i}>{con}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">{method.tolerances}</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">{method.idealRange}</td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-semibold">{method.cost}</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">{method.application}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Cutting with Shear */}
      <section className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cutting - with shear</h2>
            <p className="text-gray-700 mb-4">
              Shearing is a process where the material is cut by a shearing force that overcomes the material's ultimate shear strength. There is usually a die that holds and supports the material. At the same time, a punch or shear presses down where the die has an opening for the material to be cut through, thus cutting the part.
            </p>
            <p className="text-gray-700">
              A cut achieved through shearing is different from one that uses another process. The beginning of the cut has a rollover, which leads to plastic deformation of the material from the shear force applied to it. The material then starts to burnish from stretching and rolling against the punch. The shear stress then becomes too much for the material to undergo and the material begins to fracture at a slight angle. There will also be a burr at the bottom of the material due to the material stretching at the beginning of the cut.
            </p>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center p-8">
            <div className="bg-gray-100 rounded-lg p-6 w-full">
              {/* Shearing Process Diagram */}
              <div className="text-center">
                <h4 className="font-semibold mb-4">Shearing Process Diagram</h4>
                {/* Replace with your shearing diagram image */}
                <img 
                  src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&h=300&fit=crop" 
                  alt="Shearing process diagram - Replace with your diagram"
                  className="w-full h-48 object-cover rounded"
                />
                <div className="mt-4 text-sm text-gray-600">
                  <p>Punch, Sheet metal, Die components shown</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cutting Types with Shear */}
        <div className="p-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Cutting types - with shear</h3>
          <div className="space-y-4">
            {['Shearing', 'Blanking and punching', 'Sawing'].map((type) => (
              <div key={type} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection(type)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 flex justify-between items-center"
                >
                  {type}
                  {expandedSections[type] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedSections[type] && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">Click to expand detailed information about {type.toLowerCase()}.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
};

export default SheetMetalGuide1;