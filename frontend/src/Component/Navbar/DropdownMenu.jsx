import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DropdownMenue.css'

const DropdownMenu = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchAuthenticationStatus = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/auth/login/success', {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          }
        });
        

        if (response.status === 200) {
          const resObject = await response.json();
          setUser(resObject.user);
          console.log("User",resObject.user);
        } else {
          throw new Error("Authentication has failed");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchAuthenticationStatus();
  }, []); // Fetch authentication status on component mount


  console.log(user);

  const logout = () => {
    window.open("http://localhost:5000/api/auth/logout", "_self");
  }

  return (
    <div className="dropdown-menu">
      <ul className='dropdownMenuul'>
      <li className='dropdownMenuli'>
        <Link style={{ textDecoration: "none" }} to={{ pathname: "/Profile", user: user }}> 
           Profile
        </Link>
        </li>
        <li className='dropdownMenuli'>
          <Link style={{ textDecoration: "none" }} to="#" onClick={logout}>
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;