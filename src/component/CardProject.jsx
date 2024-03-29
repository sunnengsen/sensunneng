import React from "react";
import { Link } from "react-router-dom";

export default function CardProject({ img, projectName, frontend, backend, host, link }) {
  return (
    <div className="my-3">
     
        <Link to={link}>
          <div className="border-2 hover:shadow-2xl hover:scale-105 p-0.5 bg-gradient-to-r from-blue-500 to-purple-500
           border-gray-500 duration-300 overflow-hidden rounded-md">
            <img
              src={img}
              className="w-96 h-44 object-cover object-top overflow-hidden"
              alt=""
            />
            <div className="p-2 font-bold border-t-2 bg-white border-gray-500 overflow-hidden">
              <h1>
                Project Name :
                <span className="text-blue-500 font-medium"> {projectName}</span>
              </h1>
              <h2>
                Front-end :{" "}
                <span className="text-green-500 font-medium"> {frontend}</span>
              </h2>
              <h2>
                Back-end :{" "}
                <span className=" text-purple-600 font-medium"> {backend}</span>
              </h2>
              <h2>
                Host : <span className=" text-blue-600 font-medium"> {host}</span>
              </h2>
            </div>
          </div>
        </Link>
      
    </div>
  );
}