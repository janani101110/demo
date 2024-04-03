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
    <br />
    <div className="loginTextdiv"> 
        <div className="loginText"> Email </div>
        <input type="text" className ="loginInput" placeholder ="E-mail" />
    </div>
    
    <br/> 

    <div className="loginTextdiv"> 
        <div className="loginText"> Password </div>
        <input type="password" className ="loginInput" placeholder ="password" />
    </div>    
    <Link to="/signup"> <button className="loginButton"> Signup </button></Link>
  </form>

  <div className="loginTextdiv">
      <Link to="/signup"> <button className="googleButton"> Signup with Google <img src={googleIcon} alt="google" className="googleIcon" /> </button></Link>
    </div>
    <div className="loginhr">
    <hr className="hrclass" />
  </div>
  <div className="loginTextdiv"> 
        <div className="loginText">  have an account? </div>
        <Link to="/login"> <button className="loginButton"> Login </button></Link>
    </div>

  </div>
   </div>


);

}
export default Login;
