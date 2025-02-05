import { FaUserGraduate } from "react-icons/fa";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaTypo3, FaGithubAlt, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiFirebase, SiMongodb, SiPostgresql } from "react-icons/si";

const aboutInfo = {
  title: "Personal Information",
  description:"Aspiring full-stack software engineer with a solid foundation in mathematical analysis and problem-solving from a degree in Actuarial Science. Currently advancing in full-stack development, gaining practical experience in front-end and back-end technologies. Committed to building scalable web applications and applying analytical and programming skills to deliver efficient, innovative solutions. Actively seeking opportunities to contribute to team-driven projects and enhance technical expertise through internships or collaborative work.",
  Info: [
    {fieldName: "Name :",
      fieldValue: "Mariama Ibrahim Seidu"
    },
    {fieldName: "Phone Number :",	
      fieldValue: "(+233) 249 350 297"
    },
    {fieldName: "Experience :",
      fieldValue: "1+ Years"
    },
    {fieldName: "Nationality :",
      fieldValue: "Ghanaian"
    },
    {fieldName: "Email Address :",
      fieldValue: "merrylyt@gmail.com"
    },
    {fieldName: "Language(s) :",
      fieldValue: "English-Fluent"
    },
    {fieldName: "LinkedIn:",
      fieldValue: <a href="https://www.linkedin.com/in/mariama-seidu-935457284/" target="_blank" rel="noopener noreferrer">linkedin.com/in/mariama-seidu</a>
    },
  ]
}

const educationInfo = {
  icon: <FaUserGraduate />,
  title: "Education",
  description: " This section highlights the academic milestones and achievements that have shaped my professional growth.",
  items: [
    {institution: "Codetrain Africa",
      degree: "Software Engineer",
      duration: "2023 - till date",
      location: "Accra - Ghana"
    },
    {institution: "University of Cape-Coast",
      degree: "BSc. Actuarial Science",
      duration: "2009 - 2013",
      location: "Cape-Coast - Ghana"
    },
    {institution: "I.P.M.C.",
      degree: "Certificate in MS-Word, Excel, Advanced Excel & PowerPoints",
      duration: "2008",
      location: "Takoradi - Ghana"
    } 
  ]
} 

const experienceInfo = {
  icon: "",
  title: "My experience",
  description: "A journey of growth and innovation, where each role shaped my skills, fueled my passion, and empowered me to create meaningful solutions.",
  items: [
    {company: "Withheld Client",
      position: "Freelancer",
      duration: "Till Date",
      location: "Accra - Ghana",
      responsibilities: ["Developed custom website for small businesses","Implemented responsive web designs using HTML, CSS & JavaScript"]
    },
    {company: "Codetrain",
      position: "Project Based Learning",
      duration: "January - Decemeber 2024",
      location: "Accra - Ghana",
      responsibilities: ["Collaborated and built a fullstack Leave management app for a company", "Collaborated with other Students to build an interesting game-app", "Built various reponsive static Web applications"]
    },
  ]
}

const skills = {
  title: "My Skills",
  description:"My technical expertise and skills that empower me to solve problems, collaborate effectively, and deliver results.",
  list: [
    {listTitle: "Frontend Skills",
      listItems: [{icon: <FaHtml5 />, name: "HTML 5"},{icon: <FaCss3 />, name: "CSS"}, {icon: <FaJs />, name: "JavaScript"}, {icon: <FaTypo3 />, name: "TypeScript"},{icon: <FaReact />, name: "ReactJS"},{icon: <SiNextdotjs />, name: "NextJS"}, {icon: <SiTailwindcss />, name: "TailwindCSS"},{icon: <FaBootstrap />, name: "BootStrap"}, {icon: <FaGithubAlt />, name: "Git & Githib"},]
    },
    {listTitle: "Backend Skills",
      listItems: [{icon: <FaNodeJs />, name: "NodeJS"}, {icon: <SiExpress />, name: "ExpressJS"}, {icon: <SiFirebase />, name: "FireBase"},{icon: <SiMongodb />, name: "MongoDB"},{icon: <SiPostgresql />, name: "PostgreSQL"}]
    },
    {listTitle: "Soft Skills",
      listItems: ["Ability to learn and work quickly", "Communication and Teamwork", "Analytical & Problem Solving", "Time Management"]
    },
  ]
}


export { aboutInfo, skills, experienceInfo, educationInfo };