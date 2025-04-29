import React from 'react';
import './UserCard.css';

function UserCard(props) {
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Full Name: {props.Full_name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">P_ID: {props.P_ID}</h6>
                    <p className="card-text">Phone: {props.Phone}</p>
                    <p className="card-text">Email: {props.Email}</p>
                    <p className="card-text">DOB: {props.DOB}</p>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
