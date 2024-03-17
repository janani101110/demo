import React, {useContext, useEffect, useState } from 'react'
import './Sensors.css'
import Sidebar from '../Sidebar';
import Resourcepost from '../Resourcepost';
import {URL} from "../../../url"
import axios from "axios"
import {UserContext} from "../../../Context/UserContext"

export const Sensors = () => {

  const [posts,setPosts]=useState([])
  const {user}=useContext(UserContext)
  console.log(user)


  const fetchPosts=async()=>{
    try{
      const res=await axios.get(URL+"/api/resoposts")
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
     
        <h1 className = "resoTitle" >SENSORS</h1>
        <div className="res-posts-container">
          {posts.map((post)=>(
         
     
              <Resourcepost key={post.id} post={post}/>
     

            
           
          ))}
        </div>
          
      </div>
   </div>

  
  )
}
