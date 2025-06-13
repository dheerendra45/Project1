import React from "react";
import Hero from "../components/Knowledgehub/Hero";

import Footer from "../components/Footer";
import SheetMetalGuide from "../components/Knowledgehub/SheetMetalGuide";
import SheetMetalFabrication from "../components/Knowledgehub/SheetMetalFabrication";
import PrecisionSheetMetal from "../components/Knowledgehub/PrecisionSheetMetal";
import SheetMetalFabrication1 from "../components/Knowledgehub/SheetMetalFabrication1";
import SheetMetalGuide1 from "../components/Knowledgehub/SheetMetalGuide1";
import SheetMetalGuide2 from "../components/Knowledgehub/SheetMetalGuide2";
import SheetMetalGuide3 from "../components/Knowledgehub/SheetMetalGuide3";
import SheetMetalJoining from "../components/Knowledgehub/SheetMetalJoining";
import SheetMetalGuide4 from "../components/Knowledgehub/part4";
import ResourcesComponent from "../components/Knowledgehub/part6";
const Knowledgehub = () => {
  return (
    <div>
        
        <Hero />
        <SheetMetalGuide />
        <SheetMetalFabrication />
        <PrecisionSheetMetal />
        <SheetMetalFabrication1 />
        
        <SheetMetalGuide1 />
        <SheetMetalGuide2 />
        <SheetMetalGuide3 />
        <SheetMetalGuide4 />
        <SheetMetalJoining />
        <ResourcesComponent />
       <Footer /> 
    </div>
  );
};

export default Knowledgehub;
