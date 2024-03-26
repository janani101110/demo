import React, { useEffect, useState } from 'react';
import axios from "axios";
import { URL, IF } from "../../url";
import { useParams } from "react-router-dom";
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import './ResoPostdetails.css'
import { ResoComment } from './ResoComment';
import { useNavigate } from "react-router-dom";

export const ResoPostdetails = () => {
  const postId = useParams().id;
  const [post, setPost] = useState({});
  const navigate =useNavigate()
  const [comments,setComments]=useState([])
  const [comment,setComment]=useState("")

  const fetchPost = async () => {
    try {
      const res = await axios.get(`${URL}/api/resoposts/${postId}`);
      setPost(res.data);
    } catch (err) {
      console.log(err); // Log any errors that occur during fetching
    }
  };

  const handleDeletePost = async () => {
    try {
      const res = await axios.delete(`${URL}/api/resoposts/${postId}`, { withCredentials: true });
      console.log(res.data);
      navigate("/motionSen");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  
  

  useEffect(() => {
    fetchPost();
  }, [fetchPost, postId]);

  const fetchPostComments=async()=>{
    try{
      const res=await axios.get(URL+"/api/resocomments/post/"+postId)
      setComments(res.data)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchPostComments()
  },[postId])

  const postComment=async(e)=>{
    e.preventDefault()
    try{
      const res=await axios.post(URL+"/api/resocomments/create",
      {comment:comment,postId:postId},
      {withCredentials:true})
      
      fetchPostComments()
      setComment("")
      window.location.reload(true)
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className='reso-post-details-container'>
     
      <div className="reso-post-title-wrapper">
          <h1 className='reso-post-title'>{post.title}</h1>
          <div className="reso-edit-delete-wrapper">
            <BiEdit className='reso-edit-icon' onClick={()=>navigate("/resoeditpost/"+postId)}/>
            <MdDelete className='reso-delete-icon' onClick={handleDeletePost}/>
          </div>
      </div>

      <div className='reso-post-info'>
        <p>@chathuabeyrathne</p>
        <p>{new Date (post.createdAt).toString().slice(0,15)}</p>
      </div>

      <img src={IF+post.photo}  alt="" className='reso-post-image' />
      <p className='reso-post-content'>{post.desc}</p>

      <div className='reso-post-categories'>
        <p>Categories:</p>
        <div>
          {post.categories?.map((c,i)=>(
        
            <div key={i}>{c}</div>
           
          ))}
          
        </div>
      </div>

      <div className='reso-comments-section'>
        <h3>Comments:</h3>

        {comments.map((c)=>(
        <ResoComment key={c.id} c={c}/>
        ))}


      </div>

      <div className='reso-write-comment'>
        <input onChange={(e)=>setComment(e.target.value)} type="text" placeholder='Write a comment' className='resocomsection'/>
        <button onClick={postComment}>Add Comment</button>
      </div>

      
    </div>
  );
};
