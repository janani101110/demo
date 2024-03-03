import React from 'react'
import "./Blog.css";
import {Link} from "react-router-dom";
import blogBanner from "../Home/Assets/octopus.png";

import { Search } from "../../Component/Search/Search";
import Blogspost from './Blogspost';
export const Blogs = () => {
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
            <div class ="filterButton">
              Popular
            </div>

            <div class ="filterButton">
              Latest
            </div>
          </div>

            <div className='bpost'>
              <Link to="/InsidePost" classname="blogcard"> <Blogspost/> </Link>
              <Link to="/InsidePost" classname="blogcard"> <Blogspost/> </Link>
              <Link to="/InsidePost" classname="blogcard"> <Blogspost/> </Link>
              <Link to="/InsidePost" classname="blogcard"> <Blogspost/> </Link>
              <Link to="/InsidePost" classname="blogcard"> <Blogspost/> </Link>
              <Link to="/InsidePost" classname="blogcard"> <Blogspost/> </Link>
            </div>
          </div>
          
  ) 
}

export default Blogs;
