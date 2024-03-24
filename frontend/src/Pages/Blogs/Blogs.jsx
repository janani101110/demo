import React, {  useEffect, useState } from 'react'
import "./Blog.css";
import {Link} from "react-router-dom";

import { Search } from "../../Component/Search/Search";
import Blogspost from './Blogspost';
import axios from "axios";
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
//import { UserContext } from "../../Context/UserContext";

export const Blogs = () => {
  const [blogPost, setPost] = useState([]);
  const [pageCount, setPageCount] = useState(0);

 

  const fetchPosts=async(selectedPage)=>{
    try {
      const res = await axios.get(`http://localhost:5000/api/blogPosts?page=${selectedPage}&limit=6`);
      setPost(res.data);
    const totalPosts = res.data.totalPosts; // Assuming your API response includes totalPosts
    const postsPerPage = 6; // Assuming 6 posts per page
    const calculatedPageCount = Math.ceil(totalPosts / postsPerPage);
    setPageCount(calculatedPageCount);
    } catch (err) {
      console.error('Error fetching blog posts:', err);
    }
  }

  useEffect(()=>{
    fetchPosts(0)
  },[])

  
  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    fetchPosts(selectedPage);
  };

  return (
    <div className="BlogHome">


      <div className='blogBanner'>
        <div className='bannerSection'>
         <p className ="blogQuote"> Join the community, Explore, Learn, Create - Your hub for all things electronic, 
          empowering every step of your IoT journey with Trivia, and share your own insights with just a click!! </p>
        <br/>
        <div className = "Bannercreate">
                <Link to = "/WriteBlog" className = "createLink"> Create </Link>
            </div>
        </div>
        
      </div>


            <div className='blog-post'>
                <Search />
            </div>

          <div className='blogFilters'> 
            <div className ="filterButton">
              Popular
            </div>

            <div className ="filterButton">
              Latest
            </div>

            <div className ="filterButton">
              A-Z
            </div>

            <div className ="filterButton">
              Z-A
            </div>

          </div>

            <div className='bpost'>
            {blogPost.map((blogPost) => (   
       <Blogspost style={{textDecoration: 'none'}} key={blogPost._id} blogPost={blogPost}/>
     ))}
            </div>

            <div className="pagination-container">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
         
     
          </div>
          
  ) 
}


export default Blogs;
