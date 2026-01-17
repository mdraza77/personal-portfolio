import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Download, Github, Linkedin } from "lucide-react";

const Hero = () => {
  // Data
  const heroData = {
    greeting: "Hi, I'm",
    name: "Md Raza",
    role: "Full Stack Developer",
    description:
      "I build high-performance web applications using Laravel, React, and modern UI/UX practices. Passionate about turning complex problems into elegant digital solutions.",
    socials: [
      { icon: <Github size={20} />, link: "https://github.com/mdraza77" },
      {
        icon: <Linkedin size={20} />,
        link: "https://www.linkedin.com/in/md-raza-web-developer",
      },
    ],
    resumeLink:
      "https://drive.google.com/file/d/1M7xwR6GyQ7pWRby6pXjWLNi_k4YdnJ-J/view?usp=sharing",

    Illustration: "/pictures/Illustration.png",
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#121217]">
      {/* --- Background Decorative Elements --- */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px]"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* --- Left Content --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#b331e9] text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for hire
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-tight">
            {heroData.greeting} <br />
            <span className="bg-gradient-to-r from-[#b331e9] to-[#8b31ff] bg-clip-text text-transparent">
              {heroData.name}
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-300">
            {heroData.role}
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            {heroData.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-gradient-to-r from-[#b331e9] to-[#8b31ff] px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:shadow-[0_0_30px_rgba(179,49,233,0.4)] transition-all active:scale-95"
            >
              Hire Me{" "}
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href={heroData.resumeLink}
              target="_blank"
              className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all"
            >
              Resume <Download size={18} />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 pt-6">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">
              Follow Me
            </span>
            <div className="h-[1px] w-12 bg-gray-700"></div>
            {heroData.socials.map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* --- Right Content (Image/Illustration) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-[500px] aspect-square">
            {/* Animated Glow Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#b331e9]/30 to-blue-600/30 rounded-full animate-spin-slow blur-3xl"></div>

            {/* Image Container */}
            <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-[#1a1a1f]/50 backdrop-blur-sm p-4">
              <img
                src={heroData.Illustration}
                alt="Md Raza Illustration"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Badge (3.76 CGPA from your context) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-6 -right-6 bg-[#1a1a1f] border border-white/10 p-4 rounded-2xl shadow-2xl z-20"
            >
              <div className="text-[#b331e9] font-black text-xl">8.90</div>
              <div className="text-gray-500 text-[10px] uppercase font-bold tracking-tighter">
                BCA CGPA
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
