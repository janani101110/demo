const dotenv = require("dotenv").config();

module.exports = {
    PORT : process.env.PORT || 3030,
    DB_URI: process.env.DB_URI,
    TOKEN_KEY:process.env.TOKEN_KEY,
}