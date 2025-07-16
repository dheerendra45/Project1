// pages/HomePage.js
import React from "react";

import Navbar from "../components/start1";
import MainNavbar from "../components/MainNavbar";
import BrandBanner from "../components/BrandBanner";
import MissionVisionValues from "../components/MissionVisionValues";
import AboutUs from "../components/AboutUs";
import BusinessAreas from "../components/BusinessAreas";
import LocationsMap from "../components/LocationsMap";
import EnvironmentSection from "../components/Ourproducts"; // ✅ Correct path
import CSRPage from "../components/CSRPage";
import CertificationsSection from "../components/CertificationsSection";
import NewsPage from "../components/NewsPage";
import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";
import TestimonialHomePage from "../components/Testimonial-HomePage";
import Environment from "../components/environment";
import EnvironmentSection1 from "../components/EnvironmentSection1";

import StatsCard from "../components/StatsCard.jsx";
import BusinessHomepage from "../components/BusinessHomepage";
import AchievementSection from "../components/Achievement.js";

import Hero from "../components/hero2";
import BusinessVerticals from "../components/BusinessVerticals.js";
import CustomerTestimonials from "../components/Testimonial-HomePage";
import SharePriceSection from "../components/SharePriceSection.js";
import AccreditationsComponent from "../components/AccreditationsComponent.js";
import AnimatedLogoContainer from "../components/AnimatedLogoContainer.js";
// import BusinessVerticals from "../components/BusinessVerticals.js";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <StatsCard />
      <MissionVisionValues />
      <AboutUs />

      <BusinessVerticals />
      {/* <BusinessHomepage /> */}
      {/* <EnvironmentSection /> */}
      <BusinessAreas id="business-areas" />
      <LocationsMap />
      <EnvironmentSection1 />

      <CSRPage />
      <AchievementSection />
      <TestimonialHomePage />
      <AnimatedLogoContainer />
      {/* /> <CertificationsSection */}
      <NewsPage />
      <SharePriceSection />
      {/* <ContactPage /> */}
    </div>
  );
};

export default HomePage;
