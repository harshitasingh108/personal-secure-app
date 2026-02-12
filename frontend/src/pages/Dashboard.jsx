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
            { headers: { Authorization: token } }
        );

        setTitle("");
        getTasks();
    };

    const deleteTask = async (id) => {
        await axios.delete(
            `http://localhost:3000/api/task/delete/${id}`,
            { headers: { Authorization: token } }
        );

        getTasks();
    };

    const getTasks = async () => {
        const res = await axios.get(
            "http://localhost:3000/api/task/tasks",
            { headers: { Authorization: token } }
        );

        setTasks(res.data);
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div>

            <h2>Dashboard</h2>

            <input
                placeholder="new task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={addTask}>Add</button>

            {tasks.map((t) => (
                <div key={t._id}>
                    <span>{t.title}</span>
                    <button onClick={() => deleteTask(t._id)}>
                        Delete
                    </button>
                </div>
            ))}

            <br />
            <button onClick={logout}>Logout</button>

        </div>
    );
}

export default Dashboard;
