import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Swiper() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.shutterstock.com/image-photo/concentrated-young-beautiful-female-professional-260nw-2032893908.jpg" className="d-block w-100" alt="Slide 1"  />
          </div>
          <div className="carousel-item">
            <img src="https://www.shutterstock.com/image-photo/doctor-pressing-smiley-face-emoticon-600nw-2245847847.jpg" className="d-block w-100" alt="Slide 2"  />
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/premium-photo/healthcare-medical-concept-smiling-young-male-doctor-female-nurse-with-stethoscope-hospital_380164-53008.jpg" className="d-block w-100" alt="Slide 3"  />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Swiper;
