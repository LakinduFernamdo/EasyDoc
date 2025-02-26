import React from 'react';
import HambergBurron from '../Hamberg/HamButton';
import AllNavLinks from '../NavLinks/AllNavLinks';
import Logo from '../Logo/Logo.jsx';
import SignIn from '../SignIn/SignIn.jsx';





function NavBar() {
    const navLinks = [
        { name: "Doctors", href: "/doctors" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "SignUp", href: "/signUp" },
        
       
    ];

    return (
        <div>
            <nav className="navbar bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <HambergBurron />
                    <AllNavLinks links={navLinks} />

                    <Logo img="Images/logo_EasyDoc.png" />
                    
                    <SignIn name="Sign In" />



                </div>
            </nav>
        </div>
    );
}

export default NavBar;
