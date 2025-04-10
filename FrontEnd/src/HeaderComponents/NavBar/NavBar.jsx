import React from 'react';
import HambergBurron from '../Hamberg/HamButton'; //CHange the name Button
import AllNavLinks from '../NavLinks/AllNavLinks';
import Logo from '../Logo/Logo.jsx';
import SignIn from '../SignIn/SignIn.jsx';
import { LocalHospital, Info, Phone, PersonAdd } from "@mui/icons-material";
import '../../styles/navbar.css';



function NavBar() {
    const navLinks = [
        { name: "Doctors", href: "/doctor-information", icon: <LocalHospital /> }, // Medical icon
        { name: "About", href: "/about", icon: <Info /> },              // Info icon
        { name: "Contact", href: "/contact", icon: <Phone /> },         // Phone icon
        { name: "SignUp", href: "/signUp", icon: <PersonAdd /> },       // Person add icon
    ];
    

    return (
        <div>
            <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid" style={{ backgroundColor: "var(--light-purple)", padding:"5px 10px" }}>

                    <HambergBurron />
                    <AllNavLinks links={navLinks} />

                    <Logo img="Images/LOGOC.png" />
                    
                    <SignIn name="Sign In" />



                </div>
            </nav>
        </div>
    );
}

export default NavBar;
