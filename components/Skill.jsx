import React from "react";

const Skill = ({ Skill }) => {
  return (
    <div className="flex items-center gap-x-[-1px] w-fit">
      {/* this is the main div */}
      <div className="w-[4vw] h-[4vw] md:h-[3vw] md:w-[3vw] lg:w-[2.5vw] lg:h-[2.5vw] xl:w-[2vw] xl:h-[2vw] bg-gradient-to-br from-fuchsia-500 from-30% to-sky-500 rounded-full mr-1" />
      {/* above is the marker div */}
      <div className="whitespace-nowrap text-white text-[12px] sm:text-[15px] md:text-[22px]">
        {/* this is the text div*/}
        {Skill}
      </div>
    </div>
  );
};

export default Skill;
