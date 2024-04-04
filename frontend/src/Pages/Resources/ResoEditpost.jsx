import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { imageDb } from '../../firebase';
import { URL } from '../../url';
import './Writepost.css';
import { ImCross } from 'react-icons/im';

export const ResoEditpost = () => {
  const { id: resoPostId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState('');
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchResoPost = async () => {
      try {
        const res = await axios.get(`${URL}/api/resoposts/${resoPostId}`);
        setTitle(res.data.title);
        setDesc(res.data.desc);
        setCats(res.data.categories);
        setFile(res.data.photo); // Ensure previous image is retained
      } catch (err) {
        console.log(err);
      }
    };
    fetchResoPost();
  }, [resoPostId]);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (file) {
      const imgRef = ref(imageDb, `resourcesimages/${uuidv4()}`);
      try {
        await uploadBytes(imgRef, file);
        const downloadURL = await getDownloadURL(imgRef);

        const resoPost = {
          title,
          desc,
          categories: cats,
          photo: downloadURL,
        };

        const res = await axios.put(`${URL}/api/resoposts/${resoPostId}`, resoPost, { withCredentials: true });
        console.log(res.data);
        navigate('/motionsen');
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('No file selected');
    }
  };

  const deleteCategory = (i) => {
    const updatedCats = [...cats];
    updatedCats.splice(i, 1);
    setCats(updatedCats);
  };

  const addCategory = () => {
    const updatedCats = [...cats];
    updatedCats.push(cat);
    setCat('');
    setCats(updatedCats);
  };

  return (
    <div className='container'>
      <h1 className='title'>Update Your Post</h1>
      <form className='form'>
        <input onChange={(e) => setTitle(e.target.value)} value={title} type='text' placeholder='Enter Post Title' className='resopostinput' />
        <div className="reso-post-categories-container">
          <div className="reso-category-input">
            <input value={cat} onChange={(e) => setCat(e.target.value)} type="text" placeholder="Enter Post Category" className='resoaddcategory' />
            <div onClick={addCategory} className="reso-add-button">Add</div>
          </div>
          <div className="reso-category-list">
            {cats?.map((c, i) => (
              <div key={i} className="reso-category-item">
                <p>{c}</p>
                <p onClick={() => deleteCategory(i)} className="reso-delete-button"><ImCross /></p>
              </div>
            ))}
          </div>
        </div>
        <input onChange={handlePhotoChange} type="file" className="file-input" />
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className='description' placeholder='Enter Post Description' cols={30} rows={15}></textarea>
        <button onClick={handleUpdate} className='publish-btn'>
          Update
        </button>
      </form>
    </div>
  );
};
