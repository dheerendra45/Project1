import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import real1 from '../../assets/awards/real1.jpg';
import real2 from '../../assets/awards/real2.jpg';
import real3 from '../../assets/awards/real3.jpg';
import real4 from '../../assets/awards/real4.jpg';

const AwardsStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories = [
    {
      id: 1,
      title: "Innovation Award Winner",
      organization: "By Tech Summit",
      description: "Recognized for developing cutting-edge tech that transformed logistics across rural India.",
      image: real1,
    },
    {
      id: 2,
      title: "Social Impact Leader",
      organization: "By CSR India",
      description: "Awarded for impactful initiatives in empowering underprivileged students with digital skills.",
      image: real2,
    },
    {
      id: 3,
      title: "Excellence in Design",
      organization: "By UX Global",
      description: "Praised for creating an intuitive and accessible user experience in health-tech applications.",
      image: real3,
    },
    {
      id: 4,
      title: "AI Research Champion",
      organization: "By AI Forum",
      description: "Honored for pioneering work in AI ethics and sustainable model deployment.",
      image: real4,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            REAL STORIES. REAL SATISFACTION.
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            "Trophies fade, but the stories behind them stay. Every recognition marks a breakthrough, a bold step forward. 
            This is more than a wall of fame — it's a tribute to dedication, belief, and resilience."
          </p>
        </div>

        {/* Carousel Navigation */}
        <div className="relative">
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          {/* Stories Cards */}
          <div className="mx-8">
            <div className="flex flex-wrap justify-center gap-6">
              {stories.map((story) => (
                <div
                  key={story.id}
                  className="bg-white  overflow-hidden shadow-md"
                  style={{ width: '255.28px', height: '346.34px' }}
                >
                  {/* Image */}
                  <img
                    src={story.image}
                    alt={story.title}
                    style={{
                      width: '255.28px',
                      height: '229.07px',
                      objectFit: 'cover'
                    }}
                  />

                  {/* Text Box */}
                  <div
                    style={{
                      width: '247.67px',
                      height: '117.27px',
                      paddingTop: '0px',
                      paddingBottom: '4.2px',
                      paddingLeft: '4px',
                      paddingRight: '4px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '12.68px'
                    }}
                  >
                    <h3 className="text-[16px] font-bold text-gray-900">{story.title}</h3>
                    <p className="text-orange-500 font-medium text-sm">{story.organization}</p>
                    <p className="text-gray-600 text-[12px] leading-snug">{story.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsStories;
