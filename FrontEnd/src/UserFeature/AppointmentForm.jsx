import React from "react";

function AppointmentForm() {
  const specialization = ["Dentist", "Cardiologist"];
  const doctors = ["siripala", "sirisena"];

  var i=1;
  var j=1;

  const specList = specialization.map((spec) => (
    <option key={i++}>{spec}</option>
  ));
  const docList = doctors.map((doc) => (
    <option key={j++}>{doc}</option>
  ));

  return (
    <>
      <div className="scroll-pane">
        <form action="Submit">
          <label htmlFor="specialization">Specialization</label>
          <select id="">{specList}</select>
          <br />
          <label htmlFor="doctor">Doctor</label>
          <select id="">{docList}</select>
          <br />
          <label htmlFor="Date">Date</label>
          <input type="date" />
          <br />
          <label htmlFor="timeInput">Time</label>
          <input type="time" />
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AppointmentForm;
