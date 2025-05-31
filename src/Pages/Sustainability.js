import React from "react";
import Hero from '../components/Sustainability/Hero'
import ResponsibilityHero from '../components/Sustainability/ResponsibilityHero'
import EnvironmentalCommitment from '../components/Sustainability/EnvironmentalCommitment'
import TrustSustainability from '../components/Sustainability/TrustSustainability'
import HumanityEmphasis from '../components/Sustainability/HumanityEmphasis'
import SupplyChainSustainability from '../components/Sustainability/SupplyChainSustainability'
import SustainabilityTransparency from '../components/Sustainability/SustainabilityTransparency'
import Footer from "../components/Footer";
const Sustainability = () => {
  return (
    <div>
      <Hero />
      <ResponsibilityHero />
      <EnvironmentalCommitment />
      <TrustSustainability />
      <HumanityEmphasis />
      <SupplyChainSustainability />
      <SustainabilityTransparency />
      <Footer />
    </div>
  );
};

export default Sustainability;
