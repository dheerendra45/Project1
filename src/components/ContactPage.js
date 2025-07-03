import React, { useState, useRef } from 'react';
import contactbg from '../assets/image.png';
import { motion, useInView } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const isLeftInView = useInView(leftRef, { once: false, margin: '-50px' });
  const isRightInView = useInView(rightRef, { once: false, margin: '-50px' });

  return (
    <div
     
      className="w-full font-inter py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Left Section - Contact Info */}
          <motion.div
            ref={leftRef}
            variants={fadeInUp}
            initial="hidden"
            animate={isLeftInView ? "visible" : "hidden"}
            className="md:w-3/5"
          >
            <div className="flex items-center mb-4 text-orange-500 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              CONTACT
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-4">Drop us a line</h1>
            <p className="text-gray-700 mb-8">
              Get in touch with Shyam Metalics & Energy Limited for all your metallurgical and energy requirements.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  icon: (
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  ),
                  title: 'Address',
                  lines: [
                    'Shyam Metalics & Energy Ltd. (Corporate Office)',
                    'P-19 (Plate No. D-403) Taratala Road, Kolkata-700088, West Bengal, India'
                  ]
                },
                {
                  icon: (
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  ),
                  title: 'Phone Number',
                  lines: ['+91 33 4011 1000', '+91  33 4017 5000']
                },
                {
                  icon: (
                    <>
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </>
                  ),
                  title: 'Email Address',
                  lines: ['compliance@shyamgroup.com', 'contact@shyamgroup.com']
                },
                {
                  icon: (
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  ),
                  title: 'Opening Hour',
                  lines: ['Mon - Fri: 09am - 07pm']
                }
              ].map((info, index) => (
                <div className="flex" key={index}>
                  <div className="bg-orange-500 p-4 h-16 w-16 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                      {info.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{info.title}</h3>
                    {info.lines.map((line, i) => (
                      <p key={i} className="text-sm text-gray-800">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div
            ref={rightRef}
            variants={fadeInUp}
            initial="hidden"
            animate={isRightInView ? "visible" : "hidden"}
            className="md:w-2/5 w-full"
          >
            <div className="bg-gray-200 p-8 rounded-md shadow-md text-black">
              <h2 className="text-3xl font-extrabold mb-3 text-center text-gray-900">Get in Touch</h2>
              <p className="mb-8 text-sm text-gray-600 text-center">
                Fill out the form and we'll get back to you soon
              </p>

              <div className="space-y-4">
                {['fullName', 'email', 'phone'].map((field, idx) => (
                  <input
                    key={idx}
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    name={field}
                    placeholder={
                      field === 'fullName' ? 'Full Name' :
                      field === 'email' ? 'Email Address' :
                      'Phone Number'
                    }
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 text-sm transition"
                  />
                ))}

                <textarea
                  name="message"
                  placeholder="Write Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3  bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 text-sm transition"
                />

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-gray-800 text-white py-3 px-6 rounded-md hover:bg-gray-900 transition text-sm"
                >
                  Submit
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
