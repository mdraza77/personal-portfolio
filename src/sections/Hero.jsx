import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Download,
  Github,
  Linkedin,
  Award,
  GraduationCap,
} from "lucide-react";
import { RESUME_LINK } from "../constants/data";

const Hero = () => {
  const roles = [
    "Full Stack Developer",
    "Laravel Backend Expert",
    "React Frontend Developer",
    "Problem Solver",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [subText, setSubText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  // Typewriter effect logic
  useEffect(() => {
    let timer;
    const currentFullText = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setSubText((prev) => prev.substring(0, prev.length - 1));
        setSpeed(50);
      }, speed);
    } else {
      timer = setTimeout(() => {
        setSubText(currentFullText.substring(0, subText.length + 1));
        setSpeed(100);
      }, speed);
    }

    if (!isDeleting && subText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && subText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setSpeed(100);
    }

    return () => clearTimeout(timer);
  }, [subText, isDeleting, roleIndex]);

  const heroData = {
    greeting: "Hi, I'm",
    name: "Md Raza",
    description:
      "I build high-performance web applications using Laravel, React, and modern UI/UX practices. Passionate about turning complex problems into elegant digital solutions.",
    socials: [
      { icon: <Github size={20} />, link: "https://github.com/mdraza77" },
      {
        icon: <Linkedin size={20} />,
        link: "https://www.linkedin.com/in/md-raza-web-developer",
      },
    ],
    Illustration: "/pictures/Illustration.png",
  };

  const techPills = [
    {
      name: "Laravel",
      color:
        "hover:text-[#FF2D20] hover:border-[#FF2D20]/30 hover:bg-[#FF2D20]/5",
    },
    {
      name: "React",
      color:
        "hover:text-[#61DAFB] hover:border-[#61DAFB]/30 hover:bg-[#61DAFB]/5",
    },
    {
      name: "PHP",
      color:
        "hover:text-[#777BB4] hover:border-[#777BB4]/30 hover:bg-[#777BB4]/5",
    },
    {
      name: "PostgreSQL",
      color:
        "hover:text-[#4169E1] hover:border-[#4169E1]/30 hover:bg-[#4169E1]/5",
    },
    {
      name: "JavaScript",
      color:
        "hover:text-[#F7DF1E] hover:border-[#F7DF1E]/30 hover:bg-[#F7DF1E]/5",
    },
    {
      name: "Tailwind",
      color:
        "hover:text-[#38BDF8] hover:border-[#38BDF8]/30 hover:bg-[#38BDF8]/5",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#0a0a0f]">
      {/* Background Decorative Tech Grid & Orbs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-[#b331e9]/10 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        {/* --- Left Content (Cols 1-7) --- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#b331e9] text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for hire
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-tight">
              {heroData.greeting} <br />
              <span className="bg-gradient-to-r from-[#b331e9] to-[#8b31ff] bg-clip-text text-transparent">
                {heroData.name}
              </span>
            </h1>

            {/* Typewriter Role Title */}
            <div className="h-10 md:h-12 flex items-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-300">
                {subText}
                <span className="inline-block w-1 h-6 bg-[#b331e9] ml-1 animate-pulse"></span>
              </h2>
            </div>
          </div>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
            {heroData.description}
          </p>

          {/* Interactive Tech Stack Pills */}
          <div className="space-y-3 pt-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
              Preferred Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {techPills.map((pill) => (
                <span
                  key={pill.name}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold text-gray-400 bg-white/[0.01] border border-white/5 cursor-default transition-all duration-300 ${pill.color}`}
                >
                  {pill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-gradient-to-r from-[#b331e9] to-[#8b31ff] px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest text-white shadow-[0_0_15px_rgba(179,49,233,0.25)] hover:shadow-[0_0_25px_rgba(179,49,233,0.45)] transition-all active:scale-95 duration-300"
            >
              Hire Me
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-[#b331e9] hover:bg-[#b331e9]/5 px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest text-gray-300 hover:text-white transition-all duration-300"
            >
              Resume <Download size={16} />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 pt-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-bold">
              Follow Me
            </span>
            <div className="h-[1px] w-12 bg-gray-800"></div>
            <div className="flex items-center gap-4">
              {heroData.socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: "#b331e9" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gray-400 hover:text-[#b331e9] transition-colors p-1"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- Right Content (Image/Illustration) (Cols 8-12) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 relative flex justify-center mt-10 lg:mt-0"
        >
          <div className="relative w-full max-w-[400px] aspect-square">
            {/* Animated Glow Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#b331e9]/20 to-blue-600/10 rounded-full animate-spin-slow blur-3xl"></div>

            {/* Main Visual Frame */}
            <div className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#121217]/40 backdrop-blur-md p-6">
              <img
                src={heroData.Illustration}
                alt="Md Raza Illustration"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Academic floating card (BCA CGPA) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-[#121217]/90 border border-white/10 backdrop-blur-md p-4 rounded-2xl shadow-2xl z-20 flex items-center gap-3 hover:border-[#b331e9]/30 transition-colors"
            >
              <div className="p-2 bg-[#b331e9]/10 rounded-xl">
                <GraduationCap size={18} className="text-[#b331e9]" />
              </div>
              <div>
                <div className="text-white font-black text-base leading-tight">
                  8.90
                </div>
                <div className="text-gray-500 text-[8px] uppercase font-bold tracking-wider">
                  BCA CGPA
                </div>
              </div>
            </motion.div>

            {/* Prep floating card (CUET PG) */}
            {/* <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute -bottom-4 -left-4 bg-[#121217]/90 border border-white/10 backdrop-blur-md p-4 rounded-2xl shadow-2xl z-20 flex items-center gap-3 hover:border-[#8b31ff]/30 transition-colors"
            >
              <div className="p-2 bg-[#8b31ff]/10 rounded-xl">
                <Award size={18} className="text-[#8b31ff]" />
              </div>
              <div>
                <div className="text-white font-black text-[11px] leading-tight">
                  CUET PG Cleared
                </div>
                <div className="text-gray-500 text-[8px] uppercase font-bold tracking-wider">
                  MCA / MSc Prep
                </div>
              </div>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
