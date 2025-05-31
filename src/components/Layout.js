// components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import MainNavbar from './MainNavbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header>
        <Navbar />
        <MainNavbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Layout;
