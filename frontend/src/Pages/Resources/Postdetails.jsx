import React from 'react';
import axios from "axios"
import {URL,IF} from "../../url"
import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react'

export const Postdetails = () => {

  const postId=useParams().id
  const [post,setPost]=useState({})

  const fetchPost=async()=>{
    try{
      const res= await axios.get(URL+"/api/posts/"+postId)
      //console.log(res.data)
      setPost(res.data)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchPost()
  },[postId])

  return (
    <div>
      <h1>{post.title}</h1>
      <img src={IF+post.photo} alt="" className="res-post img" />
      <p>{post.desc}</p>
    </div>
  )
}
