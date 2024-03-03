"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ExperienceItem from "./ExperienceItem";
import Education from "./Education";

export default function Experience() {
  const experienceRef = useRef<HTMLInputElement>(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <section
      id="experience"
      className="flex flex-col md:flex-row justify-between relative gap-y-20 md:gap-x-24 -z-50"
    >
      <div
        className="flex flex-col gap-12 justify-center pb-48 text-black"
        ref={experienceRef}
      >
        <motion.h1
          initial={{ x: "-300px" }}
          animate={isExperienceRefInView ? { x: "0" } : {}}
          transition={{ delay: 0.2 }}
          className="font-bold text-2xl z-0"
        >
          EXPERIENCE
        </motion.h1>
        <motion.div
          initial={{ x: "-300px" }}
          animate={isExperienceRefInView ? { x: "0" } : {}}
          className=""
        >
          <ExperienceItem
            jobTitle="Freelance Web Developer"
            jobDesc="I provided web solutions, applying a range of technologies to address client requirements."
            jobDate="2024 - Present"
            position="left"
          />
          <ExperienceItem
            jobTitle="Procurement Associate"
            jobDesc="I spearheaded React-based application development, leveraging advanced skills."
            jobDate="Sept 2021 - Sept 2022"
            jobCompany="@Masoi.bakedgoods"
            position="right"
          />
          <ExperienceItem
            jobTitle="Kitchen Department Trainee"
            jobDesc="I provided web solutions, applying a range of technologies to address client requirements."
            jobDate="Feb 2018 - Aug 2018"
            jobCompany="Courtyard by Marriott Seminyak Bali Resort"
            position="left"
          />
        </motion.div>
      </div>
      <div></div>
      <Education />
    </section>
  );
}
