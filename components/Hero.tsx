import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col justify-center items-center h-screen bg-black text-white"
    >
      <h1 className="text-6xl md:text-7xl font-extrabold text-center leading-tight">
  Hi, I am <br />
  <span className="text-blue-400">
    Yaw Barimah Ofori-Adu
  </span>
</h1>

<p className="mt-6 max-w-2xl text-center text-gray-400 text-lg">
  I build scalable, efficient, and modern web applications focused on performance,
  user experience, and real-world problem solving.
</p>

      {/* SOCIAL ICONS */}
      <div className="flex space-x-6 mt-6 text-3xl">
        <a href="https://github.com/" target="_blank">
          <FaGithub className="cursor-pointer hover:text-blue-400" />
        </a>

        <a href="https://linkedin.com/" target="_blank">
          <FaLinkedin className="cursor-pointer hover:text-blue-400" />
        </a>

        <a href="https://instagram.com/" target="_blank">
          <FaInstagram className="cursor-pointer hover:text-blue-400" />
        </a>
      </div>
    </div>
  );
}