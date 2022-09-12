import React, { useEffect } from "react";

import GymWebsite from "../assets/portfolio/Gym-website.jpg";
import Isomorphic from "../assets/portfolio/Isomorphic.jpg";
import PortfolioImg from "../assets/portfolio/Portfolio.jpg";
import Quotes from "../assets/portfolio/Quotes.jpg";
import RestaurantMenu from "../assets/portfolio/Restaurant-menu.jpg";
import Todos from "../assets/portfolio/todos.jpg";

import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

const Portfolio = () => {
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

  const portfolios = [
    {
      id: 1,
      src: Isomorphic,
      code: "https://github.com/stepan-slyvka/test-project",
      demo: "https://isomorphic.netlify.app/",
    },
    {
      id: 2,
      src: RestaurantMenu,
      code: "https://github.com/stepan-slyvka/restaurant-menu-order-app",
      demo: "https://my-restaurant-menu-website.netlify.app/",
    },
    {
      id: 3,
      src: Quotes,
      code: "https://github.com/stepan-slyvka/write-your-quotes",
      demo: "https://adding-some-quotes.netlify.app",
    },
    {
      id: 4,
      src: Todos,
      code: "https://github.com/stepan-slyvka/add-and-delete-todos-ts",
      demo: "https://adding-todos-typescript.netlify.app/",
    },
    {
      id: 5,
      src: GymWebsite,
      code: "https://github.com/stepan-slyvka/gym-website",
      demo: "https://responsive-gym-website.netlify.app/",
    },
    {
      id: 6,
      src: PortfolioImg,
      code: "https://github.com/stepan-slyvka/portfolio-example",
      demo: "https://example-portfolio-website.netlify.app/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-8 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg w-full box-content max-w-[350px]"
            >
              <img
                src={src}
                alt="work example"
                className="rounded-md duration-200 hover:scale-105 "
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:border-b-4">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex m-auto"
                  >
                    Demo <TbWorld className="pl-1 w-fit self-center" />
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:border-b-4">
                  <a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex m-auto"
                  >
                    Code <FaGithub className="pl-1 w-fit self-center" />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
