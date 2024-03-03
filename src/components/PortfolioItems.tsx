import { portfolio } from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function PortfolioItems() {
  const ref = useRef<HTMLInputElement>(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  return (
    <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden z-50">
      <motion.div style={{ x }} className="flex">
        <div className="h-screen w-screen flex items-center z-[50] justify-center bg-gradient-to-r from-purple-300 to-red-300" />
        {portfolio.map((item) => (
          <div
            className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
            key={item.id}
          >
            <div className="flex flex-col gap-8 text-white">
              <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl z-50">
                {item.title}
              </h1>
              <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                <Image src={item.img} alt="" fill />
              </div>
              <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                {item.desc}
              </p>
              <Link href={item.link} className="flex justify-end">
                <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                  See Demo
                </button>
              </Link>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
