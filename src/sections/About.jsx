import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Code2,
  GraduationCap,
  Award,
  ArrowRight,
  FileText,
} from "lucide-react";
import { RESUME_LINK } from "../constants/data";

const About = () => {
  const aboutData = {
    title: "About Me",
    subtitle: "Web Developer",
    description:
      "BCA graduate and full-stack developer focused on building real-world web applications. Built a social media platform (Zing) using HTML, CSS, JavaScript, PHP Laravel, and PostgreSQL. Cleared CUET PG and preparing for MCA/MSc. Focused on scalable apps, clean UI, and practical problem-solving.",
    stats: [
      {
        label: "Projects Built",
        value: "6+",
        icon: <Code2 className="text-[#b331e9]" size={20} />,
      },
      {
        label: "Tech Stack",
        value: "5+",
        icon: <User className="text-[#b331e9]" size={20} />,
      },
      {
        label: "Core Focus",
        value: "Full-Stack",
        icon: <Award className="text-[#b331e9]" size={20} />,
      },
      {
        label: "Main Project",
        value: "StaffHub",
        icon: <GraduationCap className="text-[#b331e9]" size={20} />,
      },
    ],
    image: "/pictures/md-raza.jpeg",
  };

  return (
    <section
      id="about"
      className="py-24 bg-[#0a0a0f] text-white overflow-hidden relative"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#b331e9]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#8b31ff]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Section Heading */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-2"
          >
            <span className="h-[2px] w-12 bg-[#b331e9]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#b331e9]">
              Introduction
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
          >
            About <span className="text-[#b331e9]">Me</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Photo & Tech Code Box (Cols 1-5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group max-w-sm mx-auto lg:mx-0">
              {/* Outer Glowing Border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#b331e9] to-[#8b31ff] rounded-[2.2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

              {/* Main Photo Container */}
              <div className="relative bg-[#121217] rounded-[2rem] overflow-hidden border border-white/10 p-3">
                <img
                  src={aboutData.image}
                  alt="Md Raza Profile"
                  className="w-full h-auto object-cover rounded-[1.6rem] grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
                />

                {/* Pulse Availability Badge */}
                <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400">
                    Available for work
                  </span>
                </div>
              </div>

              {/* Floating Code Editor Box */}
              <div className="absolute -bottom-8 -right-4 bg-[#121217]/95 border border-white/10 backdrop-blur-xl rounded-2xl p-5 shadow-2xl max-w-[260px] font-mono text-[10px] leading-relaxed text-gray-300 pointer-events-none md:-right-8">
                <div className="flex items-center gap-1.5 mb-3 border-b border-white/5 pb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                  <span className="text-[8px] text-gray-500 font-sans ml-2">
                    developer.js
                  </span>
                </div>
                <p className="text-gray-500">// Tech Interests</p>
                <p>
                  <span className="text-purple-400">const</span> developer =
                  &#123;
                </p>
                <p className="pl-4">
                  name: <span className="text-[#b331e9]">"Md Raza"</span>,
                </p>
                <p className="pl-4">
                  role:{" "}
                  <span className="text-cyan-400">"Full-Stack Developer"</span>,
                </p>
                <p className="pl-4">
                  stack: [<span className="text-emerald-400">"Laravel"</span>,{" "}
                  <span className="text-emerald-400">"React"</span>
                  ],
                </p>
                <p className="pl-4">
                  focus: <span className="text-amber-400">"Clean UI"</span>
                </p>
                <p>&#125;;</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Copy & Stats (Cols 6-12) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Crafting interactive digital solutions with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b331e9] to-[#8b31ff]">
                  code & purpose
                </span>
                .
              </h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                I am a{" "}
                <span className="text-white font-semibold">BCA graduate</span>{" "}
                and full-stack developer dedicated to building real-world web
                applications. My core expertise lies in developing scalable
                architectures using{" "}
                <span className="text-white font-semibold">
                  Laravel, PHP, and PostgreSQL
                </span>
                , coupled with clean frontend implementation using React and
                Tailwind CSS.
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Whether creating specialized enterprise systems like{" "}
                <span className="text-white font-semibold">StaffHub</span>{" "}
                (HRMS) or modern communication services like{" "}
                <span className="text-white font-semibold">Zing</span>, I bring
                structural efficiency and premium design aesthetics to the
                table.
              </p>
            </motion.div>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {aboutData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{
                    y: -5,
                    borderColor: "rgba(179, 49, 233, 0.3)",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                  }}
                  className="p-5 rounded-3xl bg-white/[0.01] border border-white/5 backdrop-blur-md transition-all duration-300 relative group/card overflow-hidden"
                >
                  <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-[#b331e9]/5 rounded-full blur-2xl group-hover/card:bg-[#b331e9]/10 transition-colors duration-300"></div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover/card:bg-[#b331e9]/10 group-hover/card:border-[#b331e9]/30 transition-all duration-300">
                      {stat.icon}
                    </div>
                  </div>

                  <div className="text-2xl font-black tracking-tight text-white mb-1">
                    {stat.value}
                  </div>

                  <div className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#contact"
                className="flex items-center gap-2 bg-gradient-to-r from-[#b331e9] to-[#8b31ff] hover:opacity-95 px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest text-white shadow-[0_0_15px_rgba(179,49,233,0.25)] hover:shadow-[0_0_25px_rgba(179,49,233,0.45)] transition-all duration-300 active:scale-95 group"
              >
                Let's Talk
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-[#b331e9] hover:bg-[#b331e9]/5 px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest text-gray-300 hover:text-white transition-all duration-300"
              >
                <FileText size={14} />
                View Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
