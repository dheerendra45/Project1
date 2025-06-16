import React from "react";
import Hero from '../components/CSR/Hero'
import ResponsibilityHero from '../components/CSR/ResponsibilityHero'
import EnvironmentalCommitment from '../components/CSR/EnvironmentalCommitment'
import TrustSustainability from '../components/CSR/TrustSustainability'
import HumanityEmphasis from '../components/CSR/HumanityEmphasis'
import SupplyChainSustainability from '../components/CSR/SupplyChainSustainability'
import SustainabilityTransparency from '../components/CSR/SustainabilityTransparency'
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
