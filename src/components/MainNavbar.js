// components/MainNavbar.js
import React, { useState } from 'react';
import CompanyLogo from '../assets/company-logo.png';

function MainNavbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeBusinessSub, setActiveBusinessSub] = useState(null);
  const [activeNestedSub, setActiveNestedSub] = useState(null);
  
  // Mobile sidebar states
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [activeMobileBusinessSub, setActiveMobileBusinessSub] = useState(null);
  const [activeMobileNestedSub, setActiveMobileNestedSub] = useState(null);

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

  // Mobile functions
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setActiveMobileDropdown(null);
    setActiveMobileBusinessSub(null);
    setActiveMobileNestedSub(null);
  };

  const toggleMobileDropdown = (index) => {
    setActiveMobileDropdown(activeMobileDropdown === index ? null : index);
    setActiveMobileBusinessSub(null);
    setActiveMobileNestedSub(null);
  };

  const toggleMobileBusinessSub = (index) => {
    setActiveMobileBusinessSub(activeMobileBusinessSub === index ? null : index);
    setActiveMobileNestedSub(null);
  };

  const toggleMobileNestedSub = (index) => {
    setActiveMobileNestedSub(activeMobileNestedSub === index ? null : index);
  };

  // Add navigation handler
  const handleNavigation = (href) => {
    if (href && href !== '#') {
      window.location.href = href;
      // Or if using React Router: navigate(href);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Prevent body scroll when sidebar is open
  React.useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  return (
    <>
      <div className="bg-orange-500 flex items-center justify-between h-[71px] px-6 relative z-[1000]">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleSidebar}
            className="text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Company Logo */}
        <div className="flex-shrink-0">
          <img 
            src={CompanyLogo} 
            alt="Sarova Metallics Logo" 
            className="h-8 lg:h-10"
          />
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden lg:flex space-x-6">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative dropdown-container"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center text-white font-medium text-[13.19px] leading-[19.79px] uppercase cursor-pointer py-6">
                <span>{item.title}</span>
                {item.hasDropdown && (
                  <svg 
                    className="w-4 h-4 ml-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </div>

              {/* Desktop Dropdown Menu */}
              {item.hasDropdown && activeDropdown === index && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 z-[9999] min-w-[250px]">
                  {item.title === 'BUSINESSES' || item.title === 'INVESTORS' ? (
                    // Business dropdown with hover sub-menus
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
                              href={business.href}
                              className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 text-sm cursor-pointer font-medium"
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
                          
                          {/* Sub-menu for each business/investor */}
                          {activeBusinessSub === businessIndex && business.subItems && business.subItems.length > 0 && (
                            <div className="absolute left-full top-0 bg-white shadow-lg rounded-md py-2 z-[10000] min-w-[300px] max-w-[500px]">
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
                                  
                                  {/* Nested sub-menu for categories */}
                                  {activeNestedSub === subIndex && subItem.categories && (
                                    <div className="absolute left-full top-0 bg-white shadow-lg rounded-md py-2 z-[10001] min-w-[250px]">
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
                          className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 text-sm"
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
        <div className="relative flex-shrink-0">
          <input
            type="text"
            placeholder="Search..."
            className="bg-orange-300 text-white placeholder-white rounded-full py-2 px-8 lg:px-10 focus:outline-none w-32 lg:w-auto text-sm"
          />
          <svg className="w-4 h-4 lg:w-5 lg:h-5 absolute left-2 lg:left-3 top-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998] lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[9999] lg:hidden ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 bg-orange-500 text-white">
            <img 
              src={CompanyLogo} 
              alt="Sarova Metallics Logo" 
              className="h-8"
            />
            <button
              onClick={closeSidebar}
              className="p-2 hover:bg-orange-600 rounded"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleMobileDropdown(index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                >
                  <span className="font-medium text-gray-800 uppercase text-sm">{item.title}</span>
                  {item.hasDropdown && (
                    <svg 
                      className={`w-5 h-5 transform transition-transform ${
                        activeMobileDropdown === index ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                {/* Mobile Dropdown Content */}
                {item.hasDropdown && activeMobileDropdown === index && (
                  <div className="bg-gray-50">
                    {item.title === 'BUSINESSES' || item.title === 'INVESTORS' ? (
                      // Business/Investors dropdown
                      <div>
                        {item.dropdownItems.map((business, businessIndex) => (
                          <div key={businessIndex}>
                            {business.name === 'Business Overview' ? (
                              <a
                                href={business.href}
                                onClick={closeSidebar}
                                className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 border-b border-gray-200"
                              >
                                {business.name}
                              </a>
                            ) : (
                              <>
                                <button
                                  onClick={() => toggleMobileBusinessSub(businessIndex)}
                                  className="w-full flex items-center justify-between px-6 py-3 text-left text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 border-b border-gray-200"
                                >
                                  <span>{business.name}</span>
                                  {business.subItems && business.subItems.length > 0 && (
                                    <svg 
                                      className={`w-4 h-4 transform transition-transform ${
                                        activeMobileBusinessSub === businessIndex ? 'rotate-180' : ''
                                      }`} 
                                      fill="none" 
                                      stroke="currentColor" 
                                      viewBox="0 0 24 24"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                  )}
                                </button>

                                {/* Business Sub-items */}
                                {activeMobileBusinessSub === businessIndex && business.subItems && business.subItems.length > 0 && (
                                  <div className="bg-white">
                                    {business.subItems.map((subItem, subIndex) => (
                                      <div key={subIndex}>
                                        {subItem.href && subItem.href !== '#' ? (
                                          <a
                                            href={subItem.href}
                                            onClick={closeSidebar}
                                            className="block px-8 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-500 border-b border-gray-100"
                                          >
                                            {subItem.name}
                                          </a>
                                        ) : (
                                          <>
                                            <button
                                              onClick={() => toggleMobileNestedSub(subIndex)}
                                              className="w-full flex items-center justify-between px-8 py-2 text-left text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-500 border-b border-gray-100"
                                            >
                                              <span>{subItem.name}</span>
                                              {subItem.categories && (
                                                <svg 
                                                  className={`w-4 h-4 transform transition-transform ${
                                                    activeMobileNestedSub === subIndex ? 'rotate-180' : ''
                                                  }`} 
                                                  fill="none" 
                                                  stroke="currentColor" 
                                                  viewBox="0 0 24 24"
                                                >
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                              )}
                                            </button>

                                            {/* Nested categories */}
                                            {activeMobileNestedSub === subIndex && subItem.categories && (
                                              <div className="bg-gray-50">
                                                {subItem.categories.map((category, catIndex) => (
                                                  <div key={catIndex}>
                                                    <div className="px-10 py-2 text-xs font-medium text-orange-600 bg-orange-50 border-b border-gray-100">
                                                      {category.name}
                                                    </div>
                                                    {category.items.map((productItem, prodIndex) => (
                                                      <a 
                                                        key={prodIndex}
                                                        href="#"
                                                        onClick={closeSidebar}
                                                        className="block px-12 py-2 text-xs text-gray-500 hover:text-orange-500 hover:bg-orange-50"
                                                      >
                                                        • {productItem}
                                                      </a>
                                                    ))}
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                          </>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      // Regular dropdown items
                      <div>
                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                          <a
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            onClick={closeSidebar}
                            className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 border-b border-gray-200"
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
        </div>
      </div>
    </>
  );
}

export default MainNavbar;