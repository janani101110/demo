import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CommentForm = ({ blogPostId, token }) => {
  const [text, setText] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const blogComment = {
      comment: text, // Assuming 'comment' is the name of the field for the comment text
      blogPostId: blogPostId // Assuming 'blogPostId' is passed as a prop
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(blogComment), // Changed from 'blogPost' to 'blogComment'
    };

    try {
      const res = await fetch("http://localhost:5000/api/blogComment/create", requestOptions);
      if (!res.ok) {
        throw new Error('Failed to create comment');
      }
      const data = await res.json();
      console.log(data);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your comment"
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
