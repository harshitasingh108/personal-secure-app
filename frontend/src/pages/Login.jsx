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
        <div className="bg-white p-8 rounded-xl shadow-xl w-80">

            <h2 className="text-2xl font-bold mb-4 text-center">Login Page</h2>

            <input

                className="border p-2 w-full mb-3 rounded"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            // user type kare → state update
            />

            <input
                className="border p-2 w-full mb-3 rounded"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                className="bg-indigo-600 text-white w-full py-2 rounded"
                onClick={handleLogin}>
                Login
            </button>

            <p className="text-blue-500 mt-3 text-center cursor-pointer"
                onClick={() => setPage("register")}>
                Go to Register
            </p>

        </div>
    );
}

export default Login;
