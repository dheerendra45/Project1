import React from 'react';
import { ArrowRight } from 'lucide-react';
import img1 from "../../assets/knowledgehub/a1.jpg"
import img2 from "../../assets/knowledgehub/a2.jpg"
import img3 from "../../assets/knowledgehub/a3.jpg"
import img4 from "../../assets/knowledgehub/a4.jpg"
import img5 from "../../assets/knowledgehub/a5.jpg"
import img6 from "../../assets/knowledgehub/a6.jpg"

const SheetMetalGuide = () => {
  const sections = [
    {
      id: 1,
      title: "The basics",
      description: "How does sheet metal fabrication work? What are the benefits, drawbacks and main applications? And what is precision sheet metal fabrication?",
      image: img1,
      part: "part 1"
    },
    {
      id: 2,
      title: "Types of sheet metal fabrication",
      description: "An overview of the different types of sheet metal fabrication, including cutting, with and without shear, forming and stamping.",
      image: img2,
      part: "part 2"
    },
    {
      id: 3,
      title: "Design for sheet metal fabrication",
      description: "Best practices to follow when designing for sheet metal laser cutting and bending.",
      image: img3,
      part: "part 3"
    },
    {
      id: 4,
      title: "Materials & finishes",
      description: "Learn about the most commonly used materials and finishes in sheet metal fabrication.",
      image: img4,
      part: "part 4"
    },
    {
      id: 5,
      title: "Joining sheet metal parts",
      description: "A summary of the different ways to fasten sheet metal, including hardware fastenings, welding, brazing, soldering and adhesives.",
      image: img5,
      part: "part 5"
    },
    {
      id: 6,
      title: "Additional resources",
      description: "Explore related resources to learn more about sheet metal fabrication.",
      image: img6,
      part: "part 6"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-12">
        <div className="bg-white rounded-lg p-8 shadow-sm flex justify-center">
          <p className="text-orange-500 text-lg leading-relaxed max-w-2xl text-center">
            Learn how to effectively design sheet metal parts. This guide starts with 
            the basics and moves toward design best practices and advice on material 
            selection, finishings and fastenings, with a focus on two sheet metal 
            fabrication processes: bending and laser cutting.
          </p>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section) => (
          <div key={section.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            {/* Image Section */}
            <div className="relative h-64 bg-gray-200 flex items-center justify-center">
              {/* Part Label */}
              <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm font-medium">
                Part {section.id}
              </div>
              
              {/* Image */}
              <img 
                src={section.image} 
                alt={section.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {section.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {section.description}
              </p>
              
              {/* CTA Button */}
              <button className="flex items-center text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors duration-200 group">
                <span>Begin {section.part}</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Navigation */}
      <div className="mt-12 flex justify-center">
        <button className="text-orange-500 hover:text-orange-600 transition-colors duration-200">
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SheetMetalGuide;