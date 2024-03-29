import React from "react";
import "./ProjectForm.css";
import { useState } from "react";
import axios from "axios";
import { URL } from "../../url";
import {useNavigate} from 'react-router-dom';

export const  ProjectForm=() =>{
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project_name, setProjectName] = useState("");
  const [components, setComponents] = useState("");
  const [objectives, setObjectives] = useState("");
  const [intro, setIntro] = useState("");
  const [project_photo, setProjectPhoto] = useState(null);
  const [project_video, setProjectVideo] = useState(null);
  const [explanation, setExplanation] = useState("");
  const [circuit_diagram, setCircuitDiagram] = useState(null);
  const [pcb_design, setPcbDesign] = useState(null);
  const [git_link, setGitLink] = useState("");
  const [keywords, setKeywords] = useState("");

  /*const initialValues = {
    name: "",
    email: "",
    project_name: "",
    components: "",
    objectives: "",
    intro: "",
    project_photo: "",
    project_video: "",
    explain: "",
    circuit_diagram: "",
    pcb_design: "",
    code: "",
    keyword: "",
  };*/

  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault(); //automatically refresh
    const projectpost = {
      name,
      email,
      project_name,
      components,
      objectives,
      intro,
      project_photo,
      project_video,
      explanation,
      circuit_diagram,
      pcb_design,
      git_link,
      keywords
    }

    if(project_photo && project_video && circuit_diagram && pcb_design){
      const data=new FormData()
      const filename = Date.now()+project_photo.name;
      data.append("img",filename)
      data.append("file",project_photo)
      projectpost.project_photo=filename
      projectpost.pcb_design=filename
      projectpost.circuit_diagram=filename
      projectpost.project_video=filename

      //image upload
      try{
        const imgUpload = await axios.post(URL+"/api/upload",data)
        console.log(imgUpload.data)
      }
      catch(err){
        console.log(err)
      }
    }

    //post upload
    console.log(projectpost)
    try{
      //const res=await axios.post(URL+"/api/posts/create", post, {withCredentials:true})
      const res = await axios.post(URL+"/api/projectposts/create", projectpost, { withCredentials: true })
     console.log(res.data)
     navigate("/project")
    }
    catch(err){
      console.log(err)
    }

    
  };

  
  return (
    <div className="project_container">
      <form onSubmit={handleSubmit}>
        <div className="project_form">
          <h2 className="project_topic">Fill below fields</h2>

          <div className="project_frame_box_center">
            <div className="project_fill">
              <div className="project_field">
                <label>Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>

              <div className="project_field">
                <label>E-mail address</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="email"
                  placeholder="E-mail"
                />
              </div>

              <div className="project_field">
                <label>Project name</label>
                <input
                  onChange={(e) => setProjectName(e.target.value)}
                  type="text"
                  name="project_name"
                  placeholder="Project Name"
                />
              </div>

              <div className="project_field">
                <label>Used components and libraries</label>
                <textarea
                  onChange={(e) => setComponents(e.target.value)}
                  name="components"
                  placeholder="Components ex:ATMega32,Rain sensor"
                  cols={100}
                  rows={2}
                />
              </div>

              <div className="project_field">
                <label>Final goal / objectives</label>
                <textarea
                  onChange={(e) => setObjectives(e.target.value)}
                  type="text"
                  name="objectives"
                  placeholder="Objectives"
                  cols={100}
                  rows={2}
                />
              </div>

              <div className="project_field">
                <label>Give an brief introduction about the project</label>
                <textarea
                  onChange={(e) => setIntro(e.target.value)}
                  type="text"
                  name="intro"
                  placeholder="Give a brief description about your project"
                  cols={100}
                  rows={2}
                />
              </div>

              <div className="project_upload">
                <label>Upload a clear image of your project</label>
                <input
                  onChange={(e) => setProjectPhoto(e.target.files[0])}
                  type="file"
                  name="project_photo"
                  accept="image/*"
                />
              </div>

              <div className="project_upload">
                <label>Upload the video about the project</label>
                <input
                  onChange={(e) => setProjectVideo(e.target.files[0])}
                  type="file"
                  name="project_video"
                  accept="video/*"
                />
              </div>

              <div className="project_field">
                <label>Explain your project descriptively</label>
                <textarea
                  onChange={(e) => setExplanation(e.target.value)}
                  type="text"
                  name="explain"
                  placeholder="Give a full explanation of the project"
                  cols={100}
                  rows={4}
                />
              </div>

              <div className="project_upload">
                <label>Upload the circuit/schematic diagram</label>
                <input
                  onChange={(e) => setCircuitDiagram(e.target.files[0])}
                  type="file"
                  name="circuit_diagram"
                  accept="image/*"
                />
              </div>

              <div className="project_upload">
                <label>Upload the PCB design</label>
                <input
                  onChange={(e) => setPcbDesign(e.target.files[0])}
                  type="file"
                  name="pcb_design"
                  accept="image/*"
                />
              </div>

              <div className="project_field">
                <label>Github repository link with the source code</label>
                <input
                  onChange={(e) => setGitLink(e.target.value)}
                  type="text"
                  name="code"
                  placeholder="Put the github link to here"
                />
              </div>

              <div className="project_field">
                <label>Keywords</label>
                <input
                  onChange={(e) => setKeywords(e.target.value)}
                  type="text"
                  name="keyword"
                  placeholder="Here put the keywords to find your project quick. Ex: #Rain sesnor, #Arduino"
                />
              </div>

              <button
                type="submit"
                className="project_form_submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;
