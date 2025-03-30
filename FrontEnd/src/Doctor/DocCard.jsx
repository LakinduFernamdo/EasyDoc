import React from 'react';
import Img from './Image';
import Discription from './Discription';

function DocCard ({imgSrc,title,description})
{
    return (
        <div className="card shadow-sm mb-4" style={{width: '18rem'}}>
            <Img imgSrc={imgSrc} />
            <Discription title={title} description={description} />
            <div className="text-center mb-3">
                <button className="btn btn-primary w-75">Make Appointment</button>
            </div>
        </div>
    );
}

export default DocCard;
