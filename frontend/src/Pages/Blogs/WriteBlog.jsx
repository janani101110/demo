import React, { useState } from 'react';
import "./Blog.css";
import { useNavigate } from 'react-router-dom';
import { imageDb } from "../../firebase";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

// Function to retrieve token from local storage
const token = localStorage.getItem('token');

// WriteBlog component to create a new blog post
export const WriteBlog = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState('');
  const [downloadURL, setDownloadURL] = useState('');
  const navigate = useNavigate();

  // Function to handle image upload
  const handleUpload = async (e) => {
    const file = e.target.files[0]; // Get the selected file
    setFile(file); // Set the file in state
    const imgsBlog = ref(imageDb, `blogImages/${v4()}`); // Reference to the storage location
    await uploadBytes(imgsBlog, file); // Upload the file to storage
    const url = await getDownloadURL(imgsBlog); // Get the download URL of the uploaded image
    setDownloadURL(url); // Set the download URL in state
  };
  
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const blogPost = {
      title,
      desc,
      photo: downloadURL
    };
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Set the authorization token in headers
      },
      body: JSON.stringify(blogPost), // Convert blog post object to JSON string
    };
  
    try {
      const res = await fetch("http://localhost:5000/api/blogPosts/create", requestOptions); // Send POST request to create blog post
      if (!res.ok) {
        throw new Error('Failed to create blog post');
      }
      const data = await res.json(); // Parse response data
      console.log(data); // Log response data to console
      navigate("/Blogs"); // Redirect to Blogs page after successful submission
    } catch (err) {
      console.error(err); // Log any errors to console
    }
  };

  // Render the component
  return (
    <div className="createBlog"> 
      <div className="CreateBlogInnerdiv">
        <h1 className='createBlogTitle'>Create a Blog Post</h1>
        
       
        <form onSubmit={handleSubmit} className='createBlogFormBody'>
          <label className='createBlogTextLabel'> Title: </label>
          <br/>
          <input onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Enter blog post title' className='createBlogTextbox' value={title} required/>
          <br/>
          <label className='createBlogTextLabel'> Image: </label>
          <br/>
          <input type="file" onChange={(e) => handleUpload(e)} className='createBlogEnterImage' required/>
          <br/>
          <label className='createBlogTextLabel'> Blog Body: </label>
          <br/>
          <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className='createBlogTextArea' placeholder='Enter Post Description' cols={30} rows={15} required></textarea>
          <br/>
          <button type='submit' className='createBlogSubmit'>
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}

export default WriteBlog;