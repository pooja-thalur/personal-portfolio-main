import React from "react";
import { TypeAnimation } from "react-type-animation";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col pt-20 mb-20">
      <h1 className="text-4xl md:text-7xl dark:text-amber-100 mb-1 md:mb-3 font-semibold">
        Pooja Thalur
      </h1>
      <p className="text-base md:text-xl dark:text-lime-300 mb-5 font-normal">
        I am
        <TypeAnimation
          sequence={[
            " a software developer",
            1000,
            " a food enthusiast",
            1000,
            " a problem solver",
            1000,
            " a plant lover",
            1000,
            " an amateur gamer",
            1000,
            " an avid learner",
            1000,
            " a master's grad",
            1000,
            " exploring AI/ML",
            1000,
          ]}
          wrapper="span"
          speed={150}
          repeat={Infinity}
        />
      </p>
      <div className="max-w-4xl grid grid-cols-1 mt-8 mb-2 md:grid-cols-4 gap-y-5 md:gap-6">
        <img
          src="./assets/portrait.jpg"
          alt="self-portrait"
          className="h-40 md:h-52 object-cover rounded-full justify-self-center border-[1.5px] border-gray-900 dark:border-amber-50"
        />
        <div className="col-span-3 self-center">
          <p className="text-sm mb-4 font-extralight dark:text-amber-50">
            Welcome to my personal site, where I apply what I learn to
            create experiments that are fun and cool!
          </p>
          <p className="text-sm mb-4 font-extralight dark:text-amber-50">
            I believe that programming can be both{" "}
            <span className="font-bold">structured</span> and{" "}
            <span className="font-bold text-xs text-red-500">C</span>
            <span className="font-bold text-xs text-green-500">R</span>
            <span className="font-bold text-xs text-yellow-500">E</span>
            <span className="font-bold text-xs text-blue-500">A</span>
            <span className="font-bold text-xs text-purple-500">T</span>
            <span className="font-bold text-xs text-cyan-500">I</span>
            <span className="font-bold text-xs text-amber-600">V</span>
            <span className="font-bold text-xs text-emerald-500">E</span>. With
            a highly detail-oriented and methodical nature, I actively seek
            solutions that nurture creativity.
          </p>
          <p className="text-sm mb-2 font-extralight dark:text-amber-50">
          If you’d like to know more about my work—or offer me a job 
          (so I can fund my plant obsession and keep learning) - 
          feel free to reach out using the contact info at the bottom of this page!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
