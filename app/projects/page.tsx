
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
  { id: 1, title: "LeaveMgt App", img: "/images/gridPic/leaveapp.png", tags: ["NextJS", "TailwindCSS", "TS", 'PostgreSQL', "Neon"], link: "https://leave-mgt-nine.vercel.app/" },
  { id: 2, title: "Shopping Website", img: "/images/gridPic/shoppingapp.png", tags: ["HTML","CSS","JAVASCRIPT"], link: "https://personal-shopping-carte.vercel.app/" },
  { id: 3, title: "Rock-paper-scissors", img: "/images/gridPic/rockpaper.png", tags: ["HTML", "CSS","JS"], link: "https://aesthetic-liger-a6da51.netlify.app/" },
  { id: 4, title: "Memory-card Game", img: "/images/gridPic/memorygame.png", tags: ["HTML", "CSS", "JS"], link: "https://memorey-card-game.vercel.app/" },
  { id: 5, title: "Simple Calculator", img: "/images/gridPic/calcus.png", tags: ["HTML", "CSS", "BootStrap", "JS"], link: "https://capable-dasik-b0b0d0.netlify.app/" },
  { id: 6, title: "Business Card", img: "/images/gridPic/businessCard.png", tags: ["HTML", "CSS", "JS"], link: "https://businesscard-psi.vercel.app/" },
  { id: 7, title: "Event Accessibility Guide", img: "/images/gridPic/venue2.PNG", tags: ["HTML", "TailwindCSS", "NodeJS", "ReactJS"], link: "https://venuehubs.netlify.app/venues" },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className='text-white py-8'>
      <h2 className='text-2xl pb-8 font-extrabold text-center text-orange-700 font-montserrat uppercase leading-10 tracking-widest'>My Repositories</h2>
      <Project />
      <div className='w-[100%] container rounded-lg p-8 mt-10 bg-zinc-700 dark:bg-orange-700 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center'>
        {projectsData.map((project) => (
          <div key={project.id} className='rounded-lg relative hover:scale-105 transition-all duration-300 shadow-2xl p-6 bg-zinc-800 dark:bg-white'>
            <figure className="relative bg-black dark:bg-zinc-800 w-full h-[105px] mx-auto aspect-video rounded-lg mb-1 overflow-hidden">
              <img src={project.img} alt={project.title} loading="lazy" className="h-full w-full absolute rounded-lg inset-0 object-contain transition-opacity duration-500 " />
            </figure>
            <div className="flex items-center justify-between gap-2">
              <div>
                <h3 className="title-1 mb-1 dark:text-orange-800 font-bold">{project.title}</h3>
                <div className="flex flex-wrap items-center gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="h-6 text-sm text-zinc-400 bg-zinc-50/5 dark:text-orange-700 dark:bg-orange-700/10 flex items-center justify-center p-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-6 h-6 rounded-lg grid place-items-center dark:text-white dark:bg-orange-700 bg-sky-100 text-zinc-950 shrink-0">
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
