import React from 'react';

function PatientTable({ data=[] }) {
    return (
        <div>
            <h1>Patient Table</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>P_ID</th>
                        <th>F_Name</th>
                        <th>L_Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>DOB</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((patient, index) => (
                        <tr key={index}>
                            <td>{patient.P_ID}</td>
                            <td>{patient.F_name}</td>
                            <td>{patient.L_name}</td>
                            <td>{patient.Email}</td>
                            <td>{patient.Phone}</td>
                            <td>{patient.Gender}</td>
                            <td>{patient.Address}</td>
                            <td>{patient.DOB}</td>
                            <td>{patient.Password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PatientTable;
