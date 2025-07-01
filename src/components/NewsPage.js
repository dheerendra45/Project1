import React, { useState } from "react";
import { motion } from "framer-motion";
import news1 from '../assets/news.png'
import news2 from '../assets/news2.png'

const NewsCard = ({
  date,
  category,
  admin,
  comments,
  title,
  excerpt,
  subtext,
  image, // ✅ Added image prop
}) => {
  const [showSubtext, setShowSubtext] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full md:w-1/4 px-2 mb-8 flex"
    >
      <div className="bg-white rounded-md overflow-hidden shadow-md relative flex flex-col h-full w-full">
        {/* Image section */}
        <div className="h-48 bg-gray-300 relative flex-shrink-0">
          <img
            src={image || "/api/placeholder/400/250"} // ✅ Use the image prop instead of placeholder
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-orange-500 text-white py-1 px-3 text-sm font-semibold">
            {date}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 pb-16 flex-grow flex flex-col">
          <div className="flex text-gray-500 text-sm mb-2">
            <span className="uppercase mr-2">{category}</span>
            <span className="uppercase mr-2">{admin}</span>
            <span className="uppercase">{comments}</span>
          </div>
          <h3 className="font-bold text-xl mb-3">{title}</h3>
          <p className="text-gray-700">{excerpt}</p>

          {/* Subtext appears on toggle */}
          {showSubtext && (
            <p className="mt-4 text-gray-600 text-sm whitespace-pre-line">
              {subtext}
            </p>
          )}
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setShowSubtext(!showSubtext)}
          className="absolute bottom-4 right-4 bg-orange-500 text-white rounded-full p-3 shadow-lg hover:bg-orange-600 transition"
          aria-label="Toggle details"
          type="button"
        >
          <svg
            className={`w-5 h-5 transform transition-transform ${
              showSubtext ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      image: news1, // ✅ This will now be used
      date: "01 JUN 2025",
      category: "Philanthropy",
      admin: "Admin",
      comments: "5 Comments",
      title: "Tanishi Agarwal Recognised for Strategic Philanthropy",
      excerpt:
        "Tanishi Agarwal is celebrated for advancing inclusive nation-building through Shyam Metalics Cares. Her leadership inspires sustainable social impact across communities.",
      subtext:
        "Further details: Tanishi has led various initiatives in education, health, and environmental sustainability, making a notable impact across multiple regions.",
    },
    {
      id: 2,
      image: news2, // ✅ This will now be used
      date: "15 MAY 2025",
      category: "Export",
      admin: "Admin",
      comments: "2 Comments",
      title: "Shyam Metalics Secures Major Export Order to Southeast Asia",
      excerpt:
        "50,000 MT shipment of TMT bars and wire rods to Vietnam & Indonesia boosts India's steel export status and adds $25M in revenue.",
      subtext:
        "Additional info: This shipment marks the company's entry into new markets, solidifying its position as a leading exporter in the steel industry.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop", // Green technology/research image
      date: "01 MAY 2025",
      category: "Innovation",
      admin: "Admin",
      comments: "1 Comment",
      title: "IIT Bombay Collaboration for Green Steel Research",
      excerpt:
        "Shyam Metalics partners with IIT Bombay to explore hydrogen-based steel production and carbon capture with a ₹100Cr R&D investment.",
      subtext:
        "Details: The collaboration aims to develop cutting-edge technology to reduce carbon footprint and promote sustainable manufacturing processes.",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=250&fit=crop", // Manufacturing/industrial image
      date: "20 APR 2025",
      category: "Manufacturing",
      admin: "Admin",
      comments: "4 Comments",
      title: "Aluminum Foil Division Gets FDA Approval",
      excerpt:
        "New 40,000 TPA unit enters FMCG & pharma sectors with India's first 100% recyclable packaging certification for food-grade foil.",
      subtext:
        "More info: The FDA approval enables expansion into high-growth sectors, emphasizing eco-friendly and recyclable packaging solutions.",
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <p className="text-orange-500 font-medium mb-2">LATEST NEWS</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            INSIGHTS, INNOVATIONS & IMPACT
          </h2>
        </div>

        {/* News Grid */}
        <div className="flex flex-wrap -mx-2 items-stretch">
          {newsItems.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8">
          <div className="w-3 h-3 bg-orange-500 rounded-full mx-1"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full mx-1"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full mx-1"></div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;