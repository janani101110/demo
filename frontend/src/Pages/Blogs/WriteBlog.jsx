import React from 'react';
import "./Blog.css";
import {useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'




export const WriteBlog = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');


  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogPost = {
      title,
      desc,
    };
   //image upload firebase
    try {
      const res = await axios.post("http://localhost:5000/api/blogPosts/create",blogPost,{withCredential:true});
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
          <input type="file"  className='createBlogEnterImage'/>
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
