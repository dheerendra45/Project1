// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import Awards from './Pages/Awards';
import Layout from './components/Layout';
import LeadershipPage from './Pages/leadership';
import Products from './Pages/carbonsteel';
import Business from './Pages/Business';
import Sustainability from './Pages/CSR';
import OverviewPage from './Pages/overview';
import P1 from './Pages/Esg_profile';
import ContactPage from './Pages/ContactPage';
import LocationPage from './Pages/location';
import Faq from './Pages/faq';
import Testimonial from './Pages/Testimonial';
import Knowledgehub from './Pages/knowledgehub';

import Companyoverview from './Pages/Companyoverview';
import Manufacturing from './Pages/Manufacturing';
import Lifeshyam from './Pages/Lifeshyam';
import Currentopening from './Pages/Currentopening';
import Jobopportunity from './Pages/Jobopportunity';
import Environmentcompliance from'./Pages/Environmentcompliance';
import Blogs from './Pages/blogs';
import AwardsAndAchievements from './Pages/awards&achievements';

import Seltiger from './Pages/Seltiger';
import SpongeIron from './Pages/Spongeiron';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="newsandevents" element={<Awards />} />
          <Route path="awardsAndachievements" element={<AwardsAndAchievements />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="business" element={<Business />} />
          <Route path="pellet" element={<Products />} />
          <Route path="overview" element={<OverviewPage />} />
          <Route path="companyoverview" element={<Companyoverview />} />
          <Route path="ContactPage" element={<ContactPage />} />
          <Route path="csr" element={<Sustainability />} />
          
 <Route path="currentopening" element={<Currentopening />} /> 
 <Route path="environmentcompliance" element={<Environmentcompliance />} />
 <Route path="esg_profile" element={<P1 />} />
  <Route path="faq-Page" element={<Faq />} />

  <Route path="jobopportunity" element={<Jobopportunity />} />
   <Route path="leadership" element={<LeadershipPage />} />
  <Route path="LocationPage" element={<LocationPage />} />
   <Route path="testimonials" element={<Testimonial />} />
 <Route path="knowledgehub" element={<Knowledgehub />} />

   <Route path="manufacturing" element={<Manufacturing />} />
  <Route path="lifeshyam" element={<Lifeshyam />} />
  <Route path="seltiger" element={<Seltiger />} />
  <Route path="sponge_iron" element={<SpongeIron />} />

   
   
  </Route>



   <Route index element={<HomePage />} />
   
 
  
    
    
</Routes>

    </div>
  );
}

export default App;
