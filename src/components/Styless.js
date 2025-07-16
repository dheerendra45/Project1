import { useState, useEffect, useRef } from 'react';

const AnimatedText = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const containerRef = useRef(null);

  const textLines = [
    "Shyam Metalics is one of India's fastest-growing and most trusted integrated metal ",
    "producers, with a diversified portfolio spanning carbon steel, stainless steel, ferro",
    " alloys, aluminium foil, and long steel products. Headquartered in Kolkata and driven ",
    " by the ethos of \"Made in India, Made for Bharat,\" we are committed to shaping the",
    " nation's infrastructure and industrial future through sustainable and scalable growth.",
    "",
    "As a diversified metal conglomerate, Shyam Metalics operates with a fully integrated  ",
    "ore-to-metal manufacturing model, supported by 83% captive power generation  ",
    "and state-of-the-art facilities strategically located across India’s key industrial hubs.",
    "Our operations are anchored in engineering excellence, operational efficiency and ",
    "robust forward and backward integration, ensuring unmatched product quality ",
    " ensuring unmatched product quality, consistency,and cost competitiveness."
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateLines();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateLines = () => {
    setVisibleLines(0);
    
    textLines.forEach((_, index) => {
      setTimeout(() => {
        setVisibleLines(index + 1);
        
        // If this is the last line, set timeout for restart
        if (index === textLines.length - 1) {
          setTimeout(() => {
            animateLines();
          }, 5000);
        }
      }, index * 600);
    });
  };

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto p-4" style={{paddingLeft: '0px'}}>
      {textLines.map((line, index) => (
        <p 
          key={index}
          className={`text-black font-inter text-base leading-[24px] font-normal tracking-[-0.5px] ${line === "" ? "mb-3" : "mb-1"} transition-all duration-700 ease-out ${
            visibleLines > index 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-5'
          }`}
        >
          {line === "" ? "\u00A0" : line}
        </p>
      ))}
    </div>
  );
};

export default AnimatedText;