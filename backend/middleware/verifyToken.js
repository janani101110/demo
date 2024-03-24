const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
require('dotenv').config();

const verifyToken = (req, res, next) => {
      console.log('Authenticated:', req.isAuthenticated());
      if (req.isAuthenticated()) {
        return next();
      } else {
        return res.sendStatus(401);
      }

};
    
module.exports = verifyToken;
