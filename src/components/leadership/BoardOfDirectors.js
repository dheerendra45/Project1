import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

import member1 from '../../assets/leadership/member1.jpg';
import member2 from '../../assets/leadership/member2.jpg';
import member3 from '../../assets/leadership/member3.jpg';
import member4 from '../../assets/leadership/member4.jpg';
import cardBg from '../../assets/leadership/cardbg.jpg';

const BoardOfDirectors = () => {
  const [selectedMember, setSelectedMember] = useState(0);
  const [hoveredMember, setHoveredMember] = useState(null);
  
  const boardMembers = [
    {
      name: "Jackson Helmon",
      position: "Managing Director",
      image: member1,
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
      name: "Sarah Johnson",
      position: "Chief Executive Officer", 
      image: member2,
      description: "Sarah brings over 15 years of experience in industrial management and strategic planning. Her leadership has been instrumental in driving company growth and operational excellence."
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      image: member3,
      description: "Michael leads our technology initiatives and innovation strategies. His expertise in industrial automation and digital transformation drives our competitive advantage."
    },
    {
      name: "Emma Wilson",
      position: "Chief Financial Officer",
      image: member4,
      description: "Emma oversees all financial operations and strategic planning. Her analytical expertise and financial acumen ensure sustainable growth and profitability."
    }
  ];

  const handleMemberClick = (index) => {
    if (hoveredMember === null) {
      setSelectedMember(index);
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredMember(index);
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
  };

  const displayedMember = hoveredMember !== null ? hoveredMember : selectedMember;

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-orange-500 mb-8">
            MEET OUR BOARD OF DIRECTORS
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Member Details */}
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-orange-500">
              {boardMembers[displayedMember].name.toUpperCase()}
            </h3>
            <p className="text-xl text-gray-600 font-semibold">
              {boardMembers[displayedMember].position.toUpperCase()}
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              {boardMembers[displayedMember].description}
            </p>
          </div>

          {/* Right - Member Image */}
          <div className="flex justify-center">
            <img 
              src={boardMembers[displayedMember].image}
              alt={boardMembers[displayedMember].name}
              className="w-96 h-[500px] object-cover object-top rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Member Selection Tabs */}
        <div className="h-[240px] grid grid-cols-2 lg:grid-cols-4 mt-2">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              onClick={() => handleMemberClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="cursor-pointer overflow-hidden transition-all duration-500 relative"
            >
              {/* Background Logic */}
              {(hoveredMember === index || (hoveredMember === null && selectedMember === index)) ? (
                <>
                  <img 
                    src={cardBg}
                    alt="Card Background"
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                  />
                  <div 
                    className="absolute inset-0 transition-all duration-500"
                    style={{
                      backgroundColor: '#6C3714',
                      opacity: 0.8
                    }}
                  ></div>
                </>
              ) : (
                <div className="absolute inset-0 w-full h-full bg-gray-600 transition-all duration-500"></div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="relative h-full flex items-center justify-center p-3 text-white">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden border-2 border-orange-500">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{member.name}</h4>
                      <p className="text-xs text-gray-300">{member.position}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirectors;