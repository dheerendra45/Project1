import React, { useState, useEffect, useRef } from "react";
import herobg from '../../assets/Testimonials/herobg.jpg'
import companylogo from '../../assets/products/image28.png'
import { Link } from "react-router-dom";

const Hero = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeBusinessSub, setActiveBusinessSub] = useState(null);
  const [activeNestedSub, setActiveNestedSub] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Timeout refs for delayed closing
  const hoverTimeoutRef = useRef(null);
  const businessSubTimeoutRef = useRef(null);
  const nestedSubTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);
  const heroRef = useRef(null);
  const animationRef = useRef(null);

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
         name: 'Energy & Others',
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

  // Animation handler
  const animateOnScroll = () => {
    if (!heroRef.current) return;
    
    const heroElement = heroRef.current;
    const rect = heroElement.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
    
    if (isVisible) {
      const scrollPercent = (window.scrollY - rect.top) / window.innerHeight;
      setScrollPosition(scrollPercent);
      
      // Reset animation when scrolled out of view
      if (scrollPercent > 1.5) {
        setScrollPosition(0);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', animateOnScroll);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', animateOnScroll);
      clearAllTimeouts();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Floating particles animation
  const renderFloatingParticles = () => {
    const particles = [];
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 5 + 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 10 + Math.random() * 20;
      
      particles.push(
        <div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${posX}%`,
            top: `${posY}%`,
            animation: `float ${duration}s ease-in-out ${delay}s infinite`,
            opacity: 0.7,
            transform: `translateY(${Math.sin(scrollPosition * Math.PI * 2) * 20}px)`
          }}
        />
      );
    }
    
    return particles;
  };

  // Animated underline effect for navigation
  const renderAnimatedUnderline = () => {
    return (
      <div className="absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ease-out"
        style={{
          width: `${Math.abs(Math.sin(scrollPosition * Math.PI)) * 100}%`,
          left: `${Math.abs(Math.cos(scrollPosition * Math.PI)) * 50}%`
        }}
      />
    );
  };

  return (
    <div className="h-[815px] bg-gray-100 mx-auto overflow-hidden relative" ref={heroRef}>
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        {renderFloatingParticles()}
      </div>
      
      

    

      {/* Hero Section */}
      <div className="relative h-full -mt-[65px]">
        {/* Background Image */}
        <img
          src={herobg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-20 px-[114px] pt-[275px] text-white">
          <h1 className="text-[62px] leading-[62px] font-space-grotesk font-bold mb-6 animate-float">
            Testimonials
          </h1>
          <div className="text-sm flex items-center gap-4 text-white/80">
            <span className="hover:text-orange-400 transition-colors duration-300">Home</span>
            <span>&gt;</span>
            <span className="hover:text-orange-400 transition-colors duration-300">Testimonials</span>
          </div>
        </div>
        
        {/* Animated divider */}
       

      
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .animate-slideIn {
          animation: slideIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;