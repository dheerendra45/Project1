import React, { useState, useEffect, useRef } from 'react';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div
      ref={sectionRef}
      className={`bg-gray-50 py-12 px-4 transition-all duration-700 ease-out max-w-4xl mx-auto
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ willChange: 'opacity, transform' }}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-medium text-orange-500 mb-3">
          Let's Discuss Your Needs – Contact Our Product Team
        </h2>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-6 sm:p-10 space-y-6"
        noValidate
      >
        {/* Name Field */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md
              focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none
              transition duration-300"
          />
        </div>

        {/* Email and Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address*"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-md
              focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none
              transition duration-300"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number*"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-md
              focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none
              transition duration-300"
          />
        </div>

        {/* Subject Field */}
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject*"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md
              focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none
              transition duration-300"
          />
        </div>

        {/* Message Field */}
        <div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-md
              focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none
              resize-vertical transition duration-300"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md
              transition-transform duration-300 transform hover:scale-105 active:scale-95 shadow-md"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFormSection;
