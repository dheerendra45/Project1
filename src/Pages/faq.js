import React from "react";
import Hero from "../components/Faq/Hero";
import FAQAccordion from '../components/Faq/questions'
import Footer from "../components/Footer";
const Faq = () => {
  return (
    <div>
      <Hero />
     <FAQAccordion />
      <Footer />
    </div>
  );
};

export default Faq;
