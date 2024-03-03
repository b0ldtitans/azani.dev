"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import EducationItem from "./EducationItem";

export default function Experience() {
  const experienceRef = useRef<HTMLInputElement>(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <div
      className=" gap-12 justify-center pb-48 text-black -z-50"
      ref={experienceRef}
    >
      <motion.h1
        initial={{ x: "300px" }}
        animate={isExperienceRefInView ? { x: "0" } : {}}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl -z-50"
      >
        EDUCATIONS
      </motion.h1>
      <div className="pb-10" />
      <motion.div
        initial={{ x: "300px" }}
        animate={isExperienceRefInView ? { x: "0" } : {}}
        className=""
      >
        <EducationItem
          school="Purwadhika Digital Technology School"
          degree="Fullstack Web Development Bootcamp"
          date="2023 - 2024"
          position="left"
        />
        <EducationItem
          school="Bandung Institute of Tourism"
          degree={`Associate Degree in Culinary Management, Bachelor Degree in Hotel Administration`}
          date="2016 - 2022"
          position="right"
        />
      </motion.div>
    </div>
  );
}
