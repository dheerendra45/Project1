import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Elizabeth Jeff",
      text: "Dear so sing when in find read of call. As distrusts behavior abilities defective is.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      highlight: false,
    },
    {
      name: "Elizabeth Jeff",
      text: "Dear so sing when in find read of call. As distrusts behavior abilities defective is.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      highlight: true,
    },
    {
      name: "Elizabeth Jeff",
      text: "Dear so sing when in find read of call. As distrusts behavior abilities defective is.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      highlight: false,
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

  return (
    <div className="bg-white my-[2%]">
      <div
        className="mx-auto"
        style={{
          width: "80%",
          maxWidth: "1200px",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Header and description */}
          <div className="space-y-6 lg:pr-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                What Our
              </h2>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">
                Customer Says
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Relation so in confined smallest children unpacked delicate.
                <span className="text-orange-500 font-medium">
                  {" "}
                  Why sir end believe
                </span>{" "}
                uncivil respect. Always get adieus nature day course for common.
              </p>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-medium transition-colors mt-8">
                View More
              </button>
            </div>
          </div>

          {/* Right side - Testimonials */}
          <div className="space-y-4 lg:pl-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`relative ${
                  testimonial.highlight ? "lg:-ml-8" : ""
                }`}
              >
                {/* Quote icon with conditional positioning for middle card */}
                <div
                  className={`absolute top-0 text-6xl font-serif ${
                    testimonial.highlight ? "text-orange-500" : "text-gray-400"
                  }`}
                  style={{
                    zIndex: 1,
                    fontFamily: "Georgia, serif",
                    lineHeight: 0,
                    right: index === 1 ? "100px" : "0", // Middle card (index 1) gets 5px right position
                    transform:
                      index === 1
                        ? "translate(0, -15px)" // Middle card transform
                        : "translate(10px, -15px)", // Other cards transform
                  }}
                >
                  ”
                </div>

                {/* Orange accent line for highlighted testimonial */}
                {testimonial.highlight && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 rounded-full"></div>
                )}

                <div
                  className={`bg-white p-6 rounded-lg border-l-4 ${
                    testimonial.highlight
                      ? "border-orange-500"
                      : "border-transparent"
                  }`}
                  style={{
                    minWidth: "300px",
                    maxWidth: "400px",
                    width: "100%",
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
