// components/Navbar.js
import React from 'react';
import TigerLogo from '../assets/image173.png';
import TigerLogo2 from '../assets/tiger-logo2.png';
import NavbarBG from '../assets/image146.png';

function Navbar() {
  return (
    <div className="relative h-[57px] overflow-hidden bg-[#000000C9]
">
      {/* Background - Tiger Stripe Pattern (4 specific positions) */}
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
          className="absolute top-0 left-[853px]"
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
          className="absolute top-0 left-[1223px]"
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
        
        {/* Center Orange Section with Tiger Logos and Slogan */}
        <div className="flex-1 flex justify-center">
  <div className="bg-orange-500 h-[60px] w-[511px] relative flex items-center overflow-visible">
    
    {/* Text Wrapper (now layered properly) */}
    <div className="absolute left-4 top-1 z-20 overflow-visible">
      <div className="text-white text-sm font-bold uppercase">
        IN DEWARON MEIN
      </div>
      <div className="text-sm font-bold uppercase flex whitespace-nowrap">
        <span className="text-black">TIGER</span>
        <span className="text-white ml-1">REHTA HAI</span>
      </div>
    </div>

    {/* Logos remain unaffected */}
    <img
      src={TigerLogo}
      alt="Tiger Logo"
      className="h-[57px] w-[216px] object-contain z-10 ml-[108px]"
    />
    <img
      src={TigerLogo2}
      alt="Tiger Brand"
      className="h-[57px] w-[188.14px] object-contain z-10 ml-[5px]"
    />
  </div>
</div>

        
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