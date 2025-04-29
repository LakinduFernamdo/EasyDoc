import React from 'react';

function BillTable({ data = [] }) {
  return (
    <div>
      
      <table className="table">
        <thead>
          <tr>
            <th>Bill_ID</th>
            <th>P_ID</th>
            <th>AppointmentID</th>
            <th>Payment Method</th>
            <th>Date</th>
            <th>Time</th>
            <th>Amount</th>
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
                <td>{bill.Bill_ID}</td>
                <td>{bill.P_ID}</td>
                <td>{bill.App_ID}</td>
                <td>{bill.PaymentMethod}</td>
                <td>{bill.Date}</td>
                <td>{bill.Time}</td>
                <td>{bill.Amount}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BillTable;
