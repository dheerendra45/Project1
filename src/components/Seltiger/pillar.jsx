import { motion } from "framer-motion";
import s1 from "../../assets/Seltiger/s1.png";
import s2 from "../../assets/Seltiger/s2.png";
import s3 from "../../assets/Seltiger/s3.png";
import s4 from "../../assets/Seltiger/s4.png";
import s5 from "../../assets/Seltiger/s5.png";
import s6 from "../../assets/Seltiger/s6.png";
import s7 from "../../assets/Seltiger/s7.png";

export default function Products() {
  return (
    <motion.div className="bg-[ #161616;
] text-black px-6 py-12 lg:px-20 font-[Inter]">
      <h1 className="text-4xl font-semibold mb-8">What is SEL Tiger?</h1>

      <div className="flex flex-wrap lg:flex-nowrap items-start gap-4">
  {/* s1 */}
  <img src={s1} alt="SEL Tiger Overview" className="w-[536px] h-full object-cover m-0 p-0" />

  {/* s2 with overlay text */}
  <div className="relative w-full h-[522px] m-0 p-0 -ml-4">
    <img src={s2} alt="Feature" className="w-full h-full object-cover" />
    <p className="absolute inset-0 flex items-center justify-center text-white font-extrabold text-[22px] leading-[31px] text-center px-4 mt-40">
      Designed to withstand the harshest elements—resistant to earthquakes, fireproof, and immune to corrosion for vital infrastructure.
    </p>
  </div>

  {/* s3 and s4 */}
  <img src={s3} alt="Steel Rod 1" className="w-[131px] h-[522px] object-cover" />
  <img src={s4} alt="Steel Rod 2" className="w-[131px] h-[522px] object-cover" />
</div>


      {/* Section Title */}
      <h2 className="text-4xl font-semibold mt-20">We don't just supply materials—</h2>
      <h3 className="text-4xl font-semibold text-orange-500">We engineer the SiFuturelearn.</h3>

      <p className="max-w-[1036px] mt-6 font-medium text-lg leading-[33px]">
        At Tiger, we don’t just supply materials—we engineer future-ready structures that endure. 
        From homes to high-rises, from sea bridges to industrial sheds—our products are trusted to perform under pressure, always.
      </p>

      {/* Image Cards */}
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        <div className="relative">
          <img src={s5} alt="Use Case 1" className="w-[380px] h-[422px]" />
          <p className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold text-center px-4 mt-40">
            For the family who wants a safer home in earthquake zones
          </p>
        </div>

        <img src={s6} alt="Use Case 2" className="w-[380px] h-[422px]" />
        <img src={s7} alt="Use Case 3" className="w-[381px] h-[422px]" />
      </div>

      {/* Final Headings */}
      <div className="text-center mt-20 space-y-3">
        <h2 className="text-black text-2xl md:text-3xl font-semibold">This isn't just construction.</h2>
        <h2 className="text-2xl md:text-3xl font-semibold">It's a revolution in materials science.</h2>
        <h2 className="text-orange-500 text-2xl md:text-3xl font-semibold">It's the Tiger promise.</h2>
      </div>
    </motion.div>
  );
}
