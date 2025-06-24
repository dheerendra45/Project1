import React from "react";
import CarbonSteelLayout from "../components/carbonsteel/Hero";
import PelletInfo from "../components/carbonsteel/PelletInfo";
import Process from "../components/carbonsteel/Process";
import Features from "../components/carbonsteel/Features";
import WhyChooseUs from "../components/carbonsteel/WhyChooseUs";
import Certificates from "../components/carbonsteel/Certificates";
import RelatedProducts from "../components/carbonsteel/RelatedProducts";
import Footer from "../components/Footer";
import Specification from "../components/carbonsteel/Specification";
const Products = () => {
  return (
    <div>
      <CarbonSteelLayout />
      <PelletInfo />
      <Specification/>
      <Process />
      <Features />
      <WhyChooseUs />
      <Certificates />
      <RelatedProducts />
      
    </div>
  );
};

export default Products;
