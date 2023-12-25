import React from "react";
import Link from "next/link";
import Image from "next/image";

const Project = ({ info }) => {
  return (
    <div className="max-w-[75vw] w-fit sm:max-w-[45vw] lg:max-w-[40vw] mx-auto rounded-md flex items-center justify-center h-fit bg-gradient-to-br from-fuchsia-500 from-30% to-sky-500 shadow-[#00B2FF] shadow-button hover:shadow-blured hover:shadow-[#00B2FF] ease-in duration-300 hover:brightness-95">
      <div className="bg-[rgb(15,22,36)] text-center text-white w-[99%] h-[99%] cursor-pointer z-20 flex flex-col gap-y-6">
        {/* this is the inner div for the image and the live preview button */}
        <div className="font-Poppins text-2xl text-purple-500">
          {/* this is the div for the title */}
          <h3 className="relative top-3">{info.title}</h3>
        </div>
        <div className="w-full mx-auto h-1/2">
          <Image
            src={info.src}
            alt={info.title}
            height={500}
            width={500}
            className="w-full h-full"
            layout="responsive"
          />
        </div>
        <div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 py-2 px-8 text-xl mx-auto relative bottom-3 cursor-pointer w-fit h-fit text-center rounded-xl">
          <Link href={info.sitePath}>Live Show</Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
