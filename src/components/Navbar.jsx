import React, { useState } from "react";
import logo from "../assets/logo.svg";
import burger from "../assets/burger.svg";
import close from "../assets/close.svg";
import { navLinks } from "../constants";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="flex  text-white bg-primery fixed w-full z-40 top-0 rounded-b">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Back to top */}
        <Link
          to="/"
          smooth={true}
          duration={300}
          onClick={() => {
            scrollToTop();
            setActive("");
            setToggle(false);
          }}
        >
          <img
            src={logo}
            className="h-[80px] w-[80px] object-contain cursor-pointer mt-2 ml-2 mb-2 py-[5px]"
            alt="logo"
          />
        </Link>
        {/* Desktop nav */}
        <ul className="list-none hidden sm:flex justify-center gap-10 ">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={` hover:text-accent cursor-pointer text-[18px] font-medium px-4 
              ${active === nav.title ? " text-accent " : " text-white "}`}
            >
              <Link
                to={nav.id}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile */}
        <div className="flex sm:hidden px-4">
          <img
            src={toggle ? close : burger}
            alt="menu"
            className="h-[30px] w-[30px] object-contain cursor-pointer bg-white rounded"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6  bg-gradient-to-b from-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl transition delay-150 duration-300 ease-in-out `}
          >
            <ul className="list-none  flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-black hover:text-accent cursor-pointer text-[18px]  px-4 
                  ${active === nav.title ? "text-accent" : "text-primery"}`}
                >
                  <Link
                    to={nav.id}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={() => {
                      setActive(nav.title);
                      setToggle(!toggle);
                    }}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
