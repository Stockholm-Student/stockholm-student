// components/Navbar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logost.png';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto relative">
        {/* Liens de gauche */}
        <div className="flex gap-8 text-white mt-6">
          <Link 
            to="/events" 
            className={`hover:text-gray-300 transition-colors text-lg ${
              location.pathname === '/events' ? 'text-white' : 'text-gray-300'
            }`}
          >
            Events
          </Link>
          <Link 
            to="/community" 
            className={`hover:text-gray-300 transition-colors text-lg ${
              location.pathname === '/community' ? 'text-white' : 'text-gray-300'
            }`}
          >
            Community
          </Link>
        </div>

        {/* Logo avec taille conditionnelle */}
        <Link 
          to="/" 
          className={`absolute left-1/2 transform -translate-x-1/2 ${
            isHomePage ? '-translate-y-1/2 top-full' : 'top-1/2 -translate-y-1/2'
          }`}
        >
          <img 
            src={logo} 
            alt="STST Logo" 
            className={`${
              isHomePage ? 'h-40' : 'h-16'
            } w-auto hover:scale-105 transition-transform duration-300`}
          />
        </Link>

        {/* Liens de droite */}
        <div className="flex gap-8 text-white mt-6">
          <Link 
            to="/wiki" 
            className={`hover:text-gray-300 transition-colors text-lg ${
              location.pathname === '/wiki' ? 'text-white' : 'text-gray-300'
            }`}
          >
            Wiki
          </Link>
          <Link 
            to="/more" 
            className={`hover:text-gray-300 transition-colors text-lg ${
              location.pathname === '/more' ? 'text-white' : 'text-gray-300'
            }`}
          >
            More
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;