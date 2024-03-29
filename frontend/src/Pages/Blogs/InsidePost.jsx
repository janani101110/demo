import React, { useEffect, useState } from 'react'
import "./InsidePost.css";
import PostImage from "../Blogs/images/postImage.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";

export const InsidePost = () => {
    const blogPostId = useParams().id;
    const [blogPost, setBlogPost] = useState({});

    useEffect(() => {
        const fetchPost = async () => {
          try {
            const res = await axios.get(`http://localhost:5000/api/blogPosts/${blogPostId}`);
            setBlogPost(res.data);
          } catch (err) {
            console.error(err);
          }
        };
        
        fetchPost();
      }, [blogPostId]);

  return (
    <div className='InsidePost'>
        <div className="Blog">
            <h1 className='blogTitle'>  {blogPost.title} </h1>
            <hr/>
            <p className='blogDate'> Created at: {new Date(blogPost.createdAt).toLocaleString()} </p>

            <img src={blogPost.photo} alt="" className="postImage"/> 
            <p className='blogbody'>
            {blogPost.desc}
            </p>

        </div>
        <div className='BlogComments'>
            <p className='CommentTitle'>
                Comments
            </p>

        </div>
    </div>
  ) 
}

export default InsidePost;
