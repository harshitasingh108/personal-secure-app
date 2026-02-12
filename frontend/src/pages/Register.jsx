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
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-96">

            <h2 className="text-3xl font-bold text-center mb-2">Register Page</h2>

            <input
                className="border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none p-3 w-full mb-4 rounded-lg"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                className="border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none p-3 w-full mb-4 rounded-lg"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                className="border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none p-3 w-full mb-4 rounded-lg"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleRegister} className="bg-indigo-600 text-white w-full py-2 rounded">
                Register
            </button>

            <p
                className="text-center text-sm text-gray-600 mt-5 cursor-pointer"
                onClick={() => setPage("login")}
            >
                Already have an account?
                <span className="text-indigo-600 font-semibold ml-1">
                    Login
                </span>
            </p>

        </div>
    );
}

export default Register;
