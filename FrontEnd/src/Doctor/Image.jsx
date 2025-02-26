import React from 'react';

function Image(props) {
  return (
    <img 
      className="bd-placeholder-img card-img-top" 
      width="100%" 
      height="180" 
      src={props.imgSrc} 
      alt="Doctor"
    />
  );
}

export default Image;
