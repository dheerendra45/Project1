import { div } from "framer-motion/client";
import Hero from "../components/Currentopening/Hero";
import Companybenifits from "../components/Currentopening/companybenefits";
import Jobopportunity from "../components/Currentopening/joboppurtunities";
import Testimonials from "../components/Currentopening/testimonials";
import Joinus from "../components/Currentopening/joinus";
import Footer from "../components/Footer";

export default function Currentopening() {
  return (
    <div>
      <Hero />
      <Companybenifits />
      <Jobopportunity />
      <Testimonials />
      <Joinus />
      <Footer />
    </div>
  );
}
