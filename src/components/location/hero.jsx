import { useState, useEffect, useRef } from "react";
import a1 from "../../assets/location/logo.png";
import a2 from "../../assets/location/homelocation.png";
import { ChevronDown, Search, Menu, X } from "lucide-react";

export default function Hero() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeBusinessSub, setActiveBusinessSub] = useState(null);
  const [activeNestedSub, setActiveNestedSub] = useState(null);
  const dropdownRef = useRef(null);

  const closeSidebar = () => {
    setSidebarOpen(false);
    setOpenSubmenuIndex(null);
    setActiveDropdown(null);
    setActiveBusinessSub(null);
    setActiveNestedSub(null);
  };

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
    setActiveBusinessSub(null);
    setActiveNestedSub(null);
  };

  const handleMouseLeave = () => {
    if (!dropdownRef.current?.contains(document.activeElement)) {
      setActiveDropdown(null);
      setActiveBusinessSub(null);
      setActiveNestedSub(null);
    }
  };

  const handleBusinessSubEnter = (businessIndex) => {
    setActiveBusinessSub(businessIndex);
  };

  const handleNestedSubEnter = (nestedIndex) => {
    setActiveNestedSub(nestedIndex);
  };

  const handleClickOutside = (e) => {
    if (!dropdownRef.current?.contains(e.target)) {
      setActiveDropdown(null);
      setActiveBusinessSub(null);
      setActiveNestedSub(null);
    }
  };

  const handleNavigation = (href, e) => {
    if (e) e.preventDefault();
    if (href && href !== "#") {
      window.location.href = href;
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navItems = [
    {
      label: "ABOUT US",
      hasDropdown: true,
      dropdownItems: [
        { name: "Company Overview", href: "/overview" },
        { name: "Leadership", href: "/leadership" },
        { name: "Awards and Achievements", href: "/achievement" },
        { name: "Testimonials", href: "#" },
        { name: "News and Events", href: "#" },
      ],
    },
    {
      label: "BUSINESS",
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
            },
            {
              name: "Stainless Steel",
              href: "#",
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
            { name: "Flat Rolled Products", href: "#" },
            { name: "Battery Foil", href: "#" },
          ],
        },
        {
          name: "SEL Tiger",
          href: "#",
        },
        {
          name: "View All",
          href: "#",
        },
      ],
    },
    {
      label: "INVESTORS",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Financials & Disclosures",
          href: "#",
          subItems: [
            { name: "Financial Performance", href: "#" },
            { name: "Financial Statements", href: "#" },
          ],
        },
        {
          name: "Corporate Governance",
          href: "#",
          subItems: [
            { name: "Policies", href: "#" },
            { name: "Corporate Governance", href: "#" },
          ],
        },
        {
          name: "Shareholder Information",
          href: "#",
          subItems: [
            { name: "AGM", href: "#" },
            { name: "Company Notices", href: "#" },
          ],
        },
      ],
    },
    {
      label: "COMMUNITY",
      hasDropdown: true,
      dropdownItems: [
        { name: "CSR", href: "#" },
        { name: "Knowledge Hub", href: "#" },
        { name: "Blogs", href: "#" },
        { name: "FAQ", href: "#" },
      ],
    },
    {
      label: "SUSTAINABILITY",
      hasDropdown: true,
      dropdownItems: [
        { name: "ESG @ shyam", href: "#" },
        { name: "Compliance", href: "#" },
      ],
    },
    {
      label: "CAREERS",
      hasDropdown: true,
      dropdownItems: [
        { name: "Life@shyam", href: "#" },
        { name: "Current Openings", href: "#" },
      ],
    },
    {
      label: "CONTACT US",
      hasDropdown: true,
      dropdownItems: [
        { name: "Contact Form", href: "#" },
        { name: "Company Location", href: "#" },
      ],
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white relative"
      style={{
        backgroundImage: `url(${a2})`,
        backgroundPosition: "center calc(50% - 50px)",
      }}
    >
      {/* Middle Navbar */}
      <div
        className="w-full h-[57px] mt-0 flex items-center justify-between px-8 relative z-30 hidden lg:flex"
        style={{
          background: "#FFFFFF26",
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-white px-3 py-2 rounded text-sm font-bold">
            <img src={a1} className="h-[54.84px] w-[116.53px]" alt="Logo" />
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
              ref={dropdownRef}
            >
              <span className="cursor-pointer hover:text-orange-400 flex items-center gap-1 font-roboto font-medium text-[13.19px] leading-[19.79px] tracking-normal align-middle uppercase">
                {item.label}
                {item.hasDropdown && (
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 10 6">
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
                  className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 z-[9999] min-w-[250px] mt-2"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => {
                    setActiveBusinessSub(null);
                    setActiveNestedSub(null);
                  }}
                >
                  {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                    <div
                      key={dropdownIndex}
                      className="relative"
                      onMouseEnter={() => {
                        if (dropdownItem.subItems) {
                          handleBusinessSubEnter(dropdownIndex);
                        }
                      }}
                    >
                      <div
                        className={`flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 text-sm cursor-pointer ${
                          dropdownItem.subItems ? "font-medium" : ""
                        }`}
                        onClick={(e) => {
                          if (!dropdownItem.subItems) {
                            handleNavigation(dropdownItem.href, e);
                          }
                        }}
                      >
                        <span>{dropdownItem.name}</span>
                        {dropdownItem.subItems && (
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

                      {/* Sub-menu for business items */}
                      {activeBusinessSub === dropdownIndex &&
                        dropdownItem.subItems && (
                          <div
                            className="absolute left-full top-0 bg-white shadow-lg rounded-md py-2 z-[10000] min-w-[200px]"
                            onMouseLeave={() => setActiveBusinessSub(null)}
                          >
                            {dropdownItem.subItems.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href={subItem.href}
                                className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 text-sm cursor-pointer border-b border-gray-100"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleNavigation(subItem.href);
                                }}
                              >
                                {subItem.name}
                              </a>
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

        {/* Search Bar */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-white placeholder-white/70 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="bg-orange-500 rounded-full p-2">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V4z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Hamburger menu for small screens */}
      <div className="lg:hidden flex items-center justify-between px-6 py-4">
        <img src={a1} alt="Logo" className="h-8 w-auto" />
        <button
          aria-label="Toggle menu"
          onClick={() => setSidebarOpen(true)}
          className="text-white"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white/90 backdrop-blur-md text-black z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
          <img src={a1} alt="Logo" className="h-8 w-auto" />
          <button aria-label="Close menu" onClick={closeSidebar}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-4 text-lg font-semibold select-none">
          {navItems.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <div
                onClick={() =>
                  setOpenSubmenuIndex(openSubmenuIndex === idx ? null : idx)
                }
                className="flex items-center justify-between cursor-pointer"
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      openSubmenuIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {item.hasDropdown && openSubmenuIndex === idx && (
                <ul className="pl-4 mt-2 space-y-1 text-sm text-gray-700">
                  {item.dropdownItems.map((dropdownItem, dropdownIdx) => (
                    <li key={dropdownIdx} className="flex flex-col">
                      <div
                        className="cursor-pointer hover:text-orange-500 transition-colors duration-200 flex items-center justify-between"
                        onClick={(e) => {
                          if (!dropdownItem.subItems) {
                            handleNavigation(dropdownItem.href, e);
                          }
                        }}
                      >
                        <span>{dropdownItem.name}</span>
                        {dropdownItem.subItems && (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                      {dropdownItem.subItems && (
                        <ul className="pl-4 mt-1 space-y-1">
                          {dropdownItem.subItems.map((subItem, subIdx) => (
                            <li
                              key={subIdx}
                              className="cursor-pointer hover:text-orange-500 transition-colors duration-200"
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavigation(subItem.href);
                              }}
                            >
                              {subItem.name}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="mt-6 backdrop-blur-md bg-white/50 rounded-full px-4 py-2 flex items-center gap-2 text-black">
            <Search className="w-5 h-5" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-transparent focus:outline-none placeholder:text-black text-black text-base w-full"
            />
          </div>
        </nav>
      </aside>

      {/* Hero Text Content */}
      <div className="px-9 mt-30 max-w-2xl w-full ml-auto lg:ml-12 lg:w-1/2 text-left">
        <h1 className="text-4xl sm:text-6xl font-bold text-white leading-snug">
          Locations
        </h1>
        <br />
        <h3>
          Fusce et diam nisl. Curabitur est orci, tempus nec iaculis non,
          hendrerit eget est. Fusce nisi lorem, scelerisque vitae tempus eget,
          consequat ultracies nulls
        </h3>
        <hr
          className="my-6 h-1 border-0 rounded"
          style={{ background: "linear-gradient(to right, orange, white)" }}
        />
        <a href="#" className="text-base sm:text-lg text-white">
          Home &gt; Locations
        </a>
      </div>
    </div>
  );
}
