"use client";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const SERVICES = [
  {
    num: "01",
    title: "Front-end Development",
    description:
      "Creating responsive, user-friendly web interfaces using modern frameworks such as React, Angular, and Vue.js. Ensuring optimal performance and seamless user experience across all devices.",
  },
  {
    num: "02",
    title: "Back-end Development",
    description:
      "Building robust, scalable server-side applications using technologies like Node.js, .NET, and Python. Implementing secure APIs, database management, and cloud deployments for efficient performance.",
  },
  {
    num: "03",
    title: "UX/UI Design",
    description:
      "Designing intuitive and visually appealing user interfaces by applying design thinking, wireframing, and prototyping. Focus on enhancing user experience through usability and accessibility.",
  },
  {
    num: "04",
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile applications using React Native and Flutter. Delivering high-quality apps with smooth performance and engaging user interfaces for iOS and Android.",
  },
];

const ServicePage = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {SERVICES.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                    {service.num}
                  </div>
                  <Link
                    href={"service.href"}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default ServicePage;
