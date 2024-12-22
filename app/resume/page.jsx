"use client";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const ABOUT = {
  title: "About me",
  description:
    "attestation de attestation de sécurité sociale en cours de validité à la bonne adresse attestation de sécurité sociale en cours de validité à la bonne adresse adresse",
  info: [
    {
      fieldName: "Name",
      fieldValue: "czeed value",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+33) 123 345 567",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "cz",
    },
    {
      fieldName: "Nationality",
      fieldValue: " value",
    },
    {
      fieldName: "Email",
      fieldValue: "cczeed@azert.zer",
    },
    {
      fieldName: "Freelance",
      fieldValue: "available",
    },
  ],
};

const EXPERIENCE = {
  icon: "/assets/resume/badge.svg",
  title: "MY experience",
  description:
    "orem ipsum You need to check if your counter in viewport, react-visibility-sensor can be used for this purpose",
  items: [
    {
      company: "diggers",
      position: "Full stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "diggers",
      position: "Full stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "diggers",
      position: "Full stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "diggers",
      position: "Full stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "diggers",
      position: "Full stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "diggers",
      position: "Full stack Developer",
      duration: "2022 - Present",
    },
  ],
};

const EDUCATION = {
  icon: "/assets/resume/cap.svg",
  title: "MY education",
  description:
    "orem ipsum You need to check if your counter in viewport, react-visibility-sensor can be used for this purpose",
  items: [
    {
      institution: "diggers",
      degree: "Ms Full stack Developer",
      duration: "2022 - Present",
    },
    {
      institution: "diggers",
      degree: "Full stack Developer",
      duration: "2022 - Present",
    },
    {
      institution: "diggers",
      degree: "Full stack Developer",
      duration: "2022 - Present",
    },
    {
      institution: "diggers",
      degree: "Full stack Developer",
      duration: "2022 - Present",
    },
    {
      institution: "diggers",
      degree: "Full stack Developer",
      duration: "2022 - Present",
    },
  ],
};

const SKILLS = {
  title: "My skills",
  description:
    "orem ipsum You need to check if your counter in viewport, react-visibility-sensor can be used for this purpose",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
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
