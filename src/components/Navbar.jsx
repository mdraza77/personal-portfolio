import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for extra polish
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 
      ${
        scrolled
          ? "py-3 bg-[#121217]/80 backdrop-blur-lg border-b border-white/10"
          : "py-5 bg-[#121217]"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        {/* Brand/Logo - Added Letter Spacing & Weight */}
        <a
          href="#"
          className="text-2xl font-black tracking-tighter text-white uppercase hover:opacity-80 transition-opacity"
        >
          Port<span className="text-[#b331e9]">folio</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-12">
          <ul className="flex space-x-10 text-[14px] font-semibold uppercase tracking-widest text-gray-400">
            {navLinks.map((link) => (
              <li key={link.name} className="group relative">
                <a
                  href={link.href}
                  className="hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
                {/* Animated Underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#b331e9] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Gradient Resume Button - Added Pulse Shadow */}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#b331e9] to-[#8b31ff] px-8 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest text-white shadow-[0_0_15px_rgba(179,49,233,0.3)] hover:shadow-[0_0_25px_rgba(179,49,233,0.5)] transition-all duration-300 active:scale-95"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden block text-white p-2"
        >
          <div className="w-7 flex flex-col items-end gap-[6px]">
            <span
              className={`h-[2px] bg-white transition-all ${
                isOpen ? "w-7 rotate-45 translate-y-2" : "w-7"
              }`}
            ></span>
            <span
              className={`h-[2px] bg-white transition-all ${
                isOpen ? "opacity-0" : "w-5"
              }`}
            ></span>
            <span
              className={`h-[2px] bg-white transition-all ${
                isOpen ? "w-7 -rotate-45 -translate-y-2" : "w-7"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown - Glass Effect */}
      <div
        className={`${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        } 
        absolute top-full left-6 right-6 mt-4 bg-[#1a1a1f]/95 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/10 transition-all duration-300 lg:hidden`}
      >
        <ul className="flex flex-col space-y-6 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-[#b331e9] transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#b331e9] to-[#8b31ff] w-full py-4 rounded-2xl font-bold uppercase tracking-widest"
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
