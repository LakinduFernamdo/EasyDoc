import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DocCard from "./DocCard";
import axios from "axios";

function DoctorPage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get search parameter (specialization) from URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("search"); // Example: "Cardiologist" ?search=Cardiologist

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/auth/doctor-information");

        // Map to store doctors without duplication
        const doctorMap = new Map();

        response.data.forEach((doctor) => {
          const docID = doctor.Doc_ID;

          if (!doctorMap.has(docID)) {
            doctorMap.set(docID, {
              Doc_ID: doctor.Doc_ID,
              Name: doctor.Name,
              Specialization: doctor.Specialization,
              Availability: doctor.Availability,
              schedule: [] // Initialize schedule array
            });
          }

          // Add available date and time to schedule
          doctorMap.get(docID).schedule.push({
            day: doctor.Dates,
            startTime: doctor.StartTime,
            endTime: doctor.EndTime
          });
        });

        // Convert Map values to an array
        setDoctors(Array.from(doctorMap.values()));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorData();
  }, []);

  // Filter doctors based on the search term (specialization)
  const filteredDoctors = searchTerm
    ? doctors.filter((doctor) => doctor.Specialization.toLowerCase() === searchTerm.toLowerCase())
    : doctors;

  // Function to highlight the specialization in UI
  const highlightText = (text, highlight) => {
    if (!highlight) return text;
    const regex = new RegExp(`(${highlight})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: "yellow", fontWeight: "bold" }}>{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div>
      <h1>Doctor Page</h1>

      {loading && <p>Loading doctors...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && !error && filteredDoctors.length === 0 && (
        <p style={{ color: "gray", fontSize: "18px" }}>No doctors found for "{searchTerm}"</p>
      )}

      {!loading && !error && filteredDoctors.length > 0 && (
        <div className="column" style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          {filteredDoctors.map((doctor) => (
            <DocCard
              key={doctor.Doc_ID}
              src={"https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg"} 
              docname={doctor.Name}
              specialization={highlightText(doctor.Specialization, searchTerm)} // Highlighted specialization
              availability={doctor.Availability || "Unavailable"}
              schedule={doctor.schedule}
              buttonname="Book Appointment"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default DoctorPage;
