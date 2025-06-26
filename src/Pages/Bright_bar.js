
import Certificates from "../components/Billets/certificates";
import Hero from "../components/Bright_bar/hero";

import HollowInfo from '../components/Bright_bar/overview'
import RelatedProducts from "../components/pigiron/Related";
import Specifications from "../components/Bright_bar/specifications";

export default function Bright_bar() {
  return (
    <>
      <Hero />
      <HollowInfo />
      <Specifications />
      <Certificates />
      <RelatedProducts />
     
    </>
  );
}
