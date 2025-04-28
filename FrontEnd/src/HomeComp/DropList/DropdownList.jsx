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

  const docSpecItems = docSpecList.map((spec) => (
    <option key={spec} value={spec}>
      {spec}
    </option>
  ));

  function changeSpec(event) {
    setSelectedOption(event.target.value);
  }

  const SearchSpecialization = () => {
    if (selectedOption !== "Select an option") {
      navigate(`/doctor-information?search=${selectedOption}`);
    }
  };

  return (
    <div className="container px-2">
      <TopicHeads text="Search According To The Specialty"/>
      <div className="dropdown">
        <select
          className="btn btn-primary"
          value={selectedOption}
          onChange={(e) => changeSpec(e)}
        >
          <option value="Select an option">Select Payment Method</option>
          {docSpecItems}
        </select>
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={SearchSpecialization}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default DropdownList;
