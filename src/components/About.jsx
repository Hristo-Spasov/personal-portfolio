import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div
        id="about"
        className="relative w-full h-full md:h-screen mx-auto flex flex-col justify-center "
        initial="hidden"
        viewport={{ once: true }}
        whileInView="visible"
        transition={{ duration: 2 }}
        variants={{
          visible: { opacity: 1, x: 0, threshold: 0.1 },
          hidden: { opacity: 0, x: -100 },
        }}
      >
        <div className="flex flex-col justify-center items-center ">
          <p
            className={`text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] px-20`}
          >
            Introduction
          </p>
          <h2
            className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 px-20`}
          >
            Overview.
          </h2>
        </div>
        <div className="flex flex-col  justify-center items-center">
          <p className=" mt-4 text-slate-300 text-[17px] max-w-3xl leading-[30px] px-20">
            I am outgoing, dedicated, and open-minded. I work great with people
            and adjust to changes with ease. I believe that a person should work
            on developing their professional skills and learning new things all
            the time.
          </p>
          <p className=" mt-4 text-slate-300 text-[17px] max-w-3xl leading-[30px] px-20">
            I like working with React and TailwindCSS and my goal is to bring
            something meaningful and useful to people. Outside of developing, I
            like to read books and play video games and I'm also a passionate
            cook.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default About;
