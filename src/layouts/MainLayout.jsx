import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import '../styles/MainLayout.css';

const MainLayout = () => {
  return (
    <div className="layout">
      <header className="header">
        <Navbar />
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>&copy; 2024 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout; 