import { Button } from '@/Components/ui/button';
import { AiFillAndroid, AiFillApi, AiFillEye } from 'react-icons/ai';
import { FaBullseye, FaGithub } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { FcCollaboration } from "react-icons/fc";

const gridItem = [
  {
    id: 1,
    title: "About Me!",
    desc: (<>I am <span className='blink text-orange-600 font-extrabold'>Mariama Seidu Ibrahim</span>, a passionate Software Developer with expertise in Full-Stack and Mobile-App Development. I excel at transforming challenging problems into intuitive, user-focused solutions. Whether building or designing polished front-end interfaces or developing powerful back-end systems, I bring creativity, attention to detail, and a passion for delivering exceptional results to every project.👩‍💻</>),
    icon: <AiFillEye className="text-6xl text-orange-600" />,
    className:"",
    image:"",
  },
  {
    id: 2,
    title: "Mission",
    desc: "With dedication to create impactful digital experiences, I transform complex challenges into innovative, user-focused solutions with clean code and thoughtful design.",
    icon: <FaBullseye className="text-6xl text-orange-600" />
  },
  {
    id: 3,
    title: "My Innovative Technologies I Leveraged",
    desc: "Explore the innovative tools and technologies I leverage to build high-performing websites and applications.",
    icon: <AiFillAndroid className="text-6xl text-orange-600" />
  },
  {
    id: 4,
    title: "Git Statistics",
    desc: (
      <div className='spacing-'>
        <p>Total Contributions<span className='font-bold'>(2024)</span> - <span className='text-orange-600 font-bold'>241</span></p>
        <p>Top Languages <span className='font-bold'>(2024)</span> - <span className='text-orange-600 font-bold'>TypeScript, JavaScript, HTML, CSS</span></p>
        <p>Total Public Repos <span className='font-bold'>(2024)</span> - <span className='text-orange-600 font-bold'>20</span></p>
      </div>
    ),
    icon: <FaGithub className="text-6xl text-orange-600" />
  },
  {
    id: 5,
    title: "Online Courses",
    desc: (
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <p>Introduction to JavaScript - </p>
          <a href="/files/IntroJS_Marie.pdf" target="_blank" rel="noopener noreferrer"><Button className='text-orange-600 font-bold bg-white transition duration-300'>View Cert</Button></a>
        </div>
        <div className='flex justify-between items-center'>
          <p>JavaScript Intermediate - </p>
          <a href="/files/IntermediateJS_Marie.pdf" target="_blank" rel="noopener noreferrer"><Button className='text-orange-600 font-bold bg-white transition duration-300'>View Cert</Button></a>
        </div>
      </div>
    ),
    icon: <GrCertificate className="text-6xl text-orange-600" />
  },
  {
    id: 6,
    title: "Collaboration",
    desc: (
      <>
        <p>Do you want to Start a Project Together?</p>
        <div className='text-center'>
        <a
          href="https://wa.me/233249350297?text=Hello!%20I'm%20interested%20in%20starting%20a%20project%20together."
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="text-orange-600 font-bold transition duration-300 bg-white mt-4">
            Let's Link Up
          </Button>
        </a>
        </div>
      </>
    ),
    icon: <FcCollaboration className="text-6xl text-orange-600" />
  }
]

export default gridItem;