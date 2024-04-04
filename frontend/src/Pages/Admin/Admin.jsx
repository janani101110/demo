import react from "react";
import { ReactDOM } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faBell, faHome, faMicrochip, faBook, faBlog, faCartShopping, faUser, faChartLine, faCircleCheck, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import BlogsAdmin from "./BlogsAdmin";
import PerformanceAdmin from "./PerformanceAdmin";
import ProjectsAdmin from "./ProjectsAdmin";
import ResourcesAdmin from "./ResourcesAdmin";
import ShoppingAdmin from "./ShoppingAdmin";
import UsersAdmin from "./UsersAdmin";


export const Admin = () => {
  return (
    <div>
      <div className="admin_container">
        <div className="admin_line_grid">
          <nav className="admin_nav">
            <h2>Gavesha</h2>
          </nav>
          <div className="admin_nav_grid">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faBell} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faUserCircle} />
              </a>
            </li>
          </div>
        </div>

        <div className="admin_sidebar-container">
          <div className="admin_nav-option">
            <li>
              <a href="" >
                <FontAwesomeIcon icon={faHome} /> Dashboard{" "}
              </a>
            </li>

           <Link to={'/projectsadmin'}> <li>
              <a href="">
                <FontAwesomeIcon icon={faMicrochip} /> Projects{" "}
              </a>
            </li></Link>

           <Link to={'/projectsresources'}>  <li> 
              <a href="">
                <FontAwesomeIcon icon={faBook} /> Resources{" "}
              </a>
            </li></Link>

            <Link to={'/blogsadmin'}> <li>
              <a href="#">
                <FontAwesomeIcon icon={faBlog} /> Blogs{" "}
              </a>
            </li></Link> 

           <Link to={'/shoppingsadmin'}> <li>
              <a href="#">
                <FontAwesomeIcon icon={faCartShopping} /> Shopping{" "}
              </a>
            </li></Link> 

           <Link to={'/usersadmin'}> <li>
              <a href="#">
                <FontAwesomeIcon icon={faUser} /> Users{" "}
              </a>
            </li></Link> 

            <Link to={'/performanceadmin'}> <li>
              <a href="#">
                <FontAwesomeIcon icon={faChartLine} /> Performance{" "}
              </a>
            </li></Link> 

          </div>
        </div>
      </div>
      <div className="admin_content">
        <div className="admin_griditem1">Projects</div>
        <div className="admin_griditem2">
        <Link to={'/projectsadmin'}><div className="admin_box">Project to be commented</div></Link>
        <Link to={'/projectsadmin'}><div className="admin_box">Approved project</div></Link>
        <Link to={'/projectsadmin'}><div className="admin_box">Rejected project</div></Link>
        </div>
        <hr></hr>
        <div className="admin_griditem3">Resources</div>
        <div className="admin_griditem4">
        <Link to={'/projectsresources'}><div className="admin_box">Resources to be commented</div></Link>
        <Link to={'/projectsresources'}><div  className="admin_box">Approved resources</div></Link>
        <Link to={'/projectsresources'}> <div className="admin_box">Rejected resources</div></Link>
        </div>
        <hr></hr>
        <div className="admin_griditem6">
        <div className="admin_box">Blogs graph</div>
          <div className="admin_box">Shopping grpah</div>
          <div className="admin_box">Forum</div>
        </div>
      </div>

      {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
    </div>
  );
};

export default Admin;
