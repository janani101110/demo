import React from 'react';
import "./Blog.css";
export const WriteBlog = () => {
    return (
    <div className="createBlog"> 
  <div className="CreateBlogTextdiv">
  <h1 className='createBlogTitle'>Create a Blog Post</h1>
        <form className='createBlogFormBody'>
          <label className='createBlogTextLabel'> Title: </label>
          <br/>
          <input type="text" placeholder='Enter post title' className='createBlogTextbox'/>
          <br/>
          <label className='createBlogTextLabel'> Image: </label>
          <br/>
          <input type="file"  className='createBlogEnterImage'/>
          <br/>
          <label className='createBlogTextLabel'> Blog Body: </label>
          <br/>
          <textarea rows={30} cols={30} className='createBlogTextArea' placeholder='Enter post body'/>
          <br/>
          <button  className='createBlogSubmit'>Create</button>
        </form>
    </div>

  </div>


);

}
//onClick={handleCreate}
export default WriteBlog;
