import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className={`relative w-full h-screen mx-auto mb-1`}>
      <div className="absolute inset-0  max-w-7xl mx-auto flex flex-row items-center gap-5">
        <div>
          <motion.h3
            className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.5,
            }}
          >
            I'm <span className=" text-[#6948B9]">Hristo Spasov</span>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className={`text-[#e6e2fc] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]`}
            >
              I'm a Frontend developer <br className="sm:block hidden" /> I love
              creating beautiful and responsive web applications.
            </motion.p>
          </motion.h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
