import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { TiHtml5 } from "react-icons/ti";
import { BiLogoCss3 } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub, FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiExpress, SiNextdns, SiPostman, SiClerk, SiWebstorm, SiMongodb, SiPostgresql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  icon,
  image,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: string | React.ReactNode;
  image?: string;
  id: number;
}) => {
  return (
    <div className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-2 lg:p-4 dark:bg-black dark:border-white/[0.2] bg-gray-300 border border-transparent justify-between flex flex-col", id === 3 ? "md:col-span-3 lg:py-0 sm:py-1" : id === 1 ? "md:col-span-2" : "md:col-span-1",
        className
      )}
    >
      <div className={cn("group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 lg:px-10", id === 3 ? "py-0" : "py-5" )}>
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {icon}
        </div>
        <div className="font-sans font-bold text-xl lg:text-3xl z-10 text-neutral dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-poppins font-light text-xs md:text-sm lg:text-base z-10">
            {description}
        </div>
        {id === 3 && (
          <div className="gap-1 lg:gap-5 w-full overflow-hidden relative">
            <div className="flex gap-y-2 gap-x-4 w-full animate-marquee flex-wrap">
              {[
                { label: "React.js", icon: <FaReact /> },
                { label: "TypeScript", icon: <SiTypescript /> },
                { label: "JavaScript", icon: <IoLogoJavascript /> },
                { label: "Node.js", icon: <FaNodeJs /> },
                { label: "HTML", icon: <TiHtml5 /> },
                { label: "CSS", icon: <BiLogoCss3 /> },
                { label: "Bootstrap", icon: <FaBootstrap /> },
                { label: "NextJS", icon: <TbBrandNextjs /> },
                { label: "Tailwind CSS", icon: <RiTailwindCssFill /> },
                { label: "Postman", icon: <SiPostman /> },
                { label: "NextAuth", icon: <SiNextdns /> },
                { label: "Clerk", icon: <SiClerk /> },
                { label: "Git & Github", icon: <FaGithub /> },
                { label: "WebSockets", icon: <SiWebstorm /> },
                { label: "MongoDB", icon: <SiMongodb /> },
                { label: "PostgresSQL", icon: <SiPostgresql /> },
                { label: "ExpressJS", icon: <SiExpress /> }].map((item) => (
                <span key={item.label} className="py-1 lg:py-4 lg:px-3 px-1 text-[8px] lg:text-base opacity-100 lg:opacity-100 text-center bg-slate-800 text-white rounded-lg flex flex-col justify-center items-center hover:scale-150 transition-transform duration-300">{item.icon}{item.label}</span>
              ))}
              <span className="lg:py-4 py-1 px-3 rounded-lg text-center bg-slate-800" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
