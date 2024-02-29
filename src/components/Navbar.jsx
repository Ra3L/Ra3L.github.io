import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import Switcher from "../ui/Switcher";

function Navbar() {
  const [nav, setNav] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setNav(!nav);
  }

  return (
    <div className="fixed w-full h-[4rem] flex justify-between items-center px-4">
      <div className="text-xl hover:text-stone-500">Rhae Liang</div>

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
        <li className="py-6 text-2xl hover:text-stone-500">
          <Link to="home" smooth={true} duration={500} onClick={handleClick}>
            HOME
          </Link>
        </li>
        <li className="py-6 text-2xl hover:text-stone-500">
          <Link to="about" smooth={true} duration={500} onClick={handleClick}>
            ABOUT
          </Link>
        </li>
        <li className="py-6 text-2xl hover:text-stone-500">
          <Link to="skills" smooth={true} duration={500} onClick={handleClick}>
            SKILLS
          </Link>
        </li>
        <li className="py-6 text-2xl hover:text-stone-500">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={handleClick}
          >
            PROJECTS
          </Link>
        </li>
        <li className="py-6 text-2xl hover:text-stone-500">
          <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
