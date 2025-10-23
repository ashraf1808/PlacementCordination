import React from 'react';
import DashboardNavbar from './DashboardNavbar';
import './css/Dashboard.css';

function StudentDashboard() {
  const links = [
    { label: 'Upcoming Companies', path: '#' },
    { label: 'Skill Gap', path: '#' },
    { label: 'Resume Analyse', path: '#' },
  ];

  return (
    <div>
      <DashboardNavbar links={links} />
      <div className="dashboard-container">
        <h2>Welcome, Student!</h2>
        <section>
          <h3>Upcoming Companies</h3>
          <ul>
            <li>Company A - 25th Oct</li>
            <li>Company B - 28th Oct</li>
            <li>Company C - 1st Nov</li>
          </ul>
        </section>
        <section>
          <h3>Skill Gap Analysis</h3>
          <p>You need to improve: React, Python, SQL</p>
        </section>
        <section>
          <h3>Resume Analysis</h3>
          <p>Your resume score: 75%</p>
        </section>
      </div>
    </div>
  );
}

export default StudentDashboard;
