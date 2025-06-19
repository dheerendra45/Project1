import React from "react";
import Hero from "../components/Tesgtimonial/Hero";

import Footer from "../components/Footer";
import TestimonialsComponent from "../components/Tesgtimonial/testimonialcard";
import Banner from "../components/Tesgtimonial/banner";
import PortfolioComponent from "../components/Tesgtimonial/portfolio";
import TestimonialCarousel from "../components/Tesgtimonial/TestimonialCarousel";
const Testimonial = () => {
  return (
    <div>
      <Hero />
      <TestimonialsComponent />
      <Banner />
      <PortfolioComponent />
      <TestimonialCarousel />
     
    </div>
  );
};

export default Testimonial;
