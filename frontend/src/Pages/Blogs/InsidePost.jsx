import React, { useEffect, useState } from 'react';
import "./InsidePost.css";
import axios from "axios"; 
import { useParams } from "react-router-dom"; 

// InsidePost component to display details of a single blog post
export const InsidePost = () => {
  const blogPostId = useParams().id; 
  const [blogPost, setBlogPost] = useState({}); 

  useEffect(() => {
    // Function to fetch the blog post details
    const fetchPost = async () => {
      try {
        // Fetching the blog post details from the server
        const res = await axios.get(`http://localhost:5000/api/blogPosts/${blogPostId}`);
        // Setting the retrieved blog post details in the state
        setBlogPost(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    
    // Calling the fetchPost function
    fetchPost();
  }, [blogPostId]);

  // Rendering the component
  return (
    <div className='InsidePost'>
     
      <div className="Blog">
        <h1 className='blogTitle'>{blogPost.title}</h1>
        <hr/>
        <p className='blogDate'>Created at: {new Date(blogPost.createdAt).toLocaleString()}</p>
        <img src={blogPost.photo} alt="" className="postImage"/>
        <p className='blogbody'>{blogPost.desc}</p>
      </div>
      {/* Blog comments section */}
      <div className='BlogComments'>
        <p className='CommentTitle'>Comments</p>
        {/* Comments will be rendered here */}
      </div>
    </div>
  );
}

export default InsidePost; // Exporting the component
