import React from 'react';
import './PannelStyle/Pannel.css';
import PageLinks from './PageLinks';


function DashBoard() {
    const navLinks = [
        { name: "PatientData", href: "/supervisor/patient-deatails" }, 
        { name: "DoctorData", href: "/supervisor/doctor-deatails" },
        { name: "Appoinments", href: "supervisor/appoinments" },
        { name: "Bills", href: "/supervisor/bills" },
    ];

    return (
        <div className="pannel">
            <h1>DashBoard</h1>
            <PageLinks links={navLinks} />
        </div>
    );
}

export default DashBoard;
