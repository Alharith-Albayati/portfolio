import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div id="Projects" className="w-full">
      <div className="mb-16 mx-auto w-fit">
        <h1 className="font-Poppins text-white text-4xl">Projects</h1>
      </div>

      <div className="w-[95vw] mx-auto grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:grid-row-2 sm:gap-y-6 sm:justify-between lg:gap-y-8 lg:grid-rows-2">
        <Project
          info={{
            src: "/weather.png",
            title: "Weather App",
            sitePath: "/Weather",
          }}
        />
        <Project
          info={{
            src: "/Ecommerce.png",
            title: "E-commerce App",
            sitePath: "/Ecommerce",
          }}
        />
        <Project
          info={{
            src: "/Signin.png",
            title: "Simple Sign-in page",
            sitePath: "/Signin",
          }}
        />
        <Project
          info={{
            src: "/Dashboard.png",
            title: "Simple Dashboard",
            sitePath: "/Dashboard",
          }}
        />
      </div>
    </div>
  );
};

export default Projects;
