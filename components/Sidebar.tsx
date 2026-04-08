export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-20 md:w-64 bg-gray-900 text-white flex flex-col items-center py-10">

      <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gray-400 mb-6"></div>

      <nav className="flex flex-col space-y-6 text-center text-sm md:text-base">
        <a href="#home" className="hover:text-blue-400">HOME</a>
        <a href="#about" className="hover:text-blue-400">ABOUT</a>
        <a href="#experience" className="hover:text-blue-400">EXPERIENCE</a>
        <a href="#portfolio" className="hover:text-blue-400">PORTFOLIO</a>
        <a href="#contact" className="hover:text-blue-400">CONTACT</a>
      </nav>

    </div>
  );
}