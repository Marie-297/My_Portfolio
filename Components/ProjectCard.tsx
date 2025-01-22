"use client"

import PropTypes from "prop-types";
import { FaLocationArrow } from "react-icons/fa";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaLandMineOn } from "react-icons/fa6";

interface ProjectCardProps {
  title: string;
  // description: string;
  link?: string;
  tags?: string[];
  imgSrc: string;
  classes?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  // description,
  link = "#",
  tags = [],
  imgSrc,
  classes = "",
}) => {
  return (
    <div className={"relative p-4 rounded-2xl min-w-[200px] h-[200px] w-[200px] mx-auto bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors hover:scale-90 duration-300"}>
      <figure className="relative w-full h-[105px] mx-auto aspect-square rounded-lg mb-1 overflow-hidden">
           <img src={imgSrc} alt={title} loading="lazy" className="h-full w-full absolute rounded-lg inset-0 object-contain transition-opacity duration-500 " />
      </figure>
      <div className="flex items-center justify-between gap-2">
        <div>
          <h3 className="title-1 mb-1">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag, index) => (
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
        
        <a href={link} target="_blank" className="inset-0 absolute">
        <span className="sr-only">Read More</span>
        </a>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  // description: PropTypes.string,
  link: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string.isRequired),
  imgSrc: PropTypes.string.isRequired,
  classes: PropTypes.string,
}

export default ProjectCard