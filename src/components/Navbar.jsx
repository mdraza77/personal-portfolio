import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Data ko constants mein rakhne se code manage karna easy ho jata hai
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const resumeLink =
    "https://drive.google.com/file/d/1j3BepvjhfpAbBoLJNJLzcZ-aeJ7cD-O_/view?usp=drive_link";

  return (
    <nav className="fixed top-0 w-full bg-[#121217] text-white z-50 px-6 py-4">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        {/* Brand/Logo */}
        <div className="text-2xl font-bold tracking-tight">Portfolio</div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          <ul className="flex space-x-8 text-[15px] font-medium text-gray-200">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Gradient Resume Button */}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#b331e9] to-[#8b31ff] px-8 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden block focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden mt-4 bg-[#1a1a1f] rounded-2xl p-6 absolute left-6 right-6 shadow-2xl border border-white/5`}
      >
        <ul className="flex flex-col space-y-5 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-purple-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#b331e9] to-[#8b31ff] w-full py-3 rounded-full font-bold"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
