import React, { useState } from 'react';
import { URL } from '../../url';
import axios from 'axios';
import './Writepost.css';
import {ImCross} from 'react-icons/im'

export const ResoEditpost = () => {

  const [cat,setCat]=useState("")
  const [cats,setCats]=useState([])

  const deleteCategory=(i)=>{
    let updatedCats=[...cats]
    updatedCats.splice(i)
    setCats(updatedCats)
  }

  const addCategory=()=>{
    let updatedCats=[...cats]
    updatedCats.push(cat)
    setCat("")
    setCats(updatedCats)
  }

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState('');
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const formData = new FormData();
      formData.append('title', title);
      formData.append('desc', desc);
      formData.append('file', file);
      
      try {
        if (file) {
          const filename = Date.now() + file.name;
          formData.append('photo', filename);
          await axios.post(URL + '/api/upload', formData); // Upload image first
        }
        
        // Create or update post
        const res = await axios.post(URL + '/api/resoposts/create', formData);
        console.log('Post created/updated:', res.data);
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <div className='container'>
      <h1 className='title'>Update Your Post</h1>
      <form onSubmit={handleSubmit} className='form'>
        <input onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Enter Post Title' className='resopostinput'value={title} />


        <div className="reso-post-categories-container">
          <div className="reso-category-input">
              <input value={cat} onChange={(e)=>setCat(e.target.value)} type="text" placeholder="Enter Post Category" className='resoaddcategory'/>
              <div onClick={addCategory} className="reso-add-button">Add</div>
          </div>

          <div className="reso-category-list">
            {cats?.map((c,i)=>(
              <div key={i} className="reso-category-item">
                <p>{c}</p>
                <p onClick={() => deleteCategory(i)} className="reso-delete-button"><ImCross /></p>
              </div>
            ))}
    
          </div>
        </div>


        <input onChange={(e) => setFile(e.target.files[0])} type='file' className='file-input' />
        
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className='description' placeholder='Enter Post Description' cols={30} rows={15}></textarea>

        <button type='submit' className='publish-btn'>
          Update
        </button>
       
      </form>
    </div>
    );
};
