import React, { useState } from "react";
import { BiSolidChevronLeft } from "react-icons/bi";
import { BiSolidChevronRight } from "react-icons/bi";

const Aboutme = () => {
  const [current, setCurrent] = useState(0);

  const about_me = [
    `🚀 Skills and Expertise: I've honed my skills in React.js,
    Next.js, and Tailwind CSS, creating a range of projects that
    showcase my ability to build responsive, performant, and
    user-friendly web applications.`,
    ` 📚 Continuous Learning and Constantly Seeking Growth: Learning
    is my superpower, and I thrive on staying up-to-date with the
    latest developments in the tech world. Whether it's diving
    deeper into React.js or exploring the vast realm of front-end
    development, I'm always eager to expand my knowledge. My
    commitment to continuous improvement drives me to embrace new
    challenges and grow as a developer.`,
    ` 👥 Team Player: Collaboration fuels innovation, and I love
    working with diverse teams of developers. I believe that the
    synergy of different perspectives leads to the most creative
    solutions. Let's build amazing things together!`,
    `💡 Adaptable and Fast Learner: The tech industry evolves
    rapidly, and I thrive in dynamic environments. My adaptability
    and quick learning abilities allow me to embrace new challenges
    with enthusiasm.`,
    `📈 Career Aspirations: My goal is to grow from an entry-level
    front-end developer into a senior role. I'm committed to putting
    in the effort and time required to achieve this milestone. With
    a strong work ethic and a hunger for improvement, I'm confident
    in my ability to contribute to your team's success.`,
    `  🌐 Beyond Coding: I'm not just a coder; I'm a well-rounded
    individual who values personal growth, building connections, and
    fostering a positive work environment. Let's not only create
    great code but also a great workplace culture.`,
  ];

  const lastSlide = about_me.length - 1;

  function prevSlide() {
    current == 0 ? setCurrent(lastSlide) : setCurrent((current) => current - 1);
  }

  function nextSlide() {
    current == lastSlide ? setCurrent(0) : setCurrent((current) => current + 1);
  }

  return (
    <div className="w-full mt-20" id="About me">
      <h1 className="font-Poppins text-white text-3xl w-fit mx-auto">
        About me
      </h1>
      <div className="text-white font-Poppins justify-center text-[15px] mt-6 flex flex-col">
        {/* this is the main about me div */}
        <p className="w-[80vw] text-justify mx-auto">
          Hello! I&apos;m Alharith, a passionate and dedicated front-end
          developer with a strong foundation in HTML, CSS, and JavaScript. My
          journey began with a hunger for learning, and it has taken me on an
          exciting path through various technologies and frameworks. Here&apos;s
          a glimpse of my journey so far:
        </p>
        <div className="w-[80vw] px-16 box-border relative flex items-center mx-auto mt-8 bg-gradient-to-r from-fuchsia-500 to-sky-700 p-8 rounded-lg">
          {/* this is the dynamic about me div */}

          <BiSolidChevronRight
            onClick={nextSlide}
            className="animate-bounceRight absolute right-4 cursor-pointer text-2xl top-1/2 z-20"
          />

          <BiSolidChevronLeft
            className="animate-bounceLeft absolute left-4 cursor-pointer text-2xl top-1/2 z-20"
            onClick={prevSlide}
          />

          {about_me.map((about, index) => {
            return (
              <div
                key={index}
                className={`w-fit text-white text-[15px] text-justify bg-transparent duration-1000 ease-in ${
                  current == index ? "opacity-1" : "opacity-0"
                } `}
              >
                {index == current && <p>{about}</p>}
              </div>
            );
          })}
        </div>
        <br className="mt-10" />
        <div className="w-[80vw] text-justify mt-10 mx-auto">
          {/* this is the consclusion div */}
          I&apos;m excited to embark on this journey as a front-end developer
          and am actively seeking opportunities to apply my skills, learn from
          experienced mentors, and contribute to innovative projects. Let&apos;s
          connect, collaborate, and create exceptional web experiences together.
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
