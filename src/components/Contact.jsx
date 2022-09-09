import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useFormik } from "formik";

const Contact = () => {
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

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length <= 5) {
      errors.name = "Must be 5 characters or more";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.message) {
      errors.message = "Required";
    } else if (values.message.length <= 10) {
      errors.message = "Must be 10 characters or more";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
  });

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="flex flex-col p-4 justify-center max-w-screen-lg
      mx-auto h-full"
      >
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/ff156697-5216-4078-83ba-67303b862249"
            method="POST"
            className="flex flex-col w-full md:w-[70%]"
          >
            <input
              type="text"
              id="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2
            rounded-md text-white focus:outline-none"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500">{formik.errors.name}</div>
            ) : null}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2
            rounded-md text-white focus:outline-none"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
            <textarea
              name="message"
              type="text"
              id="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md
            text-white focus:outline-none"
              onChange={formik.handleChange}
              value={formik.values.message}
              onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500">{formik.errors.message}</div>
            ) : null}

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex
            items-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
