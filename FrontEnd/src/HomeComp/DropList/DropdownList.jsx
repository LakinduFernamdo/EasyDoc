import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DropdownList() {
  const [selectedOption, setSelectedOption] = useState("Select an option");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  const SearchSpecialization = () => {
    if (selectedOption !== "Select an option") {
      navigate(`/doctor-information?search=${selectedOption}`);
    }
  };

  return (
    <div className="dropdown" style={{ position: "relative" }}>
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: "500px" }}
      >
        {selectedOption}
      </button>

      {isOpen && (
        <ul className="dropdown-menu show" style={{ display: "block", width: "500px" }}>
          {[
            "Endocrinologist",
            "Dermatologist",
            "Cardiologist",
            "Neurologist",
            "Gynecologist",
            "Psychiatrist",
          ].map((specialty) => (
            <li key={specialty}>
              <button
                className="dropdown-item"
                onClick={() => handleSelect(specialty)}
              >
                {specialty}
              </button>
            </li>
          ))}
        </ul>
      )}

      <button
        className="btn btn-outline-success mt-2"
        type="submit"
        onClick={SearchSpecialization}
      >
        Search
      </button>
    </div>
  );
}

export default DropdownList;
