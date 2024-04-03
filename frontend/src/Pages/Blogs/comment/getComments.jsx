import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const GetComments = ({ blogPostId, token }) => {
  const [blogComments, setBlogComments] = useState([]);

  useEffect(() => {
    const fetchBlogComments = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/blogComment`);
        setBlogComments(res.data);
      } catch (err) {
        console.error('Error fetching blog comments:', err);
      }
    };

    fetchBlogComments();
  }, []);

  return (
    <div>
      {blogComments.map((blogComment) => (
        <BlogComment key={blogComment._id} blogComment={blogComment} />
      ))}
    </div>
  );
};

export default GetComments;
