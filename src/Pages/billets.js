
import Certificates from "../components/Billets/certificates";
import Hero from "../components/Billets/hero";
import Specification from "../components/Billets/specifications";
import Billetsinfo from '../components/Billets/billetsinfo'
import RelatedProducts from "../components/pigiron/Related";

export default function Billets() {
  return (
    <>
      <Hero />
      <Billetsinfo />
      <Specification />
      <Certificates />
      <RelatedProducts />
     
    </>
  );
}
