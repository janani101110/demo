const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({
            msg: "Authorization denied",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.accessToken_secret);
        req.user = decoded;
        next();
        j
    } catch (err) {
        res.status(401).json({
            msg: "invalid token",
        });
    }
};
module.exports = verifyToken;
