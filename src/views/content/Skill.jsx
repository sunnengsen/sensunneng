import React from "react";
import logoNext from "../../assets/logo/next.png";
import logoReact from "../../assets/logo/react.png";
import logoVue from "../../assets/logo/vue.png";
import logoSpring from "../../assets/logo/spring.png";
import logoMysql from "../../assets/logo/sql.png";
import logoPostgres from "../../assets/logo/spo.png";
import logoGit from "../../assets/logo/git.png";
import { FaGithub, FaDocker } from "react-icons/fa";

const skills = [
  {
    category: "Front-end",
    skills: [
      { logo: logoReact, name: "React" },
      { logo: logoVue, name: "Vue" },
      { logo: logoNext, name: "Next" },
    ],
  },
  {
    category: "Back-end",
    skills: [{ logo: logoSpring, name: "Spring Boot" }],
  },
  {
    category: "Database",
    skills: [
      { logo: logoMysql, name: "MySQL" },
      { logo: logoPostgres, name: "PostgreSQL" },
    ],
  },
  {
    category: "Others",
    skills: [
      { logo: logoGit, name: "Git" },
      { logo: FaGithub, name: "Github" },
      { logo: FaDocker, name: "Docker" },
    ],
  },
];

export default function Skill() {
  return (
    <div id="skills" className=" bg-gray-100 md:px-20 p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Skill</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {skills.map((skillCategory) => (
  <div className="bg-white p-5 rounded shadow">
    <h1 className="text-2xl font-semibold mb-5 text-blue-500">
      {skillCategory.category}
    </h1>
    <div className="space-y-2 text-gray-700">
      {skillCategory.skills.map((skill) => (
        <div className="flex items-center p-2 hover:translate-y-[-10px] duration-500">
          {typeof skill.logo === "string" ? (
            <img src={skill.logo} className="w-7 h-7" alt="" />
          ) : (
            <skill.logo className="w-7 h-7" />
          )}
          <h1 className="mx-5 font-bold text-md">{skill.name}</h1>
        </div>
      ))}
    </div>
  </div>
))}
      </div>
    </div>
  );
}