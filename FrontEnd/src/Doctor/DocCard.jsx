import React from 'react';
import Img from './Image';
import Discription from './Discription';

function DocCard(props) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <Img imgSrc={props.imgSrc} />
            <Discription title={props.title} description={props.description} />
            <a href="#" className="btn btn-primary" style={{width:'180px'}}>Make Appointment</a>
        </div>
    );
}

export default DocCard;
