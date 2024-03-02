import React from 'react';

export const Resourcepost = ({post}) => {
 
  return (
    <div className="res-post">
      <img src={post.photo} alt="" className="res-post img" />
      <h3>{post.title}</h3>
      <p>{post.desc+"....Read more"}</p>
    </div>
  );
};

export default Resourcepost;