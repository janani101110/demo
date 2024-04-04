import React from 'react';
import './Blog.css'; 
import { Link } from 'react-router-dom';


const Blogspost = ({ blogPost }) => {
  // Check if blogPost is available, if not return null
  if (!blogPost) {
    return null;
  }

  // Extracting creation date of the post
  const createdAtDate = new Date(blogPost.createdAt);
  const createdDate = createdAtDate.toDateString(); 

  // Rendering the component
  return (
    <div className="postCard">
      {/* Link to view full blog post */}
      <Link style={{ textDecoration: 'none' }} to={`/InsidePost/${blogPost._id}`} key={blogPost.id}>
        {/* Blog post image */}
        <img src={blogPost.photo} alt="" className="blogPostImage" /> 
        <div className="blogPostText">
          {/* Blog post title */}
          <div className="blogPostTitle">
            {blogPost.title}
          </div>
          <br/>
          <div className="blogPostostDetails">
            {/* Blog post description with "See more" link */}
            <div className="blogPostDescription">
              {blogPost.desc.split(' ').slice(0, 60).join(' ')+ '... See more'}
            </div>
            <br/>
          </div>
        </div>
      </Link>
      {/* Rendering the creation date of the post */}
      <div className="blogPostdate">
        {createdDate}
      </div>
    </div>
  );
}

export default Blogspost; // Exporting the component
