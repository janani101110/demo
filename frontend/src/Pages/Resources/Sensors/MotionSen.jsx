import React, { useEffect, useState } from 'react';
import './Sensors.css';
import Button from '../Button';
import Sidebar from '../Sidebar';
import Resourcepost from '../Resourcepost';
import { Link } from 'react-router-dom';
import { URL } from "../../../url";
import axios from "axios";

export const MotionSen = () => {
  const [resoPosts, setResoPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const fetchResoPosts = async () => {
    try {
      const res = await axios.get(URL + "/api/resoposts"); 
      setResoPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchResoPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = resoPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='sensorsCollect'>
      <Sidebar />
      <div className="reso-content-container">
        <div className='resocustom-button'>
          <Link to='/writepost'><Button label="Write" onClick={() => console.log("Button clicked")} /></Link>
        </div>
        <h1 className="resoTitle" id='motion'>MOTION SENSORS</h1>
        <div className="res-posts-container">
          {currentPosts.map((resoPost) => (
            <Resourcepost key={resoPost.id} resoPost={resoPost}/>
          ))}
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={resoPosts.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
