const express = require('express');
const router = express.Router();
const session = require('express-session')
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const cors = require('cors');
const path=require("path")
const passport = require('passport')
const passportSetup = require('./passport');
require('dotenv').config();
const cookieParser = require('cookie-parser')
const ResoPost = require('./models/ResoPost');

const authRoute=require('./routes/auth');
const userRoute=require('./routes/users');
const resopostRoutes=require('./routes/resoposts');
const resocommentRoutes=require('./routes/resocomments');

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

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: "GET, POST, PUT, DELETE",
    credentials: true
  }));


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/resoposts", resopostRoutes);
app.use("/api/resocomments", resocommentRoutes);


app.get('/api/search', async (req, res) => {
    try {
      const query = req.query.q;
      // Assuming 'ResoPost' is your MongoDB model
      const results = await ResoPost.aggregate([
        {
          $search: {
            index: "SearchReso",
            text: {
              query: query,
              path: {
                wildcard: "*"
              }
            }
          }
        }
      ]);
      res.json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  



app.listen(5000, () => {
    connectDB();
    console.log('Server is running on port 5000');
});