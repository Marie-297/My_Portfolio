import { skills } from '@/app/data';
import { AiFillAndroid, AiFillApi, AiFillDatabase, AiFillEye, AiFillHtml5 } from 'react-icons/ai';

const gridItem = [
  {
    id: 1,
    title: "My Innovative Technologies I Leveraged",
    desc: "Explore the innovative tools and technologies I leverage to build high-performing websites and applications.",
    icon: <AiFillHtml5 className="text-6xl text-orange-600" />,
    className:"",
    image:"",
  },
  {
    id: 2,
    title: "Mobile Development",
    desc: "Creating intuitive and feature-rich mobile applications for iOS and Android platforms.",
    icon: <AiFillAndroid className="text-6xl text-orange-600" />
  },
  {
    id: 3,
    title: "My Innovative Technologies I Leveraged",
    desc: "Explore the innovative tools and technologies I leverage to build high-performing websites and applications.",
    icon: <AiFillEye className="text-6xl text-orange-600" />
  },
  {
    id: 4,
    title: "Database Management",
    desc: "Managing and optimizing databases to ensure efficient data storage and retrieval.",
    icon: <AiFillDatabase className="text-6xl text-orange-600" />
  },
  {
    id: 5,
    title: "API Development",
    desc: "Building and integrating APIs to facilitate seamless communication between different software components.",
    icon: <AiFillApi className="text-6xl text-orange-600" />
  }
]

export default gridItem;