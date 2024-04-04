import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Sensors.css';
import Sidebar from '../Sidebar';
import Resourcepost from '../Resourcepost';
import { URL } from '../../../url';
import axios from 'axios';
import { Search } from '../../../Component/Search/Search';

export const Sensors = () => {
  const { search } = useLocation();
  const [noResults, setNoResults] = useState(false);
  const [resoPosts, setResoPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const fetchResoPosts = async () => {
    try {
      const res = await axios.get(URL + '/api/resoposts/' + search);
      setResoPosts(res.data);
      if (res.data.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchResoPosts();
  }, [search]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = resoPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="sensorsCollect">
      <Sidebar />
      <div className="reso-content-container">
        <Search />
        <h1 className="resoTitle">SENSORS</h1>
        <div className="res-posts-container">
          {!noResults ? (
            currentPosts.map((resoPost) => (
              <Resourcepost key={resoPost.id} resoPost={resoPost} />
            ))
          ) : (
            <h3>No Posts Available</h3>
          )}
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
