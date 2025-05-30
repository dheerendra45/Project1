// Pages/LeadershipPage.js
import React from 'react';
import HeroSection from '../components/overview/HeroSection'
import StatisticsSection from '../components/overview/StatisticsSection'
import AboutUsSection from '../components/overview/AboutUsSection'
import HowWeStartedSection from '../components/overview/HowWeStartedSection'
import SpecialitiesSection from '../components/overview/SpecialitiesSection'

const overviewPage = () => {
  return (
    <div>
      <HeroSection />
    
      <StatisticsSection />
      <AboutUsSection />
      <SpecialitiesSection />
      <HowWeStartedSection />
    </div>
  );
};

export default overviewPage;
