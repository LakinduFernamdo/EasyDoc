import React from 'react';
import '../../styles/navbar.css';

function HamButton() {
  return (
    <button className=" custom-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  );
}

export default HamButton;
