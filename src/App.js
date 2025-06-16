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
import OverviewPage from './Pages/overview'; // Fixed capitalization
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


function App() {
  return (
    <div className="App">
      <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="leadership" element={<LeadershipPage />} />
    <Route path="overview" element={<OverviewPage />} />
     <Route path="achievement" element={<Awards />} />
  </Route>

  <Route path="carbon_steel" element={<Products />} />
  <Route path="business" element={<Business />} />
  <Route path="csr" element={<Sustainability />} />
  <Route path="esg_profile" element={<P1 />} />
  <Route path="ContactPage" element={<ContactPage />} />
  <Route path="LocationPage" element={<LocationPage />} />
  <Route path="faq-Page" element={<Faq />} />
   <Route path="testimonials" element={<Testimonial />} />
 <Route path="knowledgehub" element={<Knowledgehub />} />
 <Route path="blogs" element={<Blogs />} />

 

    <Route path="manufacturing" element={<Manufacturing />} />
    <Route path="lifeshyam" element={<Lifeshyam />} />
    <Route path="currentopening" element={<Currentopening />} />
    <Route path="companyoverview" element={<Companyoverview />} />
    <Route path="jobopportunity" element={<Jobopportunity />} />
    <Route path="environmentcompliance" element={<Environmentcompliance />} />
</Routes>

    </div>
  );
}

export default App;
