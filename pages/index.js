import React from "react";
import Navbar from "../components/Navbar";
import Fixedbutton from "@/components/Fixedbutton";
import Hero from "../components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Skills from "@/components/Skills";
import Aboutme from "@/components/Aboutme";
import Contactme from "@/components/Contactme";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Portfolio</title>
      </Head>
      <div className="bg-[rgb(15,22,36)] w-screen overflow-x-hidden">
        <Navbar />
        <Fixedbutton />
        <Hero />
        <Projects />
        <Technologies />
        <Skills />
        <Aboutme />
        <Contactme />
      </div>
    </>
  );
};

export default index;
