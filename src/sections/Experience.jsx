import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Star, Award, ShieldCheck, Zap } from "lucide-react";

const Experience = () => {
  // Aapke work experience ka data
  const experienceData = [
    {
      role: "Software Developer Intern",
      company: "Yasham Software Services Pvt Ltd",
      duration: "Aug 2025 - Dec 2025",
      details:
        "Developed BGAI Australian e-commerce platform and Singhal Steel ERP system. Implemented Rolls & Permissions using Spatie and built dynamic report modules.",
      location: "Nava Raipur, Chhattisgarh",
      icon: <Briefcase className="text-[#b331e9]" />,
    },
    {
      role: "Full Stack Developer Intern",
      company: "Euphoria GenX",
      duration: "Aug 2024 - Dec 2024",
      details:
        "Built a full-stack Online Mobile Store using PHP and MySQL. Led a team of 6 to design key features and documentation.",
      location: "Salt Lake, Kolkata",
      icon: <Zap className="text-[#b331e9]" />,
    },
    // {
    //   role: "Frontend Developer Intern",
    //   company: "CodSoft",
    //   duration: "Apr 2024 - May 2024",
    //   details:
    //     "Created responsive web applications including To-Do lists and Portfolio landing pages using HTML, CSS, and JS.",
    //   location: "Kolkata, WB",
    //   icon: <Award className="text-[#b331e9]" />,
    // },
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
      className="py-24 bg-[#0a0a0c] text-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
          >
            Work <span className="text-[#b331e9]">Experience</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Timeline Column */}
          <div className="lg:col-span-2 space-y-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#b331e9] to-transparent hidden md:block"></div>

            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-[#b331e9] shadow-[0_0_15px_rgba(179,49,233,0.5)] hidden md:block"></div>

                <div className="bg-[#121217] p-8 rounded-3xl border border-white/5 hover:border-[#b331e9]/30 transition-all group">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-[#b331e9]/10 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold tracking-tight">
                          {item.role}
                        </h3>
                        <p className="text-[#b331e9] text-sm font-medium">
                          {item.company}
                        </p>
                      </div>
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-400 uppercase tracking-widest">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {item.details}
                  </p>
                  <div className="inline-block px-3 py-1 bg-[#b331e9]/10 border border-[#b331e9]/20 rounded-lg text-[#b331e9] text-[10px] font-bold uppercase tracking-tighter">
                    Location: {item.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#1a1a1f] to-[#121217] p-8 rounded-3xl border border-white/5">
              <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-sm flex items-center gap-2">
                <Star size={18} className="text-[#b331e9]" /> Key Expertise
              </h3>
              <ul className="space-y-4">
                {keyContributions.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-400 group"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#b331e9] group-hover:scale-150 transition-transform"></div>
                    <span className="text-sm group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#b331e9] p-8 rounded-3xl shadow-xl shadow-purple-950/20 text-white relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <ShieldCheck size={150} />
              </div>
              <h4 className="text-xl font-black mb-2 italic">Quality Driven</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Proven track record in building scalable applications during
                industrial internships.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
