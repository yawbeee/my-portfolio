import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <div>

      {/* HOME */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-black text-white text-center px-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I am{" "}
          <span className="text-blue-400">
            Yaw Barimah Ofori-Adu
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl">
          I design and build modern, scalable web applications with a focus on
          performance and simplicity.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 mt-6 text-3xl">
          <a href="https://github.com/" target="_blank">
            <FaGithub className="hover:text-blue-400 transition" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <FaLinkedin className="hover:text-blue-400 transition" />
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="min-h-screen bg-gray-900 text-white px-10 py-20">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-6">
            I am Yaw Barimah Ofori-Adu, a passionate Software Engineer focused on building scalable applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <span className="bg-gray-800 px-4 py-2 rounded">HTML</span>
            <span className="bg-gray-800 px-4 py-2 rounded">CSS</span>
            <span className="bg-gray-800 px-4 py-2 rounded">JavaScript</span>
            <span className="bg-gray-800 px-4 py-2 rounded">React</span>
            <span className="bg-gray-800 px-4 py-2 rounded">Next.js</span>
            <span className="bg-gray-800 px-4 py-2 rounded">C++</span>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="min-h-screen bg-black text-white px-10 py-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
        <p className="text-gray-400 text-center">
          Currently building projects and gaining experience.
        </p>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="min-h-screen bg-gray-900 text-white px-10 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-400 mb-4">
              Built with Next.js and Tailwind CSS.
            </p>
            <a href="#" className="text-blue-400 hover:underline">
              View Project
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300">
  <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
  <p className="text-gray-400 mb-4">
    Built with Next.js and Tailwind CSS.
  </p>
  <a
    href="https://github.com/YOUR_USERNAME/my-portfolio"
    target="_blank"
    className="text-blue-400 hover:underline"
  >
    View Code
  </a>
</div>

        </div>
      </section>

    </div>
  );
}