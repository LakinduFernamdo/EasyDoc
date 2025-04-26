import React, { useState } from 'react';

function AppointmentCard(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    PatientName: props.PatientName,//this props pass to Appoinment.jsx
    P_ID: props.P_ID,
    AppId: props.AppId,
    Doc_ID: props.Doc_ID,
    Date: props.Date,
    Time: props.Time,
    AppointmentNumber: props.AppointmentNumber,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleSave = () => {
    if (props.onSave) {
      props.onSave(editedData);
    }
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (props.onDelete) {
      props.onDelete(props.AppId); // pass appointment ID
    }
  };

  return (
    <div className="col-sm-6 mb-3">
      <div className="card">
        <div className="card-body">
          {isEditing ? (             //This part for user currently editting the data
            <>
              <p className="form-control mb-2">Patient Name: {editedData.PatientName}</p>
              <p className="form-control mb-2">Patient ID: {editedData.P_ID}</p>
              <p className="form-control mb-2">Appointment ID: {editedData.AppId}</p>
              <p className="form-control mb-2">Doctor ID: {editedData.Doc_ID}</p>

              <input name="Date" value={editedData.Date} onChange={handleChange} className="form-control mb-2" />
              <input name="Time" value={editedData.Time} onChange={handleChange} className="form-control mb-2" />

              <button onClick={handleSave} className="btn btn-success me-2">Save</button>
              <button onClick={toggleEdit} className="btn btn-secondary">Cancel</button>
            </>
          ) : ( //This part for user currently viewing the data(After Update  )
            <>  
              <h5 className="card-title">
                Patient Name: {props.PatientName} <br />
                Patient ID: {props.P_ID}
              </h5>
              <p className="card-text">Appointment ID: {props.AppId}</p>
              <p className="card-text">Doctor ID: {props.Doc_ID}</p>
              <p className="card-text">Date: {props.Date}</p>
              <p className="card-text">Time: {props.Time}</p>
              <p className="card-text">Your Appointment number: {props.AppointmentNumber}</p>
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
