import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import herobg from "../../assets/Currentopening/Herobg.jpg";
import companylogo from "../../assets/products/image28.png";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronRight,
  FiSearch,
  FiFilter,
} from "react-icons/fi";

const Hero = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeBusinessSub, setActiveBusinessSub] = useState(null);
  const [activeNestedSub, setActiveNestedSub] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const [mobileNestedMenu, setMobileNestedMenu] = useState(null);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

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
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-[57px] bg-black flex items-center justify-between px-4 md:px-6 text-white text-sm"
      >
        <div className="flex items-center ml-2 md:ml-7">
          <span className="font-inter font-normal text-[10px] md:text-[12px] leading-[18px]">
            €208.00 +2.72
          </span>
        </div>

        <div className="flex items-center">
          <span className="font-roboto font-extrabold text-[12px] md:text-[14px] leading-[21px]">
            Lorem Ipsum Dollar Site ent
          </span>
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <span className="hidden sm:flex items-center gap-1 font-sans font-medium text-[12px] md:text-[14px] leading-[19px] tracking-normal">
            Employee Login
            <FiChevronDown className="w-3 h-3" />
          </span>
          <span className="hidden sm:flex items-center gap-1 font-sans font-medium text-[12px] md:text-[14px] leading-[19px] tracking-normal">
            🌐 Global(English)
            <FiChevronDown className="w-3 h-3" />
          </span>
        </div>
      </motion.div>

      {/* Middle Navbar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full h-[57px] mt-0 flex items-center justify-between px-4 md:px-8 relative z-30"
        style={{
          background: "#FFFFFF26",
        }}
        ref={dropdownRef}
      >
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
          <div className="flex items-center">
            <Link to="/">
              <div className="text-white px-3 py-2 rounded text-sm font-bold">
                <img
                  src={companylogo}
                  className="h-[70px] w-[125px]"
                  alt="Company Logo"
                />
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Desktop Navigation Menu - Hidden on mobile */}
        <div className="hidden lg:flex gap-4 xl:gap-8 text-white text-sm font-medium">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative dropdown-container"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <motion.span
                whileHover={{ color: "#f97316" }}
                className="cursor-pointer flex items-center gap-1 font-roboto font-medium text-[11px] xl:text-[13.19px] leading-[19.79px] tracking-normal align-middle uppercase"
              >
                {item.title}
                {item.hasDropdown && (
                  <motion.div
                    animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                    className="w-3 h-3"
                  >
                    <FiChevronDown className="w-full h-full" />
                  </motion.div>
                )}
              </motion.span>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {item.hasDropdown && activeDropdown === index && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 z-[9999] min-w-[200px] xl:min-w-[250px] mt-1"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {item.title === "BUSINESSES" ||
                    item.title === "INVESTORS" ? (
                      <div className="space-y-1">
                        {item.dropdownItems.map((business, businessIndex) => (
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
                              <motion.a
                                whileHover={{ x: 5 }}
                                href={business.href || "#"}
                                className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 text-sm cursor-pointer font-medium border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                                onClick={(e) =>
                                  handleNavigation(business.href, e)
                                }
                              >
                                <span>{business.name}</span>
                              </motion.a>
                            ) : (
                              <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 text-sm cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                              >
                                <span className="font-medium">
                                  {business.name}
                                </span>
                                {business.subItems &&
                                  business.subItems.length > 0 && (
                                    <FiChevronRight className="w-4 h-4" />
                                  )}
                              </motion.div>
                            )}

                            {/* Sub-menu */}
                            <AnimatePresence>
                              {activeBusinessSub === businessIndex &&
                                business.subItems &&
                                business.subItems.length > 0 && (
                                  <motion.div
                                    variants={dropdownVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-full top-0 bg-white shadow-lg rounded-md py-2 z-[10000] min-w-[250px] xl:min-w-[300px] max-w-[500px] ml-1"
                                    onMouseEnter={handleDropdownEnter}
                                    onMouseLeave={handleDropdownLeave}
                                  >
                                    {business.subItems.map(
                                      (subItem, subIndex) => (
                                        <div
                                          key={subIndex}
                                          className="relative"
                                          onMouseEnter={() =>
                                            handleNestedSubEnter(subIndex)
                                          }
                                          onMouseLeave={handleNestedSubLeave}
                                        >
                                          {/* Make this clickable for items with href */}
                                          {subItem.href &&
                                          subItem.href !== "#" ? (
                                            <motion.a
                                              whileHover={{ x: 5 }}
                                              href={subItem.href}
                                              className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 text-sm cursor-pointer font-medium border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                                              onClick={(e) =>
                                                handleNavigation(
                                                  subItem.href,
                                                  e
                                                )
                                              }
                                            >
                                              <span>{subItem.name}</span>
                                              {subItem.categories && (
                                                <FiChevronRight className="w-4 h-4" />
                                              )}
                                            </motion.a>
                                          ) : (
                                            <motion.div
                                              whileHover={{ x: 5 }}
                                              className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 text-sm cursor-pointer font-medium border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                                            >
                                              <span>{subItem.name}</span>
                                              {subItem.categories && (
                                                <FiChevronRight className="w-4 h-4" />
                                              )}
                                            </motion.div>
                                          )}

                                          {/* Nested sub-menu */}
                                          <AnimatePresence>
                                            {activeNestedSub === subIndex &&
                                              subItem.categories && (
                                                <motion.div
                                                  variants={dropdownVariants}
                                                  initial="hidden"
                                                  animate="visible"
                                                  exit="exit"
                                                  transition={{ duration: 0.2 }}
                                                  className="absolute left-full top-0 bg-white shadow-lg rounded-md py-2 z-[10001] min-w-[200px] xl:min-w-[250px] ml-1"
                                                  onMouseEnter={
                                                    handleDropdownEnter
                                                  }
                                                  onMouseLeave={
                                                    handleDropdownLeave
                                                  }
                                                >
                                                  {subItem.categories.map(
                                                    (category, catIndex) => (
                                                      <div
                                                        key={catIndex}
                                                        className="space-y-1"
                                                      >
                                                        <motion.div
                                                          initial={{
                                                            opacity: 0,
                                                          }}
                                                          animate={{
                                                            opacity: 1,
                                                          }}
                                                          transition={{
                                                            delay:
                                                              catIndex * 0.05,
                                                          }}
                                                          className="px-4 py-2 text-sm font-medium text-orange-600 bg-orange-50 border-b border-gray-100"
                                                        >
                                                          {category.name}
                                                        </motion.div>
                                                        {category.items.map(
                                                          (
                                                            productItem,
                                                            prodIndex
                                                          ) => (
                                                            <motion.a
                                                              key={prodIndex}
                                                              whileHover={{
                                                                x: 5,
                                                              }}
                                                              href="#"
                                                              className="block px-6 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-150"
                                                              onClick={(e) =>
                                                                e.preventDefault()
                                                              }
                                                            >
                                                              • {productItem}
                                                            </motion.a>
                                                          )
                                                        )}
                                                      </div>
                                                    )
                                                  )}
                                                </motion.div>
                                              )}
                                          </AnimatePresence>
                                        </div>
                                      )
                                    )}
                                  </motion.div>
                                )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-1">
                        {item.dropdownItems.map(
                          (dropdownItem, dropdownIndex) => (
                            <motion.a
                              key={dropdownIndex}
                              whileHover={{ x: 5 }}
                              href={dropdownItem.href || "#"}
                              className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 text-sm transition-colors duration-150"
                              onClick={(e) =>
                                handleNavigation(dropdownItem.href, e)
                              }
                            >
                              {dropdownItem.name}
                            </motion.a>
                          )
                        )}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button - Visible only on mobile */}
        <div className="lg:hidden flex items-center gap-4">
          <div className="relative">
            <FiSearch className="w-5 h-5 text-white" />
          </div>
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Desktop Search Bar - Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} className="relative">
            <input
              type="text"
              placeholder="Search here..."
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-white placeholder-white/70 text-sm w-36 xl:w-48 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70" />
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Menu - Only visible when mobileMenuOpen is true */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween", ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 w-4/5 max-w-md bg-white shadow-lg z-50 overflow-y-auto"
          >
            <div className="p-4">
              <div className="flex justify-between items-center border-b pb-4">
                <img src={companylogo} className="h-[40px] w-[90px]" />
                <button onClick={toggleMobileMenu} className="text-gray-500">
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-4">
                {navItems.map((item, index) => (
                  <div key={index} className="mb-2">
                    <div
                      className="flex justify-between items-center p-3 text-gray-700 font-medium cursor-pointer hover:bg-gray-100 rounded"
                      onClick={() => toggleMobileSubMenu(index)}
                    >
                      <span>{item.title}</span>
                      {item.hasDropdown && (
                        <motion.div
                          animate={{ rotate: mobileSubMenu === index ? 90 : 0 }}
                        >
                          <FiChevronRight className="w-4 h-4" />
                        </motion.div>
                      )}
                    </div>

                    {/* Mobile Submenu */}
                    {mobileSubMenu === index && item.hasDropdown && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 overflow-hidden"
                      >
                        {item.dropdownItems.map(
                          (dropdownItem, dropdownIndex) => (
                            <div key={dropdownIndex} className="mb-1">
                              {(item.title === "BUSINESSES" ||
                                item.title === "INVESTORS") &&
                              dropdownItem.subItems ? (
                                <>
                                  <div
                                    className="flex justify-between items-center p-2 text-gray-600 text-sm cursor-pointer hover:bg-gray-50 rounded"
                                    onClick={() =>
                                      toggleMobileNestedMenu(dropdownIndex)
                                    }
                                  >
                                    <span>{dropdownItem.name}</span>
                                    {dropdownItem.subItems &&
                                      dropdownItem.subItems.length > 0 && (
                                        <motion.div
                                          animate={{
                                            rotate:
                                              mobileNestedMenu === dropdownIndex
                                                ? 90
                                                : 0,
                                          }}
                                        >
                                          <FiChevronRight className="w-4 h-4" />
                                        </motion.div>
                                      )}
                                  </div>

                                  {/* Mobile Nested Submenu */}
                                  {mobileNestedMenu === dropdownIndex &&
                                    dropdownItem.subItems && (
                                      <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="pl-4 overflow-hidden"
                                      >
                                        {dropdownItem.subItems.map(
                                          (subItem, subIndex) => (
                                            <div
                                              key={subIndex}
                                              className="mb-1"
                                            >
                                              {subItem.categories ? (
                                                <>
                                                  <div
                                                    className="flex justify-between items-center p-2 text-gray-500 text-sm cursor-pointer hover:bg-gray-50 rounded"
                                                    onClick={() => {}}
                                                  >
                                                    <span>{subItem.name}</span>
                                                    <FiChevronRight className="w-4 h-4" />
                                                  </div>

                                                  {/* Mobile Categories */}
                                                  <div className="pl-4">
                                                    {subItem.categories.map(
                                                      (category, catIndex) => (
                                                        <div
                                                          key={catIndex}
                                                          className="mb-1"
                                                        >
                                                          <div className="p-2 text-xs font-medium text-orange-600 bg-orange-50 rounded">
                                                            {category.name}
                                                          </div>
                                                          {category.items.map(
                                                            (
                                                              item,
                                                              itemIndex
                                                            ) => (
                                                              <a
                                                                key={itemIndex}
                                                                href="#"
                                                                className="block p-2 text-xs text-gray-500 hover:text-orange-500"
                                                                onClick={(e) =>
                                                                  e.preventDefault()
                                                                }
                                                              >
                                                                • {item}
                                                              </a>
                                                            )
                                                          )}
                                                        </div>
                                                      )
                                                    )}
                                                  </div>
                                                </>
                                              ) : (
                                                <a
                                                  href={subItem.href || "#"}
                                                  className="block p-2 text-gray-500 text-sm hover:bg-gray-50 rounded"
                                                  onClick={(e) => {
                                                    e.preventDefault();
                                                    if (
                                                      subItem.href &&
                                                      subItem.href !== "#"
                                                    ) {
                                                      window.location.href =
                                                        subItem.href;
                                                    }
                                                  }}
                                                >
                                                  {subItem.name}
                                                </a>
                                              )}
                                            </div>
                                          )
                                        )}
                                      </motion.div>
                                    )}
                                </>
                              ) : (
                                <a
                                  href={dropdownItem.href || "#"}
                                  className="block p-2 text-gray-600 text-sm hover:bg-gray-50 rounded"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    if (
                                      dropdownItem.href &&
                                      dropdownItem.href !== "#"
                                    ) {
                                      window.location.href = dropdownItem.href;
                                    }
                                  }}
                                >
                                  {dropdownItem.name}
                                </a>
                              )}
                            </div>
                          )
                        )}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <FiSearch className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 bg-transparent border-none focus:outline-none text-sm"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="relative h-full -mt-[65px]">
        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
        />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={herobg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black"
        ></motion.div>

        {/* Content */}
        <div className="relative z-20 px-6 md:px-12 lg:px-[114px] pt-[150px] md:pt-[200px] lg:pt-[275px] text-white">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.1] font-space-grotesk font-bold mb-4 md:mb-6"
          >
            Current Opening
          </motion.h1>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex space-x-1 font-space-grotesk font-medium text-sm md:text-[16px] leading-[1.7]"
          >
            <span>Home</span>
            <span>&gt;</span>
            <span>Businesses</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
