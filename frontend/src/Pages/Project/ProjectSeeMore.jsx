import React, { useState } from "react";
import "./ProjectSeeMore.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { URL } from "../../url";

export const ProjectSeeMore = () => {
  const projectpostId = useParams().id;
  const [projectpost, setprojectPost] = useState({});
  const fetchproPost = async () => {
    try {
      const res = await axios.get(`${URL}/api/posts/${projectpostId}`);
      //console.log(res.data)
      setprojectPost(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchproPost();
  }, [projectpostId]);

  return (
    <div>
      <h1 className="project_title">{projectpost.project_name}</h1>
      <hr className="project_line"></hr>
      <div className="project_inline_user">
        <div className="project_userprofile"></div>
        <div className="project_user">
          <p>Published by {projectpost.name}</p>
          <p className="project_mail">{projectpost.email}</p>
          <p>{new Date(projectpost.updatedAt).toString().slice(0, 15)}</p>
          <p>{new Date(projectpost.updatedAt).toString().slice(16, 24)}</p>
        </div>
      </div>

      <div className="project_image">
        <img src={projectpost.project_photo} alt="Avatar"></img>
        <p className="project_figure">Image of the project</p>
      </div>

      <div>
        <div className="project_head">
          Components required for this project are:
        </div>
        <div className="project_describe">
          {/* <ul>
            <li>Arduino board</li>
            <li>Arduino board</li>
            <li>Arduino board</li>
            <li>Arduino board</li>
            <li>Arduino board</li>
            <li>Arduino board</li>
  </ul> */}
          {projectpost.components}
        </div>
      </div>
      <div>
        <p className="project_head">Objectives of this project:</p>
        <p className="project_describe">
          {projectpost.objectives}
        </p>
      </div>
      <div className="project_image">
        <video width="100%" controls autoPlay loop>
          <source
            src={projectpost.project_video}
            //type="video/mp4"
          />
        </video>
        <p className="project_figure">Video explanation of the project</p>
      </div>
      <div>
        <p className="project_head">Explanation of the project:</p>
        <p className="project_describe">
          {projectpost.explanation}
        </p>
      </div>

      <div className="project_image">
        <img
          src={projectpost.circuit_diagram}
          alt="Project Image"
          width={600}
        ></img>
        <p className="project_figure">Circuit Diagram</p>
      </div>

      <div className="project_image">
        <img
          src={projectpost.pcb_design}
          alt="Project Image"
          width={600}
        ></img>
        <p className="project_figure">PCB Design</p>
      </div>

      <div>
        <p className="project_head">Refer the code through this GitHub link:</p>
        <a
          className="project_github"
          href="https://github.com/flesler/jquery.scrollTo.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          {projectpost.git_link}
        </a>
      </div>

      <div>
        <p className="project_head">Keywords:</p>
        <p className="project_describe">{projectpost.keywords}</p>
      </div>
    </div>
  );
}

export default ProjectSeeMore;