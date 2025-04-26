import React, { useState, useEffect } from "react";
import axios from "axios";
import AppoinmentCard from "./AppoinmentCard";
import "./PannelStyle/Appointments.css";

function Appointments() {
  const [appointments, setAppointments] = useState([]);//This stores all the appointment data fetched from your backend.
  const [filteredAppointments, setFilteredAppointments] = useState([]);//copy of the appointments, but only the ones that match the search input.
  const [searchTerm, setSearchTerm] = useState("");// stores what the user types into the search bar.

  useEffect(() => {
    fetchAppointments();
  }, []);
//Render all the appointments from the backend.
  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/auth/supervisor/appointments');
      setAppointments(response.data);
      setFilteredAppointments(response.data);
    } catch (error) {
      alert("Error from search");
      console.error('Error fetching doctor data from database:', error);
    }
  };
//This function is called when the user types something into the search bar.
  const handleSearch = () => {
    const lowerSearch = searchTerm.toLowerCase();
    const filtered = appointments.filter(app =>
      app.patientId.toString().includes(lowerSearch) 
    );
    setFilteredAppointments(filtered);
  };

  return (
    <div className="appointments-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search by PatientID or DoctorID"
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
              PatientName={item.F_name} //PatientName getting from AppoinmentCard.jsx and F_name
              P_ID={item.P_ID}
              AppId={item.App_ID}
              Doc_ID={item.Doc_ID}
              Date={item.Dates}
              Time={item.Time}
              AppointmentNumber={item.QueueNumber}
            />
          ))
        ) : (
          <p>No appointments found.</p>
        )}
      </div>
    </div>
  );
}

export default Appointments;
