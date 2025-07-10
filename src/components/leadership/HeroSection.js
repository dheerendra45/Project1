import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import herobg from "../../assets/leadership/herobg.jpg";
import { FiChevronDown } from "react-icons/fi";

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const gradientVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="h-screen md:h-[815px] font-inter bg-gray-100 overflow-hidden relative -mt-[65px]"
    >
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full overflow-hidden"
      >
        <motion.img
          src={herobg}
          alt="Leadership Background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      />

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: Math.random() * 10 + 5 + "px",
            height: Math.random() * 10 + 5 + "px",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 100],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Hero Content */}
      <motion.div
        className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 pt-[150px] md:pt-[200px] lg:pt-[275px] text-white relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold leading-[1.1] mb-4 md:mb-6"
          variants={itemVariants}
        >
          Leadership
        </motion.h1>

        <motion.div
          variants={gradientVariants}
          className="h-1 rounded mb-6 sm:mb-8"
          style={{ background: "linear-gradient(to right, #2563EB, white)" }}
        />

        <motion.div
          className="flex space-x-1 text-sm md:text-base font-medium"
          variants={itemVariants}
        >
          <span>Home</span>
          <span>&gt;</span>
          <span>Leadership</span>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator (Mobile) */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:hidden text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <FiChevronDown size={32} />
      </motion.div>
    </div>
  );
};

export default Hero;
