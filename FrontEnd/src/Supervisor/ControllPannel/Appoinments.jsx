import React, { useState, useEffect } from "react";
import axios from "axios";
import AppoinmentCard from "./AppoinmentCard";
import "./PannelStyle/Appointments.css";
import DashBoard from "./DashBoard";

function Appointments() {
  const [appointments, setAppointments] = useState([]); // All appointments
  const [filteredAppointments, setFilteredAppointments] = useState([]); // Filtered appointments
  const [searchTerm, setSearchTerm] = useState(""); // User's search input

  useEffect(() => {
    fetchAppointments();
  }, []);

  // Fetch all appointments from backend
  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/auth/supervisor/appointments');
      setAppointments(response.data);
      setFilteredAppointments(response.data); // Initialize both
    } catch (error) {
      alert("Error fetching appointments");
      console.error('Error fetching appointment data from database:', error);
    }
  };

  // Handle Search
  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      alert("Please enter a search term");
      return;
    }

    // Filter appointments based on PatientID or DoctorID
    const filtered = appointments.filter((item) =>
      item.Doc_ID.toString().includes(searchTerm)
    );

    setFilteredAppointments(filtered);
  };

  return (
    <div>
      <DashBoard />
      <div className="appointments-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search by DoctorID To check Appointment"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>

        <div className="cards-wrapper">
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((item, index) => (
              <AppoinmentCard
                key={index}
                PatientName={`${item.F_name} ${item.L_name}`}
                P_ID={item.P_ID}
                AppId={item.App_ID}
                Doc_ID={item.Doc_ID}
                Date={item.Dates}
                Time={item.Time}
               
              />
            ))
          ) : (
            <p>No appointments found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Appointments;
