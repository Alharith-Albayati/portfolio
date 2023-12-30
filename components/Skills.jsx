import React, { useRef, useState, useEffect } from "react";
import Skill from "./Skill";

const Skills = () => {
  const titleWidth = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setWidth(entry.contentRect.width);
      });
    });
    resizeObserver.observe(titleWidth.current);
    return () => {
      if (React.isValidElement(titleWidth.current)) {
        resizeObserver.unobserve(titleWidth.current);
      }
    };
  }, []);
  return (
    <>
      <div className="w-full flex flex-col items-center justify-start">
        {/* this is the main div */}
        <div
          ref={titleWidth}
          className="text-white sm:text-3xl text-xl md:text-4xl w-fit whitespace-normal text-center"
        >
          {/* this is the div for the header */}
          <h1>Additional Technologies and Skills</h1>
        </div>
        <div
          className="grid grid-cols-2 px-4 gap-y-6 mt-8"
          style={{ width: `${width}px` }}
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
