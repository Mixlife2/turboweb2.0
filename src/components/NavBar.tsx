import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [user, setUser] = useState(/* Obtener información del usuario de tu sistema de autenticación */);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    setIsAuthenticated(user !== null);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [user, isAuthenticated]);

  const navClass = isScrolled ? 'shadow-md' : '';
  const visibilityClass = isVisible && isAuthenticated ? 'opacity-100 transition-opacity duration-500' : 'opacity-0';

  return (
    <div className={`fixed inset-x-0 bottom-0 mb-4 z-50 ${navClass} ${visibilityClass}`}>
      <div className="flex justify-center">
        <div className={`flex items-center justify-between px-4 py-2 bg-gray-950 rounded-full mx-auto w-max transition-bg`}>
          <Link to="/HPfreelancer" className="text-gray-400 hover:text-white cursor-pointer hover-item">
            Freelancer
          </Link>
          <Link to="/HPbussiness" className="text-gray-400 hover:text-white cursor-pointer hover-item">
            Business
          </Link>
          <div>
            <Link to="/login" className="text-gray-400 hover:text-white border border-gray-400 px-3 py-1 rounded hover-item">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
