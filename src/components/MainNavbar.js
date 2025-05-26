// components/MainNavbar.js
import React from 'react';
import CompanyLogo from '../assets/company-logo.png';

function MainNavbar() {
  const navItems = [
    { title: 'ABOUT US', hasDropdown: true },
    { title: 'BUSINESSES', hasDropdown: true },
    { title: 'INVESTORS', hasDropdown: false },
    { title: 'COMMUNITY', hasDropdown: true },
    { title: 'SUSTAINABILITY', hasDropdown: true },
    { title: 'CAREERS', hasDropdown: true },
    { title: 'CONTACT US', hasDropdown: false },
  ];

  return (
    <div className="bg-orange-500 flex items-center justify-between h-[71px]" >
      {/* Company Logo */}
      <div>
        <img 
          src={CompanyLogo} 
          alt="Sarova Metallics Logo" 
          className="h-10"
        />
      </div>

      {/* Navigation Menu */}
      <div className="flex space-x-6">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center text-white font-medium text-[13.19px] leading-[19.79px] uppercase cursor-pointer"
            style={{ fontFamily: 'Roboto', letterSpacing: '0%' }}
          >
            <span>{item.title}</span>
            {item.hasDropdown && (
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search here..."
          className="bg-orange-300 text-white placeholder-white rounded-full py-2 px-10 focus:outline-none"
        />
        <svg className="w-5 h-5 absolute left-3 top-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

export default MainNavbar;
