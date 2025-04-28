import React, { useRef } from "react";
import axios from "axios";
import timeOptions from "./Static/TimeSlots";

function AppointmentForm() {
  const specializationRef = useRef(null);
  const doctorRef = useRef(null);
  const patientref = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  const specializationOptions = [
    "Dentist", "Cardiologist", "Endocrinologist", "Neurologist",
    "Pediatrician", "Psychiatrist", "Dermatologist", "Neuro-urologist"
  ];

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const specialization = specializationRef.current.value;
      const patient_id = patientref.current.value;
      const doctor_id = doctorRef.current.value;
      const date = dateRef.current.value;
      const time = timeRef.current.value;
//user add appointment
      const response = await axios.post("http://localhost:5000/auth/user-account/add-appointment", {
        specialization,
        patient_id,
        doctor_id,
        date,
        time
      });

      alert("Appointment form submitted successfully");
      console.log(response.data);
    } catch (error) {
      alert("Error submitting appointment form Try Defferent time slot");
      console.error(error);
    }
  };

  return (
    <div className="scroll-pane">
      <form onSubmit={handleSubmit}>
        <label htmlFor="specialization" style={{ color: "black" }}>
          Specialization
        </label>
        <select id="specialization" ref={specializationRef}>
          <option value="">Select specialization</option>
          {specializationOptions.map((spec, index) => (
            <option key={index} value={spec}>
              {spec}
            </option>
          ))}
        </select>

        <br />
        <label htmlFor="patient" style={{ color: "black" }}>
          Patient ID
        </label>
        <input type="text" id="patient_id" ref={patientref} />

        <br />

        <label htmlFor="doctor" style={{ color: "black" }}>
          Doctor ID
        </label>
        <input type="text" id="doctor" ref={doctorRef} />

        <br />

        <label htmlFor="date" style={{ color: "black" }}>
          Date
        </label>
        <input type="date" id="date" ref={dateRef} />

        <br />

        <label htmlFor="time" style={{ color: "black" }}>
          Time
        </label>
        <select id="time" ref={timeRef}>
          <option value="">Select Time</option>
          {timeOptions.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>

        <br />

        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: "10px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;
