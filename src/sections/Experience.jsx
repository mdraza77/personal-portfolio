import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Star,
  ShieldCheck,
  Zap,
  MapPin,
  ChevronRight,
} from "lucide-react";

const Experience = () => {
  const experienceData = [
    {
      role: "Software Developer Intern",
      company: "Yasham Software Services Pvt Ltd",
      duration: "Aug 2025 - Dec 2025",
      details:
        "Developed BGAI Australian e-commerce platform and Singhal Steel ERP system. Implemented Roles & Permissions using Spatie and built dynamic report modules.",
      location: "Nava Raipur, Chhattisgarh",
      icon: <Briefcase className="text-[#b331e9]" size={20} />,
      tech: ["Laravel", "PHP", "Spatie", "MySQL", "REST API", "ERP Modules"],
    },
    {
      role: "Full Stack Developer Intern",
      company: "Euphoria GenX",
      duration: "Aug 2024 - Dec 2024",
      details:
        "Built a full-stack Online Mobile Store using PHP and MySQL. Led a team of 6 to design key features and documentation.",
      location: "Salt Lake, Kolkata",
      icon: <Zap className="text-[#b331e9]" size={20} />,
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Team Leadership"],
    },
  ];

  const keyContributions = [
    "RESTful API Integration",
    "Admin Panel Development",
    "Role-Based Access Control",
    "Database Optimization",
    "Technical Documentation",
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-[#0a0a0f] text-white relative overflow-hidden"
    >
      {/* Background Ambient Orb */}
      <div className="absolute bottom-1/2 right-0 w-80 h-80 bg-[#8b31ff]/5 rounded-full blur-3xl pointer-events-none"></div>

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
              Journey
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
          >
            Work <span className="text-[#b331e9]">Experience</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Timeline Column (Cols 1-8) */}
          <div className="lg:col-span-8 space-y-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#b331e9] via-[#b331e9]/40 to-transparent hidden md:block"></div>

            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline Dot (Breathing Pulse Ring) */}
                <div className="absolute left-[23px] top-[30px] w-[18px] h-[18px] rounded-full bg-[#0a0a0f] border-4 border-[#b331e9] flex items-center justify-center hidden md:flex z-10 shadow-[0_0_10px_rgba(179,49,233,0.3)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b331e9] animate-pulse"></span>
                </div>

                {/* Card Container */}
                <div className="bg-[#121217]/50 p-8 rounded-3xl border border-white/5 hover:border-[#b331e9]/30 hover:shadow-[0_0_20px_rgba(179,49,233,0.08)] hover:bg-[#121217]/70 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-[#b331e9]/2 rounded-full blur-xl group-hover:bg-[#b331e9]/5 transition-all duration-300"></div>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                    <div className="flex items-center gap-4">
                      {/* Icon wrapper */}
                      <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-[#b331e9]/10 group-hover:border-[#b331e9]/20 border border-transparent transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-[#b331e9] transition-colors">
                          {item.role}
                        </h3>
                        <p className="text-gray-400 text-xs font-semibold mt-0.5">
                          {item.company}
                        </p>
                      </div>
                    </div>
                    {/* Duration Badge */}
                    <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-2xl">
                    {item.details}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-5">
                    {/* Tech Badges Used In Job */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-bold uppercase tracking-tighter text-[#b331e9] bg-purple-500/5 border border-purple-500/10 px-2 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Location PIN */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-gray-400 text-[9px] font-bold uppercase tracking-wider">
                      <MapPin size={12} className="text-[#b331e9]" />
                      {item.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebars (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Key Expertise Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.01] border border-white/5 backdrop-blur-md p-8 rounded-3xl relative group overflow-hidden"
            >
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-[#8b31ff]/5 rounded-full blur-2xl pointer-events-none"></div>

              <h3 className="text-xs font-black uppercase tracking-widest text-[#b331e9] flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                <Star size={16} /> Key Expertise
              </h3>
              <ul className="space-y-4">
                {keyContributions.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-400 group/item"
                  >
                    <ChevronRight
                      size={14}
                      className="text-[#b331e9]/70 group-hover/item:text-[#b331e9] group-hover/item:translate-x-1 transition-all duration-300"
                    />
                    <span className="text-xs font-semibold group-hover:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quality banner card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#b331e9] to-[#8b31ff] p-8 rounded-3xl shadow-xl shadow-purple-950/20 text-white relative overflow-hidden group border border-white/10"
            >
              <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                <ShieldCheck size={150} />
              </div>
              <h4 className="text-lg font-black mb-2 italic">Quality Driven</h4>
              <p className="text-white/80 text-xs leading-relaxed">
                Proven track record in designing database architectures,
                securing roles, and deploying responsive systems during active
                commercial internships.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
