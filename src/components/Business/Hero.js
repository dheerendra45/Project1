import React, { useState, useEffect, useRef } from "react";
import herobg from '../../assets/Business/businessbg.jpg'
import companylogo from '../../assets/products/image28.png'

const Hero = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeBusinessSub, setActiveBusinessSub] = useState(null);
  const [activeNestedSub, setActiveNestedSub] = useState(null);
  const dropdownRef = useRef(null);

  const navItems = [
    { 
      title: 'ABOUT US', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Company Overview', href: '/overview' },
        { name: 'Leadership', href: '/leadership' },
        { name: 'Awards and Achievements', href: '/achievement' },
        { name: 'Manufacturing Unit', href: '#' },
        { name: 'Testimonials', href: '#' },
        { name: 'News and Events', href: '#' }
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
        { name: 'CSR', href: '/environment_compliance' },
        { name: 'Knowledge Hub', href: '#' },
        { name: 'Blogs', href: '#' },
        { name: 'FAQ', href: '#' }
      ]
    },
    { 
      title: 'SUSTAINABILITY', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'ESG Profile', href: '/esg_profile' },
        { name: 'Environment Compliance', href: '#' }
      ]
    },
    { 
      title: 'CAREERS', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Life at Shyam', href: '#' },
        { name: 'Job Opportunity', href: '#' },
        { name: 'Current Opening', href: '#' }
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

  
  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveBusinessSub(null);
    setActiveNestedSub(null);
  };

  const handleBusinessSubEnter = (businessIndex) => {
    setActiveBusinessSub(businessIndex);
    setActiveNestedSub(null);
  };

  const handleNestedSubEnter = (nestedIndex) => {
    setActiveNestedSub(nestedIndex);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.dropdown-container')) {
      setActiveDropdown(null);
      setActiveBusinessSub(null);
      setActiveNestedSub(null);
    }
  };

  const handleNavigation = (href, e) => {
    e.preventDefault();
    if (href && href !== '#') {
      window.location.href = href;
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="h-[815px] bg-gray-100 mx-auto overflow-hidden">
      {/* Top Navbar */}
      <div className="w-full h-[57px] bg-black flex items-center justify-between px-6 text-white text-sm">
        <div className="flex items-center ml-7">
          <span className="font-inter font-normal text-[12px] leading-[18px]">
            €208.00 +2.72
          </span>
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

      {/* Middle Navbar */}
      <div 
        className="w-full h-[57px] mt-0 flex items-center justify-between px-8 relative z-30"
        style={{
          background: '#FFFFFF26',
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <div className=" text-white px-3 py-2 rounded text-sm font-bold">
            <img src={companylogo} className="h-[54.84px] w-[116.53px]"/>
          </div>
        </div>
        
        {/* Navigation Menu */}
          <div className="flex gap-8 text-white text-sm font-medium">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative dropdown-container"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="cursor-pointer hover:text-orange-400 flex items-center gap-1 font-roboto font-medium text-[13.19px] leading-[19.79px] tracking-normal align-middle uppercase">
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
                className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 z-[9999] min-w-[250px] mt-2"
              >
                {item.title === 'BUSINESSES' || item.title === 'INVESTORS' ? (
                  <div className="space-y-1">
                    {item.dropdownItems.map((business, businessIndex) => (
                      <div 
                        key={businessIndex} 
                        className="relative"
                        onMouseEnter={() => handleBusinessSubEnter(businessIndex)}
                      >
                        {/* Check if it's Business Overview (which should be directly clickable) */}
                        {business.name === 'Business Overview' ? (
                          <a
                            href={business.href || '#'}
                            className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 text-sm cursor-pointer font-medium"
                            onClick={(e) => handleNavigation(business.href, e)}
                          >
                            <span>{business.name}</span>
                          </a>
                        ) : (
                          <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 text-sm cursor-pointer">
                            <span className="font-medium">{business.name}</span>
                            {business.subItems && business.subItems.length > 0 && (
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            )}
                          </div>
                        )}
                        
                        {/* Sub-menu */}
                        {activeBusinessSub === businessIndex && business.subItems && business.subItems.length > 0 && (
                          <div 
                            className="absolute left-full top-0 bg-white shadow-lg rounded-md py-2 z-[10000] min-w-[300px] max-w-[500px]"
                          >
                            {business.subItems.map((subItem, subIndex) => (
                              <div 
                                key={subIndex} 
                                className="relative"
                                onMouseEnter={() => handleNestedSubEnter(subIndex)}
                              >
                                {/* Make this clickable for items with href */}
                                {subItem.href && subItem.href !== '#' ? (
                                  <a
                                    href={subItem.href}
                                    className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 text-sm cursor-pointer font-medium border-b border-gray-100"
                                    onClick={(e) => handleNavigation(subItem.href, e)}
                                  >
                                    <span>{subItem.name}</span>
                                    {subItem.categories && (
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                      </svg>
                                    )}
                                  </a>
                                ) : (
                                  <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 text-sm cursor-pointer font-medium border-b border-gray-100">
                                    <span>{subItem.name}</span>
                                    {subItem.categories && (
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                      </svg>
                                    )}
                                  </div>
                                )}
                                
                                {/* Nested sub-menu */}
                                {activeNestedSub === subIndex && subItem.categories && (
                                  <div 
                                    className="absolute left-full top-0 bg-white shadow-lg rounded-md py-2 z-[10001] min-w-[250px]"
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
                                            className="block px-6 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50"
                                            onClick={(e) => e.preventDefault()}
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
                  <div className="space-y-1">
                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                      <a
                        key={dropdownIndex}
                        href={dropdownItem.href || '#'}
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 text-sm"
                        onClick={(e) => handleNavigation(dropdownItem.href, e)}
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
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-white placeholder-white/70 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="bg-orange-500 rounded-full p-2">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V4z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-full -mt-[65px]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full bg-cover bg-center" />
        <img
          src={herobg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-20 px-[114px] pt-[275px] text-white">
          <h1 className="text-[62px] leading-[62px] font-space-grotesk font-bold mb-6">
            Business
          </h1>

          <div className="flex space-x-1 font-space-grotesk font-medium text-[16px] leading-[27.2px]">
            <span>Home</span>
            <span>&gt;</span>
            <span>Businesses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;