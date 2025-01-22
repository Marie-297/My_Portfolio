
import Project from '@/Components/Project';
import React from 'react';
import { FaLocationArrow } from "react-icons/fa";

interface Project {
  id: number;
  tags: string[],
  title: string;
  img: string;
  link?: string;
}

const projectsData: Project[] = [
  { id: 1, title: "Project 1", img: "", tags: [""], link: "" },
  { id: 2, title: "Project 1", img: "", tags: [""], link: "" },
  { id: 3, title: "Project 1", img: "", tags: [""], link: "" },
  { id: 4, title: "Project 1", img: "", tags: [""], link: "" },
  { id: 5, title: "Project 1", img: "", tags: [""], link: "" },
  { id: 6, title: "Project 1", img: "", tags: [""], link: "" },
  { id: 7, title: "Project 1", img: "", tags: [""], link: "" },
  { id: 8, title: "Project 1", img: "", tags: [""], link: "" },
  { id: 9, title: "Project 1", img: "", tags: [""], link: "" },
  { id: 10, title: "Project 1", img: "", tags: [""], link: "" },
  { id: 11, title: "Project 1", img: "", tags: [""], link: "" },
  { id: 12, title: "Project 1", img: "", tags: [""], link: "" },
  { id: 13, title: "Project 1", img: "", tags: [""], link: "" },
  { id: 14, title: "Project 1", img: "", tags: [""], link: "" },
  { id: 15, title: "Project 1", img: "", tags: [""], link: "" },
  { id: 16, title: "Project 1", img: "", tags: [""], link: "" },
  { id: 17, title: "Project 1", img: "", tags: [""], link: "" },
  { id: 18, title: "Project 1", img: "", tags: [""], link: "" },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className='text-white pt-16'>
      <h2 className='text-2xl font-extrabold text-center'>My Portfolio</h2>
      <Project />
      <div className='w-[80%] p-16 mt-10 bg-zinc-700 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center'>
        {projectsData.map((project) => (
          <div key={project.id} className='rounded-lg hover:scale-105 transition-all duration-300 shadow-2xl p-8 bg-zinc-800'>
            <figure className="relative w-full h-[105px] mx-auto aspect-square rounded-lg mb-1 overflow-hidden">
              <img src={project.img} alt={project.title} loading="lazy" className="h-full w-full absolute rounded-lg inset-0 object-contain transition-opacity duration-500 " />
            </figure>
            <div className="flex items-center justify-between gap-2">
              <div>
                <h3 className="title-1 mb-1">{project.title}</h3>
                <div className="flex flex-wrap items-center gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="h-4 text-sm text-zinc-400 bg-zinc-50/5 grid place-items-center px-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-6 h-6 rounded-lg grid place-items-center bg-sky-100 text-zinc-950 shrink-0">
                <span className="material-symbol-rounded" aria-hidden="true">
                  <FaLocationArrow size={12} />
                </span>
              </div>
                    
              <a href={project.link} target="_blank" className="inset-0 absolute">
              <span className="sr-only">Read More</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
