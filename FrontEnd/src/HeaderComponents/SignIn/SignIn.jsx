import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';

function SignIn(props) {
    const navigate = useNavigate(); // Hook for navigation

    function handleSignIn() {
        navigate('/signIn'); // Redirects to the LoginPage
    }

    return (
        <div>
    <button
        onClick={handleSignIn}
        style={{
            color: "white",
            width: "100px",
            padding: "5px",
            border: "none", /* Ensure border is removed */
            borderRadius: "10px",
            background: "transparent",
            backgroundColor: "var(--mid-purple)",
            cursor: "pointer",
            outline: "none", /* Remove focus outline */
            boxShadow: "none", /* Ensure no shadow appears */
            transition: "color 0.3s ease" /* Smooth color transition */
        }}
        onMouseOver={(e) => e.currentTarget.style.color = "black"}
        onMouseOut={(e) => e.currentTarget.style.color = "white"}
    >
        <LoginIcon /> <br /> {props.name}
    </button>
</div>

    );
}

export default SignIn;
