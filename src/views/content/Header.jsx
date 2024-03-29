import React from "react";
import img from "../../assets/sunneng.png";
import Button from "../../component/Button";
const handleClick = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};
export default function Header() {
  return (
    <main>
      <div
        id="header"
        className="w-full min-h-[60vh]  md:flex flex-row-reverse justify-evenly items-center bg-slate-100"
        
      >
        <div>
          <img
            src={img}
            alt="Rizky"
            className="rounded-full lg:block mx-auto w-72 h-72 object-cover bg-gradient-to-r from-blue-500 p-1 to-purple-500 shadow-2xl"
          />
        </div>
        <div>
          <h1 className="md:text-5xl text-4xl font-bold text-center my-3">
            Hello, I'm <span className="text-blue-500 ">Sunneng</span>
          </h1>
          <p className="text-center text-xl">Web Developer </p>
          <div
            onClick={() => handleClick("footer")}
            className="flex justify-center"
          >
            <Button
              buttons="Contact Me"
              moreStyle=" mt-5 rounded-full mx-auto px-5 py-3 shadow-2xl text-white font-bold hover:scale-105 duration-300"
            />
          </div>
        </div>
        
      </div>
    </main>
  );
}
