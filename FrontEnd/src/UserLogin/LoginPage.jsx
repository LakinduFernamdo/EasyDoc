import React, { useState } from 'react';
import axios from "axios";
import Input from "./Input.jsx";


function LoginPage() {
    const [formData, setFormData] = useState({
        Phone: "",
        Password: "",
    });

    const handleData = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    async function handleLogin(event) {
        event.preventDefault(); // Prevent default form submission first
        try {
            console.log(formData);
            const response = await axios.post("http://localhost:5000/auth/signIn", formData);
            alert("Login successful!");
            console.log("Server Response:", response.data);
          // Redirect to the UserPage component
          window.location.href = "/user-account";
            
        } catch (error) {
            console.error("Error found :", error.response?.data || error.message);
            alert("Login failed! Please check your credentials.");
        }
      };

    return (
        <div>
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
    );
}

export default LoginPage;
