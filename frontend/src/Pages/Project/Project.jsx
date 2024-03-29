import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { URL } from "../../url";
import "./ProjectHome.css";
import ProjectCard from "./ProjectCard";
import ProjectPgNavi from "./ProjectPgNavi";
//import ProjectViewAll from "./ProjectViewAll";

export const Projects=() =>{
  const [projectposts, setProjectposts] = useState([]);

  //fetching data
  const fetchProjectposts = async () => {
    try {
      const res = await axios.get(URL + "/api/projectposts/");
      //console.log(res.data)
      setProjectposts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  //to see the posts
  useEffect(() => {
    fetchProjectposts();
  }, []);

  return (
    <div>
      <Link to="/projectviewall" target="_blank" rel="noopener noreferrer">
        <p className="project_viewall">View all project ideas</p>
      </Link>

   {/*   <ProjectCard />
      <ProjectCard />
  <ProjectCard /> */}
  <div className="project_grid">
    {projectposts.map((projectpost) =>(
      <ProjectCard key={projectpost._id} projectpost={projectpost} />
    )) }
  </div>


      <hr className="project_line"></hr>

      <div className="project_box">
        <p id="para">
          If you are like to share your properly finished project <br /> among
          other electronic hobbists as you, <br /> This place is yours!
        </p>
        <Link to="/projectform"  rel="noopener noreferrer">
          <button className="projectclick_button">Post Your Project Here!</button>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
