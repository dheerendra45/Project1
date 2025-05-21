// NewsPage.jsx
import React from 'react';

const NewsCard = ({ date, category, admin, comments, title, excerpt }) => {
  return (
    <div className="w-full md:w-1/4 px-2 mb-8">
      <div className="bg-white rounded-md overflow-hidden shadow-md">
        {/* Image placeholder */}
        <div className="h-48 bg-gray-300 relative">
          <img 
            src="/api/placeholder/400/250" 
            alt={title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute bottom-0 left-0 bg-orange-500 text-white py-1 px-3">
            {date}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <div className="flex text-gray-500 text-sm mb-2">
            <span className="uppercase mr-2">{category}</span>
            <span className="uppercase mr-2">{admin}</span>
            <span className="uppercase">{comments}</span>
          </div>
          <h3 className="font-bold text-xl mb-3">{title}</h3>
          <p className="text-gray-700">{excerpt}</p>
        </div>
      </div>
    </div>
  );
};

const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      date: '18 JUN 2020',
      category: 'Industrial',
      admin: 'Admin',
      comments: '3 Comment',
      title: 'Get Tips for How to Manage an Inventory System',
      excerpt: 'There are many variations of passa ges of Lorem Ipsum available...'
    },
    {
      id: 2,
      date: '03 JUN 2020',
      category: 'Engineering',
      admin: 'Admin',
      comments: '3 Comment',
      title: 'Experts Gives Guide to Safety Leadership Training',
      excerpt: 'There are many variations of passa ges of Lorem Ipsum available...'
    },
    {
      id: 3,
      date: '03 JUN 2020',
      category: 'Industrial',
      admin: 'Admin',
      comments: '3 Comment',
      title: 'Experienced Engineers Give all Industry Solution',
      excerpt: 'There are many variations of passa ges of Lorem Ipsum available...'
    },
    {
      id: 4,
      date: '03 JUN 2020',
      category: 'Industrial',
      admin: 'Admin',
      comments: '3 Comment',
      title: 'Experienced Engineers Give all Industry Solution',
      excerpt: 'There are many variations of passa ges of Lorem Ipsum available...'
    }
  ];

  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <p className="text-orange-500 font-medium mb-2">LATEST NEWS</p>
          <h2 className="text-3xl md:text-4xl font-bold">INSIGHTS, INNOVATIONS & IMPACT</h2>
        </div>
        
        {/* News Grid */}
        <div className="flex flex-wrap -mx-2">
          {newsItems.map(item => (
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