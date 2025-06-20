import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronRight, FiSearch, FiFilter } from 'react-icons/fi';
import herobg from '../../assets/Seltiger/Hero.png';
import companylogo from '../../assets/Seltiger/logo.png';
import Start from "../start";

export default function Hero() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeBusinessSub, setActiveBusinessSub] = useState(null);
    const [activeNestedSub, setActiveNestedSub] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileSubmenu, setMobileSubmenu] = useState(null);
    const [mobileNestedSubmenu, setMobileNestedSubmenu] = useState(null);
    
    // Refs
    const hoverTimeoutRef = useRef(null);
    const businessSubTimeoutRef = useRef(null);
    const nestedSubTimeoutRef = useRef(null);
    const dropdownRef = useRef(null);
    const heroRef = useRef(null);
    const animationRef = useRef(null);
    const mobileMenuRef = useRef(null);

    // Nav items data
    const navItems = [
        { 
          title: 'ABOUT US', 
          hasDropdown: true,
          dropdownItems: [
            { name: 'Company Overview', href: '/overview' },
            { name: 'Leadership', href: '/leadership' },
            { name: 'Awards and Achievements', href: '/achievement' },
            { name: "Manufacturing Unit", href: "/manufacturing" },
            { name: "Testimonials", href: "/testimonials" },
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
            { name: 'Knowledge Hub', href: '/knowledgehub' },
            { name: 'Blogs', href: '#' },
            { name: 'FAQ', href: '/faq-Page' }
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
            { name: 'Life at Shyam', href: '/lifeshyam' },
            { name: 'Job Opportunity', href: '#' },
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
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        if (businessSubTimeoutRef.current) clearTimeout(businessSubTimeoutRef.current);
        if (nestedSubTimeoutRef.current) clearTimeout(nestedSubTimeoutRef.current);
        hoverTimeoutRef.current = null;
        businessSubTimeoutRef.current = null;
        nestedSubTimeoutRef.current = null;
    };

    // Desktop hover handlers
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

    // Mobile menu handlers
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            setMobileSubmenu(null);
            setMobileNestedSubmenu(null);
        }
    };

    const toggleMobileSubmenu = (index) => {
        if (mobileSubmenu === index) {
            setMobileSubmenu(null);
            setMobileNestedSubmenu(null);
        } else {
            setMobileSubmenu(index);
            setMobileNestedSubmenu(null);
        }
    };

    const toggleMobileNestedSubmenu = (index) => {
        if (mobileNestedSubmenu === index) {
            setMobileNestedSubmenu(null);
        } else {
            setMobileNestedSubmenu(index);
        }
    };

    // Navigation handler
    const handleNavigation = (href) => {
        if (href && href !== '#') {
            window.location.href = href;
            setIsMobileMenuOpen(false);
            setMobileSubmenu(null);
            setMobileNestedSubmenu(null);
        }
    };

    // Click outside handler
    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            clearAllTimeouts();
            setActiveDropdown(null);
            setActiveBusinessSub(null);
            setActiveNestedSub(null);
        }
        
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target) && 
            !e.target.closest('.mobile-menu-toggle')) {
            setIsMobileMenuOpen(false);
            setMobileSubmenu(null);
            setMobileNestedSubmenu(null);
        }
    };

    // Scroll animation
    const animateElements = () => {
        if (!heroRef.current) return;

        const elements = heroRef.current.querySelectorAll('.animate-on-scroll');
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY || window.pageYOffset;
        
        setScrollPosition(scrollY);

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });

        animationRef.current = requestAnimationFrame(animateElements);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        document.addEventListener('scroll', animateElements);
        animateElements();

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('scroll', animateElements);
            clearAllTimeouts();
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    // Parallax effect
    const parallaxStyle = {
        transform: `translateY(${scrollPosition * 0.5}px)`
    };

    return (
        <>
        <Start/>
        <div className="h-[815px] bg-gray-100 mx-auto overflow-hidden relative" ref={heroRef}>
            {/* Background with parallax */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src={herobg}
                    alt="Hero Background"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    style={parallaxStyle}
                />
                
                {/* Floating elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <div 
                            key={i}
                            className="absolute bg-white/30 rounded-full animate-float"
                            style={{
                                width: `${Math.random() * 8 + 2}px`,
                                height: `${Math.random() * 8 + 2}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                opacity: Math.random() * 0.7 + 0.1,
                                animationDuration: `${Math.random() * 25 + 10}s`,
                                animationDelay: `${Math.random() * 5}s`
                            }}
                        />
                    ))}
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
            </div>

            {/* Navigation Bar */}
            <div 
                ref={dropdownRef}
                className="w-full h-[70px] flex items-center justify-between px-4 md:px-8 relative z-30 bg-orange-600/90 backdrop-blur-sm"
            >
                {/* Logo */}
                <div className="flex items-center">
                    <div className="text-white px-3 py-2 rounded text-sm font-bold hover:scale-105 transition-transform duration-300">
                        <img src={companylogo} className="h-[70px] w-[125px]" alt="Company Logo"/>
                    </div>
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden lg:flex gap-8 text-white text-sm font-medium">
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative dropdown-container group"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className="cursor-pointer hover:text-orange-200 flex items-center gap-1 font-medium text-[15px] leading-[19.79px] tracking-normal align-middle uppercase transition-all duration-300 group-hover:scale-105">
                                {item.title}
                                {item.hasDropdown && (
                                    <FiChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                                )}
                            </span>

                            {/* Desktop Dropdown */}
                            {item.hasDropdown && activeDropdown === index && (
                                <div 
                                    className="absolute top-full left-0 bg-white shadow-xl rounded-md py-2 z-[9999] min-w-[250px] mt-1 animate-fadeIn origin-top"
                                    onMouseEnter={handleDropdownEnter}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    {item.title === 'BUSINESSES' || item.title === 'INVESTORS' ? (
                                        <div className="space-y-1">
                                            {item.dropdownItems.map((business, businessIndex) => (
                                                <div 
                                                    key={businessIndex} 
                                                    className="relative"
                                                    onMouseEnter={() => handleBusinessSubEnter(businessIndex)}
                                                    onMouseLeave={handleBusinessSubLeave}
                                                >
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
                                                                <FiChevronRight className="w-4 h-4" />
                                                            )}
                                                        </div>
                                                    )}
                                                    
                                                    {/* Business Submenu */}
                                                    {activeBusinessSub === businessIndex && business.subItems && business.subItems.length > 0 && (
                                                        <div 
                                                            className="absolute left-full top-0 bg-white shadow-lg rounded-md py-2 z-[10000] min-w-[300px] max-w-[500px] ml-1 animate-fadeIn"
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
                                                                                <FiChevronRight className="w-4 h-4" />
                                                                            )}
                                                                        </a>
                                                                    ) : (
                                                                        <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 text-sm cursor-pointer font-medium border-b border-gray-100 last:border-b-0 transition-colors duration-200">
                                                                            <span>{subItem.name}</span>
                                                                            {subItem.categories && (
                                                                                <FiChevronRight className="w-4 h-4" />
                                                                            )}
                                                                        </div>
                                                                    )}
                                                                    
                                                                    {/* Nested Submenu */}
                                                                    {activeNestedSub === subIndex && subItem.categories && (
                                                                        <div 
                                                                            className="absolute left-full top-0 bg-white shadow-lg rounded-md py-2 z-[10001] min-w-[250px] ml-1 animate-fadeIn"
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

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex items-center gap-4">
                    <div className="bg-white/20 hover:bg-white/30 rounded-full p-2 cursor-pointer transition-all duration-300 hover:scale-110">
                        <FiSearch className="w-5 h-5 text-white" />
                    </div>
                    <button 
                        onClick={toggleMobileMenu}
                        className="mobile-menu-toggle text-white focus:outline-none"
                    >
                        {isMobileMenuOpen ? (
                            <FiX className="w-6 h-6" />
                        ) : (
                            <FiMenu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Desktop Search */}
                <div className="hidden lg:flex items-center gap-4">
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-white placeholder-white/70 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 group-hover:w-56"
                        />
                        <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="bg-white/20 hover:bg-white/30 rounded-full p-2 cursor-pointer transition-all duration-300 hover:scale-110">
                        <FiFilter className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    ref={mobileMenuRef}
                    className="lg:hidden fixed inset-0 bg-black/80 z-40 mt-[70px] overflow-y-auto"
                >
                    <div className="bg-orange-600/90 backdrop-blur-sm w-full">
                        <div className="px-4 py-2">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search here..."
                                    className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-white placeholder-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                                />
                                <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70" />
                            </div>
                        </div>
                        
                        {/* Mobile Navigation */}
                        <nav className="px-4 py-2">
                            {navItems.map((item, index) => (
                                <div key={index} className="mb-1">
                                    <div 
                                        className="flex items-center justify-between py-3 px-2 text-white border-b border-white/20 cursor-pointer"
                                        onClick={() => toggleMobileSubmenu(index)}
                                    >
                                        <span className="font-medium uppercase">{item.title}</span>
                                        {item.hasDropdown && (
                                            <FiChevronDown className={`transition-transform duration-200 ${mobileSubmenu === index ? 'rotate-180' : ''}`} />
                                        )}
                                    </div>
                                    
                                    {/* Mobile Dropdown */}
                                    {item.hasDropdown && mobileSubmenu === index && (
                                        <div className="bg-orange-700/80 ml-2 pl-2 border-l-2 border-white/20">
                                            {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                                <div key={dropdownIndex}>
                                                    {(item.title === 'BUSINESSES' || item.title === 'INVESTORS') && dropdownItem.subItems ? (
                                                        <div>
                                                            <div 
                                                                className="flex items-center justify-between py-2 px-2 text-white/90 cursor-pointer"
                                                                onClick={() => toggleMobileNestedSubmenu(dropdownIndex)}
                                                            >
                                                                <span>{dropdownItem.name}</span>
                                                                {dropdownItem.subItems && dropdownItem.subItems.length > 0 && (
                                                                    <FiChevronRight className={`transition-transform duration-200 ${mobileNestedSubmenu === dropdownIndex ? 'rotate-90' : ''}`} />
                                                                )}
                                                            </div>
                                                            
                                                            {/* Nested Submenu */}
                                                            {mobileNestedSubmenu === dropdownIndex && dropdownItem.subItems && (
                                                                <div className="bg-orange-800/50 ml-2 pl-2 border-l-2 border-white/20">
                                                                    {dropdownItem.subItems.map((subItem, subIndex) => (
                                                                        <div key={subIndex}>
                                                                            {subItem.categories ? (
                                                                                <div>
                                                                                    <div 
                                                                                        className="flex items-center justify-between py-2 px-2 text-white/80 cursor-pointer"
                                                                                        onClick={() => handleNavigation(subItem.href || '#')}
                                                                                    >
                                                                                        <span>{subItem.name}</span>
                                                                                        {subItem.categories && subItem.categories.length > 0 && (
                                                                                            <FiChevronRight className="opacity-50" />
                                                                                        )}
                                                                                    </div>
                                                                                    
                                                                                    {/* Categories */}
                                                                                    {subItem.categories.map((category, catIndex) => (
                                                                                        <div key={catIndex} className="ml-2 pl-2 border-l-2 border-white/10">
                                                                                            <div className="py-1 px-2 text-white/70 font-medium">
                                                                                                {category.name}
                                                                                            </div>
                                                                                            {category.items.map((item, itemIndex) => (
                                                                                                <div 
                                                                                                    key={itemIndex} 
                                                                                                    className="py-1 px-4 text-white/60 cursor-pointer"
                                                                                                    onClick={() => handleNavigation('#')}
                                                                                                >
                                                                                                    • {item}
                                                                                                </div>
                                                                                            ))}
                                                                                        </div>
                                                                                    ))}
                                                                                </div>
                                                                            ) : (
                                                                                <div 
                                                                                    className="py-2 px-2 text-white/80 cursor-pointer"
                                                                                    onClick={() => handleNavigation(subItem.href || '#')}
                                                                                >
                                                                                    {subItem.name}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        <div 
                                                            className="py-2 px-2 text-white/90 cursor-pointer"
                                                            onClick={() => handleNavigation(dropdownItem.href)}
                                                        >
                                                            {dropdownItem.name}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
            )}

            {/* Hero Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-8 z-20 text-white">
                <div className="max-w-2xl space-y-4 md:space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold animate-on-scroll [animation-delay:0.1s] translate-y-10 opacity-0 [animation-fill-mode:forwards]">
                        <span className="inline-block transition-all duration-500 hover:scale-105 hover:text-orange-300">India's Strongest TMT Bars</span>
                    </h1>
                    <h1 className="text-4xl md:text-5xl font-bold animate-on-scroll [animation-delay:0.3s] translate-y-10 opacity-0 [animation-fill-mode:forwards]">
                        <span className="inline-block transition-all duration-500 hover:scale-105 hover:text-orange-300">Bend, But Never Break!</span>
                    </h1>
                    <p className="text-lg md:text-xl animate-on-scroll [animation-delay:0.5s] translate-y-10 opacity-0 [animation-fill-mode:forwards]">
                        <span className="inline-block transition-all duration-500 hover:scale-105">Earthquake-Resistant | Fireproof | Corrosion-Free – Engineered for Lifelong Safety.</span>
                    </p>
                    <p className="text-sm animate-on-scroll [animation-delay:0.9s] translate-y-10 opacity-0 [animation-fill-mode:forwards]">
                        Home &gt; SEL
                    </p>
                </div>
            </div>

            {/* Global Styles */}
            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(-20px) translateX(10px); }
                }
                .animate-float { animation: float 8s ease-in-out infinite; }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
                
                @keyframes slideUp {
                    to { transform: translateY(0); opacity: 1; }
                }
                .animate-on-scroll { animation: slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
            `}</style>
        </div>
        </>
    );
}