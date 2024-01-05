import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Nick's Newsstand - Stocklist</div>
      <div className="nav-links">
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/why">Why</Link>
      </div>
    </nav>
  );
}

export default Navbar;
