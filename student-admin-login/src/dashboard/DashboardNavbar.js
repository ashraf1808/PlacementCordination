import React from 'react';
import './css/DashboardNavbar.css';

function DashboardNavbar({ onLogout }) {
  return (
    <nav className="dashboard-nav">
      <div className="dashboard-title">Placement Coordination</div>
      <button className="logout-button" onClick={onLogout}>Logout</button>
    </nav>
  );
}

export default DashboardNavbar;
