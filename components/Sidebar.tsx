export default function Sidebar() {
    return (
      <div className="h-screen w-56 bg-[#0a192f] text-white flex flex-col items-center py-10 fixed left-0 top-0">
        
        {/* Profile Image */}
        <img
          src="/profile.jpg"
          alt="profile"
          className="w-24 h-24 rounded-full object-cover"
        />
  
        {/* Navigation Links */}
        <div className="flex flex-col gap-6 mt-20 text-sm tracking-widest">
          <a href="#home" className="hover:text-blue-400">HOME</a>
          <a href="#about" className="hover:text-blue-400">ABOUT</a>
          <a href="#experience" className="hover:text-blue-400">EXPERIENCE</a>
          <a href="#portfolio" className="hover:text-blue-400">PORTFOLIO</a>
        </div>
  
        {/* Bottom Circle (Optional Logo/Initial) */}
        <div className="mt-auto mb-6 w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center">
          N
        </div>
  
      </div>
    );
  }