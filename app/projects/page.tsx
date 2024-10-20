// pages/projects.tsx (or app/projects/page.tsx if using the App Router)
import React from 'react';

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   link: string;
// }

// const projects: Project[] = [
//   { id: 1, title: "Project 1", description: "Description of project 1", link: "/projects/1" },
//   { id: 2, title: "Project 2", description: "Description of project 2", link: "/projects/2" },
//   { id: 3, title: "Project 3", description: "Description of project 3", link: "/projects/3" },
// ];

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <h1 className='text-3xl font-semibold'>Projects</h1>
      {/* <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ProjectsPage;
