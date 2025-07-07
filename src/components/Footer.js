import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import companylogo from "../assets/company-logo.png";
import footer24 from "../assets/footer24.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const newsletterRef = useRef(null);
  const linksRef = useRef(null);

  const isNewsletterInView = useInView(newsletterRef, { triggerOnce: false });
  const isLinksInView = useInView(linksRef, { triggerOnce: false });

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
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="lg:w-1/2">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Subscribe to our news alerts
              </h3>
            </div>
            <div className="lg:w-1/2 flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex flex-1 max-w-md">
                <input
                  type="email"
                  placeholder="Email Id"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-r-md font-medium transition-colors">
                  Subscribe
                </button>
              </div>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.5.4.6.2 1 .5 1.4 1 .4.4.7.8 1 1.4.2.5.3 1.3.4 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.5-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4 1-.5.2-1.3.3-2.5.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1-.5-1.4-1-.4-.4-.7-.8-1-1.4-.2-.5-.3-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.5.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-1 .5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.6.1 4.5.3 3.6.6c-.9.3-1.7.7-2.4 1.4C.3 3.7 0 4.5.6 5.4.3 6.3.1 7.4.1 9c-.1 1.3-.1 1.7-.1 4.9s0 3.6.1 4.9c.1 1.6.3 2.7.6 3.6.3.9.7 1.7 1.4 2.4.7.7 1.5 1.2 2.4 1.4.9.3 2 .5 3.6.6 1.3.1 1.7.1 4.9.1s3.6 0 4.9-.1c1.6-.1 2.7-.3 3.6-.6.9-.3 1.7-.7 2.4-1.4.7-.7 1.2-1.5 1.4-2.4.3-.9.5-2 .6-3.6.1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.6-.3-2.7-.6-3.6-.3-.9-.7-1.7-1.4-2.4-.7-.7-1.5-1.2-2.4-1.4C19.7.3 18.6.1 17 .1 15.7 0 15.3 0 12 0z" />
                    <path d="M12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 1 0 12 5.8zm0 10.3a4.1 4.1 0 1 1 0-8.2 4.1 4.1 0 0 1 0 8.2zM18.4 4.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.93 3.09h-2.18l-4.69 6.05L9.64 3.09H3.27L9.67 12 3 20.91h2.18l5.03-6.49 4.69 6.49h6.37l-6.69-8.92z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Links Section */}
      <motion.div
        ref={linksRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isLinksInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="py-12 sm:py-16"
      >
        <div className="container mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">            {/* Useful Links Section */}
            <div className=""> 
              <h3 className="text-xl font-bold text-gray-900 mb-6 ">Useful Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-orange-500 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-gray-600 hover:text-orange-500 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-600 hover:text-orange-500 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-gray-600 hover:text-orange-500 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-gray-600 hover:text-orange-500 transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-600 hover:text-orange-500 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Services Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/achievement" className="text-gray-600 hover:text-orange-500 transition-colors">
                    Achievement
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-600 hover:text-orange-500 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-600 hover:text-orange-500 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/LeadershipPage" className="text-gray-600 hover:text-orange-500 transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="/faq-page" className="text-gray-600 hover:text-orange-500 transition-colors">
                    Faq
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-600 hover:text-orange-500 transition-colors">
                    Terms of use
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Newsletter</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/decarbonisation" className="text-gray-600 hover:text-orange-500 transition-colors">
                    Decarbonisation
                  </Link>
                </li>
                <li>
                  <Link to="/net-zero" className="text-gray-600 hover:text-orange-500 transition-colors">
                    Net-Zero Carbon
                  </Link>
                </li>
                <li>
                  <Link to="/health-safety" className="text-gray-600 hover:text-orange-500 transition-colors">
                    Health, Safety & Environment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links Section */}
            
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <div className="bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <img
                src={companylogo}
                alt="Shyam Metalics Logo"
                className="h-8 mr-4"
              />
              <p className="text-gray-600 text-sm">
                Copyright {currentYear} Shyam Theme by{" "}
                <Link to="/" className="text-orange-500 hover:text-orange-600">
                  Shyam
                </Link>{" "}
                | All Rights Reserved
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/privacy" className="text-gray-600 hover:text-orange-500 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-orange-500 text-sm">
                Terms of use
              </Link>
              <div className="flex items-center text-gray-600 text-sm">
                <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                India
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                contact@shyamgroup.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;