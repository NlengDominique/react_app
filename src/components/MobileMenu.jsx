import React, { useEffect } from "react";

function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
   transition-all duration-300 ease-in-out gap-14
   ${
     menuOpen
       ? "h-screen opacity-100 pointer-events-auto"
       : "h-0 opacity-0 pointer-events-none"
   }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white 
    text-3xl focus:outline-none cursor-pointer"
        aria-label="Close menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <a
        href="#home"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
        onClick={() => setMenuOpen(false)}
      >
        Home
      </a>
      <a
        href="#about"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
        onClick={() => setMenuOpen(false)}
      >
        About
      </a>
      <a
        href="#projects"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
        onClick={() => setMenuOpen(false)}
      >
        Projects
      </a>
      <a
        href="#contact"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
        onClick={() => setMenuOpen(false)}
      >
        Contact
      </a>
    </div>
  );
}

export default MobileMenu;
