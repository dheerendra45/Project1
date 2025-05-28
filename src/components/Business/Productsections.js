import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import steel from '../../assets//Business/steel.png'
import s1 from '../../assets/Business/s1.jpg'
import s2 from '../../assets/Business/s2.jpg'
import s3 from '../../assets/Business/s3.jpg'
import s4 from '../../assets/Business/s4.jpg'
import aluminium from '../../assets//Business/aluminium.png'
import a1 from '../../assets/Business/a1.jpg'
import a2 from '../../assets/Business/a2.jpg'
import a3 from '../../assets/Business/a3.jpg'
import a4 from '../../assets/Business/a4.jpg'


import energy from '../../assets//Business/energy.png'
import e1 from '../../assets/Business/e1.jpg'
import e2 from '../../assets/Business/e2.jpg'
import e3 from '../../assets/Business/e3.jpg'
import e4 from '../../assets/Business/e4.jpg'


const ProductsSection = () => {
  const [activeTabSteel, setActiveTabSteel] = useState('Carbon Steel');
  const [activeTabAluminium, setActiveTabAluminium] = useState('Aluminium Sheets');
  const [activeTabEnergy, setActiveTabEnergy] = useState('Solar Panels');
  
  const steelTabs = ['Carbon Steel', 'Stainless Steel', 'Cold Rolled'];
  const aluminiumTabs = ['Aluminium Sheets', 'Aluminium Pipes', 'Aluminium Bars'];
  const energyTabs = ['Solar Panels', 'Wind Turbines', 'Energy Storage'];
  
  const steelProducts = [
    {
      title: 'Pellentesque',
      subtitle: 'VIEW PRODUCT',
      image: s1
    },
    {
      title: 'Vestibulum',
      subtitle: 'VIEW PRODUCT',
      image: s2
    },
    {
      title: 'Pellentesque',
      subtitle: 'VIEW PRODUCT',
      image: s3
    },
    {
      title: 'Lorem ipsum dolor',
      subtitle: 'VIEW PRODUCT',
      image: s4
    }
  ];

  const aluminiumProducts = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur.',
      subtitle: 'VIEW PRODUCT',
      image: a1
    },
    {
      title: 'Lorem ipsum dolor',
      subtitle: 'VIEW PRODUCT',
      image: a2
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      subtitle: 'VIEW PRODUCT',
      image: a3
    },
    {
      title: 'Lorem ipsum dolor',
      subtitle: 'VIEW PRODUCT',
      image: a4
    }
  ];

  const energyProducts = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur.',
      subtitle: 'VIEW PRODUCT',
      image: e1
    },
    {
      title: 'Lorem ipsum dolor sit',
      subtitle: 'VIEW PRODUCT',
      image: e2
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      subtitle: 'VIEW PRODUCT',
      image: e3
    },
    {
      title: 'Lorem ipsum dolor sit',
      subtitle: 'VIEW PRODUCT',
      image: e4
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="text-center py-12 px-4">
        <p className="text-orange-500 font-normal text-sm mb-4">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <h1 className="text-4xl font-medium text-gray-900 mb-6">
          Shyam Metal Industries
        </h1>
        <p className="text-sm text-gray-600 max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Velit suspendisse gravida turpis sodales sollicitudin tellus cursus neque sodales. Molestie netus pretium risus enim.
        </p>
      </div>

      {/* Products Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">
          Our Products
        </h2>

        {/* STEELS Section */}
        <div className="flex bg-gray-100 mb-8 overflow-hidden">
          {/* Left Side - Steels Info */}
          <div className="w-80 bg-gray-100 flex flex-col justify-center p-8">
            <h3 className="text-4xl font-bold text-orange-500 mb-6">
              STEELS
            </h3>
            
            {/* Product Image */}
            <div className="mb-6 flex justify-start">
              <div className="w-40 h-40 bg-gray-300 overflow-hidden">
               <img src={steel} alt="Steel products" className="w-full h-full object-cover"/>
              </div>
            </div>
            
            <h4 className="text-lg font-normal text-gray-800 mb-6">
              Wide range of Steel products
            </h4>

            <button className="text-gray-600 font-medium text-sm flex items-center hover:text-gray-800 transition-colors">
              Discover More <ChevronRight className="text-orange-500 w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Right Side - Product Tabs and Gallery */}
          <div className="flex-1 bg-gray-100 p-6">
            {/* Tabs */}
            <div className="flex space-x-8 mb-6 border-b border-gray-300">
              {steelTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTabSteel(tab)}
                  className={`pb-3 text-sm font-medium transition-colors ${
                    activeTabSteel === tab
                      ? 'text-orange-500 border-b-2 border-orange-500'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {steelProducts.map((product, index) => (
                <div key={index} className="text-center">
                  <div className="w-full h-30 bg-gray-300 mb-3 overflow-hidden">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover"/>
                  </div>
                  <h5 className="font-medium text-sm text-gray-800 mb-2 leading-tight">
                    {product.title}
                  </h5>
                  <button className="text-gray-500 text-xs font-medium hover:text-gray-700 transition-colors">
                    {product.subtitle}
                  </button>
                </div>
              ))}
            </div>

            {/* Bottom Controls */}
            <div className="flex justify-between items-center">
              {/* Navigation Controls */}
              <div className="flex space-x-2">
                <button className="w-8 h-8 border border-gray-400 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
                <button className="w-8 h-8 border border-gray-400 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-orange-500"></div>
                <div className="w-2 h-2 bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* ALUMINIUM Section */}
        <div className="flex bg-gray-100 mb-8 overflow-hidden">
          {/* Left Side - Aluminium Info */}
          <div className="w-80 bg-gray-100 flex flex-col justify-center p-8">
            <h3 className="text-4xl font-bold text-orange-500 mb-6">
              ALUMINUM
            </h3>
            
            {/* Product Image */}
            <div className="mb-6 flex justify-start">
              <div className="w-40 h-40 bg-gray-300 overflow-hidden">
                <img src={aluminium} alt="Aluminium products" className="w-full h-full object-cover"/>
              </div>
            </div>
            
            <h4 className="text-lg font-normal text-gray-800 mb-6">
              Wide range of fitting products
            </h4>

            <button className="text-gray-600 font-medium text-sm flex items-center hover:text-gray-800 transition-colors">
              Discover More <ChevronRight className="text-orange-500 w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Right Side - Product Tabs and Gallery */}
          <div className="flex-1 bg-gray-100 p-6">
            {/* Tabs */}
            <div className="flex space-x-8 mb-6 border-b border-gray-300">
              {aluminiumTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTabAluminium(tab)}
                  className={`pb-3 text-sm font-medium transition-colors ${
                    activeTabAluminium === tab
                      ? 'text-orange-500 border-b-2 border-orange-500'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {aluminiumProducts.map((product, index) => (
                <div key={index} className="text-center">
                  <div className="w-full h-30 bg-gray-300 mb-3 overflow-hidden">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover"/>
                  </div>
                  <h5 className="font-medium text-sm text-gray-800 mb-2 leading-tight">
                    {product.title}
                  </h5>
                  <button className="text-gray-500 text-xs font-medium hover:text-gray-700 transition-colors">
                    {product.subtitle}
                  </button>
                </div>
              ))}
            </div>

            {/* Bottom Controls */}
            <div className="flex justify-between items-center">
              {/* Navigation Controls */}
              <div className="flex space-x-2">
                <button className="w-8 h-8 border border-gray-400 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
                <button className="w-8 h-8 border border-gray-400 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-orange-500"></div>
                <div className="w-2 h-2 bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* ENERGY Section */}
        <div className="flex bg-gray-100 overflow-hidden">
          {/* Left Side - Energy Info */}
          <div className="w-80 bg-gray-100 flex flex-col justify-center p-8">
            <h3 className="text-4xl font-bold text-orange-500 mb-6">
              ENERGY
            </h3>
            
            {/* Product Image */}
            <div className="mb-6 flex justify-start">
              <div className="w-40 h-40 bg-gray-300 overflow-hidden">
               <img src={energy} alt="Energy products" className="w-full h-full object-cover"/>
              </div>
            </div>
            
            <h4 className="text-lg font-normal text-gray-800 mb-6">
              Wide range of Valves products
            </h4>

            <button className="text-gray-600 font-medium text-sm flex items-center hover:text-gray-800 transition-colors">
              Discover More <ChevronRight className="text-orange-500 w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Right Side - Product Tabs and Gallery */}
          <div className="flex-1 bg-gray-100 p-6">
            {/* Tabs */}
            <div className="flex space-x-8 mb-6 border-b border-gray-300">
              {energyTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTabEnergy(tab)}
                  className={`pb-3 text-sm font-medium transition-colors ${
                    activeTabEnergy === tab
                      ? 'text-orange-500 border-b-2 border-orange-500'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {energyProducts.map((product, index) => (
                <div key={index} className="text-center">
                  <div className="w-full h-30 bg-gray-300 mb-3 overflow-hidden">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover"/>
                  </div>
                  <h5 className="font-medium text-sm text-gray-800 mb-2 leading-tight">
                    {product.title}
                  </h5>
                  <button className="text-gray-500 text-xs font-medium hover:text-gray-700 transition-colors">
                    {product.subtitle}
                  </button>
                </div>
              ))}
            </div>

            {/* Bottom Controls */}
            <div className="flex justify-between items-center">
              {/* Navigation Controls */}
              <div className="flex space-x-2">
                <button className="w-8 h-8 border border-gray-400 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
                <button className="w-8 h-8 border border-gray-400 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-orange-500"></div>
                <div className="w-2 h-2 bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;