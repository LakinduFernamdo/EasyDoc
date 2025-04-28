import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import TopicHeads from "../TopicHeads";

function DropdownList() {
  const [selectedOption, setSelectedOption] = useState("Select an option");
  const navigate = useNavigate();
  const docSpecList = [
    "Endocrinologist",
    "Dermatologist",
    "Cardiologist",
    "Neurologist",
    "Gynecologist",
    "Psychiatrist",
  ];

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const searchSpecialization = () => {
    if (selectedOption !== "Select an option") {
      navigate(`/doctor-information?search=${selectedOption}`);
    }
  };

  return (
    <div className="container px-2">
      <TopicHeads text="Search According To The Specialty" />

      <div className="dropdown">
        <select
          className="form-select mb-2"
          value={selectedOption}
          onChange={handleSelectChange}
          style={{ width: "500px" }}
        >
          <option value="Select an option" disabled>Select a specialization</option>
          {docSpecList.map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>

        <button
          className="btn btn-outline-success"
          type="button"
          onClick={searchSpecialization}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default DropdownList;
