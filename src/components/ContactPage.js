import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full bg-gray-100 py-16 px-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Contact Information */}
          <div className="w-full md:w-3/5 pr-0 md:pr-12 mb-12 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="text-orange-500 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-orange-500 font-medium">CONTACT</span>
            </div>
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Drop us a line</h1>
              <p className="text-gray-700 mb-4">
                Get in touch with Shyam Metalics & Energy Limited for all your metallurgical and energy requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Location */}
              <div className="flex">
                <div className="bg-orange-500 p-4 h-16 w-16 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Address</h3>
                  <p>Trinity Tower, 83 Topsia Road, 7th floor</p>
                  <p>Kolkata – 700046, West Bengal, India</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex">
                <div className="bg-orange-500 p-4 h-16 w-16 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Phone Number</h3>
                  <p>+91 33 4016 4001</p>
                  <p>+91 33 4016 4025</p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex">
                <div className="bg-orange-500 p-4 h-16 w-16 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Email Address</h3>
                  <p>compliance@shyamgroup.com</p>
                  <p>contact@shyamgroup.com</p>
                </div>
              </div>
              
              {/* Hours */}
              <div className="flex">
                <div className="bg-orange-500 p-4 h-16 w-16 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Opening Hour</h3>
                  <p>Mon - Fri: 09am - 07pm</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Contact Form */}
         {/* Right Side - Contact Form */}
<div className="w-full md:w-2/5">
  <div className="bg-gray-200 p-8 rounded-md text-black">
    <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
    <p className="mb-6">Fill out the form and we'll get back to you soon</p>

    <div className="space-y-4">
      <div>
        <input 
          type="text" 
          name="fullName"
          placeholder="Full Name" 
          value={formData.fullName}
          onChange={handleInputChange}
          className="w-full p-3 bg-white border border-gray-400 rounded-md focus:outline-none placeholder-black text-black"
        />
      </div>
      <div>
        <input 
          type="email" 
          name="email"
          placeholder="Email Address" 
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-3 bg-white border border-gray-400 rounded-md focus:outline-none placeholder-black text-black"
        />
      </div>
      <div>
        <input 
          type="tel" 
          name="phone"
          placeholder="Phone Number" 
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full p-3 bg-white border border-gray-400 rounded-md focus:outline-none placeholder-black text-black"
        />
      </div>
      <div>
        <textarea 
          name="message"
          placeholder="Write Your Message" 
          rows="4"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full p-3 bg-white border border-gray-400 rounded-md focus:outline-none placeholder-black text-black"
        ></textarea>
      </div>
      <button 
        type="button" 
        onClick={handleSubmit}
        className="bg-black text-white py-3 px-8 rounded-md hover:bg-gray-900 transition"
      >
        Submit
      </button>
    </div>
  </div>
</div>

          
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
