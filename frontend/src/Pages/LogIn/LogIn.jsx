// Importing necessary dependencies and styles
import "./LogIn.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginImage from "../LogIn/images/loginImage.jpg";

// Login component definition
function Login() {
  // State variables for email, password, and email error
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Setting axios defaults for credentials
  axios.defaults.withCredentials = true;

  // Function to open Google authentication
  const google = () => {
    window.open("http://localhost:5000/api/auth/google", "_self");
  };

  // Function to handle form submission for login
  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    try {
      // Sending login request to the server
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        user
      );
      console.log(res.data);
      navigate("/home"); // Redirect to the home page upon successful login
    } catch (err) {
      // Handling errors
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        alert(err.response.data); // Display the error message from the server
      } else if (err.request) {
        // The request was made but no response was received
        console.error(err.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error:", err.message);
      }
    }
  };

  // JSX for the login form
  return (
    <div className="login">
      <div className="logindiv">
        <img src={LoginImage} className="LoginImage" alt="login" />
      </div>
      <div className="logindiv">
        <div className="loginTextdiv">
          <form onSubmit={handleLogin}>
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                placeholder="email"
                autoComplete="new-email"
                required
                className="loginInput"
              />
            </div>
            <div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="new-password"
                required
                className="loginInput"
              />
            </div>
            <br />
            <div>
              <button type="submit" className="loginButton">
                Sign In
              </button>
            </div>
          </form>
        </div>
        <br />
        <div className="loginTextdiv">
          <button onClick={google} className="loginButton">
            {" "}
            Signin with Google{" "}
          </button>
        </div>
        <div className="loginhr">
          <hr className="hrclass" />
        </div>
        <div className="loginTextdiv" style={{ display: "flex" }}>
          <div className="loginText"> Dont't Have an Account? </div>
          <Link
            to="/signup"
            style={{ textDecoration: "none" }}
            className="loginLink"
          >
            {" "}
            Signup{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

// Exporting the Login component
export default Login;
