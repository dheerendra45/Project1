import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import companylogo from "../assets/company-logo.png";
import footer24 from "../assets/footer24.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyRef = useRef(null);
  const linksRef = useRef(null);
  const servicesRef = useRef(null);
  const newsletterRef = useRef(null);

  const isCompanyInView = useInView(companyRef, { triggerOnce: false });
  const isLinksInView = useInView(linksRef, { triggerOnce: false });
  const isServicesInView = useInView(servicesRef, { triggerOnce: false });
  const isNewsletterInView = useInView(newsletterRef, { triggerOnce: false });

  return (
    <footer className="w-full py-8 sm:py-12 bg-[#FFFFFF] bg-no-repeat bg-bottom bg-cover">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Company Info */}
          <motion.div
            ref={companyRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isCompanyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/4"
          >
            <div className="mb-4 sm:mb-6">
              <img
                src={companylogo}
                alt="Shyam Metalics Logo"
                className="h-30 sm:h-30"
              />
            </div>
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center text-gray-700 text-sm sm:text-base mb-2">
                <svg
                  className="w-4 h-4 mr-2 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                india
              </div>
              <div className="flex items-center text-gray-700 text-sm sm:text-base">
                <svg
                  className="w-4 h-4 mr-2 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                contact@shyamgroup.com
              </div>
            </div>
            <div className="border-2 border-dashed border-orange-500 p-4 bg-orange-50">
              <div className="text-sm text-gray-600 mb-1">
                FEEL FREE TO CALL US
              </div>
              <div className="text-xl font-bold text-black">
                +91 33 4017 5000
              </div>
              <div className="absolute -right-2 -top-2 bg-orange-500 p-2 rounded">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            ref={linksRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isLinksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/4"
          >
            <h3 className="text-lg sm:text-xl mb-4 sm:mb-6">Useful Links</h3>
            <ul className="space-y-2 sm:space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-black hover:text-orange-500 text-sm sm:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-black hover:text-orange-500 text-sm sm:text-base"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-black hover:text-orange-500 text-sm sm:text-base"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-black hover:text-orange-500 text-sm sm:text-base"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-black hover:text-orange-500 text-sm sm:text-base"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-black hover:text-orange-500 text-sm sm:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div
            ref={servicesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="w-full lg:w-1/4"
          >
            <h3 className="text-lg sm:text-xl mb-4 sm:mb-6">Our Services</h3>
            <ul className="space-y-2 sm:space-y-4">
              <li>
                <Link
                  to="/achievement"
                  className="text-black hover:text-orange-500 text-sm sm:text-base"
                >
                  Achievement
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-black hover:text-orange-500 text-sm sm:text-base"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-black hover:text-orange-500 text-sm sm:text-base"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/LeadershipPage"
                  className="text-black hover:text-orange-500 text-sm sm:text-base"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/faq-page"
                  className="text-black hover:text-orange-500 text-sm sm:text-base"
                >
                  Faq
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-black hover:text-orange-500 text-sm sm:text-base"
                >
                  Terms of use
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            ref={newsletterRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isNewsletterInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="w-full lg:w-1/3"
          >
            <h3 className="text-lg sm:text-xl mb-4 sm:mb-6">Newsletter</h3>
            <p className="text-black text-sm sm:text-base mb-4 sm:mb-6">
              Subscribe our newsletter to Get the latest news, tips and special
              offers.
            </p>
            <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow p-2 sm:p-3 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:border-orange-500 text-sm sm:text-base bg-white"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md sm:rounded-r-md sm:rounded-l-none flex items-center justify-center text-sm sm:text-base whitespace-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.5.4.6.2 1 .5 1.4 1 .4.4.7.8 1 1.4.2.5.3 1.3.4 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.5-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4 1-.5.2-1.3.3-2.5.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1-.5-1.4-1-.4-.4-.7-.8-1-1.4-.2-.5-.3-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.5.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-1 .5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.6.1 4.5.3 3.6.6c-.9.3-1.7.7-2.4 1.4C.3 3.7 0 4.5.6 5.4.3 6.3.1 7.4.1 9c-.1 1.3-.1 1.7-.1 4.9s0 3.6.1 4.9c.1 1.6.3 2.7.6 3.6.3.9.7 1.7 1.4 2.4.7.7 1.5 1.2 2.4 1.4.9.3 2 .5 3.6.6 1.3.1 1.7.1 4.9.1s3.6 0 4.9-.1c1.6-.1 2.7-.3 3.6-.6.9-.3 1.7-.7 2.4-1.4.7-.7 1.2-1.5 1.4-2.4.3-.9.5-2 .6-3.6.1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.6-.3-2.7-.6-3.6-.3-.9-.7-1.7-1.4-2.4-.7-.7-1.5-1.2-2.4-1.4C19.7.3 18.6.1 17 .1 15.7 0 15.3 0 12 0z" />
                  <path d="M12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 1 0 12 5.8zm0 10.3a4.1 4.1 0 1 1 0-8.2 4.1 4.1 0 0 1 0 8.2zM18.4 4.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
                </svg>
              </a>

              <a href="#" className="text-gray-600 hover:text-orange-500">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.93 3.09h-2.18l-4.69 6.05L9.64 3.09H3.27L9.67 12 3 20.91h2.18l5.03-6.49 4.69 6.49h6.37l-6.69-8.92z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            Copyright 2025 Shyam Theme by{" "}
            <Link to="/" className="text-orange-500 hover:text-orange-600">
              Shyam
            </Link>{" "}
            | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
