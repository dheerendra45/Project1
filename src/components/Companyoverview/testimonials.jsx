import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import a1 from "../../assets/Companyoverview/testimonial1.png";
import a2 from "../../assets/Companyoverview/testimonial2.png";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur. Arcu nibh nisl nulla sed scelerisque. Aliquet sit nulla ipsum vestibulum feugiat curabitur. Posuere dictum sit donec ut tempus lobortis. Sed cursus ultrices sed vitae. Massa enim cras sed viverra massa vitae volutpat. Ornare amet risus molestie.",
      name: "DEREK AUCOIN",
      stars: 5,
      company: "Defence Construction Canada",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur. Nulla tincidunt sed arcu quis malesuada. Feugiat neque vestibulum elementum adipiscing cursus sapien convallis id. Cras tincidunt congue mauris libero commodo.",
      name: "SARAH MILLER",
      stars: 5,
      company: "Innovative Systems Ltd.",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur. Vitae lacus in est pharetra. Magna faucibus scelerisque nec et at nulla. Lorem erat nisi tellus quis aenean id morbi vestibulum convallis.",
      name: "JAMES CARTER",
      stars: 5,
      company: "Urban Solutions Inc.",
    },
  ];

  const animateFadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: isInView
      ? {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 6,
          },
        }
      : {},
  };

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div ref={ref} className="px-6 py-16 bg-white text-center">
      <h1 className="text-3xl font-bold mb-2">Testimonials</h1>
      <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Lorem ipsum dolor sit amet consectetur. Dictum sed nibh nunc pulvinar
        quis diam. Ornare fermentum rhoncus elementum neque elementum cras cras
        malesuada metus. In feugiat mattis.
      </p>

      <motion.div
        {...animateFadeIn}
        className="relative bg-gray-50 p-6 rounded shadow-md max-w-4xl mx-auto"
      >
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full">
          <button
            onClick={prev}
            className="bg-orange-500 text-white p-2 rounded-full shadow"
          >
            <FaArrowLeft />
          </button>
        </div>

        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full">
          <button
            onClick={next}
            className="bg-orange-500 text-white p-2 rounded-full shadow"
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="relative mb-6">
          <p className="text-gray-700 text-left">
            {testimonials[index].quote}
          </p>
          <img
            src={a1}
            alt=""
            className="w-10 h-10 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full object-cover border-2 border-white shadow-md"
          />
        </div>

        <div className="flex items-center gap-4">
          <img
            src={a2}
            alt=""
            className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
          />
          <div className="text-left">
            <div className="font-semibold text-lg">
              {testimonials[index].name}
            </div>
            <div className="text-yellow-500 text-sm">
              {"★".repeat(testimonials[index].stars)}
            </div>
            <p className="text-gray-500 text-sm">
              {testimonials[index].company}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
