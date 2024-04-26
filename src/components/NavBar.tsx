import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="fixed inset-x-0 top-0 bg-gray-950 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-white font-bold text-lg">
            My App
          </Link>
        </div>
        <div>
          <button
            onClick={handleLogin}
            className="text-gray-400 hover:text-white border border-gray-400 px-3 py-1 rounded hover:bg-gray-800 transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
