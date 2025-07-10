import React from 'react';

const StatsCard = () => {
  const stats = [
    {
      title: "Metal Production\nCapacity",
      value: "15.1 MT"
    },
    {
      title: "Clients",
      value: "25K+"
    },
    {
      title: "Annual Growth",
      value: "32%"
    },
    {
      title: "Active Projects",
      value: "1200+"
    },
    {
      title: "Customer Satisfaction",
      value: "92%"
    }
  ];

  return (
    <div className="bg-white p-8 shadow-lg rounded-lg mx-12 my-11">
      <div className="flex justify-between items-center ">
        {stats.map((stat, index) => (
          <div key={index} className="text-center flex-1 relative">
            <div className="text-black-800 text-sm font-bold mb-4 whitespace-pre-line leading-5">
              {stat.title}
            </div>
            <div className="text-orange-500 text-3xl font-semibold">
              {stat.value}
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