"use client";
import dynamic from "next/dynamic";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
// import { useSectionInView } from "@/hooks/useSectionInView";
const Brain = dynamic(() => import("@/components/Brain"), {
  loading: () => (
    <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
  ),
});

export default function AboutPage() {
  const containerRef = useRef<HTMLInputElement>(null);
  // const { ref } = useSectionInView("About");
  const { scrollYProgress }: any = useScroll({ container: containerRef });
  const isAboutRefInView = useInView(containerRef, { margin: "-100px" });

  return (
    <motion.section
      // ref={ref}
      className="mb-28 w-full h-full text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={isAboutRefInView ? { opacity: 0, y: 100 } : {}}
      animate={isAboutRefInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="h-full  lg:flex" ref={containerRef}>
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:px-48 xl:py-24 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          <div className="flex flex-col gap-12 justify-center text-black">
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isAboutRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              About Me
            </motion.h1>
            <motion.p
              initial={{ x: "-300px" }}
              animate={isAboutRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mb-6 text-left"
            >
              A dash of culinary creativity, a sprinkle of hospitality finesse,
              and a tech-savvy twist – that&apos;s me in a nutshell. With a
              culinary arts degree and a background in hotel administration from
              the prestigious Bandung Institute of Tourism, I&apos;ve blended my
              passion for IT with my knack for innovation. <br />
              <br />
              Right now, I&apos;m adding digital prowess to my skillset at
              Purwadhika Digital Technology School. My secret sauce? Navigating
              fast-paced terrains like a pro, and adapting on the fly. <br />
              <br />
              I&apos;m not just about pixels and code – I&apos;m here to stir up
              success. Whether it&apos;s crafting delightful user experiences or
              dishing out dynamic web solutions, I&apos;m your guy. Let&apos;s
              whip up something amazing together. Connect with me at
              thareqazani@gmail.com and let&apos;s add a pinch of innovation to
              the digital world.
            </motion.p>
            <div className="self-end">
              <motion.div
                initial={{ x: "-300px" }}
                animate={isAboutRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="self-end"
              >
                <Image
                  src={"/signature.png"}
                  unoptimized
                  alt="signature"
                  width={240}
                  height={240}
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.section>
  );
}
