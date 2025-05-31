import React from "react";
import CarbonSteelLayout from "../components/products/Hero";
import PelletInfo from "../components/products/PelletInfo";
import Process from "../components/products/Process";
import Features from "../components/products/Features";
import WhyChooseUs from "../components/products/WhyChooseUs";
import Certificates from "../components/products/Certificates";
import RelatedProducts from "../components/products/RelatedProducts";
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
