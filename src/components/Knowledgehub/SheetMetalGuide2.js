import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import f1 from '../../assets/knowledgehub/f1.jpg'
import s1 from '../../assets/knowledgehub/s1.jpg'
import p31 from '../../assets/knowledgehub/p31.jpg'
import p32 from '../../assets/knowledgehub/p32.jpg'
export default function SheetMetalGuide2() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const formingTypes = [
    'Bending',
    'Hemming', 
    'Curling',
    'Rolling',
    'Roll forming',
    'Metal spinning',
    'Deep drawing'
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {/* Section 1: Forming Sheet Metal */}
      <div className="mb-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-1/2">
            <div className=" p-6 bg-white">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">Forming sheet metal</h1>
              <p className="text-gray-700 mb-4 leading-relaxed">
                During the fabrication process, the sheet metal is usually first punched and cut in different ways and then followed by forming processes to make a nearly finished and realized product. Entire product chassis can be made in this way.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Not only is forming metal convenient, it also adds strength and stiffness to an assembly. In this section, we cover seven different ways to form sheet metal.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src={f1}
              alt="Sheet metal forming process"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Forming Types */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Forming types</h2>
          <div className="max-w-2xl mx-auto space-y-2">
            {formingTypes.map((type, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection(type)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-800">{type}</span>
                  {expandedSections[type] ? (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedSections[type] && (
                  <div className="px-4 pb-4 text-gray-600">
                    <p>Details about {type.toLowerCase()} process and applications...</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: Stamping Sheet Metal */}
      <div className="mb-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Stamping sheet metal</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Stamping can be a complex combination of cutting and forming using the previous techniques of shearing, bending, stretching, and even joining using intricate dies to obtain a complex part in a shorter amount of operations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sometimes the process can be a progressive stamping process where there are multiple stamping stations that gradually cut or form the part further and further until the final piece is created.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src={s1} 
              alt="Stamped sheet metal parts"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Section 3: Holemaking and Threading */}
      <div className="mb-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Holemaking and threading</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Making holes in sheet metal can be done with some of the previously mentioned processes including{' '}
              <span className="text-orange-500 font-medium">laser cutting</span>{' '}
              punching, but there are also other ways that will be mentioned here.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A CNC mill, drill press, or hand drill may be utilized in order to make holes in material. A{' '}
              <span className="text-orange-500 font-medium">CNC machine</span>{' '}
              will be the most precise out of these options, the hand drill will usually be the least precise.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src={p32}
              alt="CNC machine drilling holes"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Section 4: Design for Sheet Metal Fabrication */}
      <div className="mb-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-1/2">
            <div className="mb-2">
              <h1 className=" font-bold text-black uppercase tracking-wide">Part 3</h1>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Design for sheet metal fabrication</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              In this section we'll cover the best practices to follow when designing for sheet metal bending and laser cutting — the two{' '}
              <span className="text-orange-500 font-medium">sheet metal fabrication services</span>{' '}
              we offer.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We'll begin with general considerations when designing a sheet metal parts, and then move on to best design practices for laser cutting, bending, and creating holes.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src={p31}
              alt="Sheet metal bending design"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
     
    </div>
  );
}