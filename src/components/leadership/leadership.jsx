import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Leadership() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <div
      ref={sectionRef}
      className="font-inter max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-14 flex flex-col lg:flex-row items-start gap-10 overflow-x-hidden"
    >
      {/* Left Half - Heading */}
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 text-center lg:text-left leading-tight">
          Our Leadership
        </h1>
      </motion.div>

      {/* Right Half - Description */}
      <motion.div
        className="w-full lg:w-1/2 text-gray-700 space-y-6 text-sm sm:text-base leading-relaxed"
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur. Hac dictum bibendum varius
          fringilla. Mauris ipsum pulvinar diam tristique lobortis vulputate
          faucibus fringilla volutpat. Sapien at quam habitant morbi
          pellentesque adipiscing proin. Congue lacus libero ut fames venenatis
          imperdiet ut. Turpis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Et ut nec quis morbi nullam mi
          odio turpis. Ornare hendrerit pharetra aliquam amet nunc. Iaculis ut
          in nunc dignissim mauris quis praesent pretium blandit. Mauris rutrum
          neque et sollicitudin. Non posuere eu nisl eget integer. Proin lorem
          facilisi vel sit nunc.
        </p>
      </motion.div>
    </div>
  );
}
