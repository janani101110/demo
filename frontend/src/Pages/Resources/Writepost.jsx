import React, { useState } from 'react';
import { URL } from '../../url';
import axios from 'axios';
import './Writepost.css';
import { useNavigate } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import { imageDb } from '../../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

export const Writepost = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [cats, setCats] = useState([]);
  const [cat, setCat] = useState('');
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const deleteCategory = (i) => {
    let updatedCats = [...cats];
    updatedCats.splice(i, 1); // Corrected to remove one element at index i
    setCats(updatedCats);
  };

  const addCategory = () => {
    setCats([...cats, cat]);
    setCat('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload image to Firebase Storage
    if (file) {
      const imgRef = ref(imageDb, `resourcesimages/${v4()}`);
      try {
        await uploadBytes(imgRef, file);
        const downloadURL = await getDownloadURL(imgRef);
        console.log('Download URL:', downloadURL);

        const resoPost = {
          title,
          desc,
          categories: cats,
          photo: downloadURL,
        };

        // Post upload
        const res = await axios.post(URL + '/api/resoposts/create', resoPost, { withCredentials: true });
        console.log(res.data);
        navigate('/motionsen');
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Write Your Post</h1>
      <form onSubmit={handleSubmit} className="form">
        <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter Post Title" className="resopostinput" value={title} />

        <div className="reso-post-categories-container">
          <div className="reso-category-input">
            <input value={cat} onChange={(e) => setCat(e.target.value)} type="text" placeholder="Enter Post Categories" className="resoaddcategory" />
            <div onClick={addCategory} className="reso-add-button">
              Add
            </div>
          </div>

          <div className="reso-category-list">
            {cats?.map((c, i) => (
              <div key={i} className="reso-category-item">
                <p>{c}</p>
                <p onClick={() => deleteCategory(i)} className="reso-delete-button">
                  <ImCross />
                </p>
              </div>
            ))}
          </div>
        </div>

        <input onChange={handlePhotoChange} type="file" className="file-input" />

        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className="description" placeholder="Enter Post Description" cols={30} rows={15}></textarea>

        <button type="submit" className="publish-btn">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Writepost;
