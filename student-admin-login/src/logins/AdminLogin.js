import React, { useState } from 'react';
import axios from 'axios';
import './css/AdminLogin.css';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', {
        email,
        password
      });

      console.log('Login Success:', response.data);
      // save token in localStorage
      localStorage.setItem('adminToken', response.data.token);

      // redirect to admin dashboard
      window.location.href = '/admin-dashboard';
    } catch (error) {
      console.error('Login Error:', error.response?.data || error.message);
      alert('Login failed! Check email and password.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button style={{ marginTop: '10px' }} type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
