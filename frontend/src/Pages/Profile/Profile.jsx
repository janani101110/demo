import React,{useContext} from 'react'
import {UserContext} from '../../Context/UserContext';
import './Profile.css';





const Profile = () => {
  const user = useContext(UserContext);
  console.log("user Context", user)
  

  const logout = () => {
    window.open("http://localhost:5000/api/auth/logout", "_self");
  }


  return (
    <div className="profile">
        <div className='profileHeader'>
          <div className='ProfileHeaderImage'>
              <img src={user.profilePicture} className="profileImg" alt="Profile" /> 
          </div>
          <div className='ProfileHeaderText'>
              <p className='ProfileText'> User Name: {user.username} </p>
              <p className='ProfileText'> Email:  </p>
          </div>
        </div>
        <div className='profileMessage'>
          <h3 className='profileWelcomeMessage'>
          Get ready to spark innovation and forge meaningful connections in the electrifying world of Electronics!
          </h3>
        </div>
        <div className='ProfileDashboard'>
          <p className='dashboardText'> Resources </p>
          <p className='dashboardText'> Blogs </p>
          <p className='dashboardText'> Ads </p>
          <p className='dashboardText'> Projects </p>

        </div>

        <button onClick={ logout } className='logoutButton'> LogOut </button>
        
    </div>


  )
}

export default Profile

