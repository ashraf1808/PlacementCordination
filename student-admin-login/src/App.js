import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import StudentLogin from './logins/StudentLogin.js';
import AdminLogin from './logins/AdminLogin.js';
import Register from './logins/Register.js';
import Navbar from './components/Navbar.js';

import StudentDashboard from './dashboard/StudentDashboard';
import AdminDashboard from './dashboard/AdminDashboard';

function AppWrapper() {
  const location = useLocation();
  
  // Show Navbar only on login/register pages
  const showNavbar = location.pathname === '/' || location.pathname === '/admin' || location.pathname === '/register';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<StudentLogin />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
