import React, { useState } from "react";
import { motion } from "framer-motion";

import { X } from "lucide-react";

const wordContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const wordItem = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const TestimonialsSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      name: "Ravi Bagaria",
      text: "Others have already said plenty about their quality of their TMT bars and steel products. One thing that I believe should be talked more about Shyam Metallics in their CSR initiatives and how serious they are about them. As a construction company, it feels good to be associated with such responsible and committed manufacturer. It inspires us to do more for the society. I think everyone should encourage such market players to create new CSR standards in the manufacturing world. So , we're really happy with our association with Shyam Metalics. And we hope to continue this relationship in the coming months and years.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      highlight: false,
      lineColor: "gray-300",
      lineWidth: "w-2",
      containerHeight: "h-[120px]",
    },
    {
      name: "Saurav Agarwal",
      text: "I was looking for best quality TMT bars, and having heard a lot about Shyam Metalics, so I finally decided to contact them. Comparing the TMT bar price in West Bengal, they are affordable and offer the best quality TMT bars. Definitely recommend.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      highlight: true,
      lineColor: "orange-500",
      lineWidth: "w-3",
      containerHeight: "h-[140px]",
    },
    {
      name: "Biplap Kar",
      text: "We have been working with Shyam Metalics since 2004. We have worked with them on many projects throughout the years. They do an excellent job from start to finish. We enjoy working with everyone at Shyam Metalics. The Team carries such integrity and professionalism. We look forward to the jobs ahead with Shyam Metalics and highly recommend such a proficient company.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      highlight: false,
      lineColor: "gray-300",
      lineWidth: "w-2",
      containerHeight: "h-[120px]",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  const truncateText = (text, maxLines = 2) => {
    const words = text.split(" ");
    const wordsPerLine = 6; // Approximate words per line
    const maxWords = maxLines * wordsPerLine;

    if (words.length <= maxWords) {
      return { text, needsReadMore: false };
    }

    const truncated = words.slice(0, maxWords).join(" ");
    return { text: truncated, needsReadMore: true };
  };

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
    document.body.style.overflow = "unset"; // Restore scroll
  };

  return (
    <>
      <div className="bg-white my-[2%]">
        <div className="mx-auto w-[80%] max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Header and description */}
            <div className="space-y-4 lg:pr-8 mt-[-2%]">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  What Our
                </h2>
                <h2 className="text-3xl font-bold text-orange-500 mb-6">
                  Customer Says
                </h2>
              </div>

              <div className="space-y-4">
                <motion.div
                  className="text-gray-600 font-normal text-base leading-[16px] tracking-normal font-['Inter'] flex flex-wrap gap-x-[4px]"
                  style={{ letterSpacing: "-0.3px" }}
                  variants={wordContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {(
                    "Relation so in confined smallest children unpacked delicate. " +
                    "Why sir end believe uncivil respect. Always get adieus nature day course for common."
                  )
                    .split(" ")
                    .map((word, idx) => (
                      <motion.span
                        key={idx}
                        variants={wordItem}
                        className={
                          word === "Why"
                            ? "text-orange-500 font-medium"
                            : word === "sir"
                            ? "text-orange-500 font-medium"
                            : ""
                        }
                      >
                        {word}&nbsp;
                      </motion.span>
                    ))}
                </motion.div>

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 mt-6 sm:py-3 rounded-lg font-semibold border border-white transition-all duration-300 shadow-lg w-fit text-sm sm:text-base">
                  View More
                </button>
              </div>
            </div>

            {/* Right side - Testimonials */}
            <div className="space-y-4 lg:pl-4">
              {testimonials.map((testimonial, index) => {
                const { text: truncatedText, needsReadMore } = truncateText(
                  testimonial.text
                );

                return (
                  <div
                    key={index}
                    className={`relative ${
                      testimonial.highlight ? "lg:-ml-8" : ""
                    }`}
                  >
                    {/* Quote icon */}
                    <div
                      className={`absolute top-0 text-6xl font-serif ${
                        testimonial.highlight
                          ? "text-orange-500"
                          : "text-gray-400"
                      }`}
                      style={{
                        zIndex: 1,
                        fontFamily: "Georgia, serif",
                        lineHeight: 0,
                        right: index === 1 ? "100px" : "0",
                        transform:
                          index === 1
                            ? "translate(0, -15px)"
                            : "translate(10px, -15px)",
                      }}
                    >
                      "
                    </div>

                    {/* Accent line */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 ${testimonial.lineWidth} bg-${testimonial.lineColor} rounded-full`}
                    ></div>

                    {/* Testimonial container */}
                    <div
                      className={`bg-white p-6 rounded-lg border-l-4 ${
                        testimonial.highlight
                          ? "border-orange-500"
                          : "border-transparent"
                      } min-h-[120px] flex items-start`}
                      style={{
                        minWidth: "300px",
                        maxWidth: "400px",
                        width: "100%",
                      }}
                    >
                      <div className="flex items-start space-x-4 w-full">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {testimonial.name}
                          </h4>

                          <div className="text-gray-600 text-sm leading-relaxed mb-2">
                            <motion.div
                              className="flex flex-wrap gap-x-[2px]"
                              style={{ letterSpacing: "-0.2px" }}
                              variants={wordContainer}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: false, amount: 0.3 }}
                            >
                              {truncatedText.split(" ").map((word, idx) => (
                                <motion.span key={idx} variants={wordItem}>
                                  {word}&nbsp;
                                </motion.span>
                              ))}
                              {needsReadMore && (
                                <span className="text-gray-400">...</span>
                              )}
                            </motion.div>

                            {needsReadMore && (
                              <button
                                onClick={() => openModal(testimonial)}
                                className="text-orange-500 text-sm font-medium hover:text-orange-600 transition-colors mt-1 inline-block"
                              >
                                Read More
                              </button>
                            )}
                          </div>

                          <div className="flex items-center">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedTestimonial && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            {/* Modal content */}
            <div className="pr-8">
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={selectedTestimonial.image}
                  alt={selectedTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {selectedTestimonial.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    {renderStars(selectedTestimonial.rating)}
                  </div>
                </div>
              </div>

              <div
                className={`w-4 h-4 ${selectedTestimonial.lineWidth} bg-${selectedTestimonial.lineColor} rounded-full mb-4`}
              ></div>

              <motion.div
                className="text-gray-700 text-base leading-relaxed flex flex-wrap gap-x-[4px]"
                variants={wordContainer}
                initial="hidden"
                animate="visible"
              >
                {selectedTestimonial.text.split(" ").map((word, idx) => (
                  <motion.span key={idx} variants={wordItem}>
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialsSection;
