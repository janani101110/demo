import React from 'react';
import './Sensors/Sensors.css'
import {IF} from '../../url'
import { Link } from 'react-router-dom';

export const Resourcepost = ({post}) => {
 
  return (
    <div className="res-post">  
<Link to={`/resopostdetails/${post._id}`} key={post.id}>
      <div className='respostimg'>
        <img src={IF+post.photo} alt="" className="res-post img" /> 
      </div>
      <div className='resuserdetails'> 
            <p>@chathuabeyrathna</p>
            <p>{new Date (post.updatedAtDate).toString().slice(0,15)}</p>
      </div>
      <div className='respostcontent'>
          <h3>{post.title}</h3>
          <p>{post.desc.slice(0,200)+"...Read more"}</p>
      </div>
</Link>
    </div>
  );
};

export default Resourcepost;