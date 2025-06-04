import WorldLocations from "../components/location/maps";
import Hero from "../components/location/hero";
import Start from "../components/location/start";
import Locations from "../components/location/locations";
import Footer from "../components/Footer";
function LocationPage() {
  return (
    <>
      <Start />
      <Hero />
      <WorldLocations />
      <Locations />
      <Footer />
    </>
  );
}

export default LocationPage;
