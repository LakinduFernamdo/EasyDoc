import React from 'react';
import { Link } from "react-router-dom";

function UserAcountPage(props) {
  return (
    <div>
       
        <Link to={props.href}>{props.name}</Link>
       </div>
  )
}

export default UserAcountPage;