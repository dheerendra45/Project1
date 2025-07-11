import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import companylogo from "../assets/company-logo.png";
import greatPlaceToWorkLogo from "../assets/great logo.png";
import tigerLogo from "../assets/tiger-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const newsletterRef = useRef(null);
  const linksRef = useRef(null);

  const isNewsletterInView = useInView(newsletterRef, { triggerOnce: false });
  const isLinksInView = useInView(linksRef, { triggerOnce: false });

  // Footer sections data
  const footerSections = [
    // Column 1: About Us
    {
      title: "About Us",
      links: [
        "Our Leadership",
        "Company Overview",
        "Awards and Achievements",
        "Manufacturing Unit",
        "Testimonials",
        "News and Events",
      ],
    },
    // Column 2: Our Businesses + Our Products
    {
      title: "Our Businesses",
      links: ["Iron and Steel", "Energy & Others", "Aluminum"],
      extraSections: [
        {
          title: "Our Products",
          links: ["Iron and Steel", "Energy & Others", "Aluminum"],
        },
      ],
    },
    // Column 3: Our Investors + News & Media
    {
      title: "Our Investors",
      links: [
        "Financial Performance",
        "Corporate Governance",
        "Shareholder Information",
        "Investor Helpdesk",
      ],
      extraSections: [
        {
          title: "News & Media",
          links: ["Iron and Steel", "Energy & Others", "Aluminum"],
        },
      ],
    },
    // Column 4: Sustainability + Careers
    {
      title: "Sustainability",
      links: ["ESG", "Environment Compliance"],
      extraSections: [
        {
          title: "Careers",
          links: ["Life at Shyam", "Current Openings"],
        },
      ],
    },
    // Column 5: Tiger Logo + SELTIGER Products + Employee Login
    {
      title: "",
      links: [],
      customContent: (
        <div className="space-y-4">
          <div className="mt-4">
            {" "}
            {/* This mt-4 matches other headings */}
            <img src={tigerLogo} alt="Tiger" className="h-12" />
          </div>
          <div>
            <Link
              to="#"
              className="text-gray-600 hover:text-orange-500 transition-colors text-sm block mb-2"
            >
              Overview
            </Link>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              SELTIGER TMT Bar
            </h3>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              SELTIGER Structure Steel
            </h3>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              SELTIGER Wire Rod
            </h3>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              SELTIGER Roofing Sheet
            </h3>
          </div>
          <div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
              Employee Login
            </button>
          </div>
        </div>
      ),
    },
    // Column 6: Great Place to Work Logo only
    // Column 6: Great Place to Work Logo only
    {
      title: "",
      links: [],
      customContent: (
        <div className="mt-4 flex items-start h-full">
          <img
            src={greatPlaceToWorkLogo}
            alt="Great Place to Work"
            className="h-40 object-contain" // Removed the JSX comment from inside the attribute
          />
        </div>
      ),
    },
  ];

  return (
    <footer className="w-full bg-gray-50">
      {/* Newsletter Section */}
      <motion.div
        ref={newsletterRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isNewsletterInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white py-8 sm:py-12 border-b border-gray-200"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Subscribe to our news alerts
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Email Id"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 w-64"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="w-8 h-8 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.744 2.840c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.538.535 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Links Section - 6 columns */}
      <motion.div
        ref={linksRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isLinksInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="py-8 sm:py-12"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {footerSections.map((section, index) => (
              <div key={index} className="min-w-[150px]">
                {section.title && (
                  <h3 className="text-sm font-semibold text-black mb-4 mt-4">
                    {section.title}
                  </h3>
                )}
                {section.links.length > 0 && (
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to="#"
                          className="text-gray-600 hover:text-orange-500 transition-colors text-sm"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {section.extraSections &&
                  section.extraSections.map((extraSection, extraIndex) => (
                    <div key={extraIndex} className="mt-6">
                      <h3 className="text-sm font-semibold text-gray-900 mb-4">
                        {extraSection.title}
                      </h3>
                      <ul className="space-y-3">
                        {extraSection.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link
                              to="#"
                              className="text-gray-600 hover:text-orange-500 transition-colors text-sm"
                            >
                              {link}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                {section.customContent && section.customContent}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <div className="bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img src={companylogo} alt="Company Logo" className="h-8" />
              <span className="text-sm text-gray-600">
                Copyright {currentYear} Shyam Theme by{" "}
                <Link to="#" className="text-orange-500 hover:text-orange-600">
                  Shyam
                </Link>{" "}
                | All Rights Reserved
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 text-sm">
              <Link
                to="#"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Terms of use
              </Link>
              <span className="text-gray-600">🌍 India</span>
              <span className="text-gray-600">✉️ contact@shyamgroup.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
