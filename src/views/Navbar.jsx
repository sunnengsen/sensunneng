import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/sunneng.png";
import Button from "../component/Button";
const handleClick = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};
const Navbar = () => {
  return (
    <main className=" z-50 backdrop-blur-lg h-20 flex items-center justify-between sticky top-0">
   
        <img
          src={img}
          alt="sunneng"
          className="w-12 h-12 rounded-full object-cover ml-3 md:ml-10"
        />
        <div className="flex justify-end  md:px-10">
         <Button
            onClicks={() => handleClick("about")}
            buttons="About"
            moreStyle="px-3 text-nowrap text-white hover:translate-y-0.5 py-2 rounded-md hover:bg-blue-300 duration-200 bg-blue-400 mx-2"
         />
          <Button
              onClicks={() => handleClick("skills")}
              buttons="Skills"
              moreStyle="px-3 text-nowrap text-white hover:translate-y-0.5 py-2 rounded-md hover:bg-blue-300 duration-200 bg-blue-400 mx-2"
          />
          <Button
              onClicks={() => handleClick("projects")}
              buttons="Projects"
              moreStyle="px-3 text-nowrap text-white hover:translate-y-0.5 py-2 rounded-md hover:bg-blue-300 duration-200 bg-blue-400 mx-2"
          />
        </div>
     
    </main>
  );
};

export default Navbar;
