// Pages/LeadershipPage.js
import React from 'react';
import Herosecttion from "../components/leadership/HeroSection";
import BoardOfDirectors from "../components/leadership/BoardOfDirectors";
import AnimatedBoardMembers from "../components/leadership/AnimatedBoardMembers";
import BoardCommitteeCarousel from "../components/leadership/BoardCommitteeCarousel";

const LeadershipPage = () => {
  return (
    <div>
      <Herosecttion />
      <BoardOfDirectors />
      <AnimatedBoardMembers />
      <BoardCommitteeCarousel />
    </div>
  );
};

export default LeadershipPage;
