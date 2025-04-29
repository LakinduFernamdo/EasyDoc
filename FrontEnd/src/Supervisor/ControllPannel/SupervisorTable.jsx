import React from 'react';


function BillTable({ data = [] }) {

  

  return (
    <div>

      <table className="table">
        <thead>
          <tr>
            <th>Sup_ID</th>
            <th>Name</th>
            <th>PassWord</th>

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
                <td>{bill.Sup_ID}</td>
                <td>{bill.UserName}</td>
                <td>{bill.Password}</td>

              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BillTable;
