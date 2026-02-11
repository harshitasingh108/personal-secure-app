
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [3, "username must be at least 3 characters long"],

    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: [5, "email must be at least 5 characters long"],
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [4, "password must be at least 4 characters long"],
    },
})

const User = mongoose.model('User', userSchema);

module.exports = User;
