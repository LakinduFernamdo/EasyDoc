import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/sidebar.css';

function AllNavLinks(props) {
  return (
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul className="navbar-nav">
    {props.links.map((linkItem, index) => (
        <li className="nav-item" key={index}>
            <Link to={linkItem.href} className="nav-link">
                {linkItem.icon}   &nbsp; {linkItem.name}
            </Link>
        </li>
    ))}
</ul>

       
         
     
    </div>
  </div>
  )
}

export default AllNavLinks;