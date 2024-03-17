import React, { useEffect, useState } from 'react';
import axios from "axios";
import { URL, IF } from "../../url";
import { useParams } from "react-router-dom";
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import './ResoPostdetails.css'
import { ResoComment } from './ResoComment';

export const ResoPostdetails = () => {
  const postId = useParams().id;
  const [post, setPost] = useState({});

  const fetchPost = async () => {
    try {
      const res = await axios.get(`${URL}/api/resoposts/${postId}`);
      setPost(res.data);
    } catch (err) {
      console.log(err); // Log any errors that occur during fetching
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  return (
    <div className='reso-post-details-container'>
     
      <div className="reso-post-title-wrapper">
          <h1 className='reso-post-title'>{post.title}</h1>
          <div className="reso-edit-delete-wrapper">
            <BiEdit className='reso-edit-icon' />
            <MdDelete className='reso-delete-icon' />
          </div>
      </div>

      <div className='reso-post-info'>
        <p>@chathuabeyrathna</p>
        <p>{new Date (post.updatedAt).toString().slice(0,15)}</p>
      </div>

      <img src={IF+post.photo}  alt="" className='reso-post-image' />
      <p className='reso-post-content'>{post.desc}</p>

      <div className='reso-post-categories'>
        <p>Categories:</p>
        <div>
          {post.categories?.map((c,i)=>(
            <>
            <div key={i}>{c}</div>
            </>
          ))}
          
        </div>
      </div>

      <div className='reso-comments-section'>
        <h3>Comments:</h3>

        <ResoComment/>
        <ResoComment/>


      </div>

      <div className='reso-write-comment'>
        <input type="text" placeholder='Write a comment' className='resocomsection'/>
        <button>Add Comment</button>
      </div>

      
    </div>
  );
};
