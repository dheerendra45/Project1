import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const TestimonialsComponent = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [scrollPosition, setScrollPosition] = useState(0);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Marketing Director",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      text: "Working with this team has been an absolute game-changer for our business. Their attention to detail and innovative approach exceeded all our expectations. The results speak for themselves."
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "The level of professionalism and expertise demonstrated throughout our project was remarkable. They delivered exactly what we needed, on time and within budget. Highly recommended!"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Product Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "From concept to execution, every step was handled with precision and care. The team's creativity and technical skills transformed our vision into reality. Outstanding work!"
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Operations Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "Their strategic approach and deep understanding of our industry made all the difference. The collaboration was seamless, and the final outcome surpassed our highest expectations."
    },
    {
      id: 5,
      name: "Lisa Park",
      title: "Creative Director",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      text: "Exceptional quality and service from start to finish. The team's innovative solutions and responsive communication made this project a true success story. Would definitely work with them again."
    }
  ];

  // Calculate cards to show based on container width
  useEffect(() => {
    const calculateCardsToShow = () => {
      if (!containerRef.current) return 3;
      const containerWidth = containerRef.current.offsetWidth;
      return containerWidth > 1024 ? 3 : containerWidth > 768 ? 2 : 1;
    };

    const handleResize = () => {
      setCardsToShow(calculateCardsToShow());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Continuous scrolling animation
  useEffect(() => {
    if (isHovered || !sliderRef.current) return;
 
    let animationFrame;
    let lastTimestamp = 0;
    const speed = 250; // pixels per second

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      setScrollPosition(prev => {
        const newPos = prev + (speed * delta) / 1000;
        // Reset position before reaching the end for seamless looping
        if (newPos > sliderRef.current.scrollWidth / 2) {
          return newPos - sliderRef.current.scrollWidth / 2;
        }
        return newPos;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  // Duplicate testimonials for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div ref={containerRef} className="relative bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-black-800 text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase tracking-wider mb-3">
            TESTIMONIALS
          </p>
          <h2 className="text-orange-500 text-xl sm:text-2xl lg:text-2xl font-semibold leading-snug mb-4">
            Feedback from clients
          </h2>
        </motion.div>

        {/* Testimonial Cards Container */}
        <div 
          className="relative h-[400px] overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Infinite scrolling cards */}
          <motion.div
            ref={sliderRef}
            className="absolute flex gap-8"
            style={{
              x: -scrollPosition,
              left: `calc(50% - ${(350 * cardsToShow) / 2}px)`
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="bg-white p-6 rounded-3xl shadow-xl flex flex-col w-[500px] h-[320px] border-2 outline-white/30 z-10"
                whileHover={{ 
                  y: -20,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-orange-200 shadow-sm mr-4"
                  />
                  <div className="text-left">
                    <h3 className="text-black-800 font-semibold text-xl">
                      {testimonial.name}
                    </h3>
                    <p className="text-orange-500 text-sm font-medium">
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <p className="text-gray-700 text-lg leading-relaxed font-medium text-center">
                    {testimonial.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComponent;