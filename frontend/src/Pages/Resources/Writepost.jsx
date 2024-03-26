import React from 'react';
import {useState } from 'react';
import { URL } from '../../url';
import axios from 'axios';
import './Writepost.css'
import {useNavigate} from 'react-router-dom'
import {ImCross} from 'react-icons/im'

export const Writepost = () => {

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);

  const [cat,setCat]=useState("")
  const [cats,setCats]=useState([])

  const deleteCategory=(i)=>{
    let updatedCats=[...cats]
    updatedCats.splice(i)
    setCats(updatedCats)
  }

  const addCategory = () => {
    setCats([...cats, cat]);
    setCat("");
};
  
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = {
      title,
      desc,
      categories:cats
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

//post upload
    try {
      const res = await axios.post(URL + "/api/resoposts/create",post,{withCredentials:true});
      console.log(res.data);
      navigate("/motionsen");
    } 
    catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='container'>
      <h1 className='title'>Write Your Post</h1>
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
          Publish
        </button>
       
      </form>
    </div>
  );
};

export default Writepost;