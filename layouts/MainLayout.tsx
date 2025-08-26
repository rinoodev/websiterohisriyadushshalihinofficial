
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar.tsx';
import Footer from '../components/layout/Footer.tsx';
import ScrollToTop from '../components/shared/ScrollToTop.tsx';
import ScrollToTopButton from '../components/shared/ScrollToTopButton.tsx';

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;