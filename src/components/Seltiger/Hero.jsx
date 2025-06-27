import React, { useState, useEffect, useRef } from "react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronRight,
  FiSearch,
  FiFilter,
} from "react-icons/fi";
import herobg from "../../assets/Seltiger/herobanner.mp4";
import companylogo from "../../assets/Seltiger/logo.png";
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
      title: "ABOUT US",
      hasDropdown: true,
      dropdownItems: [
        { name: "Company Overview", href: "/overview" },
        { name: "Leadership", href: "/leadership" },
        { name: "Awards and Achievements", href: "/achievement" },
        { name: "Manufacturing Unit", href: "/manufacturing" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "News and Events", href: "#" },
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
        { name: "CSR", href: "/environment_compliance" },
        { name: "Knowledge Hub", href: "/knowledgehub" },
        { name: "Blogs", href: "#" },
        { name: "FAQ", href: "/faq-Page" },
      ],
    },
    {
      title: "SUSTAINABILITY",
      hasDropdown: true,
      dropdownItems: [
        { name: "ESG Profile", href: "/esg_profile" },
        { name: "Environment Compliance", href: "#" },
      ],
    },
    {
      title: "CAREERS",
      hasDropdown: true,
      dropdownItems: [
        { name: "Life at Shyam", href: "/lifeshyam" },
        { name: "Job Opportunity", href: "#" },
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
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    if (businessSubTimeoutRef.current)
      clearTimeout(businessSubTimeoutRef.current);
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
    if (href && href !== "#") {
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

    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(e.target) &&
      !e.target.closest(".mobile-menu-toggle")
    ) {
      setIsMobileMenuOpen(false);
      setMobileSubmenu(null);
      setMobileNestedSubmenu(null);
    }
  };

  // Scroll animation
  const animateElements = () => {
    if (!heroRef.current) return;

    const elements = heroRef.current.querySelectorAll(".animate-on-scroll");
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;

    setScrollPosition(scrollY);

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });

    animationRef.current = requestAnimationFrame(animateElements);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("scroll", animateElements);
    animateElements();

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("scroll", animateElements);
      clearAllTimeouts();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Parallax effect
  const parallaxStyle = {
    transform: `translateY(${scrollPosition * 0.5}px)`,
  };

  return (
    <>
      <div
        className="h-[815px] bg-gray-100 mx-auto overflow-hidden relative"
        ref={heroRef}
      >
        {/* Background with parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <video
  src={herobg}
  autoPlay
  muted
  loop
  playsInline
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
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-8 z-20 text-white">
          <div className="max-w-2xl space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold animate-on-scroll [animation-delay:0.1s] translate-y-10 opacity-0 [animation-fill-mode:forwards]">
              <span className="inline-block transition-all duration-500 hover:scale-105 hover:text-orange-300">
                SEL Tiger TMT Bars
              </span>
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold animate-on-scroll [animation-delay:0.3s] translate-y-10 opacity-0 [animation-fill-mode:forwards]">
              <span className="inline-block transition-all duration-500 hover:scale-105 hover:text-orange-300">
                 Strength That Stands the Test of Time – Bend, but Never Break!
              </span>
            </h1>
            <p className="text-lg md:text-xl animate-on-scroll [animation-delay:0.5s] translate-y-10 opacity-0 [animation-fill-mode:forwards]">
              <span className="inline-block transition-all duration-500 hover:scale-105">
                S-E-L Tiger is a symbol of Strength, Elasticity, and Longevity
              </span>
            </p>
            <p className="text-sm animate-on-scroll [animation-delay:0.9s] translate-y-10 opacity-0 [animation-fill-mode:forwards]">
              Home &gt; SEL
            </p>
          </div>
        </div>

        {/* Global Styles */}
        <style jsx global>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(-20px) translateX(10px);
            }
          }
          .animate-float {
            animation: float 8s ease-in-out infinite;
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
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }

          @keyframes slideUp {
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .animate-on-scroll {
            animation: slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
        `}</style>
      </div>
    </>
  );
}
