// components/BrandBanner.js - Brand Banner Component
import React from 'react';
import TigerLogo from '../assets/image173.png'; // Placeholder path
import TigerImage from '../assets/tiger-image.png'; // Placeholder path

function BrandBanner() {
  return (
    <div className="bg-orange-500 relative w-full flex items-center justify-between p-8 overflow-hidden">
      <div className="text-white z-10 bg-[#EE741D]">
        <h2 
          className="text-4xl font-bold uppercase mb-4"
          style={{
            fontFamily: 'LEMON MILK',
            letterSpacing: '0%',
            verticalAlign: 'middle'
          }}
        >
          BRAND SLOGAN
        </h2>
        
        <p 
          className="text-base mb-8"
          style={{
            fontFamily: 'Roboto',
            letterSpacing: '0%',
            verticalAlign: 'middle'
          }}
        >
          Contact us to immediately receive a detailed quote and advice from our engineers.
        </p>
        
        <button 
          className="border border-white text-white px-8 py-2 hover:bg-white hover:text-orange-500 transition-colors"
          style={{
            borderRadius: '4px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          View Our Product
        </button>
      </div>
      
      <div className="flex items-center">
        <div className="mr-4">
          <img src={TigerLogo} alt="Tiger Logo" className="w-32" />
        </div>
        <img src={TigerImage} alt="Tiger" className="h-64" />
      </div>
      
      {/* Tiger stripe background pattern overlay */}
      <div className="absolute inset-0 opacity-10 z-0" 
        style={{
          backgroundImage: 'url("../assets/tiger-stripes.png")', // Placeholder for tiger stripes
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </div>
  );
}

export default BrandBanner;