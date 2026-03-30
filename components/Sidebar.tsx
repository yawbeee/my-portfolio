export default function Sidebar() {
    return (
      <div className="w-64 h-screen bg-blue-900 text-white flex flex-col items-center py-10 fixed">
        
        <img
          src="/profile.jpg"
          alt="profile"
          className="w-24 h-24 rounded-full object-cover mb-6"
        />
  
        <nav className="flex flex-col space-y-6 text-center font-semibold">
        <a href="#home" className="hover:text-blue-300 transition">HOME</a>
<a href="#about" className="hover:text-blue-300 transition">ABOUT</a>
<a href="#experience" className="hover:text-blue-300 transition">EXPERIENCE</a>
<a href="#portfolio" className="hover:text-blue-300 transition">PORTFOLIO</a>
        </nav>
      </div>
    );
  }