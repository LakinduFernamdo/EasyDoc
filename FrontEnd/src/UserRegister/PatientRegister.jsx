import React, { useState } from "react";
import axios from "axios";
import Lable from "./Lable.jsx";
import InputComponents from "./InputComponents.jsx";

function PatientRegister() {
  const [formData, setFormData] = useState({
    F_name: "",
    L_name: "",
    Email: "",
    Phone: "",
    Gender: "",
    Address: "",
    DOB: "",
    Password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post("http://localhost:5000/auth/signUp", formData);
      alert("Submission successful!"); //  successful submission
      console.log("Server Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed! Please try again."); 
    }
  }

  return (
    <div style={{ marginLeft: "300px", marginTop: "100px" }}>
      <h1>Patient Registration</h1>

      <form onSubmit={handleSubmit}>
        <Lable lableName="First Name" />
        <InputComponents type="text" name="F_name" placeholder="Enter your first name" onChange={handleChange} value={formData.F_name} />
        
        <Lable lableName="Last Name" />
        <InputComponents type="text" name="L_name" placeholder="Enter your last name" onChange={handleChange} value={formData.L_name} />
        
        <Lable lableName="Email" />
        <InputComponents type="email" name="Email" placeholder="Enter your email" onChange={handleChange} value={formData.Email} />
        
        <Lable lableName="Telephone" />
        <InputComponents type="text" name="Phone" placeholder="Enter your telephone" onChange={handleChange} value={formData.Phone} />

        <Lable lableName="Gender" />
        <Lable lableName="Male" />
        <InputComponents
          type="radio"
          name="Gender"
          value="male"
          checked={formData.Gender === "male"}
          onChange={handleChange}
        />
        <Lable lableName="Female" />
        <InputComponents
          type="radio"
          name="Gender"
          value="female"
          checked={formData.Gender === "female"}
          onChange={handleChange}
        />

        <Lable lableName="Address" />
        <InputComponents type="text" name="Address" placeholder="Enter your address" onChange={handleChange} value={formData.Address} />
        
        <Lable lableName="Date of Birth" />
        <InputComponents type="date" name="DOB" onChange={handleChange} value={formData.DOB} />

        <Lable lableName="Password" />
        <InputComponents type="text" name="Password" onChange={handleChange} value={formData.Password} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PatientRegister;
