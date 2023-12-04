import React from "react";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center mt-12 h-[90vh]">
      <h1 className="font-Poppins whitespace-nowrap font-600 text-[25px] sm:text-[30px] lg:text-[55px] bg-gradient-to-r from-fuchsia-500 to-sky-700 bg-clip-text text-transparent">
        Hello, I'm Alharith,
      </h1>
      <h1 className="font-Poppins whitespace-nowrap font-600 text-[25px] sm:text-[30px] lg:text-[55px] text-white">
        front-end developer
      </h1>
      <p className="mt-6 font-Poppins font-500 text-[18px] text-justify leading-[27px] text-[#929EB0] w-[90%]">
        As an aspiring front-end developer with a passion for crafting
        exceptional UI/UX experiences, I bring a strong foundation in Next.js
        and Tailwind CSS, backed by extensive real-world project experience and
        a relentless drive for continuous learning and problem-solving.
      </p>
      <button className="font-Poppins text-white text-lg bg-gradient-to-br from-fuchsia-500 from-30% to-sky-500 px-8 py-4 mt-24 rounded-full mx-auto cursor-pointer shadow-[#00B2FF] shadow-button hover:shadow-blured hover:shadow-[#00B2FF] ease-in duration-300 hover:brightness-95">
        Download CV
      </button>
    </div>
  );
};

export default Hero;
