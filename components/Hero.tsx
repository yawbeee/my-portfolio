"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Hi, I am{" "}
        <span className="text-blue-500">
          Yaw Barimah Ofori-Adu
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-6 text-gray-400 max-w-xl text-lg"
      >
        I design and build modern, scalable web applications with a focus on
        performance and simplicity.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex gap-4 mt-8"
      >
        <a
          href="/cv.pdf"
          className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Download CV
        </a>

        <a
          href="#contact"
          className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Contact Me
        </a>
      </motion.div>

      {/* ICONS */}
      <div className="flex gap-6 mt-8 text-2xl">
        <a href="#"><FaGithub /></a>
        <a href="#"><FaLinkedin /></a>
      </div>
    </section>
  );
}