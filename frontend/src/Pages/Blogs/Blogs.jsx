import React from 'react'
import "./Blog.css";
import {Link} from "react-router-dom";

 
import { Search } from "../../Component/Search/Search";
import Blogspost from './Blogspost';
import Profile from '../Profile/Profile';
export const Blogs = () => {
  return (
    <div className="Blog">
            <div className='blog-post'>
                <h1 className = "blogTitle"> TRIVIA BLOGS </h1>
                <Search />
            </div>
            <div className = "create">
                <Link to = "/create" className = "createLink"> Create </Link>
            </div>
            <div className='bpost'>
              <Blogspost/>
              <Blogspost/>

              <Blogspost/>

              <Blogspost/>

              <Blogspost/>
              <Blogspost/>

              <Blogspost/>

            </div>

      <Profile/>

    </div>
  ) 
}

export default Blogs;
