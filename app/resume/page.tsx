"use client"
import { aboutInfo, skills, experienceInfo, educationInfo } from "@/data/info";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
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
            <TabsContent value="aboutme" className="w-full text-white text-center lg:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl dark:text-orange-700 font-bold tracking-wider font-montserrat">{aboutInfo.title}</h3>
                <p className="max-w-[600px] italic font-cormorant text-white/60 dark:text-black/60 mx-auto lg:mx-0">{aboutInfo.description}</p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0">
                  {aboutInfo.Info.map((Item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center lg:justify-start gap-4">
                        <span className="text-white/60 dark:text-black/60">{Item.fieldName}</span>
                        <span className="text-lg font-cormorant dark:text-black">{Item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl dark:text-orange-700 font-bold tracking-wider text-white font-montserrat">{educationInfo.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto dark:text-black/60 lg:mx-0 font-cormorant">{educationInfo.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] text-white">
                    {educationInfo.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-zinc-800 dark:bg-orange-700 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start items-center gap-1">
                          <span className="text-orange-600 font-bold italic dark:text-white">{item.duration}</span>
                          <h3 className="text-lg dark:text-black max-w-[260px] text-center lg:text-left font-bold">{item.degree}</h3>
                          <div className="w-full">
                            <div className="flex flex-col items-center lg:flex-row lg:justify-between">
                              <div className="flex gap-1 justify-center items-center">
                                <span className="h-2 w-2 bg-orange-700 rounded-full"></span>
                                <p className="dark:text-black">{item.institution}</p>
                              </div>
                              <p className="text-white/60 dark:text-black/60">{item.location}</p>
                            </div>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl dark:text-orange-700 font-bold text-white tracking-wider font-montserrat">{experienceInfo.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 font-cormorant dark:text-black/60">{experienceInfo.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] text-white">
                    {experienceInfo.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-zinc-800 dark:bg-orange-700 h-[300px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start items-center gap-1">
                          <span className="text-orange-600 dark:text-white font-bold italic">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] text-center lg:text-left font-semibold dark:text-black">{item.position}</h3>
                          <div>
                            <ul className="list-disc list-inside">{item.responsibilities.map((list, index) => (
                              <li key={index} className="text-white/60 text-xs italic font-cormorant dark:text-black/60">{list}</li>
                            ))}</ul>
                           <div className="flex items-center justify-between">
                            <div className="flex gap-1 justify-center items-center">
                              <span className="h-2 w-2 bg-orange-700 rounded-full dark:bg-black"></span>
                              <p className="dark:text-black">{item.company}</p>
                            </div>
                              <p className="text-white/60 dark:text-black/60">{item.location}</p>
                            </div>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
               <div className="flex flex-col gap-[30px] text-center lg:text-left text-white">
                <div>
                  <h3 className="text-3xl font-bold tracking-wider dark:text-orange-700 font-montserrat">{skills.title}</h3>
                  <p className="max-w-[600px] dark:text-black/60 text-white/60 mx-auto lg:mx-0">{skills.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] text-white">
                    {skills.list.map((item, index) => {
                      return (
                        <li key={index} className="bg-zinc-800 dark:bg-orange-700 h-[224px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start items-center gap-1">
                          <h3 className="text-xl max-w-[260px] text-center lg:text-left mb-4 font-semibold">{item.listTitle}</h3>
                          <div>
                            {item.listTitle === "Soft Skills" ? (
                              <ul className="list-disc list-inside text-white/60">
                                {item.listItems.map((softSkill, index) => (
                                  <li key={index} className="text-sm italic font-cormorant">
                                    {typeof softSkill === 'string' ? softSkill: ""}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <ul className="grid grid-cols-4 gap-3">{item.listItems.map((listItem, index) => (
                                <li key={index} className="text-white/60 text-xs dark:text-black/60 italic font-cormorant shadow-xl p-2 rounded-lg flex flex-col dark:bg-white/60 flex-wrap items-center bg-zinc-900 hover:shadow-2xl hover:scale-125 duration-300 transition-all">
                                  <div className="text-orange-700 dark:text-black">
                                    {typeof listItem === "object" && "icon" in listItem && listItem.icon}
                                  </div>
                                  <span className="dark:text-black">{typeof listItem === "object" ? listItem.name : listItem}</span>
                                </li>
                              ))}</ul>)}
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
               </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resumepage
