import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  BookOpen,
  Star,
  ChevronRight,
} from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Maulana Abul Kalam Azad University of Technology, WB",
      duration: "2022 - 2025",
      details:
        "Currently maintaining a strong academic record with a focus on core computer science subjects.",
      grade: "8.90 CGPA",
      icon: <GraduationCap className="text-[#b331e9]" size={20} />,
    },
    {
      degree: "Web Development Certification",
      institution: "STP Computer Education",
      duration: "May 2023 - May 2024",
      details:
        "Comprehensive training in full-stack web technologies and modern development workflows.",
      grade: "Certified",
      icon: <Award className="text-[#b331e9]" size={20} />,
    },
    {
      degree: "Secondary & Higher Secondary",
      institution: "Islampur High School",
      duration: "2019 - 2022",
      details:
        "Specialized in Modern Computer Application during higher secondary education.",
      grade: "Completed",
      icon: <BookOpen className="text-[#b331e9]" size={20} />,
    },
  ];

  const certifications = [
    "Web Development Specialist",
    "Introduction to Artificial Intelligence",
    "Introduction to Cyber Security",
    "MS Office Professional",
  ];

  const getGradeStyle = (grade) => {
    if (grade.includes("CGPA"))
      return "bg-emerald-500/10 border-emerald-500/20 text-emerald-400";
    if (grade === "Certified")
      return "bg-blue-500/10 border-blue-500/20 text-blue-400";
    return "bg-white/5 border-white/10 text-gray-400";
  };

  return (
    <section
      id="education"
      className="py-24 bg-[#0a0a0f] text-white relative overflow-hidden"
    >
      {/* Background Ambient Orb */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#b331e9]/5 rounded-full blur-3xl pointer-events-none"></div>

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
              Academics
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
          >
            Education & <span className="text-[#b331e9]">Achievements</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Timeline Column (Cols 1-8) */}
          <div className="lg:col-span-8 space-y-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#b331e9] via-[#b331e9]/40 to-transparent hidden md:block"></div>

            {educationData.map((item, index) => (
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
                          {item.degree}
                        </h3>
                        <p className="text-gray-400 text-xs font-semibold mt-0.5">
                          {item.institution}
                        </p>
                      </div>
                    </div>
                    {/* Duration Badge */}
                    <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-2xl">
                    {item.details}
                  </p>

                  {/* Neon Result Tag */}
                  <div
                    className={`inline-block px-3.5 py-1.5 border rounded-xl text-[10px] font-bold uppercase tracking-wider ${getGradeStyle(
                      item.grade,
                    )}`}
                  >
                    Result: {item.grade}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebars (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Certifications Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.01] border border-white/5 backdrop-blur-md p-8 rounded-3xl relative group overflow-hidden"
            >
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-[#b331e9]/5 rounded-full blur-2xl pointer-events-none"></div>

              <h3 className="text-xs font-black uppercase tracking-widest text-[#b331e9] flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                <Star size={16} /> Professional Certs
              </h3>
              <ul className="space-y-4">
                {certifications.map((cert, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-400 group/item"
                  >
                    <ChevronRight
                      size={14}
                      className="text-[#b331e9]/70 group-hover/item:text-[#b331e9] group-hover/item:translate-x-1 transition-all duration-300"
                    />
                    <span className="text-xs font-semibold group-hover:text-white transition-colors duration-300">
                      {cert}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA banner card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#b331e9] to-[#8b31ff] p-8 rounded-3xl shadow-xl shadow-purple-950/20 text-white relative overflow-hidden group border border-white/10"
            >
              <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                <GraduationCap size={150} />
              </div>
              <h4 className="text-lg font-black mb-2 italic">
                Ready to Contribute
              </h4>
              <p className="text-white/80 text-xs leading-relaxed">
                Equipped with structural algorithms knowledge, database schemas,
                and high-level software engineering paradigms to build
                large-scale web applications.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
