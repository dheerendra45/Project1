import React, { useState, useEffect, useRef } from "react";

import herobg from '../assets/hero-background.png';
import companylogo from '../assets/products/image28.png'
// Import the new hero 
import bgImg from '../assets/image146.png'
import FactoryIcon from '../assets/factory-icon.png';
import RevenueIcon from '../assets/revenue-icon.png';
import TruckIcon from '../assets/truck-icon.png';
import IndiaMapIcon from '../assets/india-map-icon.png';
import Start from "../components/start.jsx";


const Hero = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeBusinessSub, setActiveBusinessSub] = useState(null);
  const [activeNestedSub, setActiveNestedSub] = useState(null);
  
  // Stock price state
  const [stockData, setStockData] = useState({
    symbol: "SHYAMMETL.NS",
    shortName: "SHYAM METALICS AND ENGY L",
    currentPrice: 0,
    high: 0,
    low: 0,
    prevClose: 0
  });
  const [stockLoading, setStockLoading] = useState(true);
  const [stockError, setStockError] = useState(null);
  
  // Timeout refs for delayed closing
  const hoverTimeoutRef = useRef(null);
  const businessSubTimeoutRef = useRef(null);
  const nestedSubTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  // Function to fetch stock data
  const fetchStockData = async () => {
    try {
      setStockLoading(true);
      setStockError(null);
      
      // Replace with your actual backend API endpoint
      const response = await fetch('https://project1-backend-rose.vercel.app/api/stock/price/SHYAMMETL.NS'); // Update this URL to your backend endpoint
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setStockData(data);
    } catch (error) {
      console.error('Error fetching stock data:', error);
      setStockError(error.message);
    } finally {
      setStockLoading(false);
    }
  };

  // Calculate price change and percentage
  const priceChange = stockData.currentPrice - stockData.prevClose;
  const priceChangePercent = stockData.prevClose > 0 ? ((priceChange / stockData.prevClose) * 100) : 0;
  const isPositive = priceChange >= 0;

  const navItems = [
    { 
      title: 'ABOUT US', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Company Overview', href: '/companyoverview' },
        { name: 'Leadership', href: '/leadership' },
        { name: 'Awards and Achievements', href: '/awardsAndachievements' },
        { name: "Manufacturing Unit", href: "/manufacturing" },
        { name: "Testimonials", href: "/testimonials" },
        { name: 'News and Events', href: '/newsandevents' }
      ]
    },
    { 
      title: 'BUSINESSES', 
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Business Overview',
          href: '/business',
        },
        {
          name: 'Steel',
          href: '#',
          subItems: [
            {
              name: 'Carbon Steel',
              href: '/carbon_steel',
            },
            {
              name: 'Cold Rolled',
              href: '#',
              categories: [
                { name: 'Intermediate Products', items: ['Color Coated Sheets'] },
                { name: 'Finished Products', items: ['Stainless Steel Billets'] },
                { name: 'Intermediate Products', items: ['SS Wire Rod'] }
              ]
            },
            {
              name: 'Stainless Steel',
              href: '#',
              categories: [
                { name: 'Intermediate Products', items: ['SS Wire Rod'] },
                { name: 'Finished Products', items: ['Black Round Bar', 'Bright Bar', 'Flats/Patta'] }
              ]
            },
            { name: 'Specialty Alloys', href: '#' }
          ]
        },
        {
          name: 'Power',
          href: '#',
          subItems: [
            { name: 'Captive Power', href: '#' },
            { name: 'Renewable Power', href: '#' }
          ]
        },
        {
          name: 'Aluminium',
          href: '#',
          subItems: [
            {
              name: 'Intermediate Products',
              href: '#',
              categories: [
                { name: 'Flat Rolled Products', items: ['Aluminium Foil'] }
              ]
            },
            {
              name: 'Finished Products',
              href: '#',
              categories: [
                { name: 'Battery Foil', items: [] }
              ]
            }
          ]
        }
      ]
    },
    { 
      title: 'INVESTORS', 
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Financials & Disclosures',
          href: '#',
          subItems: [
            { name: 'Financial Performance', href: '#' },
            { name: 'Financial Statements', href: '#' },
            { name: 'Stock Performance Data', href: '#' },
            { name: 'Regulatory Disclosures', href: '#' },
            { name: 'Company Disclosures (SEBI LODR)', href: '#' },
            { name: 'Credit Rating', href: '#' }
          ]
        },
        {
          name: 'Corporate Governance',
          href: '#',
          subItems: [
            { name: 'Policies', href: '#' },
            { name: 'Corporate Governance', href: '#' },
            { name: 'Familiarization Program for Independent Directors', href: '#' }
          ]
        },
        {
          name: 'Shareholder Information',
          href: '#',
          subItems: [
            { name: 'AGM', href: '#' },
            { name: 'Company Notices', href: '#' },
            { name: 'Stock Exchange Intimations', href: '#' },
            { name: 'Shareholder Information', href: '#' }
          ]
        },
        {
          name: 'Investor Communication',
          href: '#',
          subItems: [
            { name: 'Investor Presentations (Quarterly & Corporate)', href: '#' },
            { name: 'Press Releases & Announcements (Quarterly + Other Key Updates)', href: '#' },
            { name: 'Investor Contact (Only email ID, no phone number)', href: '#' }
          ]
        },
        {
          name: 'Investor Helpdesk',
          href: '#',
          subItems: []
        }
      ]
    },
    { 
      title: 'COMMUNITY', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'CSR', href: '/csr' },
        { name: 'Knowledge Hub', href: '/knowledgehub' },
       { name: 'Blogs', href: '/blogs' },
        { name: 'FAQ', href: '/faq-Page' }
      ]
    },
    { 
      title: 'SUSTAINABILITY', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'ESG Profile', href: '/esg_profile' },
        { name: 'Environment Compliance', href: '/environmentcompliance' }
      ]
    },
    { 
      title: 'CAREERS', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Life at Shyam', href: '/lifeshyam' },
        { name: 'Job Opportunity', href: '/jobopportunity' },
        { name: 'Current Opening', href: '/currentopening' }
      ]
    },
    { 
      title: 'CONTACT US', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Contact Form', href: '/ContactPage' },
        { name: 'Company Location', href: '/LocationPage' }
      ]
    },
  ];

  // Clear all timeouts
  const clearAllTimeouts = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (businessSubTimeoutRef.current) {
      clearTimeout(businessSubTimeoutRef.current);
      businessSubTimeoutRef.current = null;
    }
    if (nestedSubTimeoutRef.current) {
      clearTimeout(nestedSubTimeoutRef.current);
      nestedSubTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = (index) => {
    clearAllTimeouts();
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    clearAllTimeouts();
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveBusinessSub(null);
      setActiveNestedSub(null);
    }, 150);
  };

  const handleDropdownEnter = () => {
    clearAllTimeouts();
  };

  const handleDropdownLeave = () => {
    clearAllTimeouts();
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveBusinessSub(null);
      setActiveNestedSub(null);
    }, 150);
  };

  const handleBusinessSubEnter = (businessIndex) => {
    clearTimeout(businessSubTimeoutRef.current);
    clearTimeout(nestedSubTimeoutRef.current);
    setActiveBusinessSub(businessIndex);
    setActiveNestedSub(null);
  };

  const handleBusinessSubLeave = () => {
    businessSubTimeoutRef.current = setTimeout(() => {
      setActiveBusinessSub(null);
      setActiveNestedSub(null);
    }, 150);
  };

  const handleNestedSubEnter = (nestedIndex) => {
    clearTimeout(nestedSubTimeoutRef.current);
    setActiveNestedSub(nestedIndex);
  };

  const handleNestedSubLeave = () => {
    nestedSubTimeoutRef.current = setTimeout(() => {
      setActiveNestedSub(null);
    }, 150);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      clearAllTimeouts();
      setActiveDropdown(null);
      setActiveBusinessSub(null);
      setActiveNestedSub(null);
    }
  };

  const handleNavigation = (href) => {
    if (href && href !== '#') {
      window.location.href = href;
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    
    // Fetch stock data on component mount
    fetchStockData();
    
    // Set up interval to fetch stock data every 30 seconds (adjust as needed)
    const stockInterval = setInterval(fetchStockData, 5000);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      clearAllTimeouts();
      clearInterval(stockInterval);
    };
  }, []);

  return (
    <div className="h-[815px] bg-gray-300 mx-auto overflow-hidden">
      {/* <Start/> */}
      
      {/* Top Navbar */}
      <div
        className="relative w-full h-[47px] text-white text-sm overflow-hidden"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Black semi-transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        {/* Content on top */}
        <div className="relative z-10 w-full h-full flex items-center justify-between px-6">
          {/* Stock Price Display */}
          <div className="flex items-center ml-7">
            {stockLoading ? (
              <span className="font-inter font-normal text-[12px] leading-[18px] animate-pulse">
                Loading...
              </span>
            ) : stockError ? (
              <span className="font-inter font-normal text-[12px] leading-[18px] text-red-400">
                Error loading price
              </span>
            ) : (
              <div className="flex items-center gap-2">
                <span className="font-inter font-normal text-[12px] leading-[18px]">
                 current price
                </span>
                <span className="font-inter font-semibold text-[12px] leading-[18px]">
                  ₹{stockData.currentPrice.toFixed(2)}
                </span>
                <span className={`font-inter font-normal text-[12px] leading-[18px] ${
                  isPositive ? 'text-green-400' : 'text-red-400'
                }`}>
                  {isPositive ? '+' : ''}{priceChange.toFixed(2)} ({isPositive ? '+' : ''}{priceChangePercent.toFixed(2)}%)
                </span>
              </div>
            )}
          </div>
          
          <div className="flex items-center">
            <span className="font-roboto font-extrabold text-[14px] leading-[21px]">
              Lorem Ipsum Dollar Site ent
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 font-sans font-medium text-[14px] leading-[19px] tracking-normal">
              Employee Login 
              <svg className="w-3 h-3 fill-current" viewBox="0 0 10 6">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="flex items-center gap-1 font-sans font-medium text-[14px] leading-[19px] tracking-normal">
              🌐 Global(English) 
              <svg className="w-3 h-3 fill-current" viewBox="0 0 10 6">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Middle Navbar */}
      <div 
        ref={dropdownRef}
        className="w-full h-[57px] flex items-center justify-between px-8 relative z-30 mt-0"
        style={{
          background: '#C0C0C0',
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <div className=" text-white px-3 py-2 rounded text-sm font-bold">
            <img src={companylogo} className="h-[70px] w-[125px]"/>
          </div>
        </div>
        
        {/* Navigation Menu */}
        <div className="flex gap-8 text-black text-sm font-medium">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative dropdown-container"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="cursor-pointer hover:text-orange-400 flex items-center gap-1 font-roboto font-medium text-[13.19px] leading-[19.79px] tracking-normal align-middle uppercase transition-colors duration-200 text-black">
                {item.title}
                {item.hasDropdown && (
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 10 6">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </span>

              {/* Dropdown Menu */}
              {item.hasDropdown && activeDropdown === index && (
                <div 
                  className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 z-[9999] min-w-[250px] mt-1"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.title === 'BUSINESSES' || item.title === 'INVESTORS' ? (
                    // Business dropdown with hover sub-menus
                    <div className="space-y-1">
                      {item.dropdownItems.map((business, businessIndex) => (
                        <div 
                          key={businessIndex} 
                          className="relative"
                          onMouseEnter={() => handleBusinessSubEnter(businessIndex)}
                          onMouseLeave={handleBusinessSubLeave}
                        >
                          {/* Check if it's Business Overview (which should be directly clickable) */}
                          {business.name === 'Business Overview' ? (
                            <a
                              href={business.href}
                              className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 text-sm cursor-pointer font-medium transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavigation(business.href);
                              }}
                            >
                              <span>{business.name}</span>
                            </a>
                          ) : (
                            <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 text-sm cursor-pointer transition-colors duration-200 border-b border-gray-100 last:border-b-0">
                              <span className="font-medium">{business.name}</span>
                              {business.subItems && business.subItems.length > 0 && (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              )}
                            </div>
                          )}
                          
                          {/* Sub-menu for each business/investor */}
                          {activeBusinessSub === businessIndex && business.subItems && business.subItems.length > 0 && (
                            <div 
                              className="absolute left-full top-0 bg-white shadow-lg rounded-md py-2 z-[10000] min-w-[300px] max-w-[500px] ml-1"
                              onMouseEnter={() => clearTimeout(businessSubTimeoutRef.current)}
                              onMouseLeave={handleBusinessSubLeave}
                            >
                              {business.subItems.map((subItem, subIndex) => (
                                <div 
                                  key={subIndex} 
                                  className="relative"
                                  onMouseEnter={() => handleNestedSubEnter(subIndex)}
                                  onMouseLeave={handleNestedSubLeave}
                                >
                                  {/* Make this clickable for items with href */}
                                  {subItem.href && subItem.href !== '#' ? (
                                    <a
                                      href={subItem.href}
                                      className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 text-sm cursor-pointer font-medium border-b border-gray-100 last:border-b-0 transition-colors duration-200"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation(subItem.href);
                                      }}
                                    >
                                      <span>{subItem.name}</span>
                                      {subItem.categories && (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                      )}
                                    </a>
                                  ) : (
                                    <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 text-sm cursor-pointer font-medium border-b border-gray-100 last:border-b-0 transition-colors duration-200">
                                      <span>{subItem.name}</span>
                                      {subItem.categories && (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                      )}
                                    </div>
                                  )}
                                  
                                  {/* Nested sub-menu for categories */}
                                  {activeNestedSub === subIndex && subItem.categories && (
                                    <div 
                                      className="absolute left-full top-0 bg-white shadow-lg rounded-md py-2 z-[10001] min-w-[250px] ml-1"
                                      onMouseEnter={() => clearTimeout(nestedSubTimeoutRef.current)}
                                      onMouseLeave={handleNestedSubLeave}
                                    >
                                      {subItem.categories.map((category, catIndex) => (
                                        <div key={catIndex} className="space-y-1">
                                          <div className="px-4 py-2 text-sm font-medium text-orange-600 bg-orange-50 border-b border-gray-100">
                                            {category.name}
                                          </div>
                                          {category.items.map((productItem, prodIndex) => (
                                            <a 
                                              key={prodIndex}
                                              href="#" 
                                              className="block px-6 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200"
                                            >
                                              • {productItem}
                                            </a>
                                          ))}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Regular dropdown layout for other menus
                    <div className="space-y-1">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 text-sm transition-colors duration-200"
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigation(dropdownItem.href);
                          }}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-black placeholder-black text-sm w-48 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="bg-orange-500 rounded-full p-2">
            <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V4z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-full mt-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
        />
        <img
          src={herobg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Updated Content */}
     <div className="relative z-20 px-4 py-8 flex items-center justify-center min-h-screen text-white">
  {/* Semi-transparent black content area */}
  <div className="bg-black bg-opacity-40 w-full max-w-7xl mx-auto rounded-xl p-8 flex flex-col gap-6">
    
    {/* Heading and paragraph */}
    <div className="w-full md:w-[70%]">
      <h1 className="text-[60px] md:text-[52px] leading-tight font-space-grotesk font-bold text mb-4">
        A Steel Company With  <br />Integrated Operations.
      </h1>
      <p className="text-lg mb-6">
        Shyam Metalics is the 6th largest metal producing company <br />
        based in India providing end-to-end solutions with
      </p>
    </div>

    {/* Button + Stats in same row */}
    <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-6">
      {/* Button */}
      <div className="w-full md:w-[30%]">
        <button className="bg-orange-500 text-white px-6 py-3 rounded border border-white hover:bg-orange-600 transition w-full md:w-auto">
          Explore More
        </button>
      </div>

      {/* Stats Box */}
      <div className="w-full md:w-[100%] bg-black bg-opacity-50 rounded-xl p-6 flex flex-wrap justify-between items-center gap-6">
        {/* Stat 1 */}
        <div className="flex items-center gap-3 w-[45%] md:w-auto">
          <img src={FactoryIcon} alt="Factory Icon" className="w-10 h-10" />
          <div>
            <h2 className="text-xl font-bold">15.15 MTPA</h2>
            <p className="text-sm">Installed Capacity</p>
          </div>
        </div>
        {/* Stat 2 */}
        <div className="flex items-center gap-3 w-[45%] md:w-auto">
          <img src={RevenueIcon} alt="Revenue Icon" className="w-10 h-10" />
          <div>
            <h2 className="text-xl font-bold">₹ 15,680 Cr</h2>
            <p className="text-sm">Revenue '24</p>
          </div>
        </div>
        {/* Stat 3 */}
        <div className="flex items-center gap-3 w-[45%] md:w-auto">
          <div>
            <h2 className="text-xl font-bold">2,500+</h2>
            <p className="text-sm">Delivered Nationwide</p>
          </div>
        </div>
        {/* Stat 4 */}
        <div className="flex items-center gap-3 w-[45%] md:w-auto">
          <img src={IndiaMapIcon} alt="India Map Icon" className="w-10 h-10" />
          <div>
            <h2 className="text-xl font-bold">8</h2>
            <p className="text-sm">Pan-India Presence</p>
          </div>
        </div>
      </div>
    </div>

    {/* Breadcrumb */}
    <div className="text-sm flex items-center gap-4 text-white/80 mt-4">
      <span>Home</span>
      <span>&gt;</span>
      <span>Businesses</span>
      <span>&gt;</span>
      <span>Steel</span>
      <span>&gt;</span>
      <span>Carbon Steel</span>
      <span>&gt;</span>
      <span>Pellets</span>
    </div>

  </div>
</div>

      </div>
    </div>
  );
};

export default Hero;