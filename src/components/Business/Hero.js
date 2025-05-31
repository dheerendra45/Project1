import React from "react";
import herobg from '../../assets/Business/businessbg.jpg'
import companylogo from '../../assets/products/image28.png'
const Hero = () => {
  return (
    <div className="h-[815px] bg-gray-100 mx-auto overflow-hidden">
      {/* Top Navbar */}
      <div className="w-full h-[57px] bg-black flex items-center justify-between px-6 text-white text-sm">
       <div className="flex items-center ml-7">
  <span className="font-inter font-normal text-[12px] leading-[18px]">
    €208.00 +2.72
  </span>
</div>

        <div className="flex items-center">
  <span className="font-roboto font-extrabold text-[14px] leading-[21px]">
    Lorem Ipsum Dollar Site ent
  </span>
</div>

        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1 font-sans font-medium text-[14px] leading-[19px] tracking-normal">
  Employee Login 
            <svg className="w-3 h-3 fill-current" viewBox="0 0 10 6">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="flex items-center gap-1 font-sans font-medium text-[14px] leading-[19px] tracking-normal">
🌐 Global(English) 
            <svg className="w-3 h-3 fill-current" viewBox="0 0 10 6">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>

      {/* Middle Navbar */}
      <div 
        className="w-full h-[57px] mt-0 flex items-center justify-between px-8 relative z-30"
        style={{
          background: '#FFFFFF26',
        
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <div className=" text-white px-3 py-2 rounded text-sm font-bold">
           <img src={companylogo}
           className="h-[54.84px] w-[116.53px]"/>

          </div>
        </div>
        
        {/* Navigation Menu */}
        <div className="flex gap-8 text-white text-sm font-medium">
          <span className="cursor-pointer hover:text-orange-400 flex items-center gap-1 font-roboto font-medium text-[13.19px] leading-[19.79px] tracking-normal align-middle uppercase">
  ABOUT US
            <svg className="w-3 h-3 fill-current" viewBox="0 0 10 6">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="cursor-pointer hover:text-orange-400 flex items-center gap-1 font-roboto font-medium text-[13.19px] leading-[19.79px] tracking-normal align-middle uppercase">
            BUSINESSES 
            <svg className="w-3 h-3 fill-current" viewBox="0 0 10 6">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="cursor-pointer hover:text-orange-400 flex items-center gap-1 font-roboto font-medium text-[13.19px] leading-[19.79px] tracking-normal align-middle uppercase">INVESTORS</span>
          <span className="cursor-pointer hover:text-orange-400 flex items-center gap-1 font-roboto font-medium text-[13.19px] leading-[19.79px] tracking-normal align-middle uppercase">
            COMMUNITY 
            <svg className="w-3 h-3 fill-current" viewBox="0 0 10 6">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="cursor-pointer hover:text-orange-400 flex items-center gap-1 font-roboto font-medium text-[13.19px] leading-[19.79px] tracking-normal align-middle uppercase">
            SUSTAINABILITY 
            <svg className="w-3 h-3 fill-current" viewBox="0 0 10 6">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
         <span className="cursor-pointer hover:text-orange-400 flex items-center gap-1 font-roboto font-medium text-[13.19px] leading-[19.79px] tracking-normal align-middle uppercase">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 10 6">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="cursor-pointer hover:text-orange-400 flex items-center gap-1 font-roboto font-medium text-[13.19px] leading-[19.79px] tracking-normal align-middle uppercase">CONTACT US</span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-white placeholder-white/70 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="bg-orange-500 rounded-full p-2">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V4z"/>
            </svg>
          </div>
        </div>
      </div>

      

      {/* Hero Section */}
      <div className="relative h-full -mt-[65px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          
        />
        <img
    src={herobg}
    alt="Hero Background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-20 px-[114px] pt-[275px] text-white">
         <h1 className="text-[62px] leading-[62px] font-space-grotesk font-bold mb-6">
  Business
</h1>

         <div className="flex space-x-1 font-space-grotesk font-medium text-[16px] leading-[27.2px]">
  <span>Home</span>
  <span>&gt;</span>
  <span>Businesses</span>
</div>

        </div>
      </div>
    </div>
  );
};

export default Hero;