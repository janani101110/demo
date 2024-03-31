const express = require('express');
const router=express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require("passport");
const cookieParser = require('cookie-parser');
const verifyToken = require('../middleware/verifyToken');
require('dotenv').config();

const CLIENT_URL = "http://localhost:3000/home";


router.get("/google", 
passport.authenticate('google', { scope: ['profile'] })
);

router.get(
  "/google/callback",
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

router.get("/login/success", (req, res) =>{
  if(req.user){

    console.log("login success ", req.user);
    res.status(200).json({
      error: false,
      message: "Successfully logged in",
      user: req.user
    });
    console.log(res.message)
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
  }
});

// Logout route
router.get('/logout', function(req, res) {
  req.logout(function(err) {
    if (err) {
      console.error("Error during logout:", err);
      return res.status(500).send("Error during logout");
    }
    res.clearCookie('connect.sid'); // Clear session cookie
    res.redirect('http://localhost:3000/'); // Redirect to homepage
  });
});








module.exports=router;