import "./Login.css";
import { Link } from "react-router-dom";
import LoginImage from "../images/loginImage.jpg";
import googleIcon from "../images/googleIcon.png";

function Login() {
return (
    <div className="login"> 
    <div className="logindiv"> 

        <img src={LoginImage} className="LoginImage" alt = "login" />
  
    </div>

  <div className="logindiv"> 
  <form className="loginForm">
  <div className="loginTextdiv"> 
        <div className="loginText"> Username </div>
        <input type="text" className ="loginInput" placeholder ="username" />
    </div>
    
    <br/> 

    <div className="loginTextdiv"> 
        <div className="loginText"> Password </div>
        <input type="password" className ="loginInput" placeholder ="password" />
    </div>    
    <Link to="/login"> <button className="loginButton"> Login </button></Link>
  </form>

  <div className="loginTextdiv">
      <Link to="/login"> <button className="googleButton"> login with Google <img src={googleIcon} alt="google" className="googleIcon" /> </button></Link>
    </div>
    <div className="loginhr">
    <hr className="hrclass" />
  </div>
  <div className="loginTextdiv"> 
        <div className="loginText"> Don't have an account? </div>
        <Link to="/signup"> <button className="loginButton"> Sign Up </button></Link>
    </div>

  </div>
   </div>

);

}
export default Login;
