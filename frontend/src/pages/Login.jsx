import { useState } from "react";
import axios from "axios";
function Login({ setPage }) {
    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");


    const handleLogin = async () => {

        const res = await axios.post(
            "http://localhost:3000/api/login",


            { username, password }

        );

        localStorage.setItem("token", res.data.token);


        setPage("dashboard");

    };


    return (
        <div>

            <h2>Login Page</h2>

            <input
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            // user type kare → state update
            />

            <input
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>
                Login
            </button>

            <p onClick={() => setPage("register")}>
                Go to Register
            </p>

        </div>
    );
}

export default Login;
