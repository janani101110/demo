import React, {useState } from 'react';
import { URL } from '../../url';
import axios from 'axios';
import './Writepost.css'

export const Editpost = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState('');
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const post = {
        title,
        desc,
      };
  
      if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append('img', filename);
        data.append('file', file);
        post.photo = filename;
  
        try {
          const imgUpload = await axios.post(URL + '/api/upload', data);
          console.log(imgUpload.data);
        } catch (err) {
          console.log(err);
        }
      }
  
      try {
        const res = await axios.post(URL + '/api/posts/create', {title,desc});
        console.log('Post created:',res.data);
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <div className='container'>
        <h1 className='title'>Update Your Post</h1>
        <form onSubmit={handleSubmit} className='form'>
          <input onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Enter Post Title' className='input'value={title} />
          <input onChange={(e) => setFile(e.target.files[0])} type='file' className='file-input' />
          
          <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className='description' placeholder='Enter Post Description' cols={30} rows={15}></textarea>
          <button type="submit" className='publish-btn'>
            Update
          </button>
        </form>
      </div>
    );
  };
  