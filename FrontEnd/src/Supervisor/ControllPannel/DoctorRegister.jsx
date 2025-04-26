import React, { useRef } from 'react';
import axios from 'axios';

function DoctorRegister() {
  const DocID = useRef();
  const DocName = useRef();
  const DocGender = useRef();
  const DocPhone = useRef();
  const DocSpecialization = useRef();
  const DocAvailability = useRef();
  const DocDate = useRef();
  const DocStartTime = useRef();
  const DocEndTime = useRef();

  const DocDetailshandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        Doc_Name: DocName.current.value,
        Gender: DocGender.current.value,
        Phone: DocPhone.current.value,
        Specialization: DocSpecialization.current.value,
        Availability: DocAvailability.current.value,
      };

      const response = await axios.post('http://localhost:5000/auth/supervisor/doctor-deatails/doctor-register', data);
      console.log(response.data);
      alert("Doctor Registered Successfully");
    } catch (error) {
      alert("Registration Failed: " + error.message);
    }
      
  };

  const DocSchedulehandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        Doc_ID: DocID.current.value,
        Schedule: {
          Date: DocDate.current.value,
          StartTime: DocStartTime.current.value,
          EndTime: DocEndTime.current.value,
        },
      };

      const response = await axios.post('http://localhost:5000/auth/supervisor/doctor-deatails/doctor-schedule', data);
      console.log(response.data);
      alert("Doctor Schedule Registered Successfully");
    } catch (error) {
      alert("Schedule Registration Failed: " + error.message);
    }
  };

  return (
    <div>
      <h1>Doctor Register</h1>

      {/* Doctor Details Form */}
      <form onSubmit={DocDetailshandleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" required ref={DocName} />

        <label htmlFor="gender">Gender</label>
        <select id="gender" required ref={DocGender}>
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" pattern="[0-9]{10}" placeholder="Enter your phone number" required ref={DocPhone} />

        <label htmlFor="specialization">Specialization</label>
        <select id="specialization" required ref={DocSpecialization}>
          <option value="">Select Specialization</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Psychiatrist">Psychiatrist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Gynecologist">Gynecologist</option>
          <option value="Neurologist">Neurologist</option>
        </select>

        <label htmlFor="availability">Availability</label>
        <input type="text" id="availability" placeholder="Enter your availability" required ref={DocAvailability} />

        <button type="submit">Submit Doctor Details</button>
      </form>

      <hr />

      {/* Doctor Schedule Form */}
      <h2 style={{ color: "red" }}>Doctor Schedule</h2>

      <form onSubmit={DocSchedulehandleSubmit}>
        <label htmlFor="DocID">Doctor ID</label>
        <input type="text" id="DocID" placeholder="Enter Doctor ID" required ref={DocID} />

        <label htmlFor="Dates">Dates</label>
        <select id="Dates" required ref={DocDate}>
          <option value="">Select Dates</option>
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </select>

        <label htmlFor="StartTime">Start Time</label>
        <input type="text" id="StartTime" placeholder="Enter Start Time" required ref={DocStartTime} />

        <label htmlFor="EndTime">End Time</label>
        <input type="text" id="EndTime" placeholder="Enter End Time" required ref={DocEndTime} />

        <button type="submit">Submit Schedule</button>
      </form>
    </div>
  );
}

export default DoctorRegister;
