"use client";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiDotnet, SiJavascript, SiTypescript, SiPostgresql, SiMongodb, SiRedux, SiFlutter, SiMicrosoftsqlserver } from "react-icons/si";
import { DiDotnet } from "react-icons/di";

const ABOUT = {
  title: "About me",
  description:
    "Passionate fullstack developer with experience in .NET and React, building scalable web applications and intuitive user interfaces. I thrive in agile environments and continuously seek to enhance my skills and stay up-to-date with the latest technologies.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Khadim DAFFE",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+33) 07 49 80 18 82",
    },
    {
      fieldName: "Experience",
      fieldValue: "3 Years",
    },

    {
      fieldName: "Email",
      fieldValue: "etdaffe13@gmail.com",
    },
   
  ],
};

const EXPERIENCE = {
  icon: "/assets/resume/badge.svg",
  title: "MY experience",
  description:
    "Fullstack developer with nearly 3 years of experience in .NET and React, building scalable web applications and intuitive user interfaces. Passionate about clean code and best practices",
  items: [
    {
      company: "Ensemble Protection Sociale (EPS, Groupe BPCE)",
      position: " Développeur C# .NET/React ",
      duration: "Août 2023 - Décembre 2024 ",
    },
    {
      company: "diggers",
      position: "Développeur  React/C# .NET ",
      duration: " Sept 2022 - Déc 2024 ",
    },
    {
      company: "Parker Hannifin",
      position: "Développeur Logiciel (stage) ",
      duration: " Avril 2022 - Juillet 2022 ",
    },
    {
      company: "Tailleur Pro ",
      position: "Full stack Developer",
      duration: "2025 - Present",
    },
   
  ],
};

const EDUCATION = {
  icon: "/assets/resume/cap.svg",
  title: "MY education",
  description:
    "Graduated with a Master's degree in Digital Solutions and Data Management, complemented by a Bachelor's in Computer Science. Continuously learning to stay updated with the latest technologies and industry trends.",
  items: [
    {
      institution: "3IL Ingénieurs (campus IMIE) ",
      degree: "Master MS2D ",
      duration: "2022 - 2024",
    },
    {
      institution: "Université de Nantes, France ",
      degree: "Licence Informatique  ",
      duration: "2021 - 2022",
    },
    {
      institution: "Agile Certification",
      degree: "Scrum Fundamental Certified",
      duration: "2024",
    },
    {
      institution: "Dev Certification",
      degree: "Foundational C# with Microsoft",
      duration: "2024",
    },
   
  ],
};

const SKILLS = {
  title: "My skills",
  description:
    "Proficient in fullstack development with expertise in React, .NET, and SQL. Skilled in building responsive web applications, API integrations, and cloud deployments with a strong focus on clean code and performance optimization.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
    },
    {
      icon: <SiDotnet />,
      name: ".NET",
    },
    {
      icon: <DiDotnet />,
      name: "EF Core",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiMicrosoftsqlserver />,
      name: "SQL Server",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.0, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h[80vh] flex items-center justify-center py-12 xl:PY-0"
    >
        <div className="container mx-auto">
            <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
            >
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience"> Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>
            

            {/* content */}
            <div className="min-h-[700] w-full">
                <TabsContent value="experience" className="w-full">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{EXPERIENCE.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{EXPERIENCE.description}</p>
                    <ScrollArea className="h-[400px]">
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                            {
                                EXPERIENCE.items.map((item, index) => {
                                    return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                    flex flex-col  justify-center items-center lg:items-center gap-1 ">
                                        <span className="text-accent">{item.duration}</span>
                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                        <div className="flex items-center gap-3">
                                            <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                                            <p className="text-white/60">{item.company}</p>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{EDUCATION.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{EDUCATION.description}</p>
                    <ScrollArea className="h-[400px]">
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                            {
                                EDUCATION.items.map((item, index) => {
                                    return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                    flex flex-col  justify-center items-center lg:items-center gap-1 ">
                                        <span className="text-accent">{item.duration}</span>
                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                        <div className="flex items-center gap-3">
                                            <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                                            <p className="text-white/60">{item.institution}</p>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent value="skills" className="w-full h-full">
                    <div className="flex flex-col gap-[30px]">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{SKILLS.title}</h3>
                            <p className="maw-w-[600px] text-white/80 mx-auto xl:mx-0">{SKILLS.description}</p>
                        </div>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {SKILLS.skillList.map((skill,index) => {
                                return <li key={index}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                    {skill.icon}
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="capitalize">
                                                    {skill.name}
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </li>
                            })}
                        </ul>
                    </div>
                </TabsContent>
                <TabsContent value="about" className="w-full text-center xl:text-left">
                    <div className="flex flex-col gap-[30px]">
                        <h3 className="text-4xl font-bold ">{ABOUT.title}</h3>
                        <p className="max-w-[600px] text-white mx-auto xl:mx-0">
                            {ABOUT.description}
                        </p>
                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                            {
                                ABOUT.info.map((item, index) => {
                                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                        <span className="text-white/60">{item.fieldName}</span>
                                        <span className="text-xl">{item.fieldValue}</span>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </TabsContent>
            </div>
            </Tabs>
        </div>
    </motion.div>
  );
};

export default Resume;
