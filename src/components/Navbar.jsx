import  { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
    setActive("");
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4 glass border-b border-white/10" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          smooth={true}
          duration={300}
          onClick={scrollToTop}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-teal flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
            <span className="text-white font-black text-xl">H</span>
          </div>
          <div className="flex flex-col">
          <p className="text-white text-xl font-bold flex flex-col leading-none">
            Hristo
          </p>
          <p className="text-white text-xl font-bold flex flex-col leading-none">
            Spasov
          </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden md:flex items-center gap-8">
          {navLinks.map((nav) => (
            <li key={nav.id} className="relative group">
              <Link
                to={nav.id}
                smooth={true}
                duration={500}
                offset={-80}
                onSetActive={() => setActive(nav.title)}
                className={`cursor-pointer text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                  active === nav.title ? "text-accent" : "text-textMuted hover:text-white"
                }`}
              >
                {nav.title}
              </Link>
              {/* Active indicator */}
              <div
                className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                  active === nav.title ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          ))}
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn-primary py-2 px-6 rounded-full text-xs uppercase tracking-widest cursor-pointer"
            >
              Hire Me
            </Link>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="w-10 h-10 flex items-center justify-center text-white text-2xl"
            aria-label="Toggle menu"
          >
            {toggle ? <HiX /> : <HiMenuAlt3 />}
          </button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                className="fixed top-0 right-0 w-3/4 h-screen bg-primary/95 backdrop-blur-xl z-40 p-8 flex flex-col border-l border-white/5 shadow-2xl"
              >
                <div className="flex justify-end mb-12">
                  <button
                    onClick={() => setToggle(false)}
                    className="w-10 h-10 flex items-center justify-center text-white text-2xl"
                  >
                    <HiX />
                  </button>
                </div>
                
                <ul className="list-none flex flex-col gap-8">
                  {navLinks.map((nav) => (
                    <li key={nav.id}>
                      <Link
                        to={nav.id}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        onClick={() => {
                          setToggle(false);
                          setActive(nav.title);
                        }}
                        className={`text-2xl font-black uppercase tracking-tighter cursor-pointer ${
                          active === nav.title ? "text-accent" : "text-white"
                        }`}
                      >
                        {nav.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    onClick={() => setToggle(false)}
                    className="btn-primary block text-center py-4 rounded-xl text-lg font-bold"
                  >
                    Contact Me
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
