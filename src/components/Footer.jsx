import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Footer = ({ onNavigate }) => {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };
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
      icon: <FaLinkedinIn size={16} />,
      href: "https://www.linkedin.com/in/md-raza-web-developer",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={16} />,
      href: "https://github.com/mdraza77",
      label: "GitHub",
    },
    {
      icon: <FaTwitter size={16} />,
      href: "https://x.com/MdRaza01",
      label: "Twitter",
    },
  ];

  return (
    <footer className="w-full bg-[#08080c] text-white pt-20 pb-10 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#b331e9]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-tighter uppercase">
              Port<span className="text-[#b331e9]">folio</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Creating digital experiences with passion and purpose. Focused on
              building high-quality web applications.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#b331e9] hover:text-white hover:border-[#b331e9] transition-all duration-300 border border-white/5"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-[#b331e9] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name} className="group/link flex items-center">
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-400 hover:text-white transition-all duration-300 group-hover/link:translate-x-1.5 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Modern Glass Card */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-[#b331e9] mb-6">
              Contact Info
            </h3>
            <div className="bg-white/[0.01] border border-white/5 backdrop-blur-md rounded-2xl p-6 space-y-5 hover:border-[#b331e9]/20 hover:bg-white/[0.02] transition-all duration-300 relative group/info overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-[#b331e9]/5 rounded-full blur-2xl group-hover/info:bg-[#b331e9]/10 transition-colors duration-300 pointer-events-none"></div>

              <a
                href={`mailto:${contactData.email}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-[#b331e9] transition-colors relative z-10"
              >
                <HiOutlineMail className="text-lg text-[#b331e9]" />
                <span className="text-xs">{contactData.email}</span>
              </a>
              <a
                href={`tel:${contactData.phone.replace(/\s+/g, "")}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-[#b331e9] transition-colors relative z-10"
              >
                <HiOutlinePhone className="text-lg text-[#b331e9]" />
                <span className="text-xs">{contactData.phone}</span>
              </a>
              <a
                href={contactData.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-gray-400 hover:text-[#b331e9] transition-colors relative z-10"
              >
                <HiOutlineLocationMarker className="text-lg text-[#b331e9] mt-0.5 flex-shrink-0" />
                <span className="text-xs leading-relaxed">
                  {contactData.address}
                </span>
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-[#b331e9] mb-6">
              Newsletter
            </h3>
            <p className="text-gray-400 text-xs mb-6 leading-relaxed">
              Subscribe for latest updates and articles.
            </p>
            <form className="relative group/form">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl py-4 pl-5 pr-16 text-xs focus:outline-none focus:border-[#b331e9] focus:ring-1 focus:ring-[#b331e9]/20 transition-all text-white placeholder:text-gray-600"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-[#b331e9] to-[#8b31ff] px-4 rounded-lg text-[10px] font-bold uppercase tracking-wider hover:opacity-95 shadow-md shadow-purple-500/10 active:scale-95 transition-all duration-300"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-[10px] tracking-widest uppercase font-bold">
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
