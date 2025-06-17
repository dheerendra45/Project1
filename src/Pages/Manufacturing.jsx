import { div } from "framer-motion/client";
import Hero from "../components/manufacturing/Hero.jsx";
import Customer from "../components/manufacturing/customer.jsx";
import Process from "../components/manufacturing/Process.jsx";
import Unit from "../components/manufacturing/unit.jsx";
import Map from "../components/manufacturing/map.jsx";
import Footer from "../components/Footer.js";

export default function Manufacturing() {
  return (
    <div>
      <Hero />
      <Customer />
      <Process />
      {/* <Map/> */}
      <Unit />
      <Footer />
    </div>
  );
}
