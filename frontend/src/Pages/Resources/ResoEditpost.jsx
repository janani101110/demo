import React, { useState, useEffect, useContext } from 'react';
import { URL } from '../../url';
import axios from 'axios';
import './Writepost.css';
import {ImCross} from 'react-icons/im'
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import {UserContext} from '../../Context/UserContext'

export const ResoEditpost = () => {

  const postId=useParams().id
  const {user}=useContext(UserContext)
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState('');
  const [cat,setCat]=useState("")
  const [cats,setCats]=useState([])

  const fetchPost=async()=>{
    try{
      const res=await axios.get(URL+"/api/resoposts/"+postId)
      setTitle(res.data.title)
      setDesc(res.data.desc)
      setFile(res.data.photo)
      setCats(res.data.categories)

    }
    catch(err){
      console.log(err)
    }
  }

  const navigate=useNavigate()

  const handleUpdate=async (e)=>{
    
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

      //image upload
      try {
        const imgUpload = await axios.post(URL + '/api/upload', data);
        console.log(imgUpload.data);
      } catch (err) {
        console.log(err);
      }
    }

//post upload
    try {
      const res = await axios.put(URL + "/api/resoposts/"+postId,post,{withCredentials:true});
      console.log(res.data);
      navigate("/motionsen");
    } 
    catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchPost()
  },[postId])

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
  
    return (
      <div className='container'>
      <h1 className='title'>Update Your Post</h1>
      <form className='form'>
        <input onChange={(e) => setTitle(e.target.value)} value={title} type='text' placeholder='Enter Post Title' className='resopostinput'/>


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

        <button onClick={handleUpdate} className='publish-btn'>
          Update
        </button>
       
      </form>
    </div>
    );
};
