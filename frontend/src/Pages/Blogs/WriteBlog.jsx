import React from 'react';
import "./Blog.css";
import {useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { imageDb } from "../../firebase";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
const token = localStorage.getItem('token');


export const WriteBlog = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState('');
  const [downloadURL, setDownloadURL] = useState('');
  const navigate = useNavigate();
  
  

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    setFile(file);
    const imgsBlog = ref(imageDb, `blogImages/${v4()}`); // Corrected v4() usage
    await uploadBytes(imgsBlog, file);
    const url = await getDownloadURL(imgsBlog);
    setDownloadURL(url);
  };
    
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogPost = {
      title,
      desc,
      photo: downloadURL,
    };
    try {
      const res = await axios.post("http://localhost:5000/api/blogPosts/create",
      blogPost,{
        headers: {
          Authorization: `Bearer ${token}`, // Include JWT token in headers
        },
      });
      console.log(res.data);
      navigate("/Blogs");
    } 
    catch (err) {
      console.log(err);
    }
  };


    return (
    <div className="createBlog"> 
  <div className="CreateBlogTextdiv">
  <h1 className='createBlogTitle'>Create a Blog Post</h1>
        
        <form onSubmit={handleSubmit} className='createBlogFormBody'>
        
          <label className='createBlogTextLabel'> Title: </label>
          <br/>
          <input onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Enter blog post title' className='createBlogTextbox'value={title} />
          <br/>
          <label className='createBlogTextLabel'> Image: </label>
          <br/>
          <input type="file" onChange={(e) => handleUpload(e)} className='createBlogEnterImage'/>
          <br/>
          <label className='createBlogTextLabel'> Blog Body: </label>
          <br/>
          <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className='createBlogTextArea' placeholder='Enter Post Description' cols={30} rows={15}></textarea>
          
          <br/>
          <button type='submit' className='createBlogSubmit'>
          Publish
          </button>

        </form>
    </div>

  </div>


);

}
//onClick={handleCreate}
export default WriteBlog;
