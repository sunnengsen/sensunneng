import React from "react";
import Title from "../../component/Title";
import CardProject from "../../component/CardProject";
import eva from "../../assets/eva.png";
import fe from "../../assets/fe.webp";
import derleng from "../../assets/derleng.png";



export default function Project() {
  return (
    <div id="projects" className=" bg-slate-100 py-5 px-10 md:px-20 ">
      <Title moreStyle="" title="Experince" />
      <li className="text-xl my-5">
        <span className="text-blue-500 font-bold">3/2023 - 9/2023 </span> Web
        development internship at Faculty of EngineeringRUPP
      </li>

      <h1 className="font-bold uppercase text-2xl underline my-5">Projects</h1>
      <div className=" my-10 flex flex-wrap justify-between">
        <CardProject
        link={"https://eva.rupp.support/login"}
          img={eva}
          projectName="Evaluation System"
          frontend="Next JS"
          backend="Flask API"
          host="Docker"
        />
        <CardProject
        link={"https://www.fe.rupp.edu.kh/"}

          img={fe}
          projectName="FE Website"
          frontend="Vue JS"
          backend="Strapi CMS"
          host="Docker"
        />
        
        <CardProject
        link={"https://derleng.site/"}

          img={derleng}
          projectName="Derleng Website"
          frontend="React JS"
          backend="Spring Boot"
          host="Docker"
        />

      </div>
    </div>
  );
}
