// pages/HomePage.js
import React from "react";

import Hero from "../components/Hero";
import Navbar from '../components/Navbar';
import MainNavbar from '../components/MainNavbar'
import BrandBanner from "../components/BrandBanner";
import MissionVisionValues from "../components/MissionVisionValues";
import AboutUs from "../components/AboutUs";
import BusinessAreas from "../components/BusinessAreas";
import LocationsMap from "../components/LocationsMap";
import EnvironmentSection from '../components/EnvironmentSection' // ✅ Correct path
import AnimatedBoardMembers from "../components/leadership/AnimatedBoardMembers";
import CSRPage from "../components/CSRPage";
import CertificationsSection from "../components/CertificationsSection";
import NewsPage from "../components/NewsPage";
import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
       
      <Hero />
      <MissionVisionValues />
      <AboutUs />
      <BusinessAreas />
      <LocationsMap />
      <EnvironmentSection />
       <CSRPage />
      <AnimatedBoardMembers />
      <CertificationsSection />
     
      <NewsPage />
      <ContactPage />
    
      
    </div>
  );
};

export default HomePage;
