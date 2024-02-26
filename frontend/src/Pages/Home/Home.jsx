import React from 'react'
import './Home.css'


export const Home = () => {
  return (  
    
    <div className='home'>
      <div className='home-left'>
       <h1>Welcome Tinkers !</h1>
      </div>
      <div className='home-right'>
        <input type='text' className='mainsearch' placeholder='     Search your problem' />
      </div>
    </div>
    
  )
}
