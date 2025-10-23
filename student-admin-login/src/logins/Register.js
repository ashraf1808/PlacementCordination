import React, { useState } from 'react';
import axios from 'axios';
import './css/Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // student or admin

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, password };

    try {
      // ✅ Use 'role' to determine endpoint
      const endpoint =
        role === "student"
          ? "http://localhost:5000/api/student/register"
          : "http://localhost:5000/api/admin/register";

      const response = await axios.post(endpoint, formData);

      console.log("Registration Success:", response.data);
      alert("Registration successful! Please login.");

      // redirect to login page
      window.location.href = "/";

    } catch (error) {
      console.error('Registration Error:', error.response?.data || error.message);
      alert(error.response?.data?.error || 'Registration failed! Check console for details.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            placeholder="Full Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
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
        <div style={{ marginTop: '10px' }}>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button style={{ marginTop: '10px' }} type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
