// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import Awards from './Pages/Awards';
import Layout from './components/Layout';
import LeadershipPage from './Pages/leadership';
import Products from './Pages/products';
import Business from './Pages/Business';
import Sustainability from './Pages/Sustainability';
import OverviewPage from './Pages/overview'; // Fixed capitalization
import P1 from './Pages/p1';
import ContactPage from './Pages/ContactPage';
import LocationPage from './Pages/location';
import AwardsAndAchievements from './Pages/awards&achievements'; // Keep this line ✅

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="achievement" element={<Awards />} />
          <Route path="LeadershipPage" element={<LeadershipPage />} /> {/* Fixed path name */}
          <Route path="overview" element={<OverviewPage />} /> {/* Fixed component name */}
        </Route>
        
        <Route path="products" element={<Products />} />
        <Route path="business" element={<Business />} />
        <Route path="sustainability" element={<Sustainability />} />
        <Route path="p1" element={<P1 />} />
        <Route path="ContactPage" element={<ContactPage />} />
        <Route path="LocationPage" element={<LocationPage />} />
        <Route path="awards&achievements" element={<AwardsAndAchievements />} /> {/* Add this route ✅ */}
      </Routes>
    </div>
  );
}

export default App;
