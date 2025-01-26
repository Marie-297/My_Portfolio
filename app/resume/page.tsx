"use client"
import { aboutInfo, skills, experienceInfo, educationInfo } from "@/data/info";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/Components/ui/tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@/Components/ui/scroll-area";


const Resumepage = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease: "easeIn"}}} className="min-h-[80vh] flex items-center justify-center py-12 lg:py">
      <div className="container mx-auto">
        <Tabs defaultValue="aboutme" className="flex flex-col lg:flex-row gap-[50px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
            <TabsTrigger value="aboutme">About Me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">My Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[70px] w-full">
            <TabsContent value="aboutme" className="w-full text-white">
              about me
            </TabsContent>
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold text-white font-montserrat">{experienceInfo.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 font-cormorant">{experienceInfo.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] text-white">
                    {experienceInfo.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-zinc-800 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start items-center gap-1">
                          <span className="text-orange-600 italic">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] text-center lg:text-left font-semibold">{item.position}</h3>
                          <div>
                            <span>{item.responsibilities.map((list, index) => (
                              <li key={index} className="text-white/60 text-xs italic font-cormorant">{list}</li>
                            ))}</span>
                            <span className="h-3 w-3 bg-orange-700"></span>
                            <p>{item.company}</p>
                            <p>{item.location}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
               skills
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resumepage
