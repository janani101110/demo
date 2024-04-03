import React from "react";
import PostImage from "../images/postImage.jpg";

function Post(){
    return(
        <div className="postCard">
            
        <img src={PostImage} className="postImage"/> 
  

    <div className="postText">
        <div className="postTitle">
            what is cloud computing
        </div>

        <div className="postDescription">
        Explore the latest trends in IT, from cybersecurity to AI advancements. 
        Discover how cloud computing is revolutionizing businesses and learn about 
        the potential of blockchain technology in reshaping traditional industries.
      </div>
        
    </div>
    
   </div>
    );
}

export default Post;
