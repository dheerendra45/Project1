import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// For demo purposes, using a placeholder for steelimg
const steelimg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRjM3MzE2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iNjAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2Ij5TdGVlbCBQcm9kdWN0PC90ZXh0Pgo8L3N2Zz4K';

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState('Carbon Steel');
  
  const tabs = ['Carbon Steel', 'Stainless Steel', 'Cold Rolled'];
  
  const products = [
    {
      title: 'Pellentesque',
      image: steelimg
    },
    {
      title: 'Vestibulum',
      image: steelimg
    },
    {
      title: 'Pellentesque',
      image: steelimg
    },
    {
      title: 'Lorem ipsum dolor',
      image: steelimg
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="text-center py-12 px-4">
       <p className="text-orange-500 font-normal text-[15.15px] leading-[21.21px] tracking-[0.08px] text-center font-['Helvetica_Neue'] mb-4">
  Lorem ipsum dolor sit amet consectetur.
</p>

       <h1 className="text-[42.08px] leading-[31.98px] tracking-[-1.26px] font-medium text-center text-gray-900 mb-6 font-['Helvetica_Neue']">
  Shyam Metal Industries
</h1>

       <p className="text-[13.47px] leading-[21.55px] tracking-[0.08px] font-normal text-center text-gray-600 max-w-4xl mx-auto font-['Helvetica_Neue']">
  Lorem ipsum dolor sit amet consectetur. Velit suspendisse gravida turpis sodales sollicitudin tellus cursus neque sodales. Molestie netus pretium risus enim.
</p>

      </div>

      {/* Products Section */}
      <div className="px-20 py-8" style={{ width: '1200px', margin: '0 auto' }}>
        <h2 className="text-[22px] leading-[24.2px] font-bold text-center text-gray-800 mb-12 font-['Plus_Jakarta_Sans']">
  Our Products
</h2>

        <div className="flex gap-0">
          {/* Left Side - Steels Info */}
          <div className="bg-gray-200 flex flex-col justify-center" style={{ width: '300px', height: '374.53px' }}>
            <div className="px-6 py-8 text-center">
              <h3 className="text-[42px] leading-[100%] font-medium text-orange-500 mb-6 font-['LEMON_MILK']">
  STEELS
</h3>

              
              <div className="mb-6 flex justify-center">
                <div className="w-48 h-28 bg-white rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src={steelimg} 
                    alt="Steel Products"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <h4 className="text-[25.25px] leading-[24.41px] font-normal tracking-[-2.02px] text-gray-800 mb-4 text-center font-['Helvetica_Neue']">
  Wide range of Steel products
</h4>

              <button className=" text-[#666666] font-medium text-[21.04px] leading-[20.2px] tracking-[-1.05px] font-['Helvetica_Neue'] flex items-center justify-center mx-auto px-4 py-2 rounded hover:bg-[#555555] transition-colors">
  Discover More <ChevronRight  className=" text-orange-500 w-4 h-4 ml-2" />
</button>

            </div>
          </div>

          {/* Right Side - Product Tabs and Gallery */}
          <div className="flex-1 bg-gray-200 p-6" style={{ height: '374.53px' }}>
            {/* Tabs */}
            <div className="flex space-x-6 mb-4 border-b border-gray-300">
              {tabs.map((tab) => (
               <button
  key={tab}
  onClick={() => setActiveTab(tab)}
  className={`pb-2 px-1 border-b-2 transition-colors font-['Helvetica_Neue'] font-bold text-[16px] leading-[27.2px] ${
    activeTab === tab
      ? 'text-orange-500 border-orange-500'
      : 'text-gray-500 border-transparent hover:text-gray-700'
  }`}
>
  {tab}
</button>

              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-4 gap-3 mb-4">
              {products.map((product, index) => (
                <div key={index} className="text-center">
                  <div className="w-full h-24 bg-white rounded-lg mb-2 overflow-hidden shadow-sm">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                 <h5 className="font-bold text-[25.25px] leading-[24.41px] tracking-[-0.76px] text-center text-gray-800 font-['Helvetica_Neue'] mb-1 px-1">
  {product.title}
</h5>

                  <button className="text-[#666666] font-bold text-[13.47px] leading-[12.62px] tracking-[-0.4px] font-['Helvetica_Neue'] flex items-center justify-center mx-auto hover:text-[#444444] transition-colors">
  VIEW PRODUCT <ChevronRight className="w-3 h-3 ml-1 text-orange-500" />
</button>

                </div>
              ))}
            </div>

            {/* Bottom Controls Container */}
            <div className="flex justify-between items-center mt-auto">
              {/* Navigation Controls */}
              <div className="flex space-x-2">
                <button className="w-7 h-7 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="w-7 h-7 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;