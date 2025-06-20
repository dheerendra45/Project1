import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import herobg from "../../assets/manufacturing/herobg.png";
import { Link } from "react-router-dom";

// import herobg2 from '../../assets/manufacturing/herobg2.jpg'; // Add additional images
// import herobg3 from '../../assets/manufacturing/herobg3.jpg'; // Add additional images
import companylogo from "../../assets/products/image28.png";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronRight,
  FiSearch,
  FiFilter,
  FiChevronLeft,
  FiChevronRight as FiChevronRightSolid,
} from "react-icons/fi";

const Hero = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeBusinessSub, setActiveBusinessSub] = useState(null);
  const [activeNestedSub, setActiveNestedSub] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const [mobileNestedMenu, setMobileNestedMenu] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const carouselTimeoutRef = useRef(null);

  // Background images for carousel
  const backgroundImages = [
    herobg,
    // herobg2,
    // herobg3
    // Add more images as needed
  ];

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  const navItems = [
    {
      title: "ABOUT US",
      hasDropdown: true,
      dropdownItems: [
        { name: "Company Overview", href: "/companyoverview" },
        { name: "Leadership", href: "/leadership" },
        { name: "Awards and Achievements", href: "/awardsAndachievements" },
        { name: "Manufacturing Unit", href: "/manufacturing" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "News and Events", href: "/newsandevents" },
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
          name: "Energy & Others",
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

  // Auto-rotate carousel
  useEffect(() => {
    const rotateCarousel = () => {
      carouselTimeoutRef.current = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
      }, 5000); // Change slide every 5 seconds
    };

    rotateCarousel();
    return () => {
      if (carouselTimeoutRef.current) {
        clearTimeout(carouselTimeoutRef.current);
      }
    };
  }, [currentSlide, backgroundImages.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    // Reset auto-rotate timer
    if (carouselTimeoutRef.current) {
      clearTimeout(carouselTimeoutRef.current);
    }
  };

  const goToPrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length
    );
    // Reset auto-rotate timer
    if (carouselTimeoutRef.current) {
      clearTimeout(carouselTimeoutRef.current);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    // Reset auto-rotate timer
    if (carouselTimeoutRef.current) {
      clearTimeout(carouselTimeoutRef.current);
    }
  };

  // Clear any existing timeout
  const clearHoverTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  // Set timeout to close dropdowns
  const setHoverTimeout = (callback, delay = 150) => {
    clearHoverTimeout();
    hoverTimeoutRef.current = setTimeout(callback, delay);
  };

  const handleMouseEnter = (index) => {
    clearHoverTimeout();
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setHoverTimeout(() => {
      setActiveDropdown(null);
      setActiveBusinessSub(null);
      setActiveNestedSub(null);
    });
  };

  const handleDropdownEnter = () => {
    clearHoverTimeout();
  };

  const handleDropdownLeave = () => {
    setHoverTimeout(() => {
      setActiveDropdown(null);
      setActiveBusinessSub(null);
      setActiveNestedSub(null);
    });
  };

  const handleBusinessSubEnter = (businessIndex) => {
    clearHoverTimeout();
    setActiveBusinessSub(businessIndex);
    setActiveNestedSub(null);
  };

  const handleBusinessSubLeave = () => {
    setHoverTimeout(() => {
      setActiveBusinessSub(null);
      setActiveNestedSub(null);
    });
  };

  const handleNestedSubEnter = (nestedIndex) => {
    clearHoverTimeout();
    setActiveNestedSub(nestedIndex);
  };

  const handleNestedSubLeave = () => {
    setHoverTimeout(() => {
      setActiveNestedSub(null);
    });
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setActiveDropdown(null);
      setActiveBusinessSub(null);
      setActiveNestedSub(null);
    }
  };

  const handleNavigation = (href, e) => {
    e.preventDefault();
    if (href && href !== "#") {
      window.location.href = href;
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileSubMenu(null);
    setMobileNestedMenu(null);
  };

  const toggleMobileSubMenu = (index) => {
    if (mobileSubMenu === index) {
      setMobileSubMenu(null);
    } else {
      setMobileSubMenu(index);
    }
    setMobileNestedMenu(null);
  };

  const toggleMobileNestedMenu = (index) => {
    if (mobileNestedMenu === index) {
      setMobileNestedMenu(null);
    } else {
      setMobileNestedMenu(index);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      clearHoverTimeout();
    };
  }, []);

  return (
    <div className="h-screen md:h-[815px] bg-gray-100 mx-auto overflow-hidden relative">
      {/* Top Navbar */}

      {/* Hero Section with Carousel */}
      <div className="relative h-full -mt-[65px]">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={backgroundImages[currentSlide]}
              alt="Hero Background"
              className="absolute inset-0 w-full h-full object-cover z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20">
          <div className="flex space-x-2">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 z-20 focus:outline-none"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 z-20 focus:outline-none"
          aria-label="Next slide"
        >
          <FiChevronRightSolid className="w-6 h-6 text-white" />
        </button>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-20 px-6 md:px-12 lg:px-[114px] pt-[150px] md:pt-[200px] lg:pt-[275px] text-white">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.1] font-space-grotesk font-bold mb-4 md:mb-6"
          >
            Manufacturing <br></br>Unit
          </motion.h1>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex space-x-1 font-space-grotesk font-medium text-sm md:text-[16px] leading-[1.7]"
          >
            <span>Home</span>
            <span>&gt;</span>
            <span>Unit</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
