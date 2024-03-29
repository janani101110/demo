import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";
//import image from "./Assets/istockphoto-1129032734-612x612.jpg";
import ProjectSeeMore from "./ProjectSeeMore";

export const ProjectCard = ({ projectpost }) => {
  /*
  const projectCard = [
    {
      image: image,
      title: "Lorem Ipsum 1",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      date: "02-01-2022",
      written: "by Rajesh Malhor",
    },
    {
      image: image,
      title: "Lorem Ipsum 2",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      date: "21-03-2022",
      written: "by Ajey Sonnan",
    },
    {
      image: image,
      title: "Lorem Ipsum 3",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      date: "08-06-2022",
      written: "by Lakshani Mihirangi",
    },
    {
      image: image,
      title: "Lorem Ipsum 4",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      date: "10-10-2022",
      written: "by Sonu Peris",
    },
    {
      image: image,
      title: "Lorem Ipsum 5",
      description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      date: "15-03-2023",
      written: "by Amalsha Ranasinghe",
    },
    {
      image: image,
      title: "Lorem Ipsum 6",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      date: "25-06-2023",
      written: "by Athilan Kandamby",
    },
  ];

  */

  return (
    <div className="project_inline_cards">
      <div className="project_card">
        <img
          className="project_card_image"
          src={projectpost.project_photo}
          alt="Avatar"
        />

        <div className="project_container">
          <p className="project_card_title">{projectpost.project_name}</p>
          <p className="project_description">{projectpost.intro}</p>

          <div>
            <Link
              //to={'/projectseemore/'+postId}
              to={`/posts/post/${projectpost._id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="project_card__btn">Explore</button>
            </Link>
          </div>

          <div className="project_details">
            <p className="project_published_details">
              {new Date(projectpost.updatedAt).toLocaleDateString()}{" "}
              {new Date(projectpost.updatedAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </p>
            {/*<p className="project_published_details">
              {new Date(projectpost.updatedAt).toString().slice(0, 15)}
            </p>
            <p className="project_published_details">
              {new Date(projectpost.updatedAt).toString().slice(16, 24)}
            </p>*/}
            <p className="project_published_details">by Athilan Kandamby</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
