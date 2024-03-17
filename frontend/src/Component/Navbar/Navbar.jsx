import React, {  useState, useEffect } from 'react'
import './Navbar.css'
//import {FaBars} from "react-icons/fa";
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';



export const Navbar = () => {
  const [menu,setMenu] = useState("home");
  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    fetch('/check-auth')
      .then(response => {
        if (response.status === 200) {
          setAuthenticated(false);
          console.log("authenticated");
        } else {
          setAuthenticated(true);
          console.log(" not authenticated");
        }
      })
      .catch(error => console.error('Error checking authentication:', error));
  }, []);

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" className='logo'/>
            
            <h1>Gavesha</h1>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/home'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("resources")}}><Link style={{textDecoration: 'none'}} to='/resources'>Resources</Link>{menu==="resources"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("projects")}}><Link style={{textDecoration: 'none'}} to='/projects'>Projects</Link>{menu==="projects"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("blogs")}}><Link style={{textDecoration: 'none'}} to='/blogs'>Blogs</Link>{menu==="blogs"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("shopping")}}><Link style={{textDecoration: 'none'}} to='/shopping'>Shopping</Link>{menu==="shopping"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("forum")}}><Link style={{textDecoration: 'none'}} to='/forum'>Forum</Link>{menu==="forum"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration: 'none'}} to='/aboutus'>About Us</Link>{menu==="about"?<hr/>:<></>}</li>
        </ul>'
        {authenticated ? (
        <div>
        <Link to ='/Profile'> <img src="https://www.w3schools.com/howto/img_avatar.png" className="profileImg" alt="" /> </Link>
        </div>
        ) : (
          <div className='nav-login'>
           <Link to='/signup'><button>Sign Up</button></Link>
           <Link to='/login'><button>Sign In</button></Link>
          </div>
        )}
     
        
      
    </div>

  )
}
export default Navbar;

/** 
 
 useEffect(() => {
  fetch('http://localhost:5000/check-auth')
  .then((res) => {
    if (res===200) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  })
  .catch((err) => {
    setIsLoggedIn(false);
    console.error('Error during authentication check:', err);
  });
}, []); 

**/