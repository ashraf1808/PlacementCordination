import React, { useState } from 'react';
import './StudentLogin.css';
function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Admin Login\nUsername: ${username}\nPassword: ${password}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
