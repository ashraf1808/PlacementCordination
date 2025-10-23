import React from 'react';
import './css/DashboardNavbar.css';

function DashboardNavbar({ links }) {
  return (
    <nav className="dashboard-nav">
      {links.map((link) => (
        <a key={link.label} href={link.path}>{link.label}</a>
      ))}
    </nav>
  );
}

export default DashboardNavbar;
