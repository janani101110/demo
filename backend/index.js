
const express =require('express')
const mongoose  = require('mongoose')
const app=express()
const cors = require('cors');
const dotenv = require('dotenv')
const cookieParser=require('cookie-parser')




//database 
 const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://jananilasindu:Trivia2024@cluster0.bic47ow.mongodb.net/")
        console.log("database connected ")
    }
    catch(err){
        console.log(err)
    }
}
//middlewares
dotenv.config()
app.use(express.json())
=======
const bodyParser=require('body-parser');
const multer=require("multer");


const projectpostRoute = require("./routes/projectposts");

app.use(bodyParser.json());




app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    credentials: true
  }));
app.use(cookieParser())



app.use("/",require("./routes/shoppost"));




 


app.use("/api/projectposts", projectpostRoute);

// image storage engine
const storage = multer.diskStorage({
  
  //Project
  destination: (req, file, fn) => {
    fn(null, "images")
  },
  filename: (req, file, fn) => {
    fn(null, req.body.img);
  },

const upload = multer({storage:storage})


//project from here 3 lines
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("Image has been uploaded successfully!");
});
app.listen(5000,()=>{
    connectDB()
    console.log("app is running on port 5000")
})

