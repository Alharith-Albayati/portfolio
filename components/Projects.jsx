import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div id="Projects" className="w-full">
      <div className="mb-16 mx-auto w-fit">
        <h1 className="font-Poppins text-white text-4xl">Projects</h1>
      </div>

      <div className="w-[95vw] mx-auto grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:grid-row-3 sm:gap-y-6 sm:justify-between lg:grid-cols-3 lg:grid-rows-2">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Projects;
