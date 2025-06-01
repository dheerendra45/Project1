import React from "react";
import Hero from '../components/Environment_Compliance/Hero'
import ResponsibilityHero from '../components/Environment_Compliance/ResponsibilityHero'
import EnvironmentalCommitment from '../components/Environment_Compliance/EnvironmentalCommitment'
import TrustSustainability from '../components/Environment_Compliance/TrustSustainability'
import HumanityEmphasis from '../components/Environment_Compliance/HumanityEmphasis'
import SupplyChainSustainability from '../components/Environment_Compliance/SupplyChainSustainability'
import SustainabilityTransparency from '../components/Environment_Compliance/SustainabilityTransparency'
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
