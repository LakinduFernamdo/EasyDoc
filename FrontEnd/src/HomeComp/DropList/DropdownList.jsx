import React, { useState } from "react";

function DropdownList() {
  const [selectedOption, setSelectedOption] = useState("Select an option");

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ width: "500px" }}
      >
        {selectedOption} {/* This updates dynamically */}
      </button>
      <ul className="dropdown-menu">
        <li><button className="dropdown-item" name="Endocrinologist" onClick={() => handleSelect("Endocrinologist")}>Endocrinologist</button></li>
        <li><button className="dropdown-item" name="Dermotologist" onClick={() => handleSelect("Dermotologist")}>Dermotologist</button></li>
        <li><button className="dropdown-item" name="Cardiologist" onClick={() => handleSelect("Cardiologist")}>Cardiologist</button></li>
        <li><button className="dropdown-item" name="Neurologist" onClick={() => handleSelect("Neurologist")}>Neurologist</button></li>
        <li><button className="dropdown-item" name="Gynecologist" onClick={() => handleSelect("Gynecologist")}>Gynecologist</button></li>


      </ul>
    </div>
  );
}

export default DropdownList;
