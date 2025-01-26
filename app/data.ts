import Link from "next/link"
import { TiHtml5 } from "react-icons/ti";
import { BiLogoCss3 } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

export const ButtonLinks = [
  {label: "Home", icon: "homeIcon", link: "/", newTab: false},

  {label: "About", icon: "aboutIcon", link: "/about", newTab: false},

  {label: "Contact", icon: "contactIcon", link: "/contact", newTab: false},

  {label: "Projects", icon: "projectIcon", link: "/projects", newTab: false},

  {label: "Resume", icon: "resumeIcon", link: "/resume", newTab: false},
]

export const skills = [
  {
    name: "HTML",
    id: '1',
    icon: {TiHtml5},
    level: "Advanced",
    color: "#E34F26",
  },
  {
    name: "CSS",
    id: '2',
    icon: {BiLogoCss3},
    level: "Advanced",
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    id: '3',
    icon: {IoLogoJavascript},
    level: "Advanced",
  },
  {
    name: "React",
    id: '4',
    icon: {FaReact},
    level: "Advanced",
  },
  {
    name: "Next.js",
    id: '5',
    icon: {RiNextjsFill},
    level: "Advanced",
  },
  {
    name: "Tailwind CSS",
    id: '6',
    icon: {RiTailwindCssFill},
    level: "Advanced",
  },
  {
    name: "Node.js",
    id: '7',
    icon: {FaNodeJs},
    level: "Advanced",
  },
  {
    name: "GitHub",
    id: '8',
    icon: {FaGithub},
    level: "Advanced",
  },
  {
    name: "Bootstrap",
    id: '9',
    icon: {FaBootstrap},
    level: "Advanced",
  }
]