import React from 'react'

function Description(props) {
    return (

        <div className="card-body">
            <h3 className="card-title">{props.docname}</h3>
            <h4 className="card-title">{props.specialization}</h4>
            <p className="card-text">{props.date}</p>
            <p className="card-text">{props.starttime}</p>
            <p className="card-text">{props.endtime}</p>
            <p className="card-text">{props.availability}</p>
        </div>
    )
}

export default Description;