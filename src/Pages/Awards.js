import React from 'react';
import AwardsHero from '../components/awards/Hero';
import AwardsEvents from '../components/awards/AwardsEvents';
import AwardsStories from '../components/awards/AwardsStories';
import AwardsNews from '../components/awards/AwardsNews';
import Navbar from '../components/Navbar';
import MainNavbar from '../components/MainNavbar'
import Footer from "../components/Footer";

const Awards = () => {
  return (
    <div className="min-h-screen">
       
      <AwardsHero />
      <AwardsEvents />
 
      <AwardsStories />
      <AwardsNews />
   
    </div>
  );
};

export default Awards;