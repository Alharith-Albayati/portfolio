import React from "react";
import Navbar from "../components/Navbar";
import Fixedbutton from "@/components/Fixedbutton";
import Hero from "../components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Skills from "@/components/Skills";
import Aboutme from "@/components/Aboutme";
import Contactme from "@/components/Contactme";

const index = () => {
  return (
    <div className="bg-[rgb(15,22,36)] w-full">
      <Navbar />
      <Fixedbutton />
      <Hero />
      <Projects />
      <Technologies />
      <Skills />
      <Aboutme />
      <Contactme />
    </div>
  );
};

export default index;
