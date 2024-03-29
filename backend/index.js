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
const dotenv = require("dotenv");
//require('dotenv').config();
//const cookieParser = require('cookie-parser')

const projectpostRoute = require("./routes/projectposts");

const app = express();
app.use(bodyParser.json());
app.use(session({ secret: 'cats'}))
/*app.use(passport.initialize())
app.use(passport.session())*/
//app.use(bodyParser.urlencoded({extended: false}));

//database connection

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.db);
         //project
        console.log('Database connected successfully');
    }catch(err){
      console.log(err); //project
        console.log(err.message);
    }
};

//middlewares
dotenv.config();
app.use(express.json());
//app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: "GET, POST, PUT, DELETE",
    credentials: true
  }));

  // Set up passport strategies (e.g., GoogleStrategy) using passportSetup

// Placeholder for Google OAuth route handling

// Placeholder for handling Google OAuth callback
//app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
 //  res.redirect('/'); // Redirect to home page after successful authentication
 //});

 app.get('/', (req, res) => {
    // Handle the root path (e.g., send a welcome message or render a home page) i put a welcome message but need the home page here
    res.send('express app is running');
  });

 

//app.use("/api/auth", authRoute);
//app.use("/api/users", userRoute);
//app.use("/api/posts", postRoutes);
app.use("/api/projectposts", projectpostRoute);
//app.use("/api/comments", commentRoute);

// image storage engine
const storage = multer.diskStorage({
  
  //Project
  destination: (req, file, fn) => {
    fn(null, "images")
  },
  filename: (req, file, fn) => {
    fn(null, req.body.img);
  },
//uptonow Project - 6 lines

 /*destination: './upload/images',
  filename:(req,file,cb)=>{
    return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }*/
})
const upload = multer({storage:storage})
//creating upload end point for images
/*app.use('/images',express.static('upload/images'))*/

//project from here 3 lines
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("Image has been uploaded successfully!");
});

/*app.post("/upload",upload.single('product'),(req,res)=>{
  res.json({
    success:1,
    image_url:`http://localhost:${5000}/images/${req.file.filename}`
  })

})*/

//Here PORT number is hide on .env file. (Project)
/*app.listen(process.env.PORT, () => {
  connectDB();
  console.log("app is running on port " + process.env.PORT);
});*/

app.listen(5000, () => {
    connectDB(); 
    console.log('Server is running on port 5000');
});