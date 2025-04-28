import React, { useState } from 'react';
import axios from 'axios'; // <--- You forgot to import axios!

function AppointmentCard(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    PatientName: props.PatientName,
    P_ID: props.P_ID,
    AppId: props.AppId,
    Doc_ID: props.Doc_ID,
    Date: props.Date,
    Time: props.Time,
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEdit = () => setIsEditing(!isEditing);
//save patient after checking
  const handleSave = async () => {  
    if (!editedData.Date || editedData.Date.trim() === "" || !editedData.Time || editedData.Time.trim() === "") {
      alert("Please provide both Date and Time before saving.");
      return;
    }
  
    try {
      const response = await axios.patch('http://localhost:5000/auth/supervisor/save-appointment', editedData);
  
      console.log("Response from backend:", response.data);
      alert('Appointment saved successfully!');
      setIsEditing(false); // Exit edit mode
    } catch (error) {
      console.error('Error saving appointment:', error);
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message); // Show backend error (example: already exist)
      } else {
        alert('Failed to save appointment.');
      }
    }
  };
  
  const handleDelete = async () => {
    if (!editedData.Doc_ID) {
      alert("Invalid Doctor ID. Cannot delete.");
      return;
    }
  
    const confirmDelete = window.confirm("Are you sure you want to delete this appointment?");
    if (!confirmDelete) return;
  
    try {
      const response = await axios.delete('http://localhost:5000/auth/supervisor/delete-appointment', {
        data: { Doc_ID: editedData.Doc_ID }
      });
      alert('Appointment deleted successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error deleting appointment:', error);
      alert('Failed to delete appointment.');
    }
  };
  
  
  
  

  
  

  return (
    <div className="col-sm-6 mb-3">
      <div className="card">
        <div className="card-body">
          {isEditing ? (//User is editing Now
            <>                                              
              <p className="form-control mb-2">Patient Name: {editedData.PatientName}</p>
              <p className="form-control mb-2">Patient ID: {editedData.P_ID}</p>
              <p className="form-control mb-2">Appointment ID: {editedData.AppId}</p>
              <p className="form-control mb-2">Doctor ID: {editedData.Doc_ID}</p>

              <input name="Date" value={editedData.Date} onChange={handleChange} className="form-control mb-2" placeholder='yyyy-mm-dd' />
              <input name="Time" value={editedData.Time} onChange={handleChange} className="form-control mb-2" />

              <button onClick={handleSave} className="btn btn-success me-2">Save</button>
              <button onClick={toggleEdit} className="btn btn-secondary">Cancel</button>
            </>
          ) : (  //After edit 
            <>
              <h5 className="card-title">
                Patient Name: {props.PatientName} <br />
                Patient ID: {props.P_ID}
              </h5>
              <p className="card-text">Appointment ID: {props.AppId}</p>
              <p className="card-text">Doctor ID: {props.Doc_ID}</p>
              <p className="card-text">Date: {props.Date}</p>
              <p className="card-text">Time: {props.Time}</p>
              
              <button onClick={handleDelete} className="btn btn-danger me-2">Delete</button>
              <button onClick={toggleEdit} className="btn btn-warning">Edit</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AppointmentCard;
