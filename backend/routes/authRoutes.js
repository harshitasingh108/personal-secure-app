const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/models");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authmiddleware");


router.post("/register", async (req, res) => {
    console.log("BODY:", req.body);


    if (!req.body) {
        return res.send("Body not coming");
    }
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        console.log(req.body);
        const newuser = new User({
            username,
            email,
            password: hashedPassword
        })
        await newuser.save();
        res.json(newuser);
    }
    catch (err) {
        res.status(500).json({ message: "Error registering user", error: err.message });


    }
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username })
        if (!user) {
            return res.json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id },
            process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login successful", token, user })
    } catch (err) {
        res.status(500).json({ message: "Error logging in", error: err.message });
    }
})

router.get("/profile", authMiddleware, async (req, res) => {
    const user = await User.findById(req.userId);
    res.json({ user });
})

module.exports = router;





