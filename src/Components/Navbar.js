import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <div className="navbar">
        <h1 className="navTitle">Bookstore CMS</h1>
        <nav className="navLinks">
          <Link className="navItem" to="/">BOOKS</Link>
          {' '}
          |
          {' '}
          <Link className="navItem" to="/categories">CATEGORIES</Link>
        </nav>
      </div>
      <div className="profile">
        <span>profile pic</span>
      </div>
    </header>
  );
}
