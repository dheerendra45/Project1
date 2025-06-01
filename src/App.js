// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import Awards from './Pages/Awards';
import Layout from './components/Layout';
import LeadershipPage from './Pages/leadership';
import Products from './Pages/carbonsteel';
import Business from './Pages/Business';
import Sustainability from './Pages/Environment_Compliance';
import OverviewPage from './Pages/overview'; // Fixed capitalization
import P1 from './Pages/Esg_profile';
import ContactPage from './Pages/ContactPage'
import LocationPage from './Pages/location'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="achievement" element={<Awards />} />
          <Route path="leadership" element={<LeadershipPage />} /> {/* Fixed path name */}
          <Route path="overview" element={<OverviewPage />} /> {/* Fixed component name */}
        </Route>
        <Route path="carbon_steel" element={<Products />} /> {/* Moved inside Layout */}
          <Route path="business" element={<Business />} /> {/* Moved inside Layout */}
          <Route path="environment_compliance" element={<Sustainability />} /> {/* Fixed path and moved inside Layout */}
          <Route path="esg_profile" element={<P1 />} />
          <Route path="ContactPage" element={<ContactPage />} />
          <Route path="LocationPage" element={<LocationPage />} />
          

      </Routes>
    </div>
  );
}

export default App;