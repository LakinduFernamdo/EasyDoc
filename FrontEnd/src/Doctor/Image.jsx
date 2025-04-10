import React from 'react';

function Image(props) {
  return (
    <div>
        <img src={props.src} className="card-img-top" alt="common-image" />
    </div>
  );
}

export default Image;
