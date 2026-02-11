const express = require('express');
const app = express();
const port = 3000;

const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");
connectDB();

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
app.use("/api", authRoutes);


const taskRoutes = require("./routes/taskesRoutes");

app.use("/api/task", taskRoutes);


app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
