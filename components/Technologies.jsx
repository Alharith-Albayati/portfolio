import React from "react";
import Technology from "../components/Technology";

const Technologies = () => {
  return (
    <div id="Technologies" className="w-full h-screen mt-40">
      <div className="w-[80vw] md:w-[65%] lg:w-[50%] mx-auto flex flex-col items-center justify-start relative gap-y-12">
        <div>
          <h1 className="text-white text-4xl font-Poppins">Technologies</h1>
        </div>
        <div className="w-full flex flex-col gap-y-12">
          <Technology level="Advanced" Technology="HTML" />
          <Technology level="Advanced" Technology="CSS & Tailwind" />
          <Technology level="Advanced" Technology="Javascript" />
          <Technology level="Good" Technology="React.js" />
          <Technology level="Intermediate" Technology="Next.js" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
