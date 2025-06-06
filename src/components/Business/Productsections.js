import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import steel from '../../assets/Business/steel.png';
import s1 from '../../assets/Business/s1.jpg';
import s2 from '../../assets/Business/s2.jpg';
import s3 from '../../assets/Business/s3.jpg';
import s4 from '../../assets/Business/s4.jpg';
import aluminium from '../../assets/Business/aluminium.png';
import a1 from '../../assets/Business/a1.jpg';
import a2 from '../../assets/Business/a2.jpg';
import a3 from '../../assets/Business/a3.jpg';
import a4 from '../../assets/Business/a4.jpg';
import energy from '../../assets/Business/energy.png';
import e1 from '../../assets/Business/e1.jpg';
import e2 from '../../assets/Business/e2.jpg';
import e3 from '../../assets/Business/e3.jpg';
import e4 from '../../assets/Business/e4.jpg';

const ProductsSection = () => {
  const [activeTabSteel, setActiveTabSteel] = useState('Carbon Steel');
  const [activeTabAluminium, setActiveTabAluminium] = useState('Aluminium Sheets');
  const [activeTabEnergy, setActiveTabEnergy] = useState('Solar Panels');
  const [isVisible, setIsVisible] = useState({
    hero: false,
    steels: false,
    aluminium: false,
    energy: false
  });

  const heroRef = useRef(null);
  const steelsRef = useRef(null);
  const aluminiumRef = useRef(null);
  const energyRef = useRef(null);

  const steelTabs = ['Carbon Steel', 'Stainless Steel', 'Cold Rolled'];
  const aluminiumTabs = ['Aluminium Sheets', 'Aluminium Pipes', 'Aluminium Bars'];
  const energyTabs = ['Solar Panels', 'Wind Turbines', 'Energy Storage'];

  const steelProducts = [
    { title: 'Pellentesque', subtitle: 'VIEW PRODUCT', image: s1 },
    { title: 'Vestibulum', subtitle: 'VIEW PRODUCT', image: s2 },
    { title: 'Pellentesque', subtitle: 'VIEW PRODUCT', image: s3 },
    { title: 'Lorem ipsum dolor', subtitle: 'VIEW PRODUCT', image: s4 }
  ];

  const aluminiumProducts = [
    { title: 'Lorem ipsum dolor sit amet consectetur.', subtitle: 'VIEW PRODUCT', image: a1 },
    { title: 'Lorem ipsum dolor', subtitle: 'VIEW PRODUCT', image: a2 },
    { title: 'Lorem ipsum dolor sit amet', subtitle: 'VIEW PRODUCT', image: a3 },
    { title: 'Lorem ipsum dolor', subtitle: 'VIEW PRODUCT', image: a4 }
  ];

  const energyProducts = [
    { title: 'Lorem ipsum dolor sit amet consectetur.', subtitle: 'VIEW PRODUCT', image: e1 },
    { title: 'Lorem ipsum dolor sit', subtitle: 'VIEW PRODUCT', image: e2 },
    { title: 'Lorem ipsum dolor sit amet', subtitle: 'VIEW PRODUCT', image: e3 },
    { title: 'Lorem ipsum dolor sit', subtitle: 'VIEW PRODUCT', image: e4 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsVisible(prev => ({
          ...prev,
          [entry.target.dataset.section]: entry.isIntersecting
        }));
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    if (heroRef.current) observer.observe(heroRef.current);
    if (steelsRef.current) observer.observe(steelsRef.current);
    if (aluminiumRef.current) observer.observe(aluminiumRef.current);
    if (energyRef.current) observer.observe(energyRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (steelsRef.current) observer.unobserve(steelsRef.current);
      if (aluminiumRef.current) observer.unobserve(aluminiumRef.current);
      if (energyRef.current) observer.unobserve(energyRef.current);
    };
  }, []);

  // Render product section template
  const renderProductSection = (title, activeTab, setActiveTab, tabs, products, icon, sectionRef, sectionKey) => {
    return (
      <div 
        ref={sectionRef}
        data-section={sectionKey}
        className={`flex flex-col lg:flex-row bg-gray-100 mb-8 overflow-hidden rounded-lg transition-all duration-700 ease-out ${
          isVisible[sectionKey] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Left Side - Info */}
        <div className="w-full lg:w-80 bg-gray-100 flex flex-col p-6 lg:p-8">
          <h3 className="text-3xl lg:text-4xl font-bold text-orange-500 mb-4 lg:mb-6 text-center lg:text-left">
            {title}
          </h3>
          
          {/* Product Image */}
          <div className="mb-4 lg:mb-6 flex justify-center lg:justify-start">
            <div className={`w-32 h-32 lg:w-40 lg:h-40 bg-gray-300 overflow-hidden rounded-lg transition-all duration-500 ${
              isVisible[sectionKey] ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}>
              <img src={icon} alt={`${title} products`} className="w-full h-full object-cover"/>
            </div>
          </div>
          
          <h4 className="text-base lg:text-lg font-normal text-gray-800 mb-4 lg:mb-6 text-center lg:text-left">
            Wide range of {title.toLowerCase()} products
          </h4>

          <button className={`text-gray-600 font-medium text-sm flex items-center hover:text-gray-800 transition-colors justify-center lg:justify-start ${
            isVisible[sectionKey] ? 'translate-x-0' : '-translate-x-4'
          } transition-transform duration-500 delay-200`}>
            Discover More <ChevronRight className="text-orange-500 w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Right Side - Product Tabs and Gallery */}
        <div className="flex-1 bg-gray-100 p-4 lg:p-6">
          {/* Tabs - Scrollable on mobile */}
          <div className={`overflow-x-auto whitespace-nowrap pb-2 mb-4 lg:mb-6 border-b border-gray-300 hide-scrollbar transition-opacity duration-500 ${
            isVisible[sectionKey] ? 'opacity-100 delay-100' : 'opacity-0'
          }`}>
            <div className="inline-flex space-x-4 lg:space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 px-1 text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'text-orange-500 border-b-2 border-orange-500'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid - Responsive columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 mb-4 lg:mb-6">
            {products.map((product, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-500 ${
                  isVisible[sectionKey] 
                    ? `opacity-100 translate-y-0 delay-${100 + (index * 100)}` 
                    : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: isVisible[sectionKey] ? `${index * 100}ms` : '0ms' }}
              >
                <div className="w-full h-32 sm:h-40 lg:h-48 bg-gray-300 mb-2 lg:mb-3 overflow-hidden rounded-lg">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h5 className="font-medium text-xs sm:text-sm text-gray-800 mb-1 lg:mb-2 line-clamp-2">
                  {product.title}
                </h5>
                <button className="text-gray-500 text-xs font-medium hover:text-gray-700 transition-colors">
                  {product.subtitle}
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Controls */}
          <div className={`flex justify-between items-center transition-opacity duration-500 ${
            isVisible[sectionKey] ? 'opacity-100 delay-500' : 'opacity-0'
          }`}>
            {/* Navigation Controls */}
            <div className="flex space-x-2">
              <button className="w-8 h-8 border border-gray-400 flex items-center justify-center hover:bg-gray-200 transition-colors rounded">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button className="w-8 h-8 border border-gray-400 flex items-center justify-center hover:bg-gray-200 transition-colors rounded">
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        ref={heroRef}
        data-section="hero"
        className={`text-center py-8 lg:py-12 px-4 transition-all duration-700 ${
          isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <p className="text-orange-500 font-normal text-sm mb-3 lg:mb-4">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <h1 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-4 lg:mb-6">
          Shyam Metal Industries
        </h1>
        <p className="text-sm text-gray-600 max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Velit suspendisse gravida turpis sodales sollicitudin tellus cursus neque sodales. Molestie netus pretium risus enim.
        </p>
      </div>

      {/* Products Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 lg:py-8">
        <h2 
          className={`text-xl lg:text-2xl font-bold text-center text-gray-800 mb-8 lg:mb-12 transition-all duration-700 ${
            isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible.hero ? '300ms' : '0ms' }}
        >
          Our Products
        </h2>

        {/* STEELS Section */}
        {renderProductSection(
          'STEELS', 
          activeTabSteel, 
          setActiveTabSteel, 
          steelTabs, 
          steelProducts, 
          steel,
          steelsRef,
          'steels'
        )}

        {/* ALUMINIUM Section */}
        {renderProductSection(
          'ALUMINIUM', 
          activeTabAluminium, 
          setActiveTabAluminium, 
          aluminiumTabs, 
          aluminiumProducts, 
          aluminium,
          aluminiumRef,
          'aluminium'
        )}

        {/* ENERGY Section */}
        {renderProductSection(
          'ENERGY', 
          activeTabEnergy, 
          setActiveTabEnergy, 
          energyTabs, 
          energyProducts, 
          energy,
          energyRef,
          'energy'
        )}
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default ProductsSection;
