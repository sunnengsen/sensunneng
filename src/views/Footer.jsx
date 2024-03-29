import React from "react";
import Title from "../component/Title";
import Paragraph from "../component/Paragraph";
import { Link } from "react-router-dom";
import { FaTelegram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
const links = [
  { to: "tel:+855 978 531 358", icon: <FaPhoneSquare />, 
  show:"0978531358",
  text: "Call" },
  { to: "https://t.me/sensunneng", icon: <FaTelegram />, 
  show:"@sensunneng",
  text: "Telegram" },
  { to: "mailto:sunnengsen@gmail.com", icon: <MdEmail />, 
  show:"sunnengsen@gmail.com",
  text: "Email" },
  { to: "https://github.com/sunnengsen", icon: <FaGithub />, 
  show:"sunnengsen",
  text: "Github" },
  {
    to: "https://www.linkedin.com/in/sunneng-sen-7239422b0/",
    icon: <FaLinkedin />,
    
    show:"@sunneng-sen",
    text: "Linkedin",
  },
];

export default function Footer() {
  const [hoveredLink, setHoveredLink] = React.useState(null);
  

  return (
    <main>
      <div id="footer">
        <div className="bg-slate-100 pb-10 w-full">
          <div className="p-5 grid justify-center ">
            <Title moreStyle="my-5" title="Let's work together!" />
            <Paragraph moreStyle="" paragraph="I'm always happy and wish to join your develop team to make things happen in a quick and efficient way." />
            <Paragraph moreStyle="" paragraph="Feel free to contact me on any of the following platforms." />
          </div>
          {hoveredLink && <div className="text-center duration-300 absolute w-full">{hoveredLink}</div>}
          <div className="flex flex-wrap justify-center my-10 px-10">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                onMouseEnter={() => setHoveredLink(link.show)}
                onMouseLeave={() => setHoveredLink(null)}
                className="px-3 py-2 m-1 rounded-md flex justify-center items-center hover:scale-105 hover: duration-300 hover:translate-y-[-5px] hover:bg-slate-100 bg-white mx-2"
              >
                <span className="mr-2">{link.icon}</span> {link.text}
              </Link>
            ))}

          </div>
          
        </div>
      </div>
    </main>
  );
}
