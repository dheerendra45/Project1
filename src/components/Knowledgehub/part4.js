import React from 'react';

const SheetMetalGuide4 = () => {
  const materials = [
    {
      material: "Aluminum 5052*",
      elongationAtBreak: "7 - 87 %",
      machinability: "Fair",
      weldability: "Good",
      corrosionRes: "Excellent",
      tensileStrength: "195 - 290 MPa",
      cost: "$"
    },
    {
      material: "Aluminum 5754*",
      elongationAtBreak: "10 - 15 %",
      machinability: "Good",
      weldability: "Excellent",
      corrosionRes: "Excellent",
      tensileStrength: "160 - 200 MPa",
      cost: "$"
    },
    {
      material: "Stainless Steel 304",
      elongationAtBreak: "45 - 60 %",
      machinability: "Excellent",
      weldability: "Excellent",
      corrosionRes: "Good",
      tensileStrength: "480 - 620 MPa",
      cost: "$$$",
      highlight: "orange"
    },
    {
      material: "Stainless Steel 316L",
      elongationAtBreak: "30 - 50 %",
      machinability: "Good",
      weldability: "Excellent",
      corrosionRes: "Excellent",
      tensileStrength: "480 - 620 MPa",
      cost: "$$$$",
      highlight: "orange"
    },
    {
      material: "Mild Steel 1018",
      elongationAtBreak: "17 - 27 %",
      machinability: "Good",
      weldability: "Excellent",
      corrosionRes: "Poor",
      tensileStrength: "190 - 440 MPa",
      cost: "$$",
      highlight: "orange"
    },
    {
      material: "Copper 110",
      elongationAtBreak: "15 - 50 %",
      machinability: "Poor",
      weldability: "Moderate to Poor",
      corrosionRes: "Good",
      tensileStrength: "220 - 230 MPa",
      cost: "$$",
      highlight: "orange"
    }
  ];

  const finishes = [
    {
      finish: "Bead blasting",
      description: "Shooting glass beads or other abrasives at the part at high speed, resulting in a uniform matte or satin surface finish.",
      pros: [
        "Deburrs",
        "Removes tool marks", 
        "Adds uniform matte or satin surface finish",
        "Helps to increase grip"
      ],
      cons: [
        "Will affect critical dimensions and surface roughness"
      ],
      priceIncrease: "+5%",
      application: "Used mainly for visual purposes and to prepare surfaces for other coatings. Comes in several different grits which indicate the size of the bombarding pellets. Can be combined with anodizing."
    },
    {
      finish: "Powder coating",
      description: "Powder coating adds a thin layer of protective polymer on the surface of the part.",
      pros: [
        "Adds decorative finish",
        "Improves weather & corrosion resistance", 
        "Compatible with all metals",
        "Higher durability than paints"
      ],
      cons: [
        "Cannot be easily applied to internal surfaces",
        "Less dimensional control compared to anodizing"
      ],
      priceIncrease: "+15%",
      application: "All metals. Both decorative and protective and can be combined with bead blasting."
    },
    {
      finish: "Anodizing",
      description: "This is an electrochemical process of placing a stable oxide coating on the material, usually aluminum.",
      pros: [
        "Gives the material a smooth almost matte texture",
        "Durable & aesthetically pleasing",
        "Can be applied easily to internal cavities and small parts", 
        "Wide range of colors available"
      ],
      cons: [
        "Very bad electrical conductor. If grounding needs to occur it must be penetrated somehow",
        "Relatively brittle compared to powder coating"
      ],
      priceIncrease: "+20%",
      application: "Can be used on aluminum, titanium, zinc & magnesium to increase corrosion resistance and visual appeal."
    },
    {
      finish: "Chromate conversion coating",
      description: "Known also as alodine or chemical film, this process immerses parts in a chemical bath until a coating has formed.",
      pros: [
        "Protects from corrosion",
        "Allows grounding currents to pass through",
        "Paints adheres well, can act as primer",
        "Increases durability"
      ],
      cons: [
        "Limited colors available (yellow, gray, white)",
        "Little abrasion resistance"
      ],
      priceIncrease: "+10%",
      application: "Best for functional parts, not intended for decorative use."
    },
    {
      finish: "Brushing",
      description: "Brushing is produced by polishing the metal with grit resulting in a unidirectional satin finish.",
      pros: [
        "Removes machine marks"
      ],
      cons: [
        "Not corrosion resistant",
        "Does not increase durability"
      ],
      priceIncrease: "+5%",
      application: "Brushing is mostly used for aesthetic purposes and can be used to cover up imperfections from machining for customer-facing parts."
    },
    {
      finish: "Brushing + electropolishing",
      description: "Parts are brushed and then run through an electropolishing process - an electrochemical process used to polish, passivate and deburr metal parts.",
      pros: [
        "Reduces roughness of parts",
        "Deburrs",
        "Makes surface smoother and shiny",
        "Increases corrosion resistance",
        "Produces more hygienic surface"
      ],
      cons: [
        "Not 100% smooth",
        "Does not increase durability"
      ],
      priceIncrease: "+15%",
      application: "Best for parts that need to be smooth at a microscopic level. Suitable for the majority metals, but mostly used for stainless steels."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white font-sans">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Part 4</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Materials & finishes</h2>
            <p className="text-gray-700 mb-4 max-w-lg leading-relaxed">
              One of the key advantages of sheet metal fabrication is the wide selection 
              of materials and finishing available.
            </p>
            <p className="text-gray-700 max-w-lg leading-relaxed">
              This section first offers guidance on how to choose the right material for 
              sheet metal fabrication and the factors to consider, and then covers the 
              available surface finishes and their most suitable applications.
            </p>
          </div>
          <div className="ml-8">
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=200&fit=crop" 
              alt="Sheet metal fabrication"
              className="w-80 h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Sheet Metal Materials Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Sheet metal materials</h2>
        
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1 pr-8">
            <p className="text-gray-700 mb-4 leading-relaxed">
              The mechanical properties of materials used for sheet metal 
              fabrication are the same as the base metal, so your decision of 
              material should be largely based on choosing an appropriate 
              material according to your needs. However, the materials most 
              suitable for sheet metal fabrication are those which you can 
              manipulate and do not lose their physical properties. Aluminum 
              and steel are examples of such materials.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Additionally, as sheet metal fabrication projects often include 
              bending, machining or welding, there are a number of factors to 
              pay particular attention to when selecting an appropriate 
              material. These include:
            </p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                Ductility (elongation at break)
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                Machinability
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                Weldability
              </li>
            </ul>
          </div>
          <div className="ml-4">
            <img 
              src="https://images.unsplash.com/photo-1587289781695-a42d3ae170d9?w=300&h=300&fit=crop" 
              alt="Metal sheets"
              className="w-64 h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="text-gray-700 space-y-2 mb-6">
          <li className="flex items-start">
            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
            Tensile strength
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
            Corrosion resistance
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
            Weight
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
            Cost
          </li>
        </div>

        {/* Materials Comparison Table */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Common materials used for sheet metal fabrication</h3>
          <p className="text-gray-700 mb-4">
            This section compares the properties of different grades of the standard sheet metal fabrication materials offered by Protolabs Network, 
            including aluminum, stainless steel, mild steel, and copper. More general descriptions of these metals can be found on <span className="text-orange-600 underline">this materials page</span>.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left font-semibold">Material + grade</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Elongation at break</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Machinability</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Weldability</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Corrosion res</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Tensile strength</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Cost</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((material, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className={`border border-gray-300 p-3 ${material.highlight === 'orange' ? 'text-orange-600' : ''}`}>
                      {material.material}
                    </td>
                    <td className="border border-gray-300 p-3">{material.elongationAtBreak}</td>
                    <td className="border border-gray-300 p-3">{material.machinability}</td>
                    <td className="border border-gray-300 p-3">{material.weldability}</td>
                    <td className="border border-gray-300 p-3">{material.corrosionRes}</td>
                    <td className="border border-gray-300 p-3">{material.tensileStrength}</td>
                    <td className="border border-gray-300 p-3">{material.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-600 text-sm mt-4">
            * The aluminum series 5xxx is more suited to sheet metal fabrication than the aluminum series 6xxx, commonly used for CNC machined 
            parts. This is because aluminum series 5xxx is more ductile and tears less easily when bent.
          </p>
        </div>
      </div>

      {/* Sheet Metal Finishes Section */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1 pr-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sheet metal finishes</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The finishing of sheet metal can be one of the most crucial steps 
              in ensuring that the product not only works, but works for as long 
              as possible. Leaving some types of metal unfinished can lead to 
              devastating corrosion or electricity going where it shouldn't.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The types of finishes available for sheet metal are no different 
              from those used for other metal fabrication processes. How 
              suitable a finish is depends heavily on the part's individual 
              requirements and the properties of the selected material.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The most common finishes and how they applicable to sheet 
              metal are compared below. For more general descriptions, 
              information on roughness, color options, grit etc., and images of 
              each of these finishes, check out <span className="text-orange-600 underline">this page on surface finishes</span>.
            </p>
          </div>
          <div className="ml-4">
            <img 
              src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=300&h=200&fit=crop" 
              alt="Sheet metal finishes"
              className="w-80 h-48 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Finishes Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 p-3 text-left font-semibold w-32">Finish</th>
                <th className="border border-gray-300 p-3 text-left font-semibold w-80">Description</th>
                <th className="border border-gray-300 p-3 text-left font-semibold w-48">Pros</th>
                <th className="border border-gray-300 p-3 text-left font-semibold w-48">Cons</th>
                <th className="border border-gray-300 p-3 text-left font-semibold w-32">Rough price increase</th>
                <th className="border border-gray-300 p-3 text-left font-semibold w-64">Application</th>
              </tr>
            </thead>
            <tbody>
              {finishes.map((finish, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3 align-top font-medium">
                    {finish.finish}
                  </td>
                  <td className="border border-gray-300 p-3 align-top">
                    <div className="leading-relaxed">
                      {finish.description}
                    </div>
                  </td>
                  <td className="border border-gray-300 p-3 align-top">
                    <ul className="space-y-1">
                      {finish.pros.map((pro, proIndex) => (
                        <li key={proIndex} className="flex items-start">
                          <span className="mr-2 mt-1 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="border border-gray-300 p-3 align-top">
                    <ul className="space-y-1">
                      {finish.cons.map((con, conIndex) => (
                        <li key={conIndex} className="flex items-start">
                          <span className="mr-2 mt-1 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="border border-gray-300 p-3 align-top text-center font-medium">
                    {finish.priceIncrease}
                  </td>
                  <td className="border border-gray-300 p-3 align-top">
                    <div className="leading-relaxed">
                      {finish.application}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SheetMetalGuide4;