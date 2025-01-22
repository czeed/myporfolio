import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Image from "next/image";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row  items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Developer </span>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-accent ">Khadim DAFFE</span>
            </h1>
            <p className="max-w-[500px] mt-9 mb-9 text-white/80 ">
            I'm fullstack developer, and I love to solve problems and improve things using my proficiency in IT development.
            </p>
            <p className="max-w-[500px] mt-9 mb-9 text-white/80 ">
            My interests include software design and development, web development from backend to frontend, and data visualisation.
            </p>
            {/* btn and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
              <a href="./img/CV.pdf"  style={{all: "unset", display:"flex", gap:"3px"}} >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles={"flex gap-6"}
                  iconStyles={
                    "w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  }
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
