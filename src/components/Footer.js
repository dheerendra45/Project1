// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import companylogo from "../assets/company-logo.png"
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-[#CCCCCC] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="mb-6">
              <img 
                src={companylogo} 
                alt="Shyam Metalics Logo" 
                className="h-12"
              />
            </div>
            <p className="text-gray-700 mb-6">
              It was popularised in the 1960s with the release of Letraset sheets 
              containing Lorem Ipsum passages, and more recently works.
            </p>
            <h3 className="text-3xl font-bold text-orange-900">Since 2007</h3>
            <p className="text-sm mt-6">
              © {currentYear} Industrie. Designed by <a href="#" className="text-orange-500">Webisdom</a>
            </p>
          </div>
          
          {/* Useful Links */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-6">Useful Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="space-y-4">
                  <li><Link to="/about" className="text-gray-700 hover:text-orange-500">About Us</Link></li>
                  <li><Link to="/careers" className="text-gray-700 hover:text-orange-500">Careers</Link></li>
                  <li><Link to="/privacy" className="text-gray-700 hover:text-orange-500">Privacy Policy</Link></li>
                  <li><Link to="/pricing" className="text-gray-700 hover:text-orange-500">Pricing</Link></li>
                  <li><Link to="/products" className="text-gray-700 hover:text-orange-500">products</Link></li>
                  <li><Link to="/blog" className="text-gray-700 hover:text-orange-500">CONTACT</Link></li>
                  <li><Link to="/Sustainability" className="text-gray-700 hover:text-orange-500">Sustainability</Link></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li><Link to="/achievement" className="text-gray-700 hover:text-orange-500">Achievement</Link></li>
                  <li><Link to="/blog" className="text-gray-700 hover:text-orange-500">Blog</Link></li>
                  <li><Link to="/services" className="text-gray-700 hover:text-orange-500">Services</Link></li>
                  <li><Link to="/LeadershipPage" className="text-gray-700 hover:text-orange-500">Team</Link></li>
                  <li><Link to="/business" className="text-gray-700 hover:text-orange-500">Businesses</Link></li>
                  <li><Link to="/terms" className="text-gray-700 hover:text-orange-500">Terms of use</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-700 mb-6">
              Subscribe for the latest news. Stay updated on the latest trends industrie.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:border-orange-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-r-md flex items-center">
                Subscribe Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
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
