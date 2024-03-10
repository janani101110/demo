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
require('./passport'); 
const cookieParser = require('cookie-parser')

const authRoute=require('./routes/auth');
const userRoute=require('./routes/users');
const postRoutes=require('./routes/posts');

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
// session
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: "GET, POST, PUT, DELETE",
    credentials: true
  }));

  app.get('/auth/google/signin',
  passport.authenticate('google-signin', { scope: ['profile', 'email'] })
);

app.get('/loginError', function (req, res) {
  
  res.status(500).send('Login process encountered an error. Please try again.');
});

app.get('/auth/google/signin/callback',
  passport.authenticate('google-signin', { failureRedirect: '/loginError' }),
  function (req, res) {
    
   res.status(200).redirect('http://localhost:3000/home');
    
  }
);


app.get('/auth/google/signup',
  passport.authenticate('google-signup', { scope: ['profile', 'email'] })
);

app.get('/auth/google/signup/callback',
  passport.authenticate('google-signup', { failureRedirect: '/signupError' }),
  function (req, res) {
    res.redirect('http://localhost:3000/login');
  }
);

app.get("/logout", function (req, res) {
  req.logout(); 
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.redirect('http://localhost:3000/');
    }
  });
});



 app.get('/', (req, res) => {
    // Handle the root path (e.g., send a welcome message or render a home page) i put a welcome message but need the home page here
    res.send('express app is running');
  });
 

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoutes);

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