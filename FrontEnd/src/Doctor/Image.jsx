import React from 'react';

function Image ({imgSrc})
{
  return (
    <img
      className="card-img-top"
      src="{imgSrc}"
      alt="Doctor"
      style={{height: '180px',objectFit: 'cover'}}
    />
  );
}

export default Image;
