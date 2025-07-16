import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import companylogo from "../assets/company-logo.png";
import greatPlaceToWorkLogo from "../assets/great logo.png";
import tigerLogo from "../assets/footer/tiger.png";
import facebook from "../assets/footer/Group (7).png";
import insta from "../assets/footer/Group (8).png";
import linkdin from "../assets/footer/Group (9).png";
import twitter from "../assets/footer/Group (11).png";
import youtube from "../assets/footer/Group (10).png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const newsletterRef = useRef(null);
  const linksRef = useRef(null);

  const isNewsletterInView = useInView(newsletterRef, { triggerOnce: false });
  const isLinksInView = useInView(linksRef, { triggerOnce: false });

  // Footer sections data
  const footerSections = [
    // Column 1: Great Place to Work Logo only
    {
      title: "",
      links: [],
      customContent: (
        <div className="mt-4">
          <img
            src={greatPlaceToWorkLogo}
            alt="Great Place to Work"
            className="h-32 w-20 object-contain"
          />
        </div>
      ),
    },
    // Column 2: About Us
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
    // Column 3: Our Businesses + Our Products
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
    // Column 4: Our Investors + News & Media
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
    // Column 5: Sustainability + Careers
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
    // Column 6: Tiger Logo + SELTIGER Products + Employee Login
    {
      title: "",
      links: [],
      customContent: (
        <div className="space-y-3">
          <div className="mt-4">
            <img src={tigerLogo} alt="Tiger" className="h-[55px] w-[135px]" />
          </div>
          <div className="space-y-2">
            <Link
              to="#"
              className="block font-normal text-base leading-[24px] tracking-normal font-['Inter'] text-gray-600 hover:text-orange-500 transition-colors"
            >
              Overview
            </Link>
            <Link
              to="#"
              className="block font-normal text-base leading-[24px] tracking-normal font-['Inter'] text-gray-600 hover:text-orange-500 transition-colors"
            >
              SELTIGER TMT Bar
            </Link>
            <Link
              to="#"
              className="block font-normal text-base leading-[24px] tracking-normal font-['Inter'] text-gray-600 hover:text-orange-500 transition-colors"
            >
              SELTIGER Structure Steel
            </Link>
            <Link
              to="#"
              className="block font-normal text-base leading-[24px] tracking-normal font-['Inter'] text-gray-600 hover:text-orange-500 transition-colors"
            >
              SELTIGER Wire Rod
            </Link>
            <Link
              to="#"
              className="block font-normal text-base leading-[24px] tracking-normal font-['Inter'] text-gray-600 hover:text-orange-500 transition-colors"
            >
              SELTIGER Roofing Sheet
            </Link>
          </div>
          <div className="pt-2">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Employee Login
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <footer className="w-full bg-gray-50 max-h-[604px] overflow-hidden">
      {/* Newsletter Section */}
      <motion.div
        ref={newsletterRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isNewsletterInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gray-50 pt-8 pb-6"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h2 className="font-bold text-[30px] leading-[36px] tracking-normal text-gray-900 font-['Inter']">
                Subscribe to our news alerts
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Email Id"
                  className="px-3 py-2 w-56 text-base font-normal leading-[16px] tracking-normal text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 font-['Inter']"
                />

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-medium transition-colors text-sm">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center gap-2">
                <a href="#" className="w-7 h-7">
                  <img
                    src={facebook}
                    alt="Facebook"
                    className="w-full h-full object-contain"
                  />
                </a>
                <a href="#" className="w-7 h-7">
                  <img
                    src={insta}
                    alt="Instagram"
                    className="w-full h-full object-contain"
                  />
                </a>
                <a href="#" className="w-7 h-7">
                  <img
                    src={linkdin}
                    alt="LinkedIn"
                    className="w-full h-full object-contain"
                  />
                </a>
                <a href="#" className="w-7 h-7">
                  <img
                    src={twitter}
                    alt="Twitter"
                    className="w-full h-full object-contain"
                  />
                </a>
                <a href="#" className="w-7 h-7">
                  <img
                    src={youtube}
                    alt="YouTube"
                    className="w-full h-full object-contain"
                  />
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
        className="py-8"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
            {footerSections.map((section, index) => (
              <div key={index} className="flex flex-col">
                {section.title && (
                  <h3 className="font-bold text-[20px] leading-[28px] tracking-normal font-['Inter'] text-black mb-3 mt-2">
                    {section.title}
                  </h3>
                )}
                {section.links.length > 0 && (
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to="#"
                          className="font-normal text-base leading-[24px] tracking-normal font-['Inter'] text-gray-600 hover:text-orange-500 transition-colors"
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
                      <h3 className="font-bold text-[20px] leading-[28px] tracking-normal font-['Inter'] text-black mb-3">
                        {extraSection.title}
                      </h3>
                      <ul className="space-y-2">
                        {extraSection.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link
                              to="#"
                              className="font-normal text-base leading-[24px] tracking-normal font-['Inter'] text-gray-600 hover:text-orange-500 transition-colors"
                            >
                              {link}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                {section.customContent && (
                  <div className="flex justify-start">
                    {section.customContent}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <div className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <img
                src={companylogo}
                alt="Company Logo"
                className="h-[32px] w-[68px]"
              />
              <span className="font-normal text-sm leading-[20px] tracking-normal text-gray-600 font-['Inter']">
                Copyright {currentYear} Shyam Theme by{" "}
                <Link
                  to="#"
                  className="text-orange-500 hover:text-orange-600 font-normal text-sm leading-[20px] tracking-normal font-['Inter']"
                >
                  Shyam
                </Link>{" "}
                | All Rights Reserved
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 text-sm leading-[20px] font-normal tracking-normal font-['Inter'] text-gray-600">
              <Link to="#" className="hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-orange-500 transition-colors">
                Terms of use
              </Link>
              <span>🌍 India</span>
              <span>✉️ contact@shyamgroup.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
