import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

const About = () => {
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
      name="about"
      className="w-full h-[110vh] bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-[85%]"
      >
        <div className="pb-4 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-base mt-8">
          Hi 👋, My name is Stepan Slyvka. I'm 22 years old. Currently I'm
          studying at Uzhhorod National University 👨‍🎓. I've got Bachelor's
          Degree in International Law and soon will get Master's Degree. My
          hobbies are: gym 💪, watching the movies 🎦, computer games 🎮. And
          also I like to walk with my friends 🚶‍♂️.
        </p>

        <br />

        <p className="text-base">
          How do I started to learn front-end? Interesting question 🤔. From my
          childhood I always liked to learn something new in computer
          technologies and now when I grow up I've decided to try myself in a
          front-end development 🧑. So, 3 years ago, I was watching some videos
          on YouTube on how to code HTML and CSS, but then I thought that maybe
          It's not mine and I should concentrate on studying at the university
          🤷‍♂️. After that, COVID-19 happened and I thought that it's perfect time
          to learn front-end. I bought some courses on Udemy and everything was
          fine 😌. I've learned technologies like: HTML/CSS, JS, React.js, Git
          and Github, etc. So, now I'm ready to try my best in front-end
          development 😉 P.S. Recently I was paid for my first real
          project(church website which can be seen in Portfolio section).
        </p>
      </motion.div>
    </div>
  );
};

export default About;
