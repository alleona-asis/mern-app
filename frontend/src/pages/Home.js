import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Welcome to My App</h1>
            <p>Please log in to continue.</p>
            <Link to="login">
                <button>Login with Google Login</button>
            </Link>
            
        </div>
    );
}

// Login is successful, also displays dashboard | 14/3/2025 @ 12:50PM
// Login is successful, also displays dashboard with list of google classrooms linked to google account | 15/3/2025 @ 1:50AM