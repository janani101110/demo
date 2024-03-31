import "./LogIn.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext} from "react"
import axios from "axios"
import UserContext from '../../Context/UserContext';
import LoginImage from "../LogIn/images/loginImage.jpg"
import googleIcon from "../LogIn/images/googleIcon.png";

function Login() {

  
  const {setUser}=useContext(UserContext)
  axios.defaults.withCredentials = true;
  const google = () => {
    window.open("http://localhost:5000/api/auth/google", "_self");


  }
return (
    <div className="login"> 
    <div className="logindiv"> 

        <img src={LoginImage} className="LoginImage" alt = "login" />
  
    </div>

  <div className="logindiv"> 

  <div className="loginTextdiv">
  <form >
        <div>
          <input type="text" name="username"  placeholder="Username" required className="loginInput" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" required  className="loginInput"/>
        </div>
        <br/>
        <div>
          <button type="submit" className="loginButton">Sign In</button>
        </div>
      </form>
  </div>
  <br/>
  <div className="loginTextdiv">
      <button onClick={ google } className="loginButton"> Signin with Google 
      
       </button>
    </div>
    <div className="loginhr">
    <hr className="hrclass" />
  </div>

  <div className="loginTextdiv" style={{display:"flex"}}> 
        <div className="loginText"> Dont't Have an Account? </div>
        <Link to="/signup" style={{textDecoration: 'none'}} className="loginLink"> Signup </Link>
    </div>

  </div>
   </div>

);

}
export default Login;