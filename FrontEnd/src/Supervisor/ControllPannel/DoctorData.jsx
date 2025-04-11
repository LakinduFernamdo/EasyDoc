import React, { useState, useEffect } from 'react';
import DashBoard from './DashBoard';
import DoctorTable from './DoctorTable';
import axios from 'axios';

function DoctorData() {
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    viewDoctorData();
  }, []);

  const viewDoctorData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/auth/supervisor/doctor-deatails');
      setDoctorData(response.data);
    } catch (error) {
      console.error('Error fetching doctor data from database:', error);
    }
  };

  return (
    <div>
      <h1>Doctor Data</h1>
      <DashBoard />
      <DoctorTable data={doctorData} />
    </div>
  );
}

export default DoctorData;
