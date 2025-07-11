import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import companylogo from "../assets/company-logo.png";
import greatPlaceToWorkLogo from "../assets/great logo.png"; // Add your logo
import tigerLogo from "../assets/tiger-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const newsletterRef = useRef(null);
  const linksRef = useRef(null);

  const isNewsletterInView = useInView(newsletterRef, { triggerOnce: false });
  const isLinksInView = useInView(linksRef, { triggerOnce: false });

  // Footer sections data - reorganized as per requirements
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
    // Column 2: Our Businesses + Products
    {
      title: "Our Businesses",
      links: [
        "Iron and Steel",
        "Energy & Others",
        "Aluminum",
        // Products section
        "Our Products",
        "SELTIGER TMT Bar",
        "SELTIGER Structure Steel",
        "SELTIGER Wire Rod",
        "SELTIGER Roofing Sheet",
      ],
    },
    // Column 3: Our Investors
    {
      title: "Our Investors",
      links: [
        "Financial Performance",
        "Corporate Governance",
        "Shareholder Information",
        "Investor Helpdesk",
      ],
    },
    // Column 4: News & Media
    {
      title: "News & Media",
      links: ["Iron and Steel", "Energy & Others", "Aluminum"],
    },
    // Column 5: Sustainability + Careers
    {
      title: "Sustainability",
      links: [
        "ESO",
        "Environment Compliance",
        // Careers section
        "Careers",
        "Life at Shyam",
        "Current Openings",
      ],
    },
    // Column 6: Tiger + Employee Login
    {
      title: "Tiger",
      links: ["Overview", "Products"],
      customContent: (
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Employee Login
            </h3>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
              Login
            </button>
          </div>
          <div>
            <img
              src={greatPlaceToWorkLogo}
              alt="Great Place to Work"
              className="h-10"
            />
          </div>
          <div>
            <img src={tigerLogo} alt="Tiger" className="h-10" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <footer className="w-full bg-gray-50">
      {/* Newsletter Section (unchanged) */}
      <motion.div
        ref={newsletterRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isNewsletterInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white py-8 sm:py-12 border-b border-gray-200"
      >
        {/* ... (keep existing newsletter code) ... */}
      </motion.div>

      {/* Links Section - Now with 6 columns */}
      <motion.div
        ref={linksRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isLinksInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="py-12 sm:py-16"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="min-w-[120px]">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
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
                {section.customContent && section.customContent}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer (unchanged) */}
      <div className="bg-white border-t border-gray-200 py-6">
        {/* ... (keep existing bottom footer code) ... */}
      </div>
    </footer>
  );
};

export default Footer;
