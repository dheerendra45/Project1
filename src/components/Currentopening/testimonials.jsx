import { useRef, useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import { motion, useInView } from "framer-motion";
import "keen-slider/keen-slider.min.css";

import a1 from "../../assets/Currentopening/testimonial1.png";
import a2 from "../../assets/Currentopening/Icon.png";
import a3 from "../../assets/Currentopening/testimonial2.png";

const baseTestimonial = {
  text: `Partnering with solvior has been a transformative experience for our organization. 
         Their expert guidance through our market expansion strategy was invaluable. 
         They helped us navigate complex regulatory environments and develop a clear, 
         actionable plan that has led to success.`,
  name: "Debra R. Barnes",
  avatar: a3,
};

const testimonials = Array(4).fill(baseTestimonial); // 4 identical testimonials

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 4000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <motion.div
      ref={sectionRef}
      className="py-16 px-6 md:px-20 bg-white"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <h3 className="text-orange-500 font-semibold text-sm mb-2">// CLIENTS FEEDBACK</h3>
      <h1 className="text-3xl font-bold text-black mb-10">Our clients testimonials</h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left image block */}
        <div className="w-full md:w-1/2 relative flex justify-center">
          <div className="relative w-full max-w-md">
            <img
              src={a1}
              alt="Client Highlight"
              className="rounded-xl w-full md:max-h-[450px] object-cover block"
            />
            {/* Opacity content inside image */}
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-4 rounded-md max-w-[80%]">
              <h1 className="text-2xl font-bold">38K+</h1>
              <p className="text-sm">Happy clients all over the world now.</p>
            </div>
          </div>
        </div>

        {/* Right carousel block */}
        <div className="relative w-full md:w-1/2">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                className="keen-slider__slide bg-gray-100 p-6 rounded-lg shadow-md"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: index * 0.2 },
                  },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <img src={a2} alt="" className="mb-4 w-8 h-8" />
                <p className="text-gray-700 mb-6 text-sm">{item.text}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-gray-300 rounded-full" />
                      ))}
                    </div>
                    <h2 className="font-semibold">{item.name}</h2>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="bg-orange-500 text-white p-2 rounded-full shadow-md hover:bg-orange-600"
            >
              &#8592;
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="bg-orange-500 text-white p-2 rounded-full shadow-md hover:bg-orange-600"
            >
              &#8594;
            </button>
          </div>

          {/* Dots */}
          <div className="absolute right-4 bottom-2 flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === idx ? "bg-orange-500" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
