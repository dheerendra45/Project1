import Aboutus from "../components/Companyoverview/aboutus.jsx";
import Achievement from "../components/Companyoverview/achievement.jsx";
import Best from "../components/Companyoverview/best.jsx";
import Hero from "../components/Companyoverview/Hero.jsx";
import History from "../components/Companyoverview/history.jsx";
import Map from "../components/Companyoverview/map.jsx";
import Teams from "../components/Companyoverview/teams.jsx";
import Testimonials from "../components/Companyoverview/testimonials.jsx";
import Footer from "../components/Footer.js";

export default function Companyoverview() {
  return (
    <>
      <Hero />
      <Best />
      <Aboutus />
      <History />
      <Achievement />

      <Map />
    </>
  );
}
