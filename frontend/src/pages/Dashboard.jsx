import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard({ setPage }) {

    const token = localStorage.getItem("token");

    const [title, setTitle] = useState("");
    const [tasks, setTasks] = useState([]);

    const logout = () => {
        localStorage.removeItem("token");
        setPage("login");
    };

    const addTask = async () => {
        if (!title) return;

        await axios.post(
            "http://localhost:3000/api/task/add",
            { title },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setTitle("");
        getTasks();
    };

    const deleteTask = async (id) => {
        await axios.delete(
            `http://localhost:3000/api/task/delete/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        getTasks();
    };

    const getTasks = async () => {
        const res = await axios.get(
            "http://localhost:3000/api/task/tasks",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setTasks(res.data);
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg w-96">

            <h2 className="text-xl font-bold mb-4">Dashboard</h2>

            <input
                className="border p-2 w-full mb-3 rounded"
                placeholder="new task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <button
                onClick={addTask}
                className="bg-indigo-600 text-white w-full py-2 rounded">
                Add
            </button>

            <div className="mt-4">
                {tasks.map((t) => (
                    <div key={t._id} className="flex justify-between mb-2">
                        <span>{t.title}</span>
                        <button
                            onClick={() => deleteTask(t._id)}
                            className="bg-red-500 text-white px-2 py-1 rounded">
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            <button
                className="bg-gray-600 text-white w-full py-2 mt-4 rounded"
                onClick={logout}>
                Logout
            </button>

        </div>
    );
}

export default Dashboard;
