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
import Start from "../components/start";

const HomePage = () => {
  return (
    <div>
       <Start/>
      <Hero />
     
      <MissionVisionValues />
       <AboutUs />
       
      <EnvironmentSection />
       <BusinessAreas />
      <LocationsMap />
     

   
       <EnvironmentSection1 />
 <CSRPage />
    
      <TestimonialHomePage />
      
      <NewsPage />
   
      
      <ContactPage />
      <CertificationsSection />
    </div>
  );
};

export default HomePage;
