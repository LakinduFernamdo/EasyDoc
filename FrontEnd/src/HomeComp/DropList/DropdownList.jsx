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
        style={{width:"500px"}}
      >
        {selectedOption} {/* This updates dynamically */}
      </button>
      <ul className="dropdown-menu">
        <li><button className="dropdown-item" onClick={() => handleSelect("Option 1")}>Option 1</button></li>
        <li><button className="dropdown-item" onClick={() => handleSelect("Option 2")}>Option 2</button></li>
        <li><button className="dropdown-item" onClick={() => handleSelect("Option 3")}>Option 3</button></li>
      </ul>
    </div>
  );
}

export default DropdownList;
