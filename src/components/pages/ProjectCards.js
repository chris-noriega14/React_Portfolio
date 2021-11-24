import React from 'react';
// import './style.css'

function ProjectCard(props) {
    return (
      <div className="card col-4">
        <div className="img-container col-4">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Description:</strong> {props.description}
            </li>
            <li>
              <strong>GitHub URL:</strong> {props.github_url}
            </li>
            <li>
              <strong>Live Link:</strong> {props.live_link}
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;
