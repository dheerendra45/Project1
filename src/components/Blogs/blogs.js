import React, { useState } from 'react';
import { Search, Play } from 'lucide-react';

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "The New Celanese Chief Pushes Customer-Facing Strategy",
      author: "John Attack",
      date: "December 10, 2020",
      categories: ["Bridge Construction", "Electronic Materials"],
      excerpt: "Employee empowerment will be one of several key components helping the company meet its growth goals, Rohr says. It's a strategy Rohr says worked well for him in his previous role as CEO of specialty chemical producer Albemarle Corp. (W500/289). At Celanese, Rohr says he plans to have employees more...",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop",
      comments: "No Comments",
      hasVideo: false
    },
    {
      id: 2,
      title: "KBR links with L&T for refinery and petrochemical projects",
      author: "John Attack",
      date: "December 8, 2020",
      categories: ["Bridge Construction", "Electronic Materials"],
      excerpt: "KBR's most recently filed Annual Report on Form 10-K, any subsequent Form 10-Qs and 8-Ks, and other U.S. Securities and Exchange Commission filings discuss some of the important risk factors that KBR has identified that may affect the business, results of operations and financial condition...",
      image: "https://images.unsplash.com/photo-1586636404893-f69b3e81d8ba?w=600&h=300&fit=crop",
      comments: "No Comments",
      hasVideo: false
    },
    {
      id: 3,
      title: "Lean service well operations with HR practices incorporated",
      author: "John Attack",
      date: "December 6, 2020",
      categories: ["Electronic Materials", "Mechanical Engineering"],
      excerpt: "Lean service operations are people centred and people driven. However, organisations are generally tactical and reactive when dealing with the human element of lean service operations. They frequently focus on lean tools and techniques, thus overlooking the human element. They might train employees...",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=300&fit=crop",
      comments: "3 Comments",
      hasVideo: true
    },
    {
      id: 4,
      title: "Successfully driving the value mechanisms for competitive advantage",
      author: "John Attack",
      date: "December 4, 2020",
      categories: ["Mechanical Engineering", "Power Systems"],
      excerpt: "Advanced services are a new route for manufacturers to secure competitive advantage in the market. With rising availability and adoption of digital technology, building an advanced service business model is becoming easier than ever. However, manufacturers still face substantial challenges...",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop",
      comments: "No Comments",
      hasVideo: false
    },
    {
      id: 5,
      title: "Create Synergy by Engaging With Higher Education",
      author: "John Attack",
      date: "November 30, 2020",
      categories: ["Electronic Materials", "Petroleum and Gas"],
      excerpt: "It's safe to say that you're currently spending a lot of time with your spouse in very tight quarters—more time than you've spent together in years or ever. You're both trying to work from home, manage the household, and care for your—getting quite stir-crazy—kids. Lorem ipsum dolor sit amet, consectetur...",
      image: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=600&h=300&fit=crop",
      comments: "No Comments",
      hasVideo: false
    },
    {
      id: 6,
      title: "Three secrets to Beat Performance Anxiety",
      author: "John Attack",
      date: "November 28, 2020",
      categories: ["Bridge Construction", "Electronic Materials"],
      excerpt: "Anyone who's ever been in a similar situation—and that's all of us—can empathize. Even with tasks we've done a million times—like speaking a second language, walking up stairs, or navigating the grocery store—under pressure or observation, we get psyched out. We lose the most basic skills. Lorem ipsum dolor sit...",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
      comments: "No Comments",
      hasVideo: false
    }
  ];

  const categories = [
    "Bridge Construction",
    "Electronic Materials", 
    "Industrial Construction",
    "Mechanical Engineering",
    "Petroleum And Gas",
    "Power Systems"
  ];

  const postsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

  const handleSearch = () => {
    console.log('Searching for:', searchKeyword);
  };

  const handleCategoryClick = (category) => {
    console.log('Filter by category:', category);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Scrollable Left Content */}
          <div className="flex-1 min-w-0">
            <div className="space-y-8">
              {currentPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  {/* Post Image */}
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover"
                    />
                    {post.hasVideo && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-orange-500 cursor-pointer transition-colors">
                      {post.title}
                    </h2>

                    {/* Post Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <span>By</span>
                        <span className="text-orange-500 font-medium">{post.author}</span>
                      </div>
                      <div>{post.date}</div>
                      <div className="flex gap-2">
                        {post.categories.map((category, index) => (
                          <span key={index} className="hover:text-orange-500 cursor-pointer">
                            {category}
                            {index < post.categories.length - 1 && ', '}
                          </span>
                        ))}
                      </div>
                      <div>{post.comments}</div>
                    </div>

                    {/* Post Excerpt */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    {/* Continue Reading Button */}
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-medium transition-colors">
                      CONTINUE READING ›
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-12 h-12 rounded font-medium transition-colors ${
                      currentPage === page
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-400 text-white hover:bg-gray-500'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                {totalPages > 2 && (
                  <button className="w-12 h-12 rounded bg-gray-400 text-white hover:bg-gray-500 transition-colors">
                    ››
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Static Right Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="sticky top-8 space-y-8">
              {/* Search Posts Section */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-gray-600 px-4 py-4">
                  <h3 className="text-white font-semibold text-lg">Search Posts</h3>
                </div>
                <div className="p-4">
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Search Keywords"
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <button
                      onClick={handleSearch}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-md transition-colors"
                    >
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Categories Section */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-gray-600 mt-[-8px] px-6 py-4">
                  <h3 className="text-white font-semibold text-lg">Categories</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => handleCategoryClick(category)}
                      className="w-full px-6 py-4 text-left text-gray-600 hover:bg-gray-50 hover:text-orange-500 transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags Section */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-gray-600 mt-[-8px] px-6 py-4">
                  <h3 className="text-white font-semibold text-lg">Tags</h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {['Construction', 'Engineering', 'Materials', 'Technology', 'Innovation', 'Industrial'].map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-orange-100 hover:text-orange-600 cursor-pointer transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}