import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import companylogo from "../assets/company-logo.png";
import footer24 from '../assets/footer24.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyRef = useRef(null);
  const linksRef = useRef(null);
  const newsletterRef = useRef(null);

  const isCompanyInView = useInView(companyRef, { triggerOnce: false });
  const isLinksInView = useInView(linksRef, { triggerOnce: false });
  const isNewsletterInView = useInView(newsletterRef, { triggerOnce: false });

  return (
    <footer
      className="w-full py-8 sm:py-12 bg-[#CCCCCC] bg-no-repeat bg-bottom bg-cover font-inter font-semibold"
      style={{
        backgroundImage: `url(${footer24})`,
        backgroundBlendMode: 'multiply',
        backgroundColor: '#CCCCCC'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-8">

          {/* Company Info */}
          <motion.div
            ref={companyRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isCompanyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full lg:w-1/4"
          >
            <div className="mb-4 sm:mb-6">
              <img src={companylogo} alt="Shyam Metalics Logo" className="h-10 sm:h-12" />
            </div>
            <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6">
              We are committed to delivering top-quality products and services to our customers, ensuring reliability and excellence.
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-orange-900">Since 2007</h3>
           
          </motion.div>

          {/* Useful Links */}
          <motion.div
            ref={linksRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isLinksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="w-full lg:w-1/4"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Useful Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2 sm:space-y-4">
                  <li><Link to="/about" className="text-black hover:text-orange-500 text-sm sm:text-base font-bold">About Us</Link></li>
                  <li><Link to="/careers" className="text-black hover:text-orange-500 text-sm sm:text-base font-bold">Careers</Link></li>
                  <li><Link to="/privacy" className="text-black hover:text-orange-500 text-sm sm:text-base font-bold">Privacy Policy</Link></li>
                  <li><Link to="/pricing" className="text-black hover:text-orange-500 text-sm sm:text-base font-bold">Pricing</Link></li>
                  <li><Link to="/products" className="text-black hover:text-orange-500 text-sm sm:text-base font-bold">Products</Link></li>
                  <li><Link to="/blog" className="text-black hover:text-orange-500 text-sm sm:text-base font-bold">Contact</Link></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 sm:space-y-4">
                  <li><Link to="/achievement" className="text-black hover:text-orange-500 text-sm sm:text-base font-bold">Achievement</Link></li>
                  <li><Link to="/blog" className="text-black hover:text-orange-500 text-sm sm:text-base font-bold">Blog</Link></li>
                  <li><Link to="/services" className="text-black hover:text-orange-500 text-sm sm:text-base font-bold">Services</Link></li>
                  <li><Link to="/LeadershipPage" className="text-black hover:text-orange-500 text-sm sm:text-base font-bold">Team</Link></li>
                  <li><Link to="/faq-page" className="text-black hover:text-orange-500 text-sm sm:text-base font-bold">Faq</Link></li>
                  <li><Link to="/terms" className="text-black hover:text-orange-500 text-sm sm:text-base font-bold">Terms of use</Link></li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            ref={newsletterRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isNewsletterInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="w-full lg:w-1/3"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Newsletter</h3>
            <p className="text-black text-sm sm:text-base mb-4 sm:mb-6">
              Subscribe to receive updates, special offers, and insights directly to your inbox.
            </p>
            <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-grow p-2 sm:p-3 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:border-orange-500 text-sm sm:text-base bg-white"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md sm:rounded-r-md sm:rounded-l-none flex items-center text-sm sm:text-base whitespace-nowrap">
                Subscribe Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
