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

}