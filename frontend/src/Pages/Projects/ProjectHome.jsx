import React, { useState, useEffect} from "react";
import axios from "axios";
//import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client"
import { Link } from "react-router-dom";
//import { useState, useEffect } from "react";
import "./ProjectHome.css";
import ProjectCard from "./ProjectCard";
import ProjectPgNavi from "./ProjectPgNavi";


 function ProjectHome() { 
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (e, page) => {
    setCurrentPage(page);
  };

  
    const [forms, setForms] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:4000/api/forms')
        .then(response => {
          setForms(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
 /* const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/") 
      .then((response) => {
        setFormData(response.data);
        setFormData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);*/

  /*const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };*/

  return (
    <div>
      <ProjectCard page={currentPage}/>

      <div>
      <ul>
        
        {forms.map((data, index) => (
          <li key={data._id}>
           <p>{data.name}</p>
            <p>{data.email}</p>
            <p>{data.project_name}</p>
            <p>{data.components}</p>
            <p>{data.objectives}</p>
            <p>{data.intro}</p>
            <p>
            {data.project_photo && <img src={data.project_photo} alt="Project" />}
            </p>
            <p>
              {data.project_video && <video controls src={data.project_video} type="video/mp4" />}
            </p>
            <p>{data.explain}</p>
            <p>{data.circuit_diagram}</p>
            <p>{data.pcb_design}</p>
            <p>{data.code}</p>
            <p>{data.keyword}</p>
          </li>
        ))}
      </ul>
      </div>

      <ProjectPgNavi onPageChange={handlePageChange}/>
      <p id="para">
        If you are like to share your finished, properly worked project <br />{" "}
        among other electronic hobbists as you, <br /> This place is yours!
      </p>
      <Link to="/projectform" target="_blank" rel="noopener noreferrer">
        <button className="click_button">Click</button>
      </Link>
     
    </div>
  );
}

export default ProjectHome;
/*
export const ProjectClick = () => {
  return (
    <div className="shopmain">
      <div className="shopup">
        <Search />
      </div>
      <div className="postbutton">
        <Link to={"/ProjectForm"}>
          <button>Click</button>
        </Link>
      </div>
    </div>
  );
};
*/