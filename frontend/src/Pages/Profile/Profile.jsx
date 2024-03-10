import React from 'react';
import './Profile.css';





const Profile = () => {
  
  
  return (
    <div className="profile">
        <div className='profileHeader'>
          <div className='ProfileHeaderImage'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUs73Mz3FqhV8uy2F5TGw_jGvFdzGirConJA&usqp=CAU" className="profileImg" alt="Profile" /> 
          </div>
          <div className='ProfileHeaderText'>
              <p className='ProfileText'> User Name</p>
              <p className='ProfileText'> Email</p>
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

        <button onClick={() => { window.location.href = 'http://localhost:5000/logout'; }}> LogOut </button>
        
    </div>


  )
}

export default Profile

