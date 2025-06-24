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

const ProductsSection = () => {
  const [activeTabSteel, setActiveTabSteel] = useState('Carbon Steel');
  const [activeTabAluminium, setActiveTabAluminium] = useState('Aluminium Sheets');
  const [activeTabEnergy, setActiveTabEnergy] = useState('Solar Panels');
  const [steelSubTab, setSteelSubTab] = useState('Finished');
  const [aluminiumSubTab, setAluminiumSubTab] = useState('Finished');
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

  const steelTabs = ['Carbon Steel', 'Stainless Steel', 'Cold Rolled', 'Ferro alloy'];
  const aluminiumTabs = ['Aluminium Sheets', 'Aluminium Pipes', 'Aluminium Bars'];
  const energyTabs = ['Solar Panels', 'Wind Turbines', 'Energy Storage'];

  const carbonsteelFinishedProducts = [
    { title: 'Structural Steel', subtitle: 'VIEW PRODUCT', image: s1 },
    { title: 'TMT Bar', subtitle: 'VIEW PRODUCT', image: s2 },
    { title: 'Wire Rod', subtitle: 'VIEW PRODUCT', image: s3 },
    { title: 'Pipes And Hollow Section', subtitle: 'VIEW PRODUCT', image: s4 }
  ];
  const carbonsteelIntermediateProducts = [
    { title: 'Pellet', subtitle: 'VIEW PRODUCT', image: s1 },
    { title: 'Sponge Iron', subtitle: 'VIEW PRODUCT', image: s2 },
    { title: 'Pig Iron', subtitle: 'VIEW PRODUCT', image: s3 },
    { title: 'Billet', subtitle: 'VIEW PRODUCT', image: s4 }
  ];
  const stainlessSteelFinishedProducts = [
    { title: 'SS Wire Rod', subtitle: 'VIEW PRODUCT', image: s1 },
    { title: 'SS Wire', subtitle: 'VIEW PRODUCT', image: s2 },
    { title: 'Black Round Bar', subtitle: 'VIEW PRODUCT', image: s3 },
    { title: 'Bright Bar', subtitle: 'VIEW PRODUCT', image: s4 },
    { title: 'Flats/Patta', subtitle: 'VIEW PRODUCT', image: s4 }
  ];
  const stainlessSteelIntermediateProducts = [
    { title: 'Stainless Steel Billets', subtitle: 'VIEW PRODUCT', image: s1 },
  ];
  const ColdRolledProducts = [
    { title: 'Color Coated Sheets', subtitle: 'VIEW PRODUCT', image: s1 }
  ];
  const aluminiumFinishedProducts = [
    { title: 'Aluminium Foil', subtitle: 'VIEW PRODUCT', image: a1 },
    { title: 'Battery Foil', subtitle: 'VIEW PRODUCT', image: a2 },
  ];
  const aluminiumIntermediateProducts = [
    { title: 'Flat Rolled Products', subtitle: 'VIEW PRODUCT', image: a3 },
  ];
  const energyProducts = [
    { title: 'Captive Power', subtitle: 'VIEW PRODUCT', image: e1 },
    { title: 'Renewable Power', subtitle: 'VIEW PRODUCT', image: e2 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsVisible(prev => ({
          ...prev,
          [entry.target.dataset.section]: entry.isIntersecting
        }));
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

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

  const getSteelProducts = () => {
    if (activeTabSteel === 'Carbon Steel') {
      return steelSubTab === 'Finished' ? carbonsteelFinishedProducts : carbonsteelIntermediateProducts;
    }
    if (activeTabSteel === 'Stainless Steel') {
      return steelSubTab === 'Finished' ? stainlessSteelFinishedProducts : stainlessSteelIntermediateProducts;
    }
    if (activeTabSteel === 'Cold Rolled') return ColdRolledProducts;
    return []; // default empty
  };

  const getAluminiumProducts = () => {
    return aluminiumSubTab === 'Finished' ? aluminiumFinishedProducts : aluminiumIntermediateProducts;
  };

  const renderProductSection = (title, activeTab, setActiveTab, tabs, getProducts, icon, sectionRef, sectionKey, showSubmenu = false, subTab = '', setSubTab = () => {}) => {
    const products = getProducts();

    return (
      <div
        ref={sectionRef}
        data-section={sectionKey}
        className={`flex flex-col lg:flex-row bg-gray-100 mb-8 overflow-hidden rounded-lg transition-all duration-700 ease-out ${
          isVisible[sectionKey] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Left Info */}
        <div className="w-full lg:w-80 bg-gray-100 flex flex-col p-6 lg:p-8">
          <h3 className="text-3xl lg:text-4xl font-bold text-orange-500 mb-4 text-center lg:text-left">{title}</h3>
          <div className="mb-4 flex justify-center lg:justify-start">
            <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gray-300 overflow-hidden rounded-lg">
              <img src={icon} alt={title} className="w-full h-full object-cover" />
            </div>
          </div>
          <h4 className="text-base text-gray-800 mb-4 text-center lg:text-left">
            Wide range of {title.toLowerCase()} products
          </h4>
          <button className="text-gray-600 font-medium text-sm flex items-center hover:text-gray-800 justify-center lg:justify-start">
            Discover More <ChevronRight className="text-orange-500 w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Right Products */}
        <div className="flex-1 bg-gray-100 p-4 lg:p-6">
          {/* Tabs */}
          <div className="overflow-x-auto pb-2 mb-4 border-b border-gray-300 hide-scrollbar">
            <div className="inline-flex space-x-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    if (tab === 'Carbon Steel' || tab === 'Stainless Steel') setSteelSubTab('Finished');
                    if (title === 'ALUMINIUM') setAluminiumSubTab('Finished');
                  }}
                  className={`pb-2 text-sm font-medium ${
                    activeTab === tab ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Submenu if applicable */}
          {showSubmenu && (
            <div className="flex space-x-4 mb-4">
              {['Finished', 'Intermediate'].map((option) => (
                <button
                  key={option}
                  onClick={() => setSubTab(option)}
                  className={`px-3 py-1 rounded-full text-sm font-medium border ${
                    subTab === option
                      ? 'bg-orange-500 text-white border-orange-500'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product, idx) => (
              <div key={idx} className="text-center">
                <div className="w-full h-40 bg-gray-200 rounded-lg overflow-hidden mb-2">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                </div>
                <h5 className="text-sm font-semibold">{product.title}</h5>
                <p className="text-xs text-gray-500">{product.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div ref={heroRef} data-section="hero" className={`text-center py-10 transition-all duration-700 ${isVisible.hero ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <p className="text-orange-500 text-sm">Lorem ipsum dolor sit amet consectetur.</p>
        <h1 className="text-3xl font-medium text-gray-900">Shyam Metal Industries</h1>
        <p className="text-sm text-gray-600 max-w-3xl mx-auto mt-2">Velit suspendisse gravida turpis sodales sollicitudin tellus cursus neque sodales.</p>
      </div>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Our Products</h2>

        {/* Steels */}
        {renderProductSection(
          'STEELS',
          activeTabSteel,
          setActiveTabSteel,
          steelTabs,
          getSteelProducts,
          steel,
          steelsRef,
          'steels',
          activeTabSteel === 'Carbon Steel' || activeTabSteel === 'Stainless Steel',
          steelSubTab,
          setSteelSubTab
        )}

        {/* Aluminium */}
        {renderProductSection(
          'ALUMINIUM',
          activeTabAluminium,
          setActiveTabAluminium,
          aluminiumTabs,
          getAluminiumProducts,
          aluminium,
          aluminiumRef,
          'aluminium',
          true,
          aluminiumSubTab,
          setAluminiumSubTab
        )}

        {/* Energy */}
        {renderProductSection(
          'Energy & Others',
          activeTabEnergy,
          setActiveTabEnergy,
          energyTabs,
          () => energyProducts,
          energy,
          energyRef,
          'energy'
        )}
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ProductsSection;
