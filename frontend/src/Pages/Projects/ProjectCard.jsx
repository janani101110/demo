import React from "react";
//import ReactDOM from "react-dom/client";
//import App from "./App";
import "./ProjectCard.css";
import { Link } from "react-router-dom";
import Project1Image from "./images/istockphoto-1129032734-612x612.jpg"
//import ProjectCard from "/ProjectCard";
//import images from "../images/istockphoto-1129032734-612x612.jpg";

const ProjectCard = ({ page }) => {
  const startIndex = (page - 1) * 4;
  const cards = [
    {
      image: Project1Image,
      title: "Lorem Ipsum",
      description: "Card 1: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
      image: Project1Image,
      title: "Lorem Ipsum",
      description: "Card 2: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },

    {
      image: Project1Image,
      title: "Lorem Ipsum",
      description: "Card 3: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
      image: Project1Image,
      title: "Lorem Ipsum",
      description: "Card 4: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
      image: Project1Image,
      title: "Lorem Ipsum",
      description: "Card 5: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
      image: Project1Image,
      title: "Lorem Ipsum",
      description: "Card 6: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    }
  ];

  const visibleCards = cards.slice(startIndex, startIndex + 4);

  return (
    <>
     {visibleCards.map((card, index) => (
        <div className="card" key={index}>
      <div className="card__body">
        <img className="card__img" src={card.image} alt="Image" />
        <h2 className="card__title">{card.title}</h2>
        <p className="card__description">{card.description}</p>
      </div>
      <Link to="/projectseemore" target="_blank" rel="noopener noreferrer">
        <button className="card__btn">See more</button>
      </Link>
    </div>
     ))}
      </>
  );
};

/*const DisplayCard = () => {
  return (
    <div className="wrapper">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};
*/

//ReactDOM.render(<App />, document.getElementById("root"));
//export { ProjectCard, DisplayCard };
export default ProjectCard;
//export default DisplayCard;