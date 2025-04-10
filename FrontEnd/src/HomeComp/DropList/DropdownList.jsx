import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DropdownList() {
  const [selectedOption, setSelectedOption] = useState("Select an option");
  const navigate = useNavigate();

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const SearchSpecialization = () => {
    if (selectedOption !== "Select an option") {
      navigate(`/doctor-information?search=${selectedOption}`);
    }
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
        {selectedOption}
      </button>
      <ul className="dropdown-menu">
        {["Endocrinologist", "Dermatologist", "Cardiologist", "Neurologist", "Gynecologist","Psychiatrist"].map((specialty) => (
          <li key={specialty}>
            <button className="dropdown-item" onClick={() => handleSelect(specialty)}>
              {specialty}
            </button>
          </li>
        ))}
      </ul>
      <button className="btn btn-outline-success" type="submit" onClick={SearchSpecialization}>
        Search
      </button>
    </div>
  );
}

export default DropdownList;
