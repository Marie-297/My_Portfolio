"use client"

import { useRef } from "react";
import ProjectCard from "./ProjectCard"
import { FaChevronLeft, FaChevronRight} from "react-icons/fa6";

const projects = [
  {
    imgSrc: "/images/gridPic/ageCalc.png",
    title: "Age Calculator",
    tags: ["HTML", "CSS", "JavaScript",],
    link: "https://resplendent-hotteok-1c3b0b.netlify.app/",
  },
  {
    imgSrc: "/images/gridPic/Calc.png",
    title: "Calculator App",
    tags: ["HTML", "CSS", "JavaScript",],
    link: "https://shiny-tartufo-90fa2f.netlify.app/",
  },
  {
    imgSrc: "/images/gridPic/eCommerce.png",
    title: "ECommerce Webapp",
    tags: ["HTML", "CSS", "JavaScript",],
    link: "https://spectacular-lamington-a9ae40.netlify.app/",
  },
  {
    imgSrc: "/images/gridPic/expenseChart.png",
    title: "Expense Chart App",
    tags: ["HTML", "CSS", "JavaScript",],
    link: "https://dashing-marigold-3377c6.netlify.app/",
  },
  {
    imgSrc: "/images/gridPic/socialmedia.png",
    title: "Testimonials",
    tags: ["HTML", "CSS",],
    link: "https://marie-297.github.io/Frontend_Mentor_Challenges/Testimonial/testimonial.html",
  },
  {
    imgSrc: "/images/gridPic/landing.png",
    title: "Clipboard Landing Page",
    tags: ["HTML", "CSS"],
    link: "https://marie-297.github.io/Frontend_Mentor_Challenges/clipboard%20landing%20page/index.html",
  },
  {
    imgSrc: "/images/gridPic/fylo.png",
    title: "Fylo Data Storage",
    tags: ["HTML", "CSS"],
    link: "https://marie-297.github.io/Frontend_Mentor_Challenges/fylo%20data%20storage/fylo.html",
  },
  {
    imgSrc: "/images/gridPic/huddle.png",
    title: "Huddle Landing Page",
    tags: ["HTML", "CSS",],
    link: "https://marie-297.github.io/Frontend_Mentor_Challenges/huddle%20landing%20page/huddle.html",
  },
  {
    imgSrc: "/images/gridPic/mtn.png",
    title: "MTN Card",
    tags: ["HTML", "CSS",],
    link: "https://marie-297.github.io/Frontend_Mentor_Challenges/mtn%20card/blog-preview-card-main/mtn.html",
  },
  {
    imgSrc: "/images/gridPic/qrcode.png",
    title: "QR Code",
    tags: ["HTML", "CSS", ],
    link: "https://marie-297.github.io/Frontend_Mentor_Challenges/qr%20code/qrcode.html",
  },
  {
    imgSrc: "/images/gridPic/recipe.png",
    title: "Recipe",
    tags: ["HTML", "CSS", ],
    link: "https://marie-297.github.io/Frontend_Mentor_Challenges/recipe/recipe.html",
  },
  {
    imgSrc: "/images/gridPic/socialmedia.png",
    title: "Social Link Profile",
    tags: ["HTML", "CSS", ],
    link: "https://marie-297.github.io/Frontend_Mentor_Challenges/social%20links%20profile/social.html",
  },
  {
    imgSrc: "/images/gridPic/tipcalc.png",
    title: "Tip Calculator",
    tags: ["HTML", "CSS", "JavaScript",],
    link: "https://marie-297.github.io/Frontend_Mentor_Challenges/tip%20Calculator%20frontend/tip.html",
  },
  {
    imgSrc: "/images/gridPic/todo.png",
    title: "ToDo App",
    tags: ["HTML", "CSS", "JavaScript",],
    link: "https://timely-snickerdoodle-26e842.netlify.app/",
  },
  {
    imgSrc: "/images/gridPic/rating.png",
    title: "Interacting Rating Component",
    tags: ["HTML", "CSS", "JavaScript",],
    link: "https://starlit-dusk-408587.netlify.app/",
  },
  {
    imgSrc: "/images/gridPic/productpreview.png",
    title: "Product Preview",
    tags: ["HTML", "CSS", "JavaScript",],
    link: "https://darling-crumble-95ad69.netlify.app/",
  },
  {
    imgSrc: "/images/gridPic/multistep.png",
    title: "MultiStep Form",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://resonant-basbousa-071a1f.netlify.app/",
  },
  {
    imgSrc: "/images/gridPic/atm.png",
    title: "Interactive Card Details",
    tags: ["HTML", "CSS", "JavaScript",],
    link: "https://marie-297.github.io/Frontend_Mentor_Challenges/interactive-card-details-form-main/index.html",
  },
]

const Project = () => {

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollDistance = getScrollDistance();
      scrollContainerRef.current.scrollBy({
        left: -scrollDistance,
        behavior: "smooth",
      });
    }
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollDistance = getScrollDistance();
      scrollContainerRef.current.scrollBy({
        left: scrollDistance,
        behavior: "smooth",
      });
    }
  };
  
  // Function to determine scroll distance based on screen size
  const getScrollDistance = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) {
      return 250; 
    } else if (screenWidth < 1024) {
      return 400; 
    } else {
      return 500;
    }
  };
  

  return (
    <section className='projectSection' id='project'>
      <div className='container overflow-x-'>
        <div className="relative h-full shadow-2xl bg-zinc-700 rounded-lg p-10 overflow-x-auto">
          <h3 className="text-white text-xl font-extrabold font-montserrat">Frontend Mentor</h3>
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-700"
            title="button"
          >
            <FaChevronLeft size={12} />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide py-4"
          >
            {projects.map(({ imgSrc, title, tags, link }, key) => (
              <ProjectCard
                title={title}
                imgSrc={imgSrc}
                tags={tags}
                link={link}
                key={key}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-700"
            title="button"
          >
            <FaChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Project