import React from "react";
import Skill from "./Skill";

const Skills = () => {
  return (
    <>
      <div className="w-full">
        {/* this is the main div */}
        <div className="text-white font-Poppins sm:text-3xl mx-auto text-2xl w-fit whitespace-nowrap">
          {/* this is the div for the header */}
          <h1>Additional Technologies and Skills</h1>
        </div>
        <div
          className="w-fit mx-auto grid grid-cols-2 justify-center gap-x-[5vw] px-auto
         gap-y-6 mt-12"
        >
          {/* this is the grid div for the Skills */}
          <Skill Skill="Git & Github" />
          <Skill Skill="Helpful Libraries" />
          <Skill Skill="Good English" />
          <Skill Skill="Quick Learning" />
          <Skill Skill="RWD" />
          <Skill Skill="Continuous Learning" />
          <Skill Skill="Time Management" />
          <Skill Skill="Problem Solving" />
          <Skill Skill="Asynchronous & API" />
        </div>
      </div>
    </>
  );
};

export default Skills;
