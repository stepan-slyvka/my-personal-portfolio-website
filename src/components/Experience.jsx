import React, { useEffect } from "react";

import Git from "../assets/Git.png";
import GitHub from "../assets/github.png";
import Css from "../assets/css.png";
import Html from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import TypeScript from "../assets/Typescript.png";
import Tailwind from "../assets/tailwind.png";
import ReduxImg from "../assets/Redux.png";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

const Experience = () => {
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

  const items = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: ReactImg,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: ReduxImg,
      title: "Redux",
      style: "shadow-purple-400",
    },
    {
      id: 6,
      src: TypeScript,
      title: "TypeScript",
      style: "shadow-sky-600",
    },
    {
      id: 7,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 8,
      src: Git,
      title: "Git",
      style: "shadow-orange-600",
    },
    {
      id: 9,
      src: GitHub,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black
    w-full h-[120vh]"
    >
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="max-w-screen-lg mx-auto p-4 flex flex-col
      justify-center w-full h-full text-white"
      >
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-center">
          Experience
        </p>
        <p className="py-6 text-center">
          This are the technologies I've worked with
        </p>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 
          gap-8 text-center py-8 px-12 sm:px-8"
        >
          {items.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500
              py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
