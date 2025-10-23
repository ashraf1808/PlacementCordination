import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <Link to="/">Student Login</Link> |{' '}
      <Link to="/admin">Admin Login</Link> |{' '}
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;
