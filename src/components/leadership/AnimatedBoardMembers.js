import React, { useState, useEffect } from 'react';

const AnimatedBoardMembers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [headerTextIndex, setHeaderTextIndex] = useState(0);

  const fullText = "We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies. Our portfolio includes do";
  const headerText = "Lorem Ipsum Dollar";
  const subHeaderText = "Lorem Ipsum";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible && headerTextIndex < headerText.length) {
      const timer = setTimeout(() => {
        setHeaderTextIndex(headerTextIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, headerTextIndex, headerText.length]);

  useEffect(() => {
    if (isVisible && headerTextIndex >= headerText.length && textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setTextIndex(textIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isVisible, textIndex, fullText.length, headerTextIndex, headerText.length]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  // Sample team member images with placeholders
  const leftMembers = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face"
  ];

  const rightMembers = [
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face"
  ];

  const topMembers = [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=200&h=200&fit=crop&crop=face"
  ];

  return (
    <div className="bg-gray-50 py-5 overflow-hidden relative" style={{ height: '735px', margin: '0 auto'}}>
      <div 
        className="relative h-full"
        style={{top: '20px', left: '20px', width: '1400px', height: '695px'}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Side Images Container - Added more left margin */}
        <div 
          className="absolute z-20"
          style={{
            width: '419px',
            height: '395px',
            top: '50px',
            left: '40px'
          }}
        >
          {/* Image 1 */}
          <div
            className={`absolute overflow-hidden shadow-lg transition-all duration-700 ease-out ${
              isHovered 
                ? 'translate-x-0 opacity-100 scale-100' 
                : '-translate-x-24 opacity-0 scale-90'
            }`}
            style={{
              width: '132px',
              height: '161px',
              top: '58px',
              left: '0px',
              borderRadius: '10px',
              transitionDelay: '0ms'
            }}
          >
            <img 
              src={leftMembers[0]}
              alt="Team member 1"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Image 2 */}
          <div
            className={`absolute overflow-hidden shadow-lg transition-all duration-700 ease-out ${
              isHovered 
                ? 'translate-x-0 opacity-100 scale-100' 
                : '-translate-x-24 opacity-0 scale-90'
            }`}
            style={{
              width: '132px',
              height: '161px',
              top: '233px',
              left: '0px',
              borderRadius: '10px',
              transitionDelay: '100ms'
            }}
          >
            <img 
              src={leftMembers[1]}
              alt="Team member 2"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Image 3 */}
          <div
            className={`absolute overflow-hidden shadow-lg transition-all duration-700 ease-out ${
              isHovered 
                ? 'translate-x-0 opacity-100 scale-100' 
                : '-translate-x-24 opacity-0 scale-90'
            }`}
            style={{
              width: '132px',
              height: '161px',
              top: '0px',
              left: '143px',
              borderRadius: '10px',
              transitionDelay: '200ms'
            }}
          >
            <img 
              src={leftMembers[2]}
              alt="Team member 3"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Image 4 */}
          <div
            className={`absolute overflow-hidden shadow-lg transition-all duration-700 ease-out ${
              isHovered 
                ? 'translate-x-0 opacity-100 scale-100' 
                : '-translate-x-24 opacity-0 scale-90'
            }`}
            style={{
              width: '132px',
              height: '161px',
              top: '171px',
              left: '143px',
              borderRadius: '10px',
              transitionDelay: '300ms'
            }}
          >
            <img 
              src={leftMembers[3]}
              alt="Team member 4"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Image 5 */}
          <div
            className={`absolute overflow-hidden shadow-lg transition-all duration-700 ease-out ${
              isHovered 
                ? 'translate-x-0 opacity-100 scale-100' 
                : '-translate-x-24 opacity-0 scale-90'
            }`}
            style={{
              width: '132px',
              height: '161px',
              top: '73px',
              left: '287px',
              borderRadius: '10px',
              transitionDelay: '400ms'
            }}
          >
            <img 
              src={leftMembers[4]}
              alt="Team member 5"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Center Images Container - Adjusted position */}
        <div 
          className="absolute z-20"
          style={{
            width: '418px',
            height: '204px',
            top: '50px',
            left: '480px'
          }}
        >
          {/* Center Image 1 */}
          <div
            className={`absolute overflow-hidden shadow-lg transition-all duration-700 ease-out ${
              isHovered 
                ? 'translate-y-0 opacity-100 scale-100' 
                : '-translate-y-24 opacity-0 scale-90'
            }`}
            style={{
              width: '132px',
              height: '161px',
              top: '5px',
              left: '0px',
              borderRadius: '10px',
              transitionDelay: '500ms'
            }}
          >
            <img 
              src={topMembers[0]}
              alt="Team member center 1"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Center Image 2 */}
          <div
            className={`absolute overflow-hidden shadow-lg transition-all duration-700 ease-out ${
              isHovered 
                ? 'translate-y-0 opacity-100 scale-100' 
                : '-translate-y-24 opacity-0 scale-90'
            }`}
            style={{
              width: '132px',
              height: '161px',
              top: '42px',
              left: '142px',
              borderRadius: '10px',
              transitionDelay: '600ms'
            }}
          >
            <img 
              src={topMembers[1]}
              alt="Team member center 2"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Center Image 3 */}
          <div
            className={`absolute overflow-hidden shadow-lg transition-all duration-700 ease-out ${
              isHovered 
                ? 'translate-y-0 opacity-100 scale-100' 
                : '-translate-y-24 opacity-0 scale-90'
            }`}
            style={{
              width: '132px',
              height: '161px',
              top: '0px',
              left: '285px',
              borderRadius: '10px',
              transitionDelay: '700ms'
            }}
          >
            <img 
              src={topMembers[2]}
              alt="Team member center 3"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Right Side Images Container - Added right margin */}
        <div 
          className="absolute z-20"
          style={{
            width: '419px',
            height: '396px',
            top: '50px',
            left: '900px'
          }}
        >
          {/* Right Image 1 */}
          <div
            className={`absolute overflow-hidden shadow-lg transition-all duration-700 ease-out ${
              isHovered 
                ? 'translate-x-0 opacity-100 scale-100' 
                : 'translate-x-24 opacity-0 scale-90'
            }`}
            style={{
              width: '132px',
              height: '161px',
              top: '73px',
              left: '0px',
              borderRadius: '10px',
              transitionDelay: '800ms'
            }}
          >
            <img 
              src={rightMembers[0]}
              alt="Team member right 1"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Right Image 2 */}
          <div
            className={`absolute overflow-hidden shadow-lg transition-all duration-700 ease-out ${
              isHovered 
                ? 'translate-x-0 opacity-100 scale-100' 
                : 'translate-x-24 opacity-0 scale-90'
            }`}
            style={{
              width: '132px',
              height: '161px',
              top: '0px',
              left: '144px',
              borderRadius: '10px',
              transitionDelay: '900ms'
            }}
          >
            <img 
              src={rightMembers[1]}
              alt="Team member right 2"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Right Image 3 */}
          <div
            className={`absolute overflow-hidden shadow-lg transition-all duration-700 ease-out ${
              isHovered 
                ? 'translate-x-0 opacity-100 scale-100' 
                : 'translate-x-24 opacity-0 scale-90'
            }`}
            style={{
              width: '132px',
              height: '161px',
              top: '192px',
              left: '144px',
              borderRadius: '10px',
              transitionDelay: '1000ms'
            }}
          >
            <img 
              src={rightMembers[2]}
              alt="Team member right 3"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Right Image 4 */}
          <div
            className={`absolute overflow-hidden shadow-lg transition-all duration-700 ease-out ${
              isHovered 
                ? 'translate-x-0 opacity-100 scale-100' 
                : 'translate-x-24 opacity-0 scale-90'
            }`}
            style={{
              width: '132px',
              height: '161px',
              top: '59px',
              left: '287px',
              borderRadius: '10px',
              transitionDelay: '1100ms'
            }}
          >
            <img 
              src={rightMembers[3]}
              alt="Team member right 4"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Right Image 5 */}
          <div
            className={`absolute overflow-hidden shadow-lg transition-all duration-700 ease-out ${
              isHovered 
                ? 'translate-x-0 opacity-100 scale-100' 
                : 'translate-x-24 opacity-0 scale-90'
            }`}
            style={{
              width: '132px',
              height: '161px',
              top: '235px',
              left: '287px',
              borderRadius: '10px',
              transitionDelay: '1200ms'
            }}
          >
            <img 
              src={rightMembers[4]}
              alt="Team member right 5"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Center Content */}
       {/* Center Content - Moved down to avoid overlap */}
        <div className="flex items-end justify-center min-h-screen pb-[75px]">
          <div className="text-center space-y-8 relative z-10 max-w-4xl">
            {/* Animated Header */}
            <div className="space-y-4">
              <p className={`text-orange-500 font-semibold tracking-wide text-sm lg:text-base transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                MEET OUR BOARD MEMBERS
              </p>
              
              <h2 className={`text-4xl lg:text-6xl xl:text-7xl font-bold transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <span className="text-gray-900">{headerText.substring(0, headerTextIndex)}</span>
                <br />
                <span className="text-gray-400">{headerTextIndex >= headerText.length ? subHeaderText : ''}</span>
              </h2>
            </div>

            {/* Description without animation */}
            <div className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-base lg:text-lg">
              <span>{fullText.substring(0, textIndex)}</span>
              <span className={`${showCursor && textIndex < fullText.length ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
            </div>

            {/* Hover instruction */}
            <p className="text-sm text-gray-400 mt-8">
              Hover to see our team members
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBoardMembers;