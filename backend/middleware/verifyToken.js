const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  const authenticated = isAuthenticated();

  if(authenticated===1){
        res.send(200, "authenticated");
  }else{
        res.send(404, "not authenticated");
  }

};
    
module.exports = verifyToken;
