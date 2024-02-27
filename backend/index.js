const express = require('express');
const router = express.Router();
const session = require('express-session')
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bodyParser=require('body-parser');
const cors = require('cors');
const multer=require("multer");
const path = require("path");
const passport = require('passport')
const passportSetup = require('./passport');
require('dotenv').config();
const cookieParser = require('cookie-parser')

const authRoute=require('./routes/auth');
const userRoute=require('./routes/users');
const postRoutes=require('./routes/posts');
const commentRoute=require('./routes/comments');

const app = express();
app.use(bodyParser.json());
app.use(session({ secret: 'cats'}))
app.use(passport.initialize())
app.use(passport.session())
//app.use(bodyParser.urlencoded({extended: false}));

//database connection

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.db);
        console.log('Database connected successfully');
    }catch(err){
        console.log(err.message);
    }
}
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: "GET, POST, PUT, DELETE",
    credentials: true
  }));

  // Set up passport strategies (e.g., GoogleStrategy) using passportSetup

// Placeholder for Google OAuth route handling
app.get('/auth/google', passport.authenticate('google', { 
     scope: ['profile', 'email'] 
 }));

// Placeholder for handling Google OAuth callback
//app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
 //  res.redirect('/'); // Redirect to home page after successful authentication
 //});

 app.get('/', (req, res) => {
    // Handle the root path (e.g., send a welcome message or render a home page) i put a welcome message but need the home page here
    res.send('express app is running');
  });

 app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }), // Redirect to root on failure
  function(req, res) {
    // Successful authentication, redirect home with access token or user information
    res.redirect('http://localhost:3000/home'); // Replace with your actual frontend home page URL
  });

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoute);

// image storage engine
const storage = multer.diskStorage({
  destination: './upload/images',
  filename:(req,file,cb)=>{
    return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})
const upload = multer({storage:storage})
//creating upload end point for images
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
  res.json({
    success:1,
    image_url:`http://localhost:${5000}/images/${req.file.filename}`
  })

})



app.listen(5000, () => {
    connectDB();
    console.log('Server is running on port 5000');
});