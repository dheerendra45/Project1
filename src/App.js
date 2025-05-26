// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import Awards from './Pages/Awards';
import Layout from './components/Layout';
import LeadershipPage from './Pages/leadership'
import Products from './Pages/products';
import Business from './Pages/Business';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="achievement" element={<Awards />} />
          
          <Route path="LeadershipPage" element={<LeadershipPage />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="business" element={<Business />} />
      </Routes>
    </div>
  );
}

export default App;
