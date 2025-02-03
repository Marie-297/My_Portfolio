import Link from "next/link"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
const socials = [
  { icon: <FaGithub />, path: "https://github.com/Marie-297" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/mariama-seidu-935457284/" }
]

const SocialLink = () => {
  return (
    <div className="flex items-center justify-center gap-4 cursor-pointer">
      {socials.map((social, index) => {
        return (
          <Link 
            href={social.path} 
            key={index} 
            className="border w-10 h-10 rounded-full flex items-center justify-center text-orange-700 bg-white border-orange-700 hover:bg-black dark:hover:bg-orange-700 dark:hover:text-white hover:border-orange-700 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            >
            {social.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default SocialLink