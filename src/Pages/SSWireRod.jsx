import RelatedProducts from "../components/pigiron/Related";
import Certificates from "../components/SSWireRod/certificates";
import Hero from "../components/SSWireRod/hero";
import Specification from "../components/SSWireRod/specification";
import SSWireRodInfo from "../components/SSWireRod/sswireinfo";

export default function SpongeIron() {
  return (
    <>
      <Hero />
      <SSWireRodInfo />
      <Specification />
      <Certificates />
      <RelatedProducts />
    </>
  );
}
