// pages/HomePage.js
import React from "react";

import Hero from "../components/Hero";
import Navbar from '../components/Navbar';
import MainNavbar from '../components/MainNavbar'
import BrandBanner from "../components/BrandBanner";
import MissionVisionValues from "../components/MissionVisionValues";
import AboutUs from "../components/AboutUs";
import BusinessAreas from "../components/BusinessAreas";
import LocationsMap from "../components/LocationsMap"; // ✅ Correct path
import CSRPage from "../components/CSRPage";
import NewsPage from "../components/NewsPage";
import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
       
      <Hero />
   
      <BrandBanner />
      <MissionVisionValues />
      <AboutUs />
      <BusinessAreas />
      <LocationsMap />
      <CSRPage />
      <NewsPage />
      <ContactPage />
    
      
    </div>
  );
};

export default HomePage;
