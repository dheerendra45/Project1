import React from "react";
import CarbonSteelLayout from "../components/carbonsteel/Hero";
import PelletInfo from "../components/carbonsteel/PelletInfo";
import Process from "../components/carbonsteel/Process";
import Features from "../components/carbonsteel/Features";
import WhyChooseUs from "../components/carbonsteel/WhyChooseUs";
import Certificates from "../components/carbonsteel/Certificates";
import RelatedProducts from "../components/carbonsteel/RelatedProducts";
import Footer from "../components/Footer";
const Products = () => {
  return (
    <div>
      <CarbonSteelLayout />
      <PelletInfo />
      <Process />
      <Features />
      <WhyChooseUs />
      <Certificates />
      <RelatedProducts />
      <Footer />
    </div>
  );
};

export default Products;
