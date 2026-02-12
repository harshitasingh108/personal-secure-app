import { useState } from "react";


import axios from "axios";



function Register({ setPage }) {


    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleRegister = async () => {
        await axios.post(
            "http://localhost:3000/api/register",
            { username, email, password }
        );
        setPage("login");
    };


    return (
        <div>

            <h2>Register Page</h2>

            <input
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleRegister}>
                Register
            </button>

            <p onClick={() => setPage("login")}>
                Back to Login
            </p>

        </div>
    );
}

export default Register;
