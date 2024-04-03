import React, {  useEffect, useState } from 'react'
import "./Blog.css";
import {Link} from "react-router-dom";

import { Search } from "../../Component/Search/Search";
import Blogspost from './Blogspost';
import axios from "axios";
//import { UserContext } from "../../Context/UserContext";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};



  

export const Blogs = () => {
  const [blogPost, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [sortOrder, setSortOrder] = useState('desc');
  const [activeFilter, setActiveFilter] = useState(null);

  const sortPosts = async (order) => {
    try {
      let sortedPosts = [...blogPost];
      if (order === 'asc') {
        sortedPosts.sort((a, b) => a.title.localeCompare(b.title));
      } else if (order === 'desc') {
        sortedPosts.sort((a, b) => b.title.localeCompare(a.title));
      }
      setPost(sortedPosts);
      setSortOrder(order);
      setActiveFilter(order);
    } catch (err) {
      console.error('Error sorting blog posts:', err);
    }
  };
  



  const fetchBlogPosts=async()=>{
    try {
      const res = await axios.get(`http://localhost:5000/api/blogPosts?sort=${sortOrder}`);
      setPost(res.data);
    } catch (err) {
      console.error('Error fetching blog posts:', err);
    }
  }

  useEffect(() => {
    fetchBlogPosts('desc'); // Fetch latest posts on component mount
    setActiveFilter('latest');
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPost.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  const showLatestPosts = () => {
    fetchBlogPosts('-createdAt'); // Fetch blog posts sorted by createdAt in descending order
    setActiveFilter('latest');
  };

  const getBackgroundClass = () => {
    switch (activeFilter) {
      case 'latest':
        return 'latestBackground';
      case 'asc':
        return 'ascBackground';
      case 'desc':
        return 'descBackground';
      default:
        return 'defaultBackground';
    }
  };
 

  return (
    <div className={`blogHome ${getBackgroundClass()}`}>


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


                <Search />
            

          <div className='blogFilters'> 
            <button className ="filterButton">
              Popular
            </button>

            <button className = {`filterButton ${activeFilter === 'latest' ? 'activeFilterButton' : ''}`} onClick={showLatestPosts}>
              Latest
            </button>

            <button className={`filterButton ${activeFilter === 'asc' ? 'activeFilterButton' : ''}`} onClick={() => sortPosts('asc')}>
              A-Z
            </button>

            <button className ={`filterButton ${activeFilter === 'desc' ? 'activeFilterButton' : ''}`}  onClick={() => sortPosts('desc')}>
              Z-A
            </button>

          </div>

          <div className='bpost'>
        {currentPosts.map((blogPost) => (
          <Blogspost style={{ textDecoration: 'none' }} key={blogPost._id} blogPost={blogPost} />
        ))}
      </div>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={blogPost.length}
        paginate={paginate}
      />
    </div>
         
     
      
          
  ) 
}


export default Blogs;
