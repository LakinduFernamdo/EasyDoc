import React from 'react'
import { Link } from "react-router-dom";

function AllNavLinks(props) {
  return (
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu Items</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">

        
      {props.links.map((linkItem, index) => (
            <li className="nav-item" key={index}>
             
              <Link to={linkItem.href}>{linkItem.name}</Link>
                
              
            </li>
          ))}
       </ul>
         
     
    </div>
  </div>
  )
}

export default AllNavLinks;