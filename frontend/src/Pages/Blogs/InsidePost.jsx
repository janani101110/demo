import React, { useEffect, useState } from 'react'
import "./InsidePost.css";
import PostImage from "../Blogs/images/postImage.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";

export const InsidePost = () => {
    const PostId = useParams().id;
    const [post, setPost] = useState({});

    const fetchPost = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/api/blogPosts/${PostId}`);
          setPost(res.data);
        } catch (err) {
          console.log(err); // Log any errors that occur during fetching
        }
      };
    
      useEffect(() => {
        fetchPost();
      }, [PostId]);

  return (
    <div className='InsidePost'>
        <div className="Blog">
            <h1 className='blogTitle'>  {post.title} </h1>
            <img src={PostImage} alt="" className="postImage"/> 
            <p className='blogbody'>
            {post.desc}
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
