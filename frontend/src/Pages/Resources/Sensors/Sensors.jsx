import React from 'react';
import axios from "axios"
import './Sensors.css'
import Sidebar from '../Sidebar';
import Resourcepost from './Resourcepost';
import {URL} from "../../../url"
import {useEffect, useState} from "react"
import { Link } from 'react-router-dom';
 

export const Sensors = () => {
  const [posts,setPosts]=useState([])

  const fetchPosts=async()=>{
    try{
      const res =await axios.get(URL+"api/posts/")
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
      <div className="content-container">
        <h1 className = "resoTitle">SENSORS</h1>

          <div className="res-posts-container">
            {posts.map((post)=>(
              <>
              <Link to="/Postdetails">
                <Resourcepost key={post._id} post={post}/>
            </Link>
            </>
            ))}  
          </div>
          
      </div>
      
    </div>

  
  )
}