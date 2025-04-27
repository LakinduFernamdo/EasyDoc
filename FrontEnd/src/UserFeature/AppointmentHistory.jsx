import React from "react";
import "./feature.css"

function AppointmentHistory() {


  var appointmentHistory=[{appointment_Id:0,doctor_Id:0,date:"2025/04/27",time:"00.00.00",completion:"True"}]

  var historyList=appointmentHistory.map(appointment=><tr key={appointment.appointment_Id}>
    <td>{appointment.appointment_Id}</td>
    <td>{appointment.doctor_Id}</td>
    <td>{appointment.date}</td>
    <td>{appointment.time}</td>
    <td>{appointment.completion}</td>
  </tr>)
  return (
    <>
      <div className="scroll-pane">
      <table>
        <thead>
            <tr>
                <th>Appointment ID</th>
                <th>Doctor ID</th>
                <th>Date</th>
                <th>Time</th>
                <th>Completion</th>
            </tr>
        </thead>
        <tbody>
          {historyList}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default AppointmentHistory;
