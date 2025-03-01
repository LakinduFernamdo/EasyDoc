import React,{useState,useEffect} from 'react';
import './DocStyle.css'; // Import the CSS file

function DoctorPage ()
{
  const [doctors,setDoctors]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

  useEffect(() =>
  {
    fetch('http://localhost:5000/api/doctors')
      .then((response) =>
      {
        if(!response.ok)
        {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) =>
      {
        setDoctors(data);
        setLoading(false);
      })
      .catch((error) =>
      {
        setError(error.message);
        setLoading(false);
      });
  },[]);

  if(loading) return <div className="text-center mt-5">Loading...</div>;
  if(error) return <div className="alert alert-danger text-center">{error}</div>;

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">Meet Our Dedicated Doctors</h1>
      <p className="text-center text-muted mb-5">
        At our clinic, we are committed to providing high-quality healthcare and ensuring that each patient receives the care they need. Our team of experienced doctors specializes in a variety of fields, from general medicine to specialized treatments, ensuring comprehensive care for all.
      </p>

      <p className="text-center mb-5">
        Whether you're visiting us for a routine check-up or need specialized care, our doctors are here to assist you. Explore the profiles of our highly skilled professionals below, and feel free to schedule an appointment with the doctor that suits your healthcare needs.
      </p>

      <div className="row">
        {doctors.map((doctor) => (
          <div key={doctor.doctor_id} className="col-md-4 d-flex justify-content-center mb-4">
            <div className="card shadow-lg mb-4 doctor-card" style={{width: '18rem'}}>
              <img
                className="card-img-top"
                src={doctor.imgSrc||"https://source.unsplash.com/300x200/?doctor,medicine,hospital"} // Placeholder if no image available
                alt={doctor.name}
                style={{height: '180px',objectFit: 'cover'}}
              />
              <div className="card-body">
                <h5 className="card-title text-dark">{doctor.name}</h5>
                <p className="card-text text-muted">{`Experienced in ${doctor.specialization}. With years of experience, Dr. ${doctor.name} is here to provide the best care possible.`}</p>
                <div className="text-center mb-3">
                  <button className="btn btn-primary w-75">Make Appointment</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorPage;
