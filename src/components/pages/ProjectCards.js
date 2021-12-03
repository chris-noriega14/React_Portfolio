import React from 'react';
import '../style.css'

function ProjectCard(props) {
    return (
      <div className="card" style={{height:"500px", width:"500px", paddingRight:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
        <div className="img-container">
          <img className="project-image" style={{height:"200px", width:"300px"}} alt={props.name} src={props.image} />
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
