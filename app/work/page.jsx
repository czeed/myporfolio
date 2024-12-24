"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlice } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const Projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project ",
    description: "lorem ipsum You need to check if your counter in viewport, react-visibility-sensor can be used for this purpose.",
    stack: [{ name: "html5" }, { name: "css" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "Project #2 ",
    description: "lorem ipsum You need to check if your counter in viewport, react-visibility-sensor can be used for this purpose.",
    stack: [{ name: "html5" }, { name: "css" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "Project #3 ",
    description: "lorem ipsum You need to check if your counter in viewport, react-visibility-sensor can be used for this purpose.",
    stack: [{ name: "Next.js" }, { name: "css" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const page = () => {
  const [project, setProject] = useState(Projects[0]);

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-[80vh] flex fleex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">text</div>
          <div className="w-full xl:w-[50%]">slider</div>
        </div>
      </div>
    </motion.section>
  );
};

export default page;
