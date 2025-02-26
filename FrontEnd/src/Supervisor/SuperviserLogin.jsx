import React ,{useState}from 'react'
import axios from 'axios';
import Inputs from './Inputs';

function SuperviserLogin() {

    const [formData, setFormData] = useState({
        Username: "",
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
          const response = await axios.post('http://localhost:8080/signIn', formData);
          console.log("Recieved response:", response.data);
          alert("Login successful!");
          
        } catch (error) {
          console.error("Error:", error);
          
        }
      }

  return (
    
        <form onSubmit={handleSubmit}>
        <h1>Hello Im Superviser Login Page !</h1>
        <label>UserName</label>
        <Inputs
           type="text"
           placeholder="Enter Your Username"
           value={formData.Username}
           onChange={handleChange}
        />
        <label>Password</label>
        <Inputs
        type="password"
        placeholder="Enter Your Password"
        value={formData.Password}
        onChange={handleChange}
        />
        <button type="submit">Login Supervisor</button>

        </form>
        

    
  )
}

export default SuperviserLogin