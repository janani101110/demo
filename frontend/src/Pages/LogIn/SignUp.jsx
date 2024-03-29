import "./LogIn.css";
import React, { useState } from 'react';
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../LogIn/images/loginImage.jpg";
import googleIcon from "../LogIn/images/googleIcon.png";

const Signup=() => {

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
          <input type="email" name="email"  placeholder="Email" required  className="loginInput"/>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" required  className="loginInput"/>
        </div>
        <div>
          <input type="password" name="confirmPassword"placeholder="Confirm Password" required  className="loginInput"/>
        </div>
        <div>
          <br/>
          <button type="submit" className="loginButton">Sign Up</button>
        </div>
      </form>
  </div>
 
  <br/>
  <div className="loginTextdiv">
      <button onClick={google} className="loginButton"> Signup with Google 
      <i className="material-icons"> </i>
       </button>
    </div>
    <div className="loginhr">
    <hr className="hrclass" />
  </div>


  <div className="loginTextdiv" style={{display:"flex"}}> 
        <div className="loginText">  Have an Account? </div>
        <Link to="/login" style={{textDecoration: 'none'}} className="loginLink"> Signin </Link>
    </div>

  </div>
   </div>


);

}
export default Signup;