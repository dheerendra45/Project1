import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import a1 from "../../assets/Companyoverview/Icon.png";
import a2 from "../../assets/Companyoverview/best1.jpg";

const Best = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const carouselData = [
    {
      icon: a1,
      heading: "30% Growth",
      text: "Growth in revenue year over year by businesses using Steeler to unify their in-store and online sales.",
    },
    {
      icon: a1,
      heading: "50% Efficiency",
      text: "Improved production efficiency with integrated automation and real-time analytics.",
    },
  ];

  const images = [a2, a2, a2, a2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleImagePrev = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageNext = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="w-full p-4 flex flex-col gap-10" ref={ref}>
      {/* Top Section */}
      <motion.div
        className="flex flex-col lg:flex-row items-start gap-10"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Left Side - 70% */}
        <motion.div
          className="w-full lg:w-[70%] text-black space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold">
            #1 Best Industrial Company, <br /> Is Your Choice
          </h1>
          <p>
            Shyam Amet ut integer leo nulla fringilla odio leo quis sapien
            lobortis orci vitae faucibus laoreet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Massa rhoncus sed mauris
            nisl nunc sed. At egestas ipsum diam augue aliquam venenatis ut mi
            mi. Placerat praesent fermentum accumsan tristique odio non. Sit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ut massa nam venenatis vel
            cursus in. Ac tristique diam cursus.
          </p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded flex items-center gap-2">
            SHYAM SUSTAINABILITY <ArrowRight size={16} />
          </button>
        </motion.div>

        {/* Right Side - 30% */}
        <motion.div
          className="w-full lg:w-[30%] bg-white p-6 rounded shadow relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={carouselIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-6 rounded shadow space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="bg-orange-500 rounded-full p-2 w-14 h-14 flex items-center justify-center">
                  <img
                    src={carouselData[carouselIndex].icon}
                    alt=""
                    className="w-8 h-8"
                  />
                </div>
                <h1 className="text-xl font-semibold">
                  {carouselData[carouselIndex].heading}
                </h1>
              </div>
              <p className="text-gray-700">{carouselData[carouselIndex].text}</p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Full Width Image Carousel */}
      <motion.div
        className="relative w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={images[imageIndex]}
          alt=""
          className="w-full h-96 object-cover rounded"
        />
        <button
          onClick={handleImagePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={handleImageNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full"
        >
          <ArrowRight />
        </button>
      </motion.div>
    </div>
  );
};

export default Best;
