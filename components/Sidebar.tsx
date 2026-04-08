"use client";

import { useEffect, useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "experience", "portfolio", "contact"];

    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          if (window.scrollY >= top - 120) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id: string) =>
    active === id
      ? "text-blue-400 font-bold"
      : "hover:text-blue-400";

  return (
    <div className="fixed left-0 top-0 h-full w-20 md:w-64 bg-gray-900 text-white flex flex-col items-center py-10">

      <img
        src="/profile.jpg"
        alt="profile"
        className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover mb-6 border-2 border-blue-500"
      />

      <nav className="flex flex-col space-y-6 text-center text-sm md:text-base">
        <a href="#home" className={linkClass("home")}>HOME</a>
        <a href="#about" className={linkClass("about")}>ABOUT</a>
        <a href="#experience" className={linkClass("experience")}>EXPERIENCE</a>
        <a href="#portfolio" className={linkClass("portfolio")}>PORTFOLIO</a>
        <a href="#contact" className={linkClass("contact")}>CONTACT</a>
      </nav>

    </div>
  );
}