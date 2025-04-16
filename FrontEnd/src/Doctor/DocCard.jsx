import React from "react";
import Image from "./Image.jsx";
import Appoinment from "./Appoinment.jsx";
import Description from "./Description.jsx";
import CurrentAvailable from "./CurrentAvailable.jsx";

function DocCard(props) {
  return (
    <div>
      <div className="card" style={{ width: "18rem", height: "auto", padding: "10px" }}>
        <Image src={props.src} />
        <Description 
          docname={props.docname} 
          specialization={props.specialization} 
          availability={props.availability} 
        />
        <div style={{ padding: "10px" }}>
          <h5>Available Schedules:</h5>
          <ul>
            {props.schedule.length > 0 ? (
              props.schedule.map((slot, index) => (
                <li key={index}>
                  📅 {slot.day} | 🕒 {slot.startTime} - {slot.endTime}
                </li>
              ))
            ) : (
              <p>No available slots</p>
            )}
          </ul>
        </div>
        <CurrentAvailable schedule={props.schedule} />
        <Appoinment buttonname={props.buttonname} />
      </div>
    </div>
  );
}

export default DocCard;
