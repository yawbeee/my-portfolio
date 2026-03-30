import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="flex bg-black">
      <Sidebar />

      <div className="flex-1 ml-64 overflow-y-scroll h-screen">
        
        <Hero />

        {/* ABOUT */}
        <section
          id="about"
          className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6"
        >
          <h1 className="text-4xl font-bold mb-6">About Me</h1>

          <p className="max-w-2xl text-center text-gray-300 leading-relaxed">
            I am Yaw Barimah Ofori-Adu, a passionate Software Engineer with a strong interest in building
            scalable and efficient web applications. I enjoy solving real-world problems using technology
            and continuously improving my skills in modern development tools and frameworks.
          </p>

          <p className="max-w-2xl text-center text-gray-400 mt-4">
            Currently, I am focused on mastering full-stack development and understanding how systems work
            under the hood to become a highly skilled and versatile developer.
          </p>

          {/* SKILLS */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

  <span className="px-5 py-2 bg-blue-600 rounded-full text-sm">HTML</span>
  <span className="px-5 py-2 bg-blue-600 rounded-full text-sm">CSS</span>
  <span className="px-5 py-2 bg-blue-600 rounded-full text-sm">JavaScript</span>
  <span className="px-5 py-2 bg-blue-600 rounded-full text-sm">React</span>
  <span className="px-5 py-2 bg-blue-600 rounded-full text-sm">Next.js</span>
  <span className="px-5 py-2 bg-blue-600 rounded-full text-sm">C++</span>

</div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="min-h-screen flex items-center justify-center bg-gray-800 text-white px-6"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Experience</h1>

            <p className="text-gray-300 max-w-xl">
              I am currently building my experience through academic projects and personal development.
              I have worked on portfolio websites, programming assignments, and continue to grow my
              knowledge in software engineering and problem solving.
            </p>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section
          id="portfolio"
          className="min-h-screen bg-gray-700 text-white px-6 py-20"
        >
          <h1 className="text-4xl font-bold text-center mb-10">
            My Projects
          </h1>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
          <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition duration-300 cursor-pointer">
  <h2 className="text-2xl font-bold mb-2">Portfolio Website</h2>
  <p className="text-gray-300">
    A personal portfolio website built with Next.js and Tailwind CSS.
  </p>
</div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">C++ Projects</h2>
              <p className="text-gray-300">
                Academic and personal projects demonstrating problem-solving skills using C++.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}