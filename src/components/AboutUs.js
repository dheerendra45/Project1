import React, { useState } from 'react';
import LaserCuttingImage from '../assets/laser-cutting.jpg';
import WorkerImage from '../assets/factory-worker.png';

function AboutUs() {
  const [selectedYear, setSelectedYear] = useState(2013);

  const timelineData = [
    { 
      year: 2013, 
      title: "Lighting the Spark",
      description: "Igniting India's Steel Revolution - Founded as a visionary enterprise with world-class steel plant ambitions.",
      image: LaserCuttingImage
    },
    { 
      year: 2014, 
      title: "Doubling Down",
      description: "Strengthened foundation and expanded operational capabilities with strategic investments.",
      image: LaserCuttingImage
    },
    { 
      year: 2015, 
      title: "Powering Progress",
      description: "Enhanced production capacity and established key partnerships for sustainable growth.",
      image: LaserCuttingImage
    },
    { 
      year: 2016, 
      title: "Precision Scaling",
      description: "Implemented precision manufacturing processes and scaled operations strategically.",
      image: LaserCuttingImage
    },
    { 
      year: 2017, 
      title: "Breaking Barriers",
      description: "Overcame industry challenges and set new benchmarks in steel production efficiency.",
      image: LaserCuttingImage
    },
    { 
      year: 2019, 
      title: "Engineering Futures",
      description: "Invested in cutting-edge technology and sustainable manufacturing practices.",
      image: LaserCuttingImage
    },
    { 
      year: 2020, 
      title: "Pandemic Resilience",
      description: "Demonstrated exceptional resilience during global challenges while maintaining operations.",
      image: LaserCuttingImage
    },
    { 
      year: 2021, 
      title: "IPO Milestone",
      description: "Successfully went public, marking a significant milestone in our growth journey.",
      image: LaserCuttingImage
    },
    { 
      year: 2022, 
      title: "Product Innovation",
      description: "Launched innovative steel products and expanded our market presence significantly.",
      image: LaserCuttingImage
    },
    { 
      year: 2023, 
      title: "13 MTPA Benchmark",
      description: "Achieved 13 MTPA production capacity, establishing ourselves among India's top steel producers.",
      image: LaserCuttingImage
    },
    { 
      year: 2024, 
      title: "Multi-Metal Expansion",
      description: "Diversified into multi-metal production, expanding beyond traditional steel manufacturing.",
      image: LaserCuttingImage
    }
  ];

  const selectedData = timelineData.find(item => item.year === selectedYear);

  return (
    <div className="bg-white py-12">
      {/* Main Content Section */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex gap-8 mb-20">
          {/* Left Content */}
          <div className="w-1/3 relative">
            <p className="text-orange-500 text-xl mb-2 font-bold text-[24px] tracking-[4.3px] leading-[30.01px] font-['Helvetica_Neue']">
              About Us
            </p>

            <h2 className="text-[36px] leading-[50.4px] font-bold tracking-[0%] align-middle font-['LEMON_MILK'] mb-6">
              HOW WE STARTED
            </h2>

            <p className="font-[400] text-[24px] leading-[40.01px] tracking-[0%] font-['Manrope'] mb-4 text-gray-800">
              Shyam Metalics Journey
            </p>
 
            <p className="font-[300] text-[18px] leading-[30.01px] tracking-[0%] font-['Manrope'] text-gray-600 mb-8">
              Founded as a visionary enterprise, Shyam Metalics embarked on its journey to establish world-class steel plants in India. Under the leadership of our promoters, we pioneered an Integrated Steel Plant model that combines efficiency with sustainability. From our early days to becoming a publicly listed company, we've maintained an unwavering focus on quality and innovation.
            </p>
 
            {/* Positioned Info Box */}
            <div className="absolute top-[450px] bg-orange-50 border-l-4 border-orange-500 p-4 w-80 shadow-sm">
              <p className="text-sm text-gray-700 font-medium">
                Today, we stand among India's most respected steel producers, delivering excellence from raw material to finished product.
              </p>
            </div>
          </div>
 
          {/* Center Image */}
          <div className="w-1/3 px-4">
            <div className="h-[500px] overflow-hidden rounded-lg shadow-lg">
              <img
                src={LaserCuttingImage}
                alt="Laser Cutting Machine"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
 
          {/* Right Image */}
          <div className="w-1/3">
            <div className="h-[500px] overflow-hidden rounded-lg shadow-lg">
              <img
                src={WorkerImage}
                alt="Factory Worker"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative px-4">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">Our Journey Through The Years</h3>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Horizontal Line */}
            <div className="h-1 bg-orange-500 w-full absolute top-4 left-0"></div>
 
            {/* Timeline Points */}
            <div className="flex justify-between relative z-10 mb-8">
              {timelineData.map((item, index) => (
                <div key={index} className="flex flex-col items-center cursor-pointer group" onClick={() => setSelectedYear(item.year)}>
                  <div className={`w-8 h-8 rounded-full ${selectedYear === item.year ? 'bg-orange-500' : 'bg-gray-300'} flex items-center justify-center transition-all duration-300 hover:scale-110`}>
                    {selectedYear === item.year && <div className="w-4 h-4 rounded-full bg-white" />}
                  </div>
                  <span className={`mt-4 font-semibold transition-colors duration-300 ${selectedYear === item.year ? 'text-orange-500' : 'text-gray-500'} group-hover:text-orange-400`}>
                    {item.year}
                  </span>
                </div>
              ))}
            </div>

            {/* Selected Year Details Card */}
            {selectedData && (
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mt-8 max-w-4xl mx-auto">
                <div className="flex gap-6">
                  {/* Image */}
                  <div className="w-1/3">
                    <div className="h-48 overflow-hidden rounded-lg">
                      <img
                        src={selectedData.image}
                        alt={selectedData.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="w-2/3">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {selectedData.year}
                      </span>
                      <h4 className="text-2xl font-bold text-gray-800">
                        {selectedData.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {selectedData.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;