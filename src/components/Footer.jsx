import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa"; // npm install react-icons zaroori hai
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactData = {
    email: "mdraza8397@gmail.com",
    phone: "+91 74776 50108",
    address: "Islampur, North Dinajpur, West Bengal, India",
    mapLink: "https://maps.app.goo.gl/XQ5DEXrvUu1qeB1B6",
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/md-raza-web-developer",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/mdraza77",
      label: "GitHub",
    },
    { icon: <FaTwitter />, href: "https://x.com/MdRaza01", label: "Twitter" },
  ];

  return (
    <footer className="w-full bg-[#121217] text-white pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-tighter uppercase">
              Port<span className="text-[#b331e9]">folio</span>
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Creating digital experiences with passion and purpose. Focused on
              building high-quality web applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#b331e9] hover:text-white transition-all duration-300 border border-white/5"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest text-[13px]">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#b331e9] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Modern Glass Card */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest text-[13px]">
              Contact Info
            </h3>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
              <a
                href={`mailto:${contactData.email}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <HiOutlineMail className="text-xl text-[#b331e9]" />
                <span className="text-sm">{contactData.email}</span>
              </a>
              <a
                href={`tel:${contactData.phone.replace(/\s+/g, "")}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <HiOutlinePhone className="text-xl text-[#b331e9]" />
                <span className="text-sm">{contactData.phone}</span>
              </a>
              <a
                href={contactData.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <HiOutlineLocationMarker className="text-xl text-[#b331e9] mt-1 flex-shrink-0" />
                <span className="text-sm">{contactData.address}</span>
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest text-[13px]">
              Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Subscribe for latest updates and articles.
            </p>
            <form className="relative group">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-sm focus:outline-none focus:border-[#b331e9] transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-[#b331e9] to-[#8b31ff] px-4 rounded-lg text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs tracking-widest uppercase font-medium">
          <p>© {currentYear} Md Raza. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
