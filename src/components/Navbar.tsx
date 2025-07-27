import { useState } from "react";
import HamburgerIcon from "../assets/hamburger-icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="border border-blue-200 h-30 flex items-center px-7 justify-between backdrop-blur-sm z-10 fixed top-0 w-full bg-white/70 shadow-md">
      <h1 className="text-2xl md:text-3xl font-bold opacity-75">
        Shubham (JVKE)
      </h1>

      {/* Hamburger Icon */}
      <button className="md:hidden" onClick={toggleMenu}>
        <img src={HamburgerIcon} alt="menu" width="30px" />
      </button>

      {/* Navigation Links */}
      <ul
        className={`flex flex-col md:flex-row absolute md:static top-30 right-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible md:visible md:opacity-100"
        }`}
      >
        {["hero", "about", "projects", "skills", "contact"].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className="block px-6 py-3 text-pink-500 hover:text-pink-600 font-semibold text-center"
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
