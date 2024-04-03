import React from 'react'
import './Blog.css'
import PostImage from "../Blogs/images/postImage.jpg";
import { Link } from 'react-router-dom';
const Blogspost = ({blogPost}) => {
  if (!blogPost) {
    return null;
  }

  const createdAtDate = new Date(blogPost.createdAt);
  const createdDate = createdAtDate.toDateString(); 


  return (
    <div className="postCard">
      <Link style={{textDecoration: 'none'}} to={`/InsidePost/${blogPost._id}`} key={blogPost.id}>
        
            <img src={blogPost.photo} alt="" className="blogPostImage" /> 
            
            
            <div className="blogPostText">
            <div className="blogPostTitle">
                 {blogPost.title}
            </div>

            
            <br/>
            <div className="blogPostostDetails">
            <div className="blogPostDescription">
            {blogPost.desc.split(' ').slice(0, 60).join(' ')+ '... See more'}
          </div>
          <br/>
        </div>
        </div>
        </Link>
        <div className="blogPostdate">
                 {createdDate}
            </div>
       
       </div>

  )
}

export default Blogspost
