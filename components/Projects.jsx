import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div id="Projects" className="w-full">
      <div className="mb-16 mx-auto w-fit">
        <h1 className="text-white text-4xl">Projects</h1>
      </div>

      <div className="w-[95vw] mx-auto grid grid-cols-1 gap-y-16 place-items-center sm:grid-cols-2 sm:gap-y-6 lg:gap-8 lg:grid-cols-3">
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
