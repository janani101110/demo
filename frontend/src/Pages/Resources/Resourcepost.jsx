import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Resourcepost = ({ resoPost }) => {

  return (
    <div className="res-post">
      <Link to={`/resopostdetails/${resoPost._id}`} key={resoPost.id}>
        <div className="respostimg">
          <img src={resoPost.photo} alt="" className="res-post img" />
        </div>
        <div className="resuserdetails">
          <p>@chathuabeyrathne</p>
          <p>{new Date(resoPost.createdAt).toString().slice(0, 15)}</p>
        </div>
        <div className="respostcontent">
          <h3>{resoPost.title}</h3>
          <p>{resoPost.desc.slice(0, 200) + '...Read more'}</p>
        </div>
      </Link>

      
    </div>
  );
};

export default Resourcepost;
