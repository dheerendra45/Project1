import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BoardCommitteeCarousel = () => {
  const [currentSlideRow1, setCurrentSlideRow1] = useState(0);
  const [currentSlideRow2, setCurrentSlideRow2] = useState(0);
  
  const committeeMembers = [
    {
      name: "John Ibrahim",
      position: "Operational director at xyz",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      testimonial: "Their attention to detail and timely delivery made all the difference in our project. Truly a partner we can count on."
    },
    {
      name: "Sarah Martinez", 
      position: "Strategic director at abc",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
      testimonial: "Exceptional leadership and vision have transformed our operational efficiency beyond expectations."
    },
    {
      name: "David Thompson",
      position: "Technical director at def", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      testimonial: "Innovation and expertise combined with reliable execution makes them our preferred business partner."
    },
    {
      name: "Lisa Anderson",
      position: "Marketing director at ghi",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face", 
      testimonial: "Outstanding results and professional approach. They consistently exceed our project expectations."
    },
    {
      name: "Michael Chen",
      position: "Finance director at jkl",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
      testimonial: "Reliable financial strategies and innovative solutions that drive sustainable business growth."
    },
    {
      name: "Emily Rodriguez",
      position: "Operations director at mno",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      testimonial: "Streamlined operations and enhanced productivity through strategic leadership and clear vision."
    },
    {
      name: "Robert Wilson",
      position: "Technology director at pqr",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      testimonial: "Cutting-edge technology solutions that transform business processes and drive innovation forward."
    },
    {
      name: "Jennifer Taylor",
      position: "Strategy director at stu",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      testimonial: "Strategic insights and market analysis that consistently deliver exceptional business outcomes."
    }
  ];

  // Split members into two rows
  const row1Members = committeeMembers.slice(0, 4);
  const row2Members = committeeMembers.slice(4, 8);

  const totalSlidesRow1 = Math.ceil(row1Members.length / 4);
  const totalSlidesRow2 = Math.ceil(row2Members.length / 4);

  // Row 1 navigation
  const nextSlideRow1 = () => {
    setCurrentSlideRow1((prev) => (prev + 1) % totalSlidesRow1);
  };

  const prevSlideRow1 = () => {
    setCurrentSlideRow1((prev) => prev === 0 ? totalSlidesRow1 - 1 : prev - 1);
  };

  // Row 2 navigation
  const nextSlideRow2 = () => {
    setCurrentSlideRow2((prev) => (prev + 1) % totalSlidesRow2);
  };

  const prevSlideRow2 = () => {
    setCurrentSlideRow2((prev) => prev === 0 ? totalSlidesRow2 - 1 : prev - 1);
  };

  const getCurrentMembersRow1 = () => {
    const startIndex = currentSlideRow1 * 4;
    return row1Members.slice(startIndex, startIndex + 4);
  };

  const getCurrentMembersRow2 = () => {
    const startIndex = currentSlideRow2 * 4;
    return row2Members.slice(startIndex, startIndex + 4);
  };

  return (
    <div className="bg-white py-20 relative w-full max-w-screen-xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-orange-500">MEET OUR BOARD</span>{" "}
          <span className="text-red-500">COMMITTEE MEMBER'S</span>
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="mx-8">
        {/* First Row */}
        <div className="relative mb-12">
          {/* Row 1 Navigation Buttons */}
          <button
            onClick={prevSlideRow1}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlideRow1}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {getCurrentMembersRow1().map((member, index) => (
              <div
                key={index}
                className="bg-orange-500 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 shadow-lg"
                style={{ aspectRatio: '3/4', minHeight: '320px' }}
              >
                {/* Member Image */}
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Member Info */}
                <div className="text-white p-3 h-20">
                  <h3 className="font-bold text-sm mb-1 leading-tight">{member.name}</h3>
                  <p className="text-orange-100 text-xs mb-2 leading-tight">{member.position}</p>
                  <p className="text-xs leading-tight line-clamp-2">{member.testimonial}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 1 Slide Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalSlidesRow1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlideRow1(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlideRow1 === index ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="relative">
          {/* Row 2 Navigation Buttons */}
          <button
            onClick={prevSlideRow2}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlideRow2}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {getCurrentMembersRow2().map((member, index) => (
              <div
                key={index + 4}
                className="bg-orange-500 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 shadow-lg"
                style={{ aspectRatio: '3/4', minHeight: '320px' }}
              >
                {/* Member Image */}
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Member Info */}
                <div className="text-white p-3 h-20">
                  <h3 className="font-bold text-sm mb-1 leading-tight">{member.name}</h3>
                  <p className="text-orange-100 text-xs mb-2 leading-tight">{member.position}</p>
                  <p className="text-xs leading-tight line-clamp-2">{member.testimonial}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 Slide Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalSlidesRow2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlideRow2(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlideRow2 === index ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardCommitteeCarousel;