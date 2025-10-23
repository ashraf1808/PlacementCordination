import React from 'react';
import DashboardNavbar from './DashboardNavbar';
import './css/Dashboard.css';

function AdminDashboard() {
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('studentToken');
    window.location.href = '/';
  };

  return (
    <div>
      <DashboardNavbar onLogout={handleLogout} />
      <div className="dashboard-container">
        <h2>Welcome, Admin!</h2>
        <section>
          <h3>Applications Received</h3>
          <p>Total applications: 120</p>
        </section>
        <section>
          <h3>Manage Companies</h3>
          <p>Companies in pipeline: 5</p>
        </section>
        <section>
          <h3>Reports</h3>
          <p>Monthly analytics and insights.</p>
        </section>
      </div>
    </div>
  );
}

export default AdminDashboard;
