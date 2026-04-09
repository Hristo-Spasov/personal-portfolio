import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";


const socialLinks = [
  {
    icon: SiGithub,
    url: "https://github.com/Hristo-Spasov",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    url: "https://linkedin.com/hristo-spasov-fnd/",
    label: "LinkedIn",
  },
];

const roles = [
  "Frontend Developer",
  "Full-Stack Developer",
  "Building scalable solutions",
  "Turning ideas into working products",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FloatingShape = ({ className, delay }) => (
  <motion.div
    className={`absolute rounded-full ${className}`}
    animate={{
      y: [0, -30, 0],
      scale: [1, 1.1, 1],
      rotate: [0, 10, 0],
    }}
    transition={{
      duration: 8 + delay,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
  />
);

const TypewriterEffect = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (subIndex < currentWord.length) {
            setSubIndex((prev) => prev + 1);
          } else {
            setDeleting(true);
          }
        } else {
          if (subIndex > 0) {
            setSubIndex((prev) => prev - 1);
          } else {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      deleting ? 50 : 100,
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words]);

  return (
    <span className="text-gradient-teal">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary" />
        <FloatingShape
          className="w-64 h-64 bg-accent/10 top-20 left-20"
          delay={0}
        />
        <FloatingShape
          className="w-80 h-80 bg-teal/10 bottom-20 right-20"
          delay={2}
        />
        <FloatingShape
          className="w-48 h-48 bg-accent/5 top-1/2 left-1/2"
          delay={4}
        />
        <div className="absolute inset-0 bg-grid-pattern grid-bg opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6"
            >
              I'm <span className="text-gradient">Hristo Spasov</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-textMuted mb-8 min-h-[60px]"
            >
              I'm a <TypewriterEffect words={roles} />
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-textMuted max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Frontend & Full-Stack developer with experience building
              real-world applications using Next.js, TypeScript, and headless
              CMS. Focused on scalable UI and robust data pipelines.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold"
              >
                View My Projects
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn-secondary px-8 py-4 rounded-xl text-lg font-semibold"
              >
                Contact Me
              </Link>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mt-10 justify-center lg:justify-start"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-textMuted hover:text-accent hover:bg-accent/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-teal rounded-2xl blur-xl opacity-20" />
              <div className="relative glass-card rounded-2xl p-6 overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-sm text-textMuted">Stack.ts</span>
                </div>
                <pre className="font-mono text-xs md:text-sm text-green-400 whitespace-pre">{`const Developer = {
  name: "Hristo Spasov",
  tech: ["Next.js", "TypeScript", 
         "PostgreSQL", "Redis"],
  current: "New Tech Plovdiv",
  status: "Building Scalable Apps"
}`}</pre>
              </div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 glass rounded-xl px-4 py-3"
              >
                <span className="text-2xl">⚡</span>
                <span className="ml-2 font-semibold text-text">Next.js 15</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3"
              >
                <span className="text-2xl">🐍</span>
                <span className="ml-2 font-semibold text-text">
                  Python/Data
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-textMuted hover:text-accent transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <HiArrowDown className="w-6 h-6" />
        </motion.a>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
