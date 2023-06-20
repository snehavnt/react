import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(username);
    console.log(password);
    
    if (username == 'sneha' && password == '123456') {
      alert('Valid Credentials');
    }
    else {
      alert('InValid Credentials');
    }

    // Perform login logic here, e.g. send username and password to an API

    // Clear form fields
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.loginForm}>
      <div>
        <label htmlFor="username" style={styles.label}>Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.inputField}
        />
      </div>
      <div>
        <label htmlFor="password" style={styles.label}>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.inputField}
        />
      </div>
      <button type="submit" style={styles.submitButton}>Login</button>
    </form>
  );
};

const styles = {
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '0 auto',
  },
  label: {
    marginBottom: '10px',
  },
  inputField: {
    marginBottom: '10px',
    padding: '5px',
  },
  submitButton: {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default LoginForm;
