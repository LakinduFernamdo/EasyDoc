import React from "react";


function AppointmentTable({ data = [] }) {
  return (
    <div>
      
      <table className="table">
        <thead>
          <tr>
            <th>App_ID</th>
            <th>P_ID</th>
            <th>Doc_ID</th>
            <th>Date</th>
            <th>Time</th>
            <th>Specialization</th>

          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>
                No data available.
              </td>
            </tr>
          ) : (
            data.map((bill, index) => (
              <tr key={index}>
                <td>{bill.App_ID}</td>
                <td>{bill.P_ID}</td>
                <td>{bill.Doc_ID}</td>
                <td>{bill.Date}</td>
                <td>{bill.Time}</td>
                <td>{bill.Specialization}</td>

              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );



}

export default AppointmentTable;
