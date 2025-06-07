import React from 'react';
import { Link } from 'react-router-dom';
import companylogo from "../assets/company-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-[#CCCCCC] py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Company Info */}
          <div className="w-full lg:w-1/4">
            <div className="mb-4 sm:mb-6">
              <img 
                src={companylogo} 
                alt="Shyam Metalics Logo" 
                className="h-10 sm:h-12"
              />
            </div>
            <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6">
              It was popularised in the 1960s with the release of Letraset sheets 
              containing Lorem Ipsum passages, and more recently works.
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-orange-900">Since 2007</h3>
            <p className="text-xs sm:text-sm mt-4 sm:mt-6">
              © {currentYear} Industrie. Designed by <a href="#" className="text-orange-500">Webisdom</a>
            </p>
          </div>
          
          {/* Useful Links */}
          <div className="w-full lg:w-1/4">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Useful Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2 sm:space-y-4">
                  <li><Link to="/about" className="text-gray-700 hover:text-orange-500 text-sm sm:text-base">About Us</Link></li>
                  <li><Link to="/careers" className="text-gray-700 hover:text-orange-500 text-sm sm:text-base">Careers</Link></li>
                  <li><Link to="/privacy" className="text-gray-700 hover:text-orange-500 text-sm sm:text-base">Privacy Policy</Link></li>
                  <li><Link to="/pricing" className="text-gray-700 hover:text-orange-500 text-sm sm:text-base">Pricing</Link></li>
                  <li><Link to="/products" className="text-gray-700 hover:text-orange-500 text-sm sm:text-base">Products</Link></li>
                  <li><Link to="/blog" className="text-gray-700 hover:text-orange-500 text-sm sm:text-base">Contact</Link></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 sm:space-y-4">
                  <li><Link to="/achievement" className="text-gray-700 hover:text-orange-500 text-sm sm:text-base">Achievement</Link></li>
                  <li><Link to="/blog" className="text-gray-700 hover:text-orange-500 text-sm sm:text-base">Blog</Link></li>
                  <li><Link to="/services" className="text-gray-700 hover:text-orange-500 text-sm sm:text-base">Services</Link></li>
                  <li><Link to="/LeadershipPage" className="text-gray-700 hover:text-orange-500 text-sm sm:text-base">Team</Link></li>
                  <li><Link to="/business" className="text-gray-700 hover:text-orange-500 text-sm sm:text-base">Businesses</Link></li>
                  <li><Link to="/terms" className="text-gray-700 hover:text-orange-500 text-sm sm:text-base">Terms of use</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Newsletter</h3>
            <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6">
              Subscribe for the latest news. Stay updated on the latest trends industrie.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="flex-grow p-2 sm:p-3 border border-gray-300 rounded-l-md focus:outline-none focus:border-orange-500 text-sm sm:text-base"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-r-md flex items-center text-sm sm:text-base">
                Subscribe Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;