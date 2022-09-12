import React, { useEffect, useState } from "react";

import HeroImage from "../assets/heroImage.jpg";
import { HiOutlineArrowRight } from "react-icons/hi";

import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

const Home = (props) => {
  const [showTyping, setShowTyping] = useState(false);

  setTimeout(() => {
    setShowTyping(true);
  }, 1500);

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div
      name="home"
      className="h-[110vh] w-full bg-gradient-to-b 
        from-black to-gray-800 via-black"
    >
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full lg:mr-12 w-[100%]">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            {showTyping && !props.nav && (
              <Typewriter
                options={{
                  strings: [
                    "I'm a Front-end Developer",
                    "I'm a HTML/CSS Coder",
                    "I'm a React.js Developer",
                    "I'm a Student",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            )}
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 1.5+ years of overall experience in programming 😀. I was
            working only as a freelancer and I've done some PET projects to make
            my skills better 💪! I've learned alot about: HTML, CSS, CSS,
            Vanilla JS, React.js, Redux and Redux-toolkit adaptive and
            crossbrowser website creating, JQuery, Git and GitHub, etc. This is
            my first Portfolio Website, so hope you enjoy 😉.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
               from-cyan-500 to-blue-500 cursor-pointer hover:scale-110 duration-200"
            >
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <HiOutlineArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-[100%] ml-8">
          <img
            src={HeroImage}
            alt="my profile pic"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
