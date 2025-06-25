import WhyChooseUs from "../components/Seltiger/whychoose";
import Applications from "../components/Seltiger/application";
import Hero from "../components/Seltiger/Hero";
import Pillar from "../components/Seltiger/pillar";
import Products from "../components/Seltiger/product";
import Tmtbars from "../components/Seltiger/tmtbars";
import Joinourcommunity from "../components/Seltiger/Joinourcommunity";
import Footer from "../components/Footer";
import ContactPage from "../components/ContactPage";

export default function Seltiger() {
  return (
    <>
      <Hero />
      <Pillar />
      <Products />
      {/* <Tmtbars /> */}
      <Applications />
      <WhyChooseUs />
      <Joinourcommunity />
      <ContactPage />
    </>
  );
}
