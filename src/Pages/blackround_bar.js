
import Certificates from "../components/Billets/certificates";
import Hero from "../components/Blackround_bar/hero";

import HollowInfo from '../components/Blackround_bar/overview'
import RelatedProducts from "../components/pigiron/Related";
import Specifications from "../components/Blackround_bar/specification";

export default function Blackround_bar() {
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
