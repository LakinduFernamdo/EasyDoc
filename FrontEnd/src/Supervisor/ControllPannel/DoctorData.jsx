import React, { useState, useEffect } from 'react';
import DashBoard from './DashBoard';
import DoctorTable from './DoctorTable';
import axios from 'axios';

function DoctorData() {
  const [doctorData, setDoctorData] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState({
    Name: '', Gender: '', Phone: '', Specialization: '', Availability: '', schedule: []
  });
  const [searchId, setSearchId] = useState('');

  useEffect(() => {
    viewDoctorData();
  }, []);

  // Function to fetch all doctors from backend
  const viewDoctorData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/auth/supervisor/doctor-deatails');
      setDoctorData(response.data);
    } catch (error) {
      console.error('Error fetching doctor data from database:', error);
    }
  };

  // Function to search for a doctor by ID and update selectedDoctor state
  const SearchDoctor = async () => {
    if (!searchId) {
      alert("Please enter a valid Doctor ID");
      return;
    }

    try {
      const response = await axios.get('http://localhost:5000/auth/supervisor/doctor-deatails/doctor-search', {
        params: { Doc_ID: searchId }
      });

      const result = response.data;

      if (result.length === 0) {
        alert("Doctor Data Not Found!");
        return;
      }

      const { Name, Gender, Phone, Specialization, Availability } = result[0];
      const schedule = result.map(item => ({
        Dates: item.Dates,
        StartTime: item.StartTime,
        EndTime: item.EndTime
      }));

      setSelectedDoctor({
        Name,
        Gender,
        Phone,
        Specialization,
        Availability,
        schedule
      });

      alert("Doctor Data Found!");

    } catch (error) {
      alert("Doctor Data Not Found!");
      console.error('Error fetching doctor data:', error);
    }
  };

  // Update functionality 
  const UpdateDoctor = async () => {
    try {
      if (
        !selectedDoctor.Name ||
        !selectedDoctor.Gender ||
        !selectedDoctor.Phone ||
        !selectedDoctor.Specialization ||
        !selectedDoctor.Availability
      ) {
        alert("Please fill all the fields");
        return;
      }
  
      const payload = {
        ...selectedDoctor,
        Doc_ID: searchId,
        Schedule: selectedDoctor.schedule,
      };
  
      delete payload.schedule;
  
      const response = await axios.patch('http://localhost:5000/auth/supervisor/doctor-deatails/doctor-update', payload);
      console.log(response.data);
      alert("Doctor Data Updated Successfully!");
    } catch (error) {
      console.error('Error updating doctor data:', error.response?.data || error.message);
      alert("Doctor Data Not Found! or Unable to Update Doctor Data");
    }
  };
  


  // Delete functionality (to be implemented later)
  const DeleteDoctor = async () => {
    try {
      const response=await axios.delete('http://localhost:5000/auth/supervisor/doctor-deatails/doctor-delete', {
        data: { Doc_ID: searchId }
      });
      console.log(response.data);
      alert("Doctor Data Deleted Successfully!");
      
    } catch (error) {
      alert("Doctor Data Not Found! or Unable to Delete Doctor Data");
      console.error('Error deleting doctor data:', error);
    }
  }

  

  // Function to handle schedule changes
  const handleScheduleChange = (index, field, value) => {
    const updatedSchedule = [...selectedDoctor.schedule];
    updatedSchedule[index][field] = value;
    setSelectedDoctor({ ...selectedDoctor, schedule: updatedSchedule });
  };

  // Handler for general input changes (non-schedule fields)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedDoctor(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div>
      <h1>Doctor Data</h1>
      <DashBoard />

      {/* Button group for doctor CRUD operations and search input */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
        <button type="button" className="btn btn-primary">Register Doctor</button>
        <button type="button" className="btn btn-secondary" onClick={UpdateDoctor}>Update</button>
        <button type="button" className="btn btn-danger" onClick={DeleteDoctor}>Delete</button>
        <input
          type="text"
          className="form-control"
          style={{ width: "200px" }}
          name='Search-Field'
          placeholder="Search By ID"
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button type="button" className="btn btn-success" onClick={SearchDoctor}>Search</button>
        <button type="button" className="btn btn-warning">Reset</button>
      </div>

      {/* Display selected doctor info, including a nested list of their schedule */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
        {Object.keys(selectedDoctor).map((key) => {
          if (key === "schedule") {
            return (
              <div key="schedule" style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontWeight: "bold" }}>Schedule</label>
                {selectedDoctor.schedule.map((item, index) => (
                  <div key={index} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                    <input
                      type="text"
                      placeholder="Date"
                      value={item.Dates}
                      onChange={(e) => handleScheduleChange(index, 'Dates', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Start Time"
                      value={item.StartTime}
                      onChange={(e) => handleScheduleChange(index, 'StartTime', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="End Time"
                      value={item.EndTime}
                      onChange={(e) => handleScheduleChange(index, 'EndTime', e.target.value)}
                    />
                  </div>
                ))}
              </div>
            );
          }

          return (
            <div key={key} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <label>{key}</label>
              <input
                type="text"
                name={key}
                value={selectedDoctor[key]}
                onChange={handleInputChange}
              />
            </div>
          );
        })}
      </div>

      {/* Table of all doctors */}
      <DoctorTable data={doctorData} />
    </div>
  );
}

export default DoctorData;
