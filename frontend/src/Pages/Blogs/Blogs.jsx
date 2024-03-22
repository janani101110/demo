import React, {  useEffect, useState } from 'react'
import "./Blog.css";
import {Link} from "react-router-dom";

import { Search } from "../../Component/Search/Search";
import Blogspost from './Blogspost';
import axios from "axios";
//import { UserContext } from "../../Context/UserContext";

export const Blogs = () => {
  const [blogPost, setPosts] = useState([]);
 

  const fetchPosts=async()=>{
    try{
      const res=await axios.get("http://localhost:5000/api/blogPosts")
      console.log(res.data)
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
    <div className="BlogHome">


      <div className='blogBanner'>
        <div className='bannerSection'>
         <p classname ="blogQuote"> Join the community, Explore, Learn, Create - Your hub for all things electronic, 
          empowering every step of your IoT journey with Trivia, and share your own insights with just a click!! </p>
        <br/>
        <div className = "Bannercreate">
                <Link to = "/WriteBlog" className = "createLink"> Create </Link>
            </div>
        </div>
        
      </div>


            <div className='blog-post'>
                <Search />
            </div>

          <div className='blogFilters'> 
            <div className ="filterButton">
              Popular
            </div>

            <div className ="filterButton">
              Latest
            </div>
          </div>

            <div className='bpost'>
            {blogPost.map((blogPost)=>(
         <Blogspost key={blogPost._id} post={blogPost}/>
         ))}
            </div>
          </div>
          
  ) 
}

export default Blogs;
