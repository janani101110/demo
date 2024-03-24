const express = require('express');
const router=express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require("passport");
const cookieParser = require('cookie-parser');
const verifyToken = require('../middleware/verifyToken');
require('dotenv').config();

const CLIENT_URL = "http://localhost:3000/";


router.get("/google/signup", 
passport.authenticate("google-signup", { scope: ["profile"] })
);

router.get(
  "/google/signup/callback",
  passport.authenticate("google-signup", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error:true,
    message: "Log in failure"
  })
})



// Define the route for Google sign-in
router.get('/google/signin',
passport.authenticate('google-signin', { scope: ['profile', 'email'] })
);

router.get('/google/signin/callback',
passport.authenticate('google-signin', { failureRedirect: '/loginError' }),
function(req, res) {
console.log("User".user);
res.redirect('/home');
}
);







module.exports=router;