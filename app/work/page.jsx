"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const Projects = [
  {
    num: "01",
    category: "frontend",
    title: "Association website ",
    description: "Setting up a website for a charity association. On the website we can see a presentation of the different activities as well as a donation collection system.",
    stack: [{ name: "html5" }, { name: "css" }, { name: "Js" }, { name: "Php" }, { name: "MySQL" } , { name: "Bootstrap" }],
    image: "/assets/work/proj1.png",
    live: "#",
    github: "#",
  },
  {
    num: "02",
    category: "frontend",
    title: "Perpetual calendar with diary",
    description: "Implementation of an agenda with a perpetual calendar, with a system for recording and scheduling tasks, and a method for calculating future holidays",
    stack: [{ name: "C" }, { name: "Gtk" }, { name: "Postgresql" }],
    image: "/assets/work/proj2.png",
    live: "#",
    github: "#",
  },
  {
    num: "03",
    category: "frontend",
    title: "Image compression system",
    description: "This project was done as part of the Algorithms and Data Structures course curriculum. The goal was to implement an image compression system..",
    stack: [{ name: "Java" }, { name: "BST" }, { name: "Quadtree" }],
    image: "/assets/work/proj3.png",
    live: "#",
    github: "#",
  },
  {
    num: "04",
    category: "frontend",
    title: "Dashboard implementation",
    description: "This project was realized during my internship at Parker Hannifin in Paris. The objective was to extract data from an ERP with ODBC connectors in order to set up a set of dashboards for the production team.",
    stack: [{ name: "Excel" }, { name: "VBA" }, { name: "SQL" }, { name: "ODBC" }, { name: "Macro" }],
    image: "/assets/work/proj4.png",
    live: "#",
    github: "#",
  },
  {
    num: "05",
    category: "Iot",
    title: "Mini weather station",
    description: "This project was realized during an initiation to connected objects and particularly with the programming under Arduino. We were able to set up a mini weather station taking into account the temperature as well as the relative humidity.",
    stack: [{ name: "Arduino" }, { name: "C" }, { name: "sensors" }, { name: "LM35" }, { name: "DHT11" }],
    image: "/assets/work/proj5.jpg",
    live: "#",
    github: "#",
  },
];

const WorkPage = () => {
  const [project, setProject] = useState(Projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(Projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className=" flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title} 
              </h2>
              <p className="text-white/60"> {project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index === project.stack.length - 1 ? "" : ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>github repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {Projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkPage;
