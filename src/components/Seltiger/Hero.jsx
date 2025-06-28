import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";
import herobg from "../../assets/Seltiger/herobanner.mp4";

export default function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const heroRef = useRef(null);

  // Parallax style (basic)
  const parallaxStyle = {
    transform: "translateY(0)",
  };

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
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
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div
      className="h-[815px] bg-gray-100 mx-auto overflow-hidden relative font-inter"
      ref={heroRef}
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={herobg}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={parallaxStyle}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
      </div>

      {/* Floating Particles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/30 rounded-full animate-float"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.1,
              animationDuration: `${Math.random() * 25 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <motion.div
        ref={ref}
        className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-8 z-20 text-white"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="max-w-2xl space-y-4 md:space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold"
            variants={itemVariants}
          >
            <span className="inline-block hover:scale-105 hover:text-orange-300 transition-all duration-500">
              SEL Tiger TMT Bars
            </span>
          </motion.h1>
          <motion.h1
            className="text-3xl md:text-4xl font-bold"
            variants={itemVariants}
          >
            <span className="inline-block hover:scale-105 hover:text-orange-300 transition-all duration-500">
              Strength That Stands the Test of Time – Bend, but Never Break!
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl"
            variants={itemVariants}
          >
            <span className="inline-block hover:scale-105 transition-all duration-500">
              S-E-L Tiger is a symbol of Strength, Elasticity, and Longevity
            </span>
          </motion.p>
          <motion.div
            variants={gradientVariants}
            className="h-1 rounded mb-4 sm:mb-6 bg-gradient-to-r from-orange-500 to-white"
          />
          <motion.p
            className="text-sm"
            variants={itemVariants}
          >
            Home &gt; SEL
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Mobile Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:hidden z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
