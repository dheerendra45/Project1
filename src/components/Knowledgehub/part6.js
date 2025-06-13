import React from 'react';
import { ArrowRight, ExternalLink, Download } from 'lucide-react';
import a2 from "../../assets/knowledgehub/a2.jpg"
import a1 from '../../assets/knowledgehub/a1.jpg'
import a3 from '../../assets/knowledgehub/a3.jpg'
const ResourcesComponent = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Part 6</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional resources</h2>
        
        <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
          <p>
            In this guide we touched on everything you need to get started with sheet 
            metal fabrication - but there's plenty more to learn.
          </p>
          <p>
            Good sheet metal design goes beyond basic guidelines and considers the 
            type of sheet metal fabrication process, material, finish, fastening, and 
            tailors all these factors to the specific function.
          </p>
          <p>
            Here are some useful resources on sheet metal fabrication, as well as 
            other resources related manufacturing if you want to delve deeper.
          </p>
        </div>
      </div>

      {/* More on sheet metal fabrication section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          More on sheet metal fabrication
        </h3>

        <div className="space-y-6">
          {/* Introduction to laser cutting */}
          <div className="flex items-center justify-between py-6 border-b border-gray-200">
            <div className="flex-1">
              <h4 className="text-lg text-gray-900 mb-3">Introduction to laser cutting</h4>
              <button className="flex items-center text-orange-600 hover:text-orange-700 font-medium">
                Read article
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            <div className="ml-8">
              <img 
                src={a3}
                alt="Laser cutting machine"
                className="w-24 h-16 rounded object-cover"
              />
            </div>
          </div>

          {/* Following DFM guidelines */}
          <div className="flex items-center justify-between py-6 border-b border-gray-200">
            <div className="flex-1">
              <h4 className="text-lg text-gray-900 mb-3">Following DFM guidelines for working with sheet metal</h4>
              <button className="flex items-center text-orange-600 hover:text-orange-700 font-medium">
                External article
                <ExternalLink className="ml-2 w-4 h-4" />
              </button>
            </div>
            <div className="ml-8">
              <img 
                src={a1}
                alt="Sheet metal profiles"
                className="w-24 h-16 rounded object-cover"
              />
            </div>
          </div>

          {/* Overview of sheet metal cutting processes */}
          <div className="flex items-center justify-between py-6 border-b border-gray-200">
            <div className="flex-1">
              <h4 className="text-lg text-gray-900 mb-3">Overview of sheet metal cutting processes with detailed diagrams</h4>
              <button className="flex items-center text-orange-600 hover:text-orange-700 font-medium">
                External article
                <ExternalLink className="ml-2 w-4 h-4" />
              </button>
            </div>
            <div className="ml-8">
              <img 
                src={a2}
                alt="Metal cutting process"
                className="w-24 h-16 rounded object-cover"
              />
            </div>
          </div>
        </div>

        {/* Explore capabilities CTA */}
        <div className="mt-8 bg-black text-white rounded-lg overflow-hidden">
          <div className="flex items-center">
            <div className="flex-1 p-6">
              <h4 className="text-lg font-medium mb-4">Explore our sheet metal fabrication capabilities</h4>
              <button className="flex items-center text-white hover:text-gray-200 font-medium">
                Go to page
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            <div className="w-32 h-24">
              <img 
                src={a1}
                alt="Sheet metal fabrication"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Resources related to other manufacturing processes */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8">
          Resources related to other manufacturing processes
        </h3>

        <div className="space-y-6">
          {/* How to design parts for CNC machining */}
          <div className="flex items-center justify-between py-6 border-b border-gray-200">
            <div className="flex-1">
              <h4 className="text-lg text-gray-900 mb-3">How to design parts for CNC machining</h4>
              <button className="flex items-center text-orange-600 hover:text-orange-700 font-medium">
                Read article
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            <div className="ml-8">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=150&h=100&fit=crop&crop=center" 
                alt="CNC machined parts"
                className="w-24 h-16 rounded object-cover"
              />
            </div>
          </div>

          {/* Producing metal parts */}
          <div className="flex items-center justify-between py-6">
            <div className="flex-1">
              <h4 className="text-lg text-gray-900 mb-3">Producing metal parts: CNC machining vs additive manufacturing</h4>
              <button className="flex items-center text-orange-600 hover:text-orange-700 font-medium">
                Download PDF
                <Download className="ml-2 w-4 h-4" />
              </button>
            </div>
            <div className="ml-8">
              <img 
                src="https://images.unsplash.com/photo-1562813733-b31f71025d54?w=150&h=100&fit=crop&crop=center" 
                alt="Metal manufacturing"
                className="w-24 h-16 rounded object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesComponent;