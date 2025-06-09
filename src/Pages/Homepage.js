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
import EnvironmentSection from '../components/Ourproducts' // ✅ Correct path
import CSRPage from "../components/CSRPage";
import CertificationsSection from "../components/CertificationsSection";
import NewsPage from "../components/NewsPage";
import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";
import TestimonialHomePage from "../components/Testimonial-HomePage";
import Environment from "../components/environment";
import EnvironmentSection1 from "../components/EnvironmentSection1";

const HomePage = () => {
  return (
    <div>
       
      <Hero />
     
      <MissionVisionValues />
       <AboutUs />
      <LocationsMap />
     

      <EnvironmentSection />
       <BusinessAreas />
       <EnvironmentSection1 />
 <CSRPage />
    
      <TestimonialHomePage />
      
      <NewsPage />
      <Environment/>
      
      <ContactPage />
      <CertificationsSection />
    </div>
  );
};

export default HomePage;
