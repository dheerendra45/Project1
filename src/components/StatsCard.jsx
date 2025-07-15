import React, { useState, useEffect } from 'react';

const StatsCard = () => {
  const stats = [
    {
      title: "Metal Production\nCapacity",
      value: "15.13 MTPA",
      numericValue: 15.13,
      suffix: " MTPA",
      isDecimal: true,
      decimalPlaces: 2
    },
    {
      title: "Employees",
      value: "17500+",
      numericValue: 17500,
      suffix: "+"
    },
    {
      title: "Capative Power\nInfrastructure",
      value: "83%",
      numericValue: 83,
      suffix: "%"
    },
    {
      title: "Active Projects",
      value: "1200+",
      numericValue: 1200,
      suffix: "+"
    },
    {
      title: "Turn Over",
      value: "₹20,000 CRORE",
      numericValue: 20000,
      suffix: " CRORE",
      prefix: "₹"
    }
  ];

  const [currentValues, setCurrentValues] = useState(
    stats.map(stat => ({
      displayValue: stat.isDecimal ? 1.00 : 1,
      target: stat.numericValue
    }))
  );

  useEffect(() => {
    const animateValues = () => {
      // Reset all values to their starting points
      setCurrentValues(prev => 
        prev.map((item, index) => ({
          ...item,
          displayValue: stats[index].isDecimal ? 1.00 : 1
        }))
      );
      
      // Animate to target values
      const animationDuration = 2000; // 2 seconds for animation
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);
        
        setCurrentValues(prev => 
          prev.map((item, index) => {
            const stat = stats[index];
            const value = stat.isDecimal 
              ? 1 + (stat.numericValue - 1) * progress
              : 1 + (stat.numericValue - 1) * progress;
            
            return {
              ...item,
              displayValue: stat.isDecimal 
                ? parseFloat(value.toFixed(stat.decimalPlaces || 2))
                : Math.floor(value)
            };
          })
        );
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    };

    // Initial animation
    animateValues();
    // Set up repeating animation every 8 seconds
    const interval = setInterval(animateValues, 10000);

    return () => clearInterval(interval);
  }, []);

  const formatValue = (value, stat) => {
    if (stat.isDecimal) {
      // Ensure exactly 2 decimal places for decimal values
      return value.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
    return value.toLocaleString(); // Format whole numbers
  };

  return (
    <div className="bg-white p-8 shadow-lg rounded-lg mx-20 my-10">
      <div className="flex justify-between items-center">
        {stats.map((stat, index) => (
          <div key={index} className="text-center flex-1 relative">
            <div className="font-poppins text-black-600 text-[16.34px] text-sm font-semibold mb-4 whitespace-pre-line leading-5">
              {stat.title}
            </div>
            <div className="text-orange-500 font-lemon-milk font-bold text-[25px] leading-[1.4] tracking-normal">
              {stat.prefix || ''}
              {formatValue(currentValues[index].displayValue, stat)}
              {stat.suffix}
            </div>
            {index < stats.length - 1 && (
              <div className="absolute top-0 right-0 h-full w-px bg-orange-200 opacity-30"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard;