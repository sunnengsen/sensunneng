import React from "react";
import Title from "../../component/Title";

export default function About() {
  const HTML = (
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/HTML"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-red-500">HTML</span>
    </a>
  );
  const CSS = (
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/CSS"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-blue-500">CSS</span>
    </a>
  );
  const JavaScript = (
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-yellow-500">JavaScript</span>
    </a>
  );
  const Spring_boot = (
    <a
      href="https://spring.io/projects/spring-boot"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-green-500 text-nowrap">Spring Boot</span>
    </a>
  );
  const Node = (
    <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
      <span className="text-green-500">Node.js</span>
    </a>
  );
  const React = (
    <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      <span className="text-blue-500">React.js</span>
    </a>
  );
  const Vue = (
    <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">
      <span className="text-green-500">Vue.js</span>
    </a>
  );
  const Next = (
    <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
      <span className="text-black">Next.js</span>
    </a>
  );
  const Bootstrap = (
    <a
      href="https://getbootstrap.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-purple-500">Bootstrap</span>
    </a>
  );
  const Tailwind = (
    <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
      <span className="text-blue-500">Tailwind CSS</span>
    </a>
  );


  return (
    <main>
      <div
        id="about"
        className="w-full min-h-[70vh] items-center bg-slate-100 md:px-20 px-10 flex flex-col justify-center"
      >
        <Title title="About Me" moreStyle="text-blue-500 uppercase" />
        <p className="text-xl my-5 text-gray-600 leading-loose -tracking-tight">
          Hey there, I am Sunneng Sen, a front-end development enthusiast
          currently studying Information Technology Engineering at the Royal
          University of Phnom Penh. Passionate about crafting user-friendly
          digital experiences, I am skilled in {HTML}, {CSS}, {JavaScript}, {Spring_boot}, 
          {Node}, {React}, {Vue}, {Next}, {Bootstrap}, {Tailwind}, and more. I
          thrive on tackling challenging projects and staying up-to-date with
          industry trends. Excited to connect with fellow developers and explore
          new opportunities in the field!
        </p>

        <div className="w-full">
          <h1 className="font-bold uppercase text-2xl underline my-5">
            Education
          </h1>
          <li className="text-xl my-3">
            <span className="text-blue-500 font-bold">2021 </span> Graduated from Pursat High School
          </li>
          <li className="text-xl my-3">
            <span className="text-red-500 font-bold">Now </span> Studying Information Technology Engineering at Royal University of Phnom Penh
          </li>
        </div>
      </div>
    </main>
  );
}
