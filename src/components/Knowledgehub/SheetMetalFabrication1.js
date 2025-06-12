import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SheetMetalFabrication1 = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const benefitsData = [
    {
      id: 'fast-affordable',
      title: 'Fast, affordable, and high quality for production or prototyping',
      content: 'Sheet metal fabrication offers rapid turnaround times and cost-effective solutions for both prototype development and full-scale production runs.'
    },
    {
      id: 'vast-techniques',
      title: 'Vast number of techniques and materials',
      content: 'Multiple fabrication methods including cutting, bending, welding, and forming, compatible with various metals like steel, aluminum, copper, and specialty alloys.'
    },
    {
      id: 'strength-weight',
      title: 'High strength to weight ratio',
      content: 'Sheet metal provides excellent structural integrity while maintaining relatively low weight, making it ideal for applications requiring both strength and efficiency.'
    }
  ];

  const limitationsData = [
    {
      id: 'capability-limits',
      title: 'Capability limits per technique',
      content: 'Each fabrication technique has specific limitations in terms of material thickness, complexity, and geometric constraints that must be considered during design.'
    },
    {
      id: 'initial-capital',
      title: 'High initial capital for tooling and equipment',
      content: 'Significant upfront investment required for specialized machinery, tooling, and setup costs, especially for complex or high-volume operations.'
    },
    {
      id: 'labor-cost',
      title: 'High labor cost for some types',
      content: 'Certain fabrication processes require skilled technicians and specialized labor, which can increase overall production costs for complex components.'
    },
    {
      id: 'bending-operations',
      title: 'Bending operations designs are intricate',
      content: 'Complex bending sequences require careful planning and precise tooling to avoid material deformation, cracking, or dimensional inaccuracies.'
    }
  ];

  const applications = [
    { name: 'Aerospace', active: true },
    { name: 'Automotive', active: false },
    { name: 'Construction', active: false },
    { name: 'Healthcare', active: false },
    { name: 'Appliances', active: false }
  ];

  const AccordionItem = ({ item, isExpanded, onToggle }) => (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4 px-0 text-left hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="font-medium text-gray-800 pr-4">{item.title}</span>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isExpanded && (
        <div className="pb-4 text-gray-600 leading-relaxed">
          {item.content}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto pt-12 p-6 bg-white">
      {/* Header */}
      <div className="mb-8">
   
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Benefits and limitations of sheet metal fabrication
        </h1>
        <p className="text-gray-600 leading-relaxed">
          As the term sheet metal fabrication covers a wide range of processes and techniques, the 
          advantages and disadvantages vary much depending on the process. Below is a general 
          snapshot of the benefits and drawbacks of fabricating sheet metal, but to have a more 
          complete understanding of whether a particular sheet metal fabrication process is suitable for 
          your application, more research into each individual process is needed.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Benefits</h2>
        <div className="space-y-0">
          {benefitsData.map((benefit) => (
            <AccordionItem
              key={benefit.id}
              item={benefit}
              isExpanded={expandedSections[benefit.id]}
              onToggle={() => toggleSection(benefit.id)}
            />
          ))}
        </div>
      </div>

      {/* Limitations Section */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Limitations</h2>
        <div className="space-y-0">
          {limitationsData.map((limitation) => (
            <AccordionItem
              key={limitation.id}
              item={limitation}
              isExpanded={expandedSections[limitation.id]}
              onToggle={() => toggleSection(limitation.id)}
            />
          ))}
        </div>
      </div>

      {/* Applications Section */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Common sheet metal applications
        </h2>
        <div className="flex flex-wrap gap-2">
          {applications.map((app, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-none border-b-2 transition-colors duration-200 ${
                app.active
                  ? 'border-orange-500 text-orange-600 bg-orange-50'
                  : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              {app.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SheetMetalFabrication1;