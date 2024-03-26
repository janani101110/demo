import React from 'react'
import { MdDelete } from 'react-icons/md';
import axios from "axios";

export const ResoComment = ({ c }) => {
  const deleteComment = async (id) => { // Accept id as a parameter
    try {
      await axios.delete(URL + "/api/resocomments/" + id, { withCredentials: true });
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='reso-comment'>
      <div className='reso-comment-header'>
        <div className='reso-com'>
          <div className='resocomuser'><h3>@chathuabeyrathna</h3></div>
          <div className='resocomdate'><p>{new Date(c.createdAt).toString().slice(0, 15)}</p></div>
        </div>
        <div className='reso-comment-actions'>
          {/* Pass c._id as a parameter */}
          <MdDelete onClick={() => deleteComment(c._id)} />
        </div>
      </div>
      <p>{c.comment}</p>
    </div>
  );
};
