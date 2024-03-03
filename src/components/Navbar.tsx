"use client";
import { motion, useInView, useScroll } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { links, variants } from "@/constants";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleSidebar = () => {
    setIsMobileMenuOpen((prev) => !prev);
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
  };

  return (
    <div
      id="navbar"
      className={`relative h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl`}
    >
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className={`fixed top-0 hidden md:block left-1/2 h-[4.5rem] w-full rounded-none borde -translate-x-1/2 border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.3] backdrop-blur-[0.5rem] 
      sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full`}
      />

      <nav className="hidden md:flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="h-3/4 flex items-center justify-center"
              key={link.name}
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition"
                href={link.url}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* --- MOBILE NAVBAR --- */}
      <div className="md:hidden fixed top-0 left-0 p-4 z-[900]">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={toggleSidebar}
        >
          <motion.div
            variants={variants.topVariants}
            animate={isMobileMenuOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={variants.centerVariants}
            animate={isMobileMenuOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={variants.bottomVariants}
            animate={isMobileMenuOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {isMobileMenuOpen && (
          <motion.div
            variants={variants.listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={variants.listItemVariants}
                className=""
                key={link.name}
              >
                <Link onClick={toggleSidebar} href={link.url}>
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
