import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../src/assets/Image/logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // scroll down
        setIsVisible(false);
      } else {
        // scroll up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 inset-x-0 z-30 bg-transparent p-4 max-w-screen-xl mx-auto flex items-center justify-between transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-full mr-4 object-cover" />
      </div>
      <button className="md:hidden block" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-16 left-0 w-full bg-gray-800 md:relative md:top-0 md:flex md:w-auto md:bg-transparent transition-all ease-out duration-300`}>
        <ul className="md:flex md:items-center md:space-x-6 text-base font-bold w-full md:w-auto">
          <li className="p-4 md:p-0 border-b md:border-none">
            <NavLink to="/home" className="text-blue-500 hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li className="p-4 md:p-0 border-b md:border-none">
            <NavLink to="/tour" className="text-blue-500 hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>
              Tour
            </NavLink>
          </li>
          <li className="p-4 md:p-0">
            <NavLink to="/about-us" className="text-blue-500 hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
