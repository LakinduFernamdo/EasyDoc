import React from 'react'
import { Link } from 'react-router-dom';

function PageLinks(props) {
    return (
        <div>

            <ul className="nav">
                {props.links.map((linkItem, index) => (
                    <li className="nav-item" key={index}>
                        <Link to={linkItem.href} className="nav-link">
                           &nbsp; {linkItem.name}
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default PageLinks;