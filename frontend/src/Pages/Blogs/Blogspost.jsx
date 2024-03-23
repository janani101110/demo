import React from 'react'
import './Blog.css'
import PostImage from "../Blogs/images/postImage.jpg";
import { Link } from 'react-router-dom';
const Blogspost = ({blogPost}) => {
  if (!blogPost) {
    return null;
  }
  return (
    <div className="postCard">
      <Link style={{textDecoration: 'none'}} to={`/InsidePost/${blogPost._id}`} key={blogPost.id}>
        
            <img src={PostImage} alt="" className="blogPostImage" /> 
            
     
            <div className="postText">
            <div className="postTitle">
                 {blogPost.title}
            </div>
    
            <div className="postDescription">
            {blogPost.desc.slice(0,40)+"...Read more"}
          </div>
            
        </div>
        </Link>
       </div>
  )
}

export default Blogspost
