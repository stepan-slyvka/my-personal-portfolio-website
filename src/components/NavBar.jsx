import React, { useState } from "react";

import { Link } from "react-scroll";

import Hamburger from "hamburger-react";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex px-4 justify-between items-center w-full h-20 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2 cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            Stepan Slyvka
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200 hover:border-b-4"
          >
            <Link to={link} smooth={true} duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={toggleNav}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        <Hamburger direction="right" size={25} duration="0.5" />
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={closeNav} to={link} smooth={true} duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
