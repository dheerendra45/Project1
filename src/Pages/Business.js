import React from "react";
import Hero from "../components/Business//Hero";
import ProductsSection from "../components/Business/Productsections";
import CertificationsSection from '../components/Business/CertificationsSection'
import AcrossBordersSection from '../components/Business/AcrossBordersSection'
import ContactFormSection from '../components/Business/ContactFormSection'
import Footer from "../components/Footer";
const Business = () => {
  return (
    <div>
      <Hero />
      <ProductsSection />
      <CertificationsSection />
      <AcrossBordersSection />
      <ContactFormSection />

    </div>
  );
};

export default Business;
