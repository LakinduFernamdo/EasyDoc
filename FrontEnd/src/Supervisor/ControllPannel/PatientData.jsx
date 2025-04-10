import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PatientTable from './PatientTable';
import DashBoard from './DashBoard';

function PatientData() {
    const [patientData, setPatientData] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState({
        F_name: '', L_name: '', Email: '', Phone: '',
        Gender: '', Address: '', DOB: '', Password: ''
    });                         //use to update the selected patient data
    const [searchId, setSearchId] = useState(''); //use to search for a patient by ID in Search input field and button

    useEffect(() => {
        viewPatientData();
    }, []);

    const viewPatientData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/auth/supervisor/patient-deatails');
            setPatientData(response.data);
        } catch (error) {
            console.error('Error fetching patient data:', error);
        }
    };

    const handleInputChange = (e) => {  //use to update the selected patient data without refreshing the page(not harm for other input fields)
        const { name, value } = e.target;
        setSelectedPatient(prevState => ({ ...prevState, [name]: value }));
    };

    const SearchPatient = async () => {
        if (!searchId) {
            alert("Please enter a valid Patient ID");
            return;
        }
        
        try {
            const response = await axios.get('http://localhost:5000/auth/supervisor/patient-deatails/patient-search', {
                params: { P_ID: searchId }
            });
    
            setSelectedPatient(response.data);
            alert("Patient Data Found!");
        } catch (error) {
            alert("Patient Data Not Found!");
            console.error('Error fetching patient data:', error);
        }
    };
    const UpdatePatient=async()=>{
        try {
            const response = await axios.put('http://localhost:5000/auth/supervisor/patient-deatails/patient-update', selectedPatient);
            console.log(response.data);
            alert("Patient Data Updated!");
        } catch (error) {
            alert("Patient Data Not Updated!");
            console.error('Error fetching patient data:', error);
        }
    }
    const DeletePatient=async()=>{
        try {
            const response = await axios.delete('http://localhost:5000/auth/supervisor/patient-deatails/patient-delete', {
                data: { P_ID: searchId }
            });
            console.log(response.data);
            alert("Patient Data Deleted!");
        } catch (error) {
            alert("Patient Data Not Deleted!");
            console.error('Error fetching patient data:', error);
        }
    }
    
    return (
        <div>
            <h1>Patient Data</h1>
            <DashBoard />

            {/* Input fields for setting searched data */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
                {Object.keys(selectedPatient).map((key) => (
                    <div key={key} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <label style={{ color: "Black" }}>{key.replace('_', ' ')}</label>
                        <input type='text' name={key} value={selectedPatient[key]} onChange={handleInputChange} />
                    </div>
                ))}
            </div>

            {/* Button panel */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
                <button type="button" className="btn btn-primary">Register Patient</button>
                <button type="button" className="btn btn-secondary" onClick={UpdatePatient}>Update</button>
                <button type="button" className="btn btn-danger" onClick={DeletePatient}>Delete</button>
                <input type="text" className="form-control" style={{ width: "200px" }} name='Search-Field' placeholder="Search By ID" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
                <button type="button" className="btn btn-success" onClick={SearchPatient}>Search</button>
                <button type="button" className="btn btn-warning" onClick={() => setSelectedPatient({
                    F_name: '', L_name: '', Email: '', Phone: '', Gender: '', Address: '', DOB: '', Password: ''
                })}>Reset</button>
            </div>

            <PatientTable data={patientData} />
        </div>
    );
}

export default PatientData;