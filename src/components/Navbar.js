// components/Navbar.js
import React from 'react';
import NavbarBG from '../assets/image146.png';

function Navbar() {
  return (
    <div className="relative h-[57px] overflow-hidden bg-[#000000C9]">
      {/* Background - Tiger Stripe Pattern (full navbar width) */}
      <div className="absolute top-0 left-0 w-full h-16 z-0">
        {/* Background Image 1 */}
        <div
          className="absolute top-0 left-0"
          style={{
            backgroundImage: `url(${NavbarBG})`,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backgroundBlendMode: 'multiply',
            width: '371px',
            height: '65px',
            filter: 'brightness(0.8) saturate(0.8)',
          }}
        />
        
        {/* Background Image 2 */}
        <div
          className="absolute top-0 left-[370px]"
          style={{
            backgroundImage: `url(${NavbarBG})`,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backgroundBlendMode: 'multiply',
            width: '371px',
            height: '65px',
            filter: 'brightness(0.8) saturate(0.8)',
          }}
        />
        
        {/* Background Image 3 */}
        <div
          className="absolute top-0 left-[740px]"
          style={{
            backgroundImage: `url(${NavbarBG})`,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backgroundBlendMode: 'multiply',
            width: '371px',
            height: '65px',
            filter: 'brightness(0.8) saturate(0.8)',
          }}
        />
        
        {/* Background Image 4 */}
        <div
          className="absolute top-0 left-[1110px]"
          style={{
            backgroundImage: `url(${NavbarBG})`,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backgroundBlendMode: 'multiply',
            width: '371px',
            height: '65px',
            filter: 'brightness(0.8) saturate(0.8)',
          }}
        />
      </div>

      {/* Navigation Content */}
      <nav className="relative flex items-center justify-between h-16 z-10">
        {/* Stock Price Ticker */}
        <div className="text-white text-sm font-medium ml-8">
          €208.00 +2.72
        </div>
        
        {/* Empty Center Section (just using the background image) */}
        <div className="flex-1"></div>
        
        {/* Employee Login and Language Switcher */}
        <div className="flex items-center mr-6 text-white">
          <a href="/login" className="hover:underline font-medium mr-4">Employee Login &gt;</a>
          <div className="flex items-center">
            <div className="inline-flex items-center justify-center rounded-full bg-white w-5 h-5 mr-2">
              <span className="text-gray-800 text-xs">🌐</span>
            </div>
            <span className="text-sm mr-1">Global(English)</span>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
