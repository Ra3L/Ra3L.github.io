import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import Switcher from "../ui/Switcher";
import Resume from "../assets/resumes/Resume.pdf";

function Navbar() {
  const [nav, setNav] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setNav(!nav);
  }

  return (
    <div className="fixed w-full h-[4rem] flex justify-between items-center px-4">
      <div className="text-xl hover:text-stone-500">Rae Liang</div>

      <ul className="hidden md:flex ">
        <li className="hover:text-stone-500">
          <Link to="home" smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li className="hover:text-stone-500">
          <Link to="about" smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li className="hover:text-stone-500">
          <Link to="skills" smooth={true} duration={500}>
            SKILLS
          </Link>
        </li>
        <li className="hover:text-stone-500">
          <Link to="projects" smooth={true} duration={500}>
            PROJECTS
          </Link>
        </li>
        <li className="hover:text-stone-500">
          <Link to="contact" smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>

      <Switcher />

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile nav */}
      <ul
        className={
          !nav
            ? "hidden "
            : "absolute top-0 left-0 w-full h-screen bg-[#efefef] dark:bg-[#393939] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl hover:text-stone-500">
          <Link to="home" smooth={true} duration={500} onClick={handleClick}>
            HOME
          </Link>
        </li>
        <li className="py-6 text-3xl hover:text-stone-500">
          <Link to="about" smooth={true} duration={500} onClick={handleClick}>
            ABOUT
          </Link>
        </li>
        <li className="py-6 text-3xl hover:text-stone-500">
          <Link to="skills" smooth={true} duration={500} onClick={handleClick}>
            SKILLS
          </Link>
        </li>
        <li className="py-6 text-3xl hover:text-stone-500">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={handleClick}
          >
            PROJECTS
          </Link>
        </li>
        <li className="py-6 text-3xl hover:text-stone-500">
          <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
            CONTACT
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-50">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6699cc] hover:bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-stone-100"
              href="https://www.linkedin.com/in/raeliang"
              target="_blank"
              rel="noopenner noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-stone-600 hover:bg-stone-900">
            <a
              className="flex justify-between items-center w-full text-stone-100"
              href="https://github.com/Ra3L"
              target="_blank"
              rel="noopenner noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#aecdcb] hover:bg-[#3c7782]">
            <a
              className="flex justify-between items-center w-full text-stone-100"
              href="mailto:rae_liang@hotmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-stone-300 hover:bg-stone-500">
            <a
              className="flex justify-between items-center w-full text-stone-100"
              href={Resume}
              download="Resume_RaeLiang.pdf"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
