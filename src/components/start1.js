import React, { useState, useEffect, useRef } from "react";
import companylogo from "../assets/products/image28.png";
import bgImg from "../assets/image146.png";
import { href } from "react-router-dom";
import great from "../assets/great place.png";
import { Search } from "lucide-react";
import navbarbg from "../assets/navbarbg2.png";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeBusinessSub, setActiveBusinessSub] = useState(null);
  const [activeNestedSub, setActiveNestedSub] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Stock price state
  const [stockData, setStockData] = useState({
    bse: {
      symbol: "SHYAMMETL.BO",
      shortName: "SHYAM METALICS AND ENGY LTD",
      currentPrice: 0,
      high: 0,
      low: 0,
      prevClose: 0,
    },
    nse: {
      symbol: "SHYAMMETL.NS",
      shortName: "SHYAM METALICS AND ENGY LTD",
      currentPrice: 0,
      high: 0,
      low: 0,
      prevClose: 0,
    },
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

      // Fetch both BSE and NSE data
      const [bseResponse, nseResponse] = await Promise.all([
        fetch(
          "https://project1-backend-1hja.onrender.com/api/stock/price/SHYAMMETL.BO"
        ),
        fetch(
          "https://project1-backend-1hja.onrender.com/api/stock/price/SHYAMMETL.NS"
        ),
      ]);

      if (!bseResponse.ok || !nseResponse.ok) {
        throw new Error(
          `HTTP error! BSE status: ${bseResponse.status}, NSE status: ${nseResponse.status}`
        );
      }

      const bseData = await bseResponse.json();
      const nseData = await nseResponse.json();

      setStockData({
        bse: {
          symbol: bseData.symbol || "SHYAMMETL.BO",
          shortName: bseData.shortName || "SHYAM METALICS AND ENGY LTD",
          currentPrice: bseData.currentPrice || 0,
          high: bseData.high || 0,
          low: bseData.low || 0,
          prevClose: bseData.prevClose || 0,
        },
        nse: {
          symbol: nseData.symbol || "SHYAMMETL.NS",
          shortName: nseData.shortName || "SHYAM METALICS AND ENGY LTD",
          currentPrice: nseData.currentPrice || 0,
          high: nseData.high || 0,
          low: nseData.low || 0,
          prevClose: nseData.prevClose || 0,
        },
      });
    } catch (error) {
      console.error("Error fetching stock data:", error);
      setStockError(error.message);

      // Set fallback data if one of the requests fails
      setStockData((prev) => ({
        bse: prev.bse || {
          symbol: "SHYAMMETL.BO",
          shortName: "SHYAM METALICS AND ENGY LTD",
          currentPrice: 0,
          high: 0,
          low: 0,
          prevClose: 0,
        },
        nse: prev.nse || {
          symbol: "SHYAMMETL.NS",
          shortName: "SHYAM METALICS AND ENGY LTD",
          currentPrice: 0,
          high: 0,
          low: 0,
          prevClose: 0,
        },
      }));
    } finally {
      setStockLoading(false);
    }
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
          name: "Iron and Steel",
          href: "#",
          subItems: [
            {
              name: "Carbon Steel",
              href: "/carbon_steel",
              items: [
                { name: "Pellet", href: "/pellet" },
                { name: "Sponge Iron", href: "/sponge_iron" },
                { name: "Pig Iron", href: "/pig_iron" },
                { name: "Billet", href: "/billets" },
                { name: "Structural Steel", href: "/structural_steel" },
                { name: "TMT Bar", href: "/tmt_bars" },
                { name: "Wire Rod", href: "/wire_rods" },
                {
                  name: "Pipes & Hollow Sections",
                  href: "/pipes_hollow_sections",
                },
              ],
            },
            {
              name: "Cold Rolled",
              href: "#",
              items: [
                { name: "Color Coated Sheets", href: "/color_coated_sheets" },
                {
                  name: "Stainless Steel Billets",
                  href: "/stainless_steel_billets",
                },
                { name: "SS Wire Rod", href: "/SS_Wire_Rod" },
              ],
            },
            {
              name: "Stainless Steel",
              href: "#",
              items: [
                { name: "Black Round Bar", href: "/blackround_bar" },
                { name: "Bright Bar", href: "/bright_bar" },
                { name: "Flats/Patta", href: "/flats" },
              ],
            },
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
            { name: "Bare Aluminium Foil", href: "#" },
            { name: "SEL Tiger Foil", href: "#" },
            { name: "Battery Foil", href: "#" },
            { name: "FinStocks", href: "#" },
          ],
        },
      ],
    },

    {
      title: "🐅seltiger",
      hasDropdown: false,
      href: "/seltiger",
    },
    {
      title: "INVESTORS",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Financials & Disclosures",
          href: "#",
          subItems: [
            { name: "Financial Information", href: "/finacial_informations" },
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
            { name: "Policies", href: "/policies" },
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
    if (href && href !== "#") {
      window.location.href = href;
      setMobileMenuOpen(false); // Close mobile menu on navigation
    }
  };

  // Handle logo click to navigate to home
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  // Handle direct navigation items (like seltiger)
  const handleDirectNavClick = (item) => {
    if (item.href && item.href !== "#") {
      handleNavigation(item.href);
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);

      // Calculate scroll progress (0 to 1)
      const maxScroll = 200; // Adjust this value to control how quickly the gradient fades
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    // Fetch stock data on component mount
    fetchStockData();

    // Set up interval to fetch stock data every 30 seconds (adjust as needed)
    const stockInterval = setInterval(fetchStockData, 40000);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      clearAllTimeouts();
      clearInterval(stockInterval);
    };
  }, []);

  // Render mobile menu
  const renderMobileMenu = () => {
    return (
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`fixed top-0 left-0 h-full w-4/5 max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          ref={dropdownRef}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <div onClick={handleLogoClick} className="cursor-pointer">
              <img
                src={companylogo}
                className="h-[50px] w-[100px] hover:opacity-80 transition-opacity duration-200"
                alt="Company Logo"
              />
            </div>
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="overflow-y-auto h-[calc(100%-60px)] p-4">
            {navItems.map((item, index) => (
              <div key={index} className="mb-2">
                <div
                  className="flex justify-between items-center p-3 text-gray-700 hover:bg-orange-50 rounded cursor-pointer"
                  onClick={() => {
                    if (!item.hasDropdown) {
                      handleDirectNavClick(item);
                    } else {
                      setActiveDropdown(
                        activeDropdown === index ? null : index
                      );
                    }
                  }}
                >
                  <span className="font-medium">{item.title}</span>
                  {item.hasDropdown && (
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </div>

                {item.hasDropdown && activeDropdown === index && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                      <div key={dropdownIndex} className="mb-2">
                        <div
                          className="flex justify-between items-center p-2 pl-4 text-gray-600 hover:bg-orange-50 rounded cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (
                              dropdownItem.href &&
                              (!dropdownItem.subItems ||
                                dropdownItem.subItems.length === 0)
                            ) {
                              handleNavigation(dropdownItem.href);
                            } else if (dropdownItem.subItems) {
                              setActiveBusinessSub(
                                activeBusinessSub === dropdownIndex
                                  ? null
                                  : dropdownIndex
                              );
                            }
                          }}
                        >
                          <span>{dropdownItem.name}</span>
                          {dropdownItem.subItems &&
                            dropdownItem.subItems.length > 0 && (
                              <svg
                                className={`w-4 h-4 transform transition-transform ${
                                  activeBusinessSub === dropdownIndex
                                    ? "rotate-90"
                                    : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            )}
                        </div>

                        {dropdownItem.subItems &&
                          activeBusinessSub === dropdownIndex && (
                            <div className="ml-4 mt-1 space-y-1">
                              {dropdownItem.subItems.map(
                                (subItem, subIndex) => (
                                  <div key={subIndex} className="mb-1">
                                    <div
                                      className="flex justify-between items-center p-2 pl-4 text-gray-500 hover:bg-orange-50 rounded cursor-pointer"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        if (
                                          subItem.href &&
                                          (!subItem.items ||
                                            subItem.items.length === 0)
                                        ) {
                                          handleNavigation(subItem.href);
                                        } else if (subItem.items) {
                                          setActiveNestedSub(
                                            activeNestedSub === subIndex
                                              ? null
                                              : subIndex
                                          );
                                        }
                                      }}
                                    >
                                      <span>{subItem.name}</span>
                                      {subItem.items &&
                                        subItem.items.length > 0 && (
                                          <svg
                                            className={`w-4 h-4 transform transition-transform ${
                                              activeNestedSub === subIndex
                                                ? "rotate-90"
                                                : ""
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={2}
                                              d="M9 5l7 7-7 7"
                                            />
                                          </svg>
                                        )}
                                    </div>

                                    {subItem.items &&
                                      activeNestedSub === subIndex && (
                                        <div className="ml-4 mt-1 space-y-1">
                                          {subItem.items.map(
                                            (nestedItem, nestedIndex) => (
                                              <div
                                                key={nestedIndex}
                                                className="p-2 pl-6 text-gray-500 hover:bg-orange-50 rounded cursor-pointer"
                                                onClick={(e) => {
                                                  e.stopPropagation();
                                                  handleNavigation(
                                                    nestedItem.href
                                                  );
                                                }}
                                              >
                                                {nestedItem.name}
                                              </div>
                                            )
                                          )}
                                        </div>
                                      )}
                                  </div>
                                )
                              )}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* Main Navbar Container */}
      <div
        className={`relative z-30 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : ""
        }`}
      >
        {/* Gradient overlay - only visible when not scrolled */}
        {!isScrolled && (
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `linear-gradient(to bottom, 
                rgba(0, 0, 0, ${0.15 * (1 - scrollProgress)}), 
                rgba(0, 0, 0, 0))`,
            }}
          />
        )}

        {/* Light overlay - only visible when not scrolled */}
        {!isScrolled && (
          <div
            className="absolute inset-0 z-0 bg-black opacity-10"
            style={{
              opacity: `${0.05 * (1 - scrollProgress)}`,
            }}
          />
        )}

        {/* Background overlay - only visible when not scrolled */}
        {!isScrolled && (
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${navbarbg})` }}
          />
        )}

        {/* Two-column layout */}
        <div className="flex relative z-10">
          {/* Logo Column - fixed width */}
          <div
            className="flex-shrink-0 w-[310px] flex items-center justify-center"
            onClick={handleLogoClick}
          >
            <img
              src={companylogo}
              className="h-[80px] w-[145px] hover:opacity-80 transition-opacity duration-200 cursor-pointer"
              alt="Company Logo"
            />
          </div>

          {/* Navigation Column - takes remaining space */}
          <div className="flex-grow">
            {/* Top Bar - only visible when not scrolled */}
            {!isScrolled && (
              <div className="w-full h-[47px] text-white text-sm overflow-hidden relative z-10">
                <div className="relative z-10 w-full h-full flex items-center justify-between px-4 lg:px-8">
                  {/* Stock prices - aligned with navigation items */}
                  <div className="flex items-center space-x-4">
                    {stockLoading ? (
                      <span className="font-inter font-normal text-[12px] leading-[18px] animate-pulse">
                        Loading...
                      </span>
                    ) : stockError ? (
                      <span className="font-inter font-normal text-[12px] leading-[18px] text-red-400">
                        Error loading price
                      </span>
                    ) : (
                      <>
                        <div className="flex items-center gap-2 text-white font-inter font-bold h-7">
                          BSE: ₹{stockData.bse.currentPrice.toFixed(2)}
                        </div>
                        <div className="h-4 w-px bg-white/50"></div>
                        <div className="flex items-center gap-2 text-white font-inter font-bold h-7">
                          NSE: ₹{stockData.nse.currentPrice.toFixed(2)}
                        </div>
                      </>
                    )}
                    <div className="absolute bottom-0 left-[0px] right-0 h-px bg-white z-20"></div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Search Input */}
                    <div className="relative flex items-center">
                      <button
                        onClick={() => setShowInput((prev) => !prev)}
                        className="w-8 h-8 flex items-center justify-center text-white hover:text-white"
                      >
                        <Search className="w-5 h-5" />
                      </button>

                      {showInput && (
                        <input
                          type="text"
                          placeholder="Search here..."
                          autoFocus
                          className="ml-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-black placeholder-gray-500 text-sm w-32 lg:w-40 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Main Navigation Bar */}
            <div
              ref={dropdownRef}
              className={`w-full h-[70px] flex items-center justify-between px-4 lg:px-8 relative z-30 ${
                isScrolled ? "bg-white" : ""
              }`}
            >
              {/* Navigation Menu - hidden on mobile */}
              <div className="hidden md:flex gap-3 lg:gap-4 xl:gap-6 text-sm font-medium">
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative dropdown-container"
                    onMouseEnter={() =>
                      item.hasDropdown ? handleMouseEnter(index) : null
                    }
                    onMouseLeave={item.hasDropdown ? handleMouseLeave : null}
                    onClick={() =>
                      !item.hasDropdown ? handleDirectNavClick(item) : null
                    }
                  >
                    <span
                      className={`cursor-pointer hover:text-orange-400 flex items-center gap-1 font-inter font-semibold text-[12px] lg:text-[13.19px] leading-[19.79px] tracking-normal align-middle uppercase transition-colors duration-200 ${
                        isScrolled ? "text-gray-800" : "text-white"
                      } ${!item.hasDropdown ? "hover:scale-105" : ""}`}
                    >
                      {item.title}
                      {item.hasDropdown && (
                        <svg
                          className="w-3 h-3 fill-current"
                          viewBox="0 0 10 6"
                        >
                          <path
                            d="M1 1l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>

                    {/* Dropdown Menu */}
                    {item.hasDropdown && activeDropdown === index && (
                      <div
                        className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 z-[9999] min-w-[220px] lg:min-w-[250px] mt-1"
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleDropdownLeave}
                      >
                        {item.title === "BUSINESSES" ||
                        item.title === "INVESTORS" ? (
                          // Business dropdown with hover sub-menus
                          <div className="space-y-1">
                            {item.dropdownItems.map(
                              (business, businessIndex) => (
                                <div
                                  key={businessIndex}
                                  className="relative"
                                  onMouseEnter={() =>
                                    handleBusinessSubEnter(businessIndex)
                                  }
                                  onMouseLeave={handleBusinessSubLeave}
                                >
                                  {/* Check if it's Business Overview (which should be directly clickable) */}
                                  {business.name === "Business Overview" ? (
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
                                      <span className="font-medium">
                                        {business.name}
                                      </span>
                                      {business.subItems &&
                                        business.subItems.length > 0 && (
                                          <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={2}
                                              d="M9 5l7 7-7 7"
                                            />
                                          </svg>
                                        )}
                                    </div>
                                  )}

                                  {/* Sub-menu for each business/investor */}
                                  {activeBusinessSub === businessIndex &&
                                    business.subItems &&
                                    business.subItems.length > 0 && (
                                      <div
                                        className="absolute left-full top-0 bg-white shadow-lg rounded-md py-2 z-[10000] min-w-[280px] lg:min-w-[320px] max-w-[480px] ml-0.5"
                                        onMouseEnter={() =>
                                          clearTimeout(
                                            businessSubTimeoutRef.current
                                          )
                                        }
                                        onMouseLeave={handleBusinessSubLeave}
                                      >
                                        {business.subItems.map(
                                          (subItem, subIndex) => (
                                            <div
                                              key={subIndex}
                                              className="relative"
                                              onMouseEnter={() =>
                                                handleNestedSubEnter(subIndex)
                                              }
                                              onMouseLeave={
                                                handleNestedSubLeave
                                              }
                                            >
                                              {/* Make this clickable for items with href */}
                                              {subItem.href &&
                                              subItem.href !== "#" ? (
                                                <a
                                                  href={subItem.href}
                                                  className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 text-sm cursor-pointer font-medium border-b border-gray-100 last:border-b-0 transition-colors duration-200"
                                                  onClick={(e) => {
                                                    e.preventDefault();
                                                    handleNavigation(
                                                      subItem.href
                                                    );
                                                  }}
                                                >
                                                  <span>{subItem.name}</span>
                                                  {subItem.items &&
                                                    subItem.items.length >
                                                      0 && (
                                                      <svg
                                                        className="w-4 h-4"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                      >
                                                        <path
                                                          strokeLinecap="round"
                                                          strokeLinejoin="round"
                                                          strokeWidth={2}
                                                          d="M9 5l7 7-7 7"
                                                        />
                                                      </svg>
                                                    )}
                                                </a>
                                              ) : (
                                                <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 text-sm cursor-pointer font-medium border-b border-gray-100 last:border-b-0 transition-colors duration-200">
                                                  <span>{subItem.name}</span>
                                                  {subItem.items &&
                                                    subItem.items.length >
                                                      0 && (
                                                      <svg
                                                        className="w-4 h-4"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                      >
                                                        <path
                                                          strokeLinecap="round"
                                                          strokeLinejoin="round"
                                                          strokeWidth={2}
                                                          d="M9 5l7 7-7 7"
                                                        />
                                                      </svg>
                                                    )}
                                                </div>
                                              )}

                                              {/* Nested sub-menu for items */}
                                              {activeNestedSub === subIndex &&
                                                subItem.items &&
                                                subItem.items.length > 0 && (
                                                  <div
                                                    className="absolute left-full top-0 bg-white shadow-lg rounded-md py-2 z-[10001] min-w-[220px] lg:min-w-[250px] ml-0.5"
                                                    onMouseEnter={() =>
                                                      clearTimeout(
                                                        nestedSubTimeoutRef.current
                                                      )
                                                    }
                                                    onMouseLeave={
                                                      handleNestedSubLeave
                                                    }
                                                  >
                                                    {subItem.items.map(
                                                      (
                                                        productItem,
                                                        prodIndex
                                                      ) => (
                                                        <a
                                                          key={prodIndex}
                                                          href={
                                                            productItem.href ||
                                                            "#"
                                                          }
                                                          className="block px-6 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200"
                                                          onClick={(e) => {
                                                            if (
                                                              productItem.href &&
                                                              productItem.href !==
                                                                "#"
                                                            ) {
                                                              e.preventDefault();
                                                              handleNavigation(
                                                                productItem.href
                                                              );
                                                            }
                                                          }}
                                                        >
                                                          {productItem.name ||
                                                            productItem}
                                                        </a>
                                                      )
                                                    )}
                                                  </div>
                                                )}
                                            </div>
                                          )
                                        )}
                                      </div>
                                    )}
                                </div>
                              )
                            )}
                          </div>
                        ) : (
                          // Regular dropdown layout for other menus
                          <div className="space-y-1">
                            {item.dropdownItems.map(
                              (dropdownItem, dropdownIndex) => (
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
                              )
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center gap-4 md:hidden">
                {/* Great Place Image - visible on mobile */}
                <div className="flex items-center">
                  <img
                    src={great}
                    className="h-[50px] w-auto hover:opacity-80 transition-opacity duration-200"
                    alt="Great Place to Work"
                  />
                </div>

                <button
                  onClick={toggleMobileMenu}
                  className={`focus:outline-none ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {renderMobileMenu()}
    </div>
  );
};

export default Navbar;
