import React, {useContext, useEffect, useState } from 'react'
import './Sensors.css'
import Button from '../Button';
import Sidebar from '../Sidebar';
import Resourcepost from './Resourcepost';
import { Link } from 'react-router-dom';
import {URL} from "../../../url"
import axios from "axios"
import {UserContext} from "../../../Context/UserContext"

export const MotionSen = () => {

  const [posts,setPosts]=useState([])
  const {user}=useContext(UserContext)
  console.log(user)

  const fetchPosts=async()=>{
    try{
      const res=await axios.get(URL+"/api/posts")
      //console.log(res.data)
      setPosts(res.data)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchPosts()
  },[])

  return (
    <div className='sensorsCollect'>
        <Sidebar/>
      <div className="reso-content-container">
      <div className='resocustom-button'>
      <Link to='/writepost'><Button label="Write" onClick={() => console.log("Button clicked")} /></Link>
      </div>
        <h1 className = "resoTitle" id='motion'>MOTION SENSORS</h1>
        <div className="res-posts-container">
          {posts.map((post)=>(
            <Link to='/Postdetails.jsx'>
            <Resourcepost key={post.id} post={post}/>
            </Link>
          ))}
        </div>
          
      </div>
   </div>

  
  )
}
