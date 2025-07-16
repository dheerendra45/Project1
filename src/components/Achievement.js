import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import largeCard from '../assets/largeCard.png';
import smallCard from '../assets/smallCard.png';

const AchievementsSection = () => {
    return (
        <div className="bg-white px-4 py-16">
            {/* Heading */}
            <h2 className="text-2xl font-semibold text-center mb-12">
                Accreditations <span className="text-orange-500">&</span> Achievements

            </h2>

            {/* Layout */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
                {/* Left Text Block */}
                <div className="lg:w-[40%] text-center lg:text-left">
                    <p className="text-orange-500 text-sm leading-relaxed max-w-md mx-auto lg:mx-0 text-center mt-[9%] ml-[10%]">
                        Recognized by industry leaders, endorsed by global platforms — our journey is marked
                        by trust, quality, and performance. At Shyam Metallics, excellence isn't just a pursuit
                        — it's a consistent outcome. Our dedication to sustainable growth, employee well-being,
                        innovation, and industry leadership has been recognized by premier national and
                        international forums. Each award, certification, and endorsement stands as a testament
                        to the trust we’ve built and the impact we've created.
                    </p>

                    {/* Arrows */}

                    
                    <div className="flex items-center justify-center lg:justify-start mt-8 gap-2 ml-[28%]">
                        {/* <ChevronLeft className="text-black w-4 h-4" /> */}
                        <svg width="26" height="23" viewBox="0 0 24 24" fill="none" >
                            <path
                                d="M18 12H6M6 12L12 6M6 12L12 18"
                                stroke="#333"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <div className="w-[87px] h-[3px] bg-orange-500" />
                        <ChevronRight className="text-orange-500 w-10 h-5 -ml-7" />
                    </div>
                  
                </div>

                {/* Right Card Block */}
                <div className="flex flex-col items-start lg:w-[60%]">
                    <div className="flex items-center justify-center gap-6">
                        {/* Large Card (No wrapper styles to avoid double card look) */}
                        <img
                            src={largeCard}
                            alt="Main Achievement"
                            className="w-[230px] h-auto"
                        />

                        {/* Small Cards (beside large card) */}
                        <div className="flex items-center gap-2">
                            {[1, 2, 3].map((i) => (
                                <img
                                    key={i}
                                    src={smallCard}
                                    alt={`Achievement ${i}`}
                                    className="w-[120px] h-auto"
                                />
                            ))}
                        </div>
                    </div>

                    {/* View All */}
                    <div className="w-[125px] h-[48px]">
                        <button className="w-full h-full mt-8 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
                            View All
                        </button>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default AchievementsSection;
