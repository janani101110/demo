import React from 'react'
import './Blog.css'
import PostImage from "../Blogs/images/postImage.jpg";
import { Link } from 'react-router-dom';
const Blogspost = ({Post}) => {
  return (
    <div className="postCard">
      <Link to={`/insidePost/${Post._id}`} key={Post.id}>
        
            <img src={PostImage} alt="" className="blogPostImage" /> 
            
     
            <div className="postText">
            <div className="postTitle">
                 {Post.title}
            </div>
    
            <div className="postDescription">
            {Post.desc.slice(0,40)+"...Read more"}
          </div>
            
        </div>
        </Link>
       </div>
  )
}

export default Blogspost
