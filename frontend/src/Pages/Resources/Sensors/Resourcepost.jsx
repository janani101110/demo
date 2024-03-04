import React from 'react';
import './Sensors.css'
import {IF} from '../../../url'

export const Resourcepost = ({post}) => {
 
  return (
    <div className="res-post">
      <img src={IF+post.photo} alt="" className="res-post img" />
      <h3>{post.title}</h3>
      <p>{post.desc+"....Read more"}</p>
    </div>
  );
};

export default Resourcepost;