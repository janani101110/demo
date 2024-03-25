/*import React from "react";
//import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProjectForm.css";

function ProjectForm() {
  const initialValues = {
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
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formValues, isSubmit, formErrors]);
  //Here not mention before formErrors

  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!values.email) {
      errors.email = "This is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email!";
    }

    if (!values.name) {
      errors.name = "This is required";
    }

    if (!values.email) {
      errors.email = "This is required";
    }

    if (!values.project_name) {
      errors.project_name = "This is required";
    }

    if (!values.components) {
      errors.components = "This is required";
    }

    if (!values.objectives) {
      errors.objectives = "This is required";
    }

    if (!values.intro) {
      errors.intro = "This is required";
    }

    if (!values.project_photo) {
      errors.project_photo = "This is required";
    }

    if (!values.project_video) {
      errors.project_video = "This is required";
    }

    if (!values.explain) {
      errors.explain = "This is required";
    }

    if (!values.circuit_diagram) {
      errors.circuit_diagram = "This is required";
    }

    if (!values.pcb_design) {
      errors.pcb_design = "This is required";
    }

    if (!values.code) {
      errors.code = "This is required";
    }

    if (!values.keyword) {
      errors.keyword = "This is required";
    }

    return errors;
  };

  return (
    <div>
      <form
        name="ProjectDetailsForm"
        method="post"
        action=""
        onSubmit={handleSubmit}
      >
        <table frame="box" className="form">
          <table frame="box" className="frame_box_center">
            <div className="fill">
              <div className="field">
                <label>Your name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  size="98"
                  value={formValues.name}
                  onChange={handleChange}
                />
              </div>
              <p className="display_error">{formErrors.name}</p>

              <div className="field">
                <label>Your e-mail address</label>
                <input
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  size="98"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <p className="display_error">{formErrors.email}</p>

              <div className="field">
                <label>Project name</label>
                <input
                  type="text"
                  name="project_name"
                  placeholder="Project Name"
                  size="98"
                  value={formValues.project_name}
                  onChange={handleChange}
                />
              </div>
              <p className="display_error">{formErrors.project_name}</p>

              <div className="field">
                <label>Used components and libraries</label>
                <textarea
                  name="components"
                  placeholder="Components ex:ATMega32,Rain sensor"
                  cols={100}
                  rows={2}
                  value={formValues.components}
                  onChange={handleChange}
                />
              </div>
              <p className="display_error">{formErrors.components}</p>

              <div className="field">
                <label>Final goal / objectives</label>
                <textarea
                  type="text"
                  name="objectives"
                  placeholder="Objectives"
                  cols={100}
                  rows={2}
                  value={formValues.objectives}
                  onChange={handleChange}
                />
              </div>
              <p className="display_error">{formErrors.objectives}</p>

              <div className="field">
                <label>Introduction of the project</label>
                <textarea
                  type="text"
                  name="intro"
                  placeholder="Give a brief description about your project"
                  cols={100}
                  rows={2}
                  value={formValues.intro}
                  onChange={handleChange}
                />
              </div>
              <p className="display_error">{formErrors.intro}</p>

              <div className="upload">
                <label>
                  Upload a clear photo of your project as a pdf file
                </label>
                <input
                  type="file"
                  name="project_photo"
                  accept="image/*"
                  value={formValues.project_photo}
                  onChange={handleChange}
                />
              </div>
              <p className="display_error">{formErrors.project_photo}</p>

              <div className="upload">
                <label>Upload a project video</label>
                <input
                  type="file"
                  name="project_video"
                  accept="video/*"
                  value={formValues.project_video}
                  onChange={handleChange}
                />
              </div>
              <p className="display_error">{formErrors.project_video}</p>

              <div className="field">
                <label>Expalanation of the project</label>
                <textarea
                  type="text"
                  name="explain"
                  placeholder="Give a full explanation of the project"
                  cols={100}
                  rows={4}
                  value={formValues.explain}
                  onChange={handleChange}
                />
              </div>
              <p className="display_error">{formErrors.explain}</p>

              <div className="upload">
                <label>Upload the circuit/schematic diagram</label>
                <input
                  type="file"
                  name="circuit_diagram"
                  accept="image/*"
                  value={formValues.circuit_diagram}
                  onChange={handleChange}
                />
              </div>
              <p className="display_error">{formErrors.circuit_diagram}</p>

              <div className="upload">
                <label>Upload the PCB design</label>
                <input
                  type="file"
                  name="pcb_design"
                  accept="image/*"
                  value={formValues.pcb_design}
                  onChange={handleChange}
                />
              </div>
              <p className="display_error">{formErrors.pcb_design}</p>

              <div className="field">
                <label>Github repository link with the source code</label>
                <input
                  type="text"
                  name="code"
                  placeholder="Put the github link to here"
                  size="98"
                  value={formValues.code}
                  onChange={handleChange}
                />
              </div>
              <p className="display_error">{formErrors.code}</p>

              <div className="field">
                <label>Keywords</label>
                <input     
                  type="text"
                  name="keyword"
                  placeholder="Here put the keywords to find your project quick. Ex: #Rain sesnor, #Arduino"
                  size="98"
                  value={formValues.keyword}
                  onChange={handleChange}
                />
              </div>
              <p className="display_error">{formErrors.keyword}</p>

              <button type="submit" className="form_submit">Submit</button>

              {isSubmit && Object.keys(formErrors).length === 0 && (
                <div className="ui_message_success">
                  Your data recorded. Thank you!
                </div>
              )}

              {isSubmit && Object.keys(formErrors).length > 0 && (
                <div className="ui_message_error">
                  Error: Please fill in all the required fields.
                </div>
              )}
            </div>
          </table>
        </table>
      </form>
    </div>
  );
}

export default ProjectForm;
*/

import React from "react";
import "./ProjectForm.css";
import { useState } from "react";

export default function ProjectForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project_name, setProject_name] = useState("");
  const [components, setComponents] = useState("");
  const [objectives, setObjectives] = useState("");
  const [intro, setIntro] = useState("");
  const [project_photo, setProject_photo] = useState("");
  const [project_video, setProject_video] = useState("");
  const [explain, setExplain] = useState("");
  const [circuit_diagram, setCircuit_diagram] = useState("");
  const [pcb_design, setPcb_design] = useState("");
  const [code, setCode] = useState("");
  const [keyword, setKeyword] = useState("");

  const collectData = async (e) => {
    e.preventDefault();
    let result = await fetch ('http://localhost:4000/',{
      method: 'post',
      body: JSON.stringify({name, email, project_name, components, objectives, intro, project_photo, project_video, explain, circuit_diagram, pcb_design, code, keyword}),
      headers:{
        'Content-Type': 'application/json'
      },
    });
    result = await result.json;
    localStorage.setItem("user", JSON.stringify(result));
  }

  return (
    <div className="container">
      <form onSubmit={collectData}>
        <table frame="box" className="form">
          <h2 className="topic">Fill Your Project Details</h2>

          <table frame="box" className="frame_box_center">
            <div className="fill">
              <div className="field">
                <label>Your name</label>
                <input type="text" name="name" placeholder="Name" size="98" 
                value={name}
                onChange={(e) => setName(e.target.value)}/>
              </div>

              <div className="field">
                <label>Your e-mail address</label>
                <input
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  size="98"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div className="field">
                <label>Project name</label>
                <input
                  type="text"
                  name="project_name"
                  placeholder="Project Name"
                  size="98"
                  value={project_name}
                  onChange={(e) => setProject_name(e.target.value)}/>
              </div>

              <div className="field">
                <label>Used components and libraries</label>
                <textarea
                  name="components"
                  placeholder="Components ex:ATMega32,Rain sensor"
                  cols={100}
                  rows={2}
                  value={components}
                  onChange={(e) => setComponents(e.target.value)}/>
              </div>

              <div className="field">
                <label>Final goal / objectives</label>
                <textarea
                  type="text"
                  name="objectives"
                  placeholder="Objectives"
                  cols={100}
                  rows={2}
                  value={objectives}
                  onChange={(e) => setObjectives(e.target.value)}/>
              </div>

              <div className="field">
                <label>Introduction of the project</label>
                <textarea
                  type="text"
                  name="intro"
                  placeholder="Give a brief description about your project"
                  cols={100}
                  rows={2}
                  value={intro}
                  onChange={(e) => setIntro(e.target.value)}/>
              </div>

              <div className="upload">
                <label>
                  Upload a clear photo of your project as a pdf file
                </label>
                <input type="file" name="project_photo" accept="image/*"
                value={project_photo}
                onChange={(e) => setProject_photo(e.target.value)}/>
              </div>

              <div className="upload">
                <label>Upload a project video</label>
                <input type="file" name="project_video" accept="video/*" 
                value={project_video}
                onChange={(e) => setProject_video(e.target.value)}/>
              </div>

              <div className="field">
                <label>Expalanation of the project</label>
                <textarea
                  type="text"
                  name="explain"
                  placeholder="Give a full explanation of the project"
                  cols={100}
                  rows={4}
                  value={explain}
                  onChange={(e) => setExplain(e.target.value)}/>
              </div>

              <div className="upload">
                <label>Upload the circuit/schematic diagram</label>
                <input type="file" name="circuit_diagram" accept="image/*" 
                value={circuit_diagram}
                onChange={(e) => setCircuit_diagram(e.target.value)}/>
              </div>

              <div className="upload">
                <label>Upload the PCB design</label>
                <input type="file" name="pcb_design" accept="image/*" 
                value={pcb_design}
                onChange={(e) => setPcb_design(e.target.value)}/>
              </div>

              <div className="field">
                <label>Github repository link with the source code</label>
                <input
                  type="text"
                  name="code"
                  placeholder="Put the github link to here"
                  size="98"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}/>
              </div>

              <div className="field">
                <label>Keywords</label>
                <input
                  type="text"
                  name="keyword"
                  placeholder="Here put the keywords to find your project quick. Ex: #Rain sesnor, #Arduino"
                  size="98"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}/>
              </div>
              <button type="submit" className="form_submit">
                Submit
              </button>
            </div>
          </table>
        </table>
      </form>
    </div>
  );
}

