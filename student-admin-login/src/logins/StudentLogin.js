import React, { useState } from 'react';
import axios from 'axios';
import './css/StudentLogin.css';

function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login/student', {
        email,
        password
      });

      console.log('Login Success:', response.data);
      // save token in localStorage
      localStorage.setItem('studentToken', response.data.token);

      // redirect to student dashboard
      window.location.href = '/student-dashboard';
    } catch (error) {
      console.error('Login Error:', error.response?.data || error.message);
      alert('Login failed! Check email and password.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Student Login</h2>
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

export default StudentLogin;
