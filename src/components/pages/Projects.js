import React, {useState} from 'react';
import ProjectCard from './ProjectCards';
import projects from './projects.json';


export default function Projects() {
  
  const [projectList, setProjectList] = useState(projects);
  return (
    <div style={{paddingRight:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
      <h1 className="title">Project List</h1>
      {projectList.map(projects => (
        <div>
        <ProjectCard
          id={projects.id}
          key={projects.id}
          name={projects.name}
          image={projects.image}
          description={projects.description}
          github_url={projects.github_url}
          live_link={projects.live_link}
        />
        </div>
      ))}
    </div>
  );
}
