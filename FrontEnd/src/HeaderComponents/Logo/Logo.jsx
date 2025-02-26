import React from 'react';
import { useNavigate } from 'react-router-dom';


function Logo(props) {
  const navigate = useNavigate(); // Hook for navigation
  function handleCklick() {
    navigate('/'); // Redirects to the HomePage
  }
  return (
    <div>
    <button 
  onClick={handleCklick} 
  style={{ 
 
    background: "none", 
    padding: 0, 
    cursor: "pointer" ,
    borderRadius: "50%",
  }}
>
  <img 
    src={props.img} 
    alt="Logo" 
    className="logo" 
    style={{ width: "80px", height: "80px" }} 
  />
</button>


    </div>
  )
}

export default Logo;