"use client";

import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="flex bg-black text-white">
      <Sidebar />

      <main className="ml-20 md:ml-64 w-full">

        {/* HERO */}
        <Hero />

        {/* ABOUT */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="min-h-screen px-8 md:px-20 py-20"
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            I am Yaw Barimah Ofori-Adu, a passionate Software Engineer focused on
            building scalable applications and solving real-world problems using
            modern technologies.
          </p>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="min-h-screen px-8 md:px-20 py-20"
        >
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <p className="text-gray-400">
            I am currently building experience through academic and personal
            projects, continuously improving my skills in software engineering.
          </p>
        </motion.section>

        {/* PORTFOLIO */}
        <motion.section
          id="portfolio"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="min-h-screen px-8 md:px-20 py-20 max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-10">Portfolio</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-300">
              <img src="/project1.png" alt="project" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
                <p className="text-gray-400 mb-4">
                  Built with Next.js and Tailwind CSS.
                </p>
                <a href="#" className="text-blue-400 hover:underline">View Project</a>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-300">
              <img src="/project2.png" alt="project" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">C++ Projects</h3>
                <p className="text-gray-400 mb-4">
                  Demonstrating strong problem-solving skills.
                </p>
                <a href="#" className="text-blue-400 hover:underline">View Project</a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="min-h-screen px-8 md:px-20 py-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

          <p className="text-gray-400 mb-6">
            Feel free to reach out for collaborations or opportunities.
            
          </p>

          <a
            href="mailto:your-email@example.com"
            className="text-blue-400 text-lg hover:underline"
          >
            Send Email
          </a>
        </motion.section>

      </main>
    </div>
  );
}