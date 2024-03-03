"use client";
import { skills } from "@/constants";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Skill() {
  const skillRef = useRef<HTMLInputElement>(null);
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  return (
    <section
      className="flex flex-col gap-12 md:w-1/2 w-full h-screen justify-center text-black"
      ref={skillRef}
      id="skills"
    >
      <motion.h1
        initial={{ x: "-300px" }}
        animate={isSkillRefInView ? { x: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl"
      >
        SKILLS
      </motion.h1>
      <motion.div
        initial={{ x: "-300px" }}
        animate={isSkillRefInView ? { x: 0 } : {}}
        className="flex gap-4 flex-wrap"
      >
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:invert"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
