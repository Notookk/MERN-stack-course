import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import icon from '../assets/icon.png';
import './Header.css';

function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <header>
      <nav className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="logo" style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <img src={icon} alt="Recipify Logo" className="img w-10 h-10" />
              <div>
                <h1 className="text-white text-2xl font-bold">Recipify</h1>
                <span className="your">Your Recipe Companion</span>
              </div>
            </Link>
          </div>
          <input
            type="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search for recipes..."
            className="p-2 rounded-md w-full max-w-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Search for recipes"
          />
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">Home</Link>
            </li>
            <li>
              <Link to="/trending" className="text-gray-300 hover:text-white transition-colors duration-200">Trending</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header