
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;


    if (!authHeader) {
        return res.json({ message: "Token required" });
    }

    try {

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = decoded.id;

        next();

    } catch (err) {
        res.json({ message: "Invalid token" });
    }
};

module.exports = authMiddleware;