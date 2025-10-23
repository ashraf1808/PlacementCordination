import React, { useState } from 'react';
//import './all.css';
import './css/StudentLogin.css';
function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Student Login\nEmail: ${email}\nPassword: ${password}`);
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
