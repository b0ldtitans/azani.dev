import { Divider, Hero } from "@/components";
import dynamic from "next/dynamic";
const About = dynamic(() => import("@/components/About"), {
  loading: () => (
    <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
  ),
});
const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => (
    <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
  ),
});
const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => (
    <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
  ),
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => (
    <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
  ),
});
const Portfolio = dynamic(() => import("@/components/Portfolio"), {
  loading: () => (
    <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
  ),
});

export default function Home() {
  return (
    <main>
      <div className="flex flex-col md:gap-y-24 gap-y-60 items-center px-4">
        <Hero />
        <Divider />
        <About />
        <Skills />
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:px-48 xl:py-24 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-full">
          <Experience />
        </div>
      </div>
      <Portfolio />
      <Contact />
    </main>
  );
}
