// App.js
import React from 'react';
import Navbar from './components/Navbar';
import MainNavbar from './components/MainNavbar'
import HomePage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainNavbar />
      <HomePage />
    </div>
  );
}

export default App;
