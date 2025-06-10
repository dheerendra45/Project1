import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsComponent = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
            TESTIMONIALS
          </p>
          <h2 className="text-orange-500 text-4xl md:text-5xl font-bold mb-4">
            Feedback from clients
          </h2>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative bg-white  p-8 md:p-12 max-w-4xl mx-auto mb-8 transform transition-all duration-500 hover:shadow-3xl">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Content */}
          <div className="text-center px-8 md:px-16">
            {/* Profile Image */}
            <div className="mb-8">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto border-4 border-orange-100 shadow-lg transition-all duration-500"
              />
            </div>

            {/* Testimonial Text */}
            <div className="mb-8">
              <Quote className="w-8 h-8 text-[#0868D7] mx-auto mb-6" />
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium max-w-3xl mx-auto">
                {testimonials[currentTestimonial].text}
              </p>
            </div>

            {/* Client Info */}
            <div className="mb-2">
              <h3 className="text-orange-500 font-bold text-xl md:text-2xl">
                {testimonials[currentTestimonial].name}
              </h3>
              <p className="text-gray-600 text-sm md:text-base font-medium">
                {testimonials[currentTestimonial].title}
              </p>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-orange-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-16 h-16 bg-orange-300 rounded-full opacity-10 animate-bounce"></div>
      </div>

      {/* Additional Styling */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsComponent;