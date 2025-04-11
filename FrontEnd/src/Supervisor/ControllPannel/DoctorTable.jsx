import React from 'react';

function DoctorTable({ data = [] }) {
  return (
    <div>
      <h3>Doctor Table</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Doc_ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Specialization</th>
            <th>Availability</th>
            <th>Schedule</th>
          </tr>
        </thead>
        <tbody>
          {data.map((doctor, index) => (
            <tr key={index}>
              <td>{doctor.Doc_ID}</td>
              <td>{doctor.Name}</td>
              <td>{doctor.Gender}</td>
              <td>{doctor.Phone}</td>
              <td>{doctor.Specialization}</td>
              <td>{doctor.Availability}</td>
              <td>       {/** Display the schedule for each doctor by iterating through the schedule array */}
                {doctor.schedule && doctor.schedule.length > 0 ? ( 
                  <ul>
                    {doctor.schedule.map((slot, idx) => (
                      <li key={idx}>
                        {slot.day}: {slot.startTime} - {slot.endTime}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span>No Schedule</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorTable;
