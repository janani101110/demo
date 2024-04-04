import React, { useEffect, useState } from 'react';
import './Sensors.css';
import Button from '../Button';
import Sidebar from '../Sidebar';
import Resourcepost from '../Resourcepost';
import { Link } from 'react-router-dom';
import { URL } from "../../../url";
import axios from "axios";

export const LightSen = () => {
  const [resoPosts, setResoPosts] = useState([]);
  //console.log(user);

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

  // Filter temperature sensor posts
  const tempPosts = resoPosts.filter(post => post.sensorType === 'temperature');

  return (
    <div className='sensorsCollect'>
      <Sidebar />
      <div className="reso-content-container">
        <div className='resocustom-button'>
          <Link to='/writepost'><Button label="Write" onClick={() => console.log("Button clicked")} /></Link>
        </div>
        <h1 className="resoTitle" id='motion'>LIGHT SENSORS</h1>
        <div className="res-posts-container">
        {tempPosts.map((resoPost) => (
          <Resourcepost key={resoPost.id} resoPost={resoPost}/>
        ))}
        </div>
      </div>
    </div>
  );
};
