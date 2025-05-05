import React, { useState } from 'react';
import axios from "axios";
import Input from "./Input.jsx";
import '../styles/main.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ Phone: "", Password: "" });

  const handleData = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/signIn", formData);

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        alert("Login successful!");
        navigate('/user-account');
      } else {
        alert("Login failed: No token received.");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert("Login failed! Please check your credentials.");
    }
  };

  return (
    <div className='formbg'>
      <div className='login-form'>
        <form onSubmit={handleLogin}>
          <h2>Sign In</h2>

          <label>Telephone Number</label>
          <Input
            type="text"
            name="Phone"
            placeholder="Telephone Number"
            value={formData.Phone}
            onChange={handleData}
          />

          <label>Password</label>
          <Input
            type="password"
            name="Password"
            placeholder="Password"
            value={formData.Password}
            onChange={handleData}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
