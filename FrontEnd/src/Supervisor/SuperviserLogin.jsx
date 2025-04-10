import React, { useState } from "react";
import axios from "axios";
import Inputs from "./Inputs.jsx";
import { useNavigate } from "react-router-dom";

function SupervisorLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    UserName: "",
    Password: "",
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSubmit(event) {
    event.preventDefault();


    try {
      const response = await axios.post(
        "http://localhost:5000/auth/supervisor-signIn",
        formData
      );
      console.log("Received response from Backend:", response.data);
      alert("Login successful!");
      navigate("/supervisor-dashboard");
    } catch (error) {
      console.error("Error:", error);

    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Supervisor Login Page</h1>

   

      <label style={{ color: "black" }}>Username:</label>
      <Inputs
        type="text"
        name="UserName"
        placeholder="Enter Your Username"
        value={formData.UserName}
        onChange={handleChange}
      />

      <label style={{ color: "black" }}>Password:</label>
      <Inputs
        type="password"
        name="Password"
        placeholder="Enter Your Password"
        value={formData.Password}
        onChange={handleChange}
        
      />

      <button type="submit">Login Supervisor</button>
    </form>
  );
}

export default SupervisorLogin;
