import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import herobg from '../../assets/faq/faqbg.jpg'
import companylogo from '../../assets/products/image28.png'

const Hero = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeBusinessSub, setActiveBusinessSub] = useState(null);
  const [activeNestedSub, setActiveNestedSub] = useState(null);
  
  // Timeout refs for delayed closing
  const hoverTimeoutRef = useRef(null);
  const businessSubTimeoutRef = useRef(null);
  const nestedSubTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const navItems = [
    {
      title: "ABOUT US",
      hasDropdown: true,
      dropdownItems: [
        { name: "Company Overview", href: "/companyoverview" },
        { name: "Leadership", href: "/leadership" },
         { name: 'Awards and Achievements', href: '/awardsAndachievements' },
        { name: "Manufacturing Unit", href: "/manufacturing" },
        { name: "Testimonials", href: "/testimonials" },
               { name: 'News and Events', href: '/newsandevents' }
      ],
    },
    {
      title: "BUSINESSES",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Business Overview",
          href: "/business",
        },
        {
          name: "Steel",
          href: "#",
          subItems: [
            {
              name: "Carbon Steel",
              href: "/carbon_steel",
            },
            {
              name: "Cold Rolled",
              href: "#",
              categories: [
                {
                  name: "Intermediate Products",
                  items: ["Color Coated Sheets"],
                },
                {
                  name: "Finished Products",
                  items: ["Stainless Steel Billets"],
                },
                { name: "Intermediate Products", items: ["SS Wire Rod"] },
              ],
            },
            {
              name: "Stainless Steel",
              href: "#",
              categories: [
                { name: "Intermediate Products", items: ["SS Wire Rod"] },
                {
                  name: "Finished Products",
                  items: ["Black Round Bar", "Bright Bar", "Flats/Patta"],
                },
              ],
            },
            { name: "Specialty Alloys", href: "#" },
          ],
        },
        {
          name: "Power",
          href: "#",
          subItems: [
            { name: "Captive Power", href: "#" },
            { name: "Renewable Power", href: "#" },
          ],
        },
        {
          name: "Aluminium",
          href: "#",
          subItems: [
            {
              name: "Intermediate Products",
              href: "#",
              categories: [
                { name: "Flat Rolled Products", items: ["Aluminium Foil"] },
              ],
            },
            {
              name: "Finished Products",
              href: "#",
              categories: [{ name: "Battery Foil", items: [] }],
            },
          ],
        },
      ],
    },
    {
      title: "INVESTORS",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Financials & Disclosures",
          href: "#",
          subItems: [
            { name: "Financial Performance", href: "#" },
            { name: "Financial Statements", href: "#" },
            { name: "Stock Performance Data", href: "#" },
            { name: "Regulatory Disclosures", href: "#" },
            { name: "Company Disclosures (SEBI LODR)", href: "#" },
            { name: "Credit Rating", href: "#" },
          ],
        },
        {
          name: "Corporate Governance",
          href: "#",
          subItems: [
            { name: "Policies", href: "#" },
            { name: "Corporate Governance", href: "#" },
            {
              name: "Familiarization Program for Independent Directors",
              href: "#",
            },
          ],
        },
        {
          name: "Shareholder Information",
          href: "#",
          subItems: [
            { name: "AGM", href: "#" },
            { name: "Company Notices", href: "#" },
            { name: "Stock Exchange Intimations", href: "#" },
            { name: "Shareholder Information", href: "#" },
          ],
        },
        {
          name: "Investor Communication",
          href: "#",
          subItems: [
            {
              name: "Investor Presentations (Quarterly & Corporate)",
              href: "#",
            },
            {
              name: "Press Releases & Announcements (Quarterly + Other Key Updates)",
              href: "#",
            },
            {
              name: "Investor Contact (Only email ID, no phone number)",
              href: "#",
            },
          ],
        },
        {
          name: "Investor Helpdesk",
          href: "#",
          subItems: [],
        },
      ],
    },
    {
      title: "COMMUNITY",
      hasDropdown: true,
      dropdownItems: [
        { name: "CSR", href: "/csr" },
        { name: "Knowledge Hub", href: "/knowledgehub" },
        { name: "Blogs", href: "/blogs" },
        { name: "FAQ", href: "/faq-Page" },
      ],
    },
    {
      title: "SUSTAINABILITY",
      hasDropdown: true,
      dropdownItems: [
        { name: "ESG Profile", href: "/esg_profile" },
        { name: "Environment Compliance", href: "/environmentcompliance" },
      ],
    },
    {
      title: "CAREERS",
      hasDropdown: true,
      dropdownItems: [
        { name: "Life at Shyam", href: "/lifeshyam" },
        { name: "Job Opportunity", href: "/jobopportunity" },
        { name: "Current Opening", href: "/currentopening" },
      ],
    },
    {
      title: "CONTACT US",
      hasDropdown: true,
      dropdownItems: [
        { name: "Contact Form", href: "/ContactPage" },
        { name: "Company Location", href: "/LocationPage" },
      ],
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
    return () => {
      document.removeEventListener('click', handleClickOutside);
      clearAllTimeouts();
    };
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
        ref={dropdownRef}
        className="w-full h-[57px] mt-0 flex items-center justify-between px-8 relative z-30"
        style={{
          background: '#FFFFFF26',
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
  <Link to="/">
    <div className="text-white px-3 py-2 rounded text-sm font-bold">
      <img src={companylogo} className="h-[70px] w-[125px]" alt="Company Logo" />
    </div>
  </Link>
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
              <span className="cursor-pointer hover:text-orange-400 flex items-center gap-1 font-roboto font-medium text-[13.19px] leading-[19.79px] tracking-normal align-middle uppercase transition-colors duration-200">
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
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-white placeholder-white/70 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
         
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-full -mt-[65px]">
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
        
        {/* Content */}
        <div className="relative z-20 px-[114px] pt-[275px] text-white">
          <h1 className="text-[62px] leading-[62px] font-space-grotesk font-bold mb-6">Frequently Asked Questions</h1>
          <div className="text-sm flex items-center gap-4 text-white/80">
            <span>Home</span>
            <span>&gt;</span>
            <span>Faq</span>
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;