import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Leadership() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <div
      ref={sectionRef}
      className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col lg:flex-row items-start gap-10"
    >
      {/* Left Half - Heading */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Our Leadership</h1>
      </motion.div>

      {/* Right Half - Description */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full lg:w-1/2 text-gray-700 space-y-6"
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
          odio turpis. Ornare hendrerit pharetra aliquam amet nunc. Iaculis ut in
          nunc dignissim mauris quis praesent pretium blandit. Mauris rutrum
          neque et sollicitudin. Non posuere eu nisl eget integer. Proin lorem
          facilisi vel sit nunc.
        </p>
      </motion.div>
    </div>
  );
}
