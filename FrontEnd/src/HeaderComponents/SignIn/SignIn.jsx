import React from 'react';
import { useNavigate } from 'react-router-dom';

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
                    color: "blue",
                    width: "100px",
                    padding: "5px",
                    border: "1px solid blue",
                    borderRadius: "5px",
                    background: "transparent",
                    cursor: "pointer"
                }}
            >
                {props.name}
            </button>
        </div>
    );
}

export default SignIn;
