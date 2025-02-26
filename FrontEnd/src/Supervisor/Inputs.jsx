import React from 'react'

function Inputs(props) {
  return (
    <div>
        <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
    
    </div>
  )
}

export default Inputs