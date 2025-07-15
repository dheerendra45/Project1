import React, { useState, useEffect } from "react";

const StatsCard = () => {
  const stats = [
    {
      title: "Metal Production\nCapacity",
      value: "15.13 MTPA",
      numericValue: 15.13,
      suffix: " MTPA",
      isDecimal: true,
      decimalPlaces: 2,
    },
    {
      title: "Employees",
      value: "17,500+",
      numericValue: 17500,
      suffix: "+",
    },
    {
      title: "Capative Power\nInfrastructure",
      value: "83%",
      numericValue: 83,
      suffix: "%",
    },
    {
      title: "Active Projects",
      value: "1,200+",
      numericValue: 1200,
      suffix: "+",
    },
    {
      title: "Turn Over",
      value: "₹20,000 CRORE",
      numericValue: 20000,
      suffix: " CRORE",
      prefix: "₹",
    },
  ];

  const [currentValues, setCurrentValues] = useState(
    stats.map((stat) => ({
      displayValue: stat.isDecimal ? 1.0 : 1,
      target: stat.numericValue,
    }))
  );

  useEffect(() => {
    const animateValues = () => {
      setCurrentValues((prev) =>
        prev.map((item, index) => ({
          ...item,
          displayValue: stats[index].isDecimal ? 1.0 : 1,
        }))
      );

      const animationDuration = 2000;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);

        setCurrentValues((prev) =>
          prev.map((item, index) => {
            const stat = stats[index];
            const value = stat.isDecimal
              ? 1 + (stat.numericValue - 1) * progress
              : 1 + (stat.numericValue - 1) * progress;

            return {
              ...item,
              displayValue: stat.isDecimal
                ? parseFloat(value.toFixed(stat.decimalPlaces || 2))
                : Math.floor(value),
            };
          })
        );

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    animateValues();
    const interval = setInterval(animateValues, 10000);
    return () => clearInterval(interval);
  }, []);

  const formatValue = (value, stat) => {
    if (stat.isDecimal) {
      return value.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
    return value.toLocaleString();
  };

  return (
    <div className="bg-white p-8 shadow-lg rounded-lg mx-16 my-10">
      <div className="flex justify-between items-stretch">
        {" "}
        {/* Changed to items-stretch */}
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center flex-1 relative flex flex-col justify-between h-full"
          >
            {" "}
            {/* Added flex container */}
            <div className="font-poppins text-black-600 text-[16.34px] text-sm font-semibold mb-1.5 whitespace-pre-line leading-5 min-h-[40px] flex items-center justify-center">
              {stat.title}
            </div>
            <div className="text-orange-500 font-lemon-milk font-bold text-[25px] leading-[1.4] tracking-normal min-h-[40px] flex items-center justify-center">
              {stat.prefix || ""}
              {formatValue(currentValues[index].displayValue, stat)}
              {stat.suffix}
            </div>
            {index < stats.length - 1 && (
              <div className="absolute top-1/2 right-0 h-1/3 w-px bg-orange-500 transform -translate-y-1/2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard;
