import React from 'react'
import './Blog.css'
import PostImage from "../Blogs/images/postImage.jpg";
import { Link } from 'react-router-dom';
const Blogspost = ({blogPost}) => {
  if (!blogPost) {
    return null;
  }

  const likePost = (id) =>{
     fetch('http://localhost:5000/api/blogPosts/like',{
        method: "put",
        headers:{
          "Content-Type":"application/json"
        },
          body:JSON.stringify({
            postId:id
          })
        
     }).then(res => res.json())
     .then(result=>{
      console.log(result)
     })
  }

  const unlikePost = (id) =>{
    fetch('http://localhost:5000/api/blogPosts/unlike',{
       method: "put",
       headers:{
         "Content-Type":"application/json"
       },
         body:JSON.stringify({
           postId:id
         })
       
    }).then(res => res.json())
    .then(result=>{
     console.log(result)
    })
 }


  return (
    <div className="postCard">
      <Link style={{textDecoration: 'none'}} to={`/InsidePost/${blogPost._id}`} key={blogPost.id}>
        
            <img src={blogPost.photo} alt="" className="blogPostImage" /> 
            
     
            <div className="postText">
            <div className="postTitle">
                 {blogPost.title}
            </div>
            <hr/>
            <br/>
        </div>
        
        </Link>
        <div className='likedislikeDiv'>
              <i className="material-icons" onClick={()=>{likePost(blogPost._id)}}> thumb_up </i> 
              <i className="material-icons" onClick={()=>{unlikePost(blogPost._id)}}> thumb_down </i>
            <h5> Likes:  {blogPost.likes.length} </h5>
            </div>
       </div>
  )
}

export default Blogspost
