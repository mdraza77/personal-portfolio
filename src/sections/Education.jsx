import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Star } from "lucide-react";

const Education = () => {
  // Aapke records aur achievements
  const educationData = [
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Maulana Abul Kalam Azad University of Technology, WB",
      duration: "2022 - Present",
      details:
        "Currently maintaining a strong academic record with a focus on core computer science subjects.",
      grade: "8.90 CGPA",
      icon: <GraduationCap className="text-[#b331e9]" />,
    },
    {
      degree: "Web Development Certification",
      institution: "STP Computer Education",
      duration: "May 2023 - May 2024",
      details:
        "Comprehensive training in full-stack web technologies and modern development workflows.",
      grade: "Certified",
      icon: <Award className="text-[#b331e9]" />,
    },
    {
      degree: "Secondary & Higher Secondary",
      institution: "Islampur High School",
      duration: "2019 - 2022",
      details:
        "Specialized in Modern Computer Application during higher secondary education.",
      grade: "Completed",
      icon: <BookOpen className="text-[#b331e9]" />,
    },
  ];

  const certifications = [
    "Web Development Specialist",
    "Introduction to Artificial Intelligence",
    "Introduction to Cyber Security",
    "MS Office Professional",
  ]; //

  return (
    <section
      id="education"
      className="py-24 bg-[#0a0a0c] text-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
          >
            Education & <span className="text-[#b331e9]">Achievements</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Timeline Column */}
          <div className="lg:col-span-2 space-y-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#b331e9] to-transparent hidden md:block"></div>

            {educationData.map((item, index) => (
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
                          {item.degree}
                        </h3>
                        <p className="text-[#b331e9] text-sm font-medium">
                          {item.institution}
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
                  <div className="inline-block px-3 py-1 bg-[#b331e9]/10 border border-[#b331e9]/20 rounded-lg text-[#b331e9] text-xs font-bold uppercase tracking-tighter">
                    Result: {item.grade}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#1a1a1f] to-[#121217] p-8 rounded-3xl border border-white/5">
              <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-sm flex items-center gap-2">
                <Star size={18} className="text-[#b331e9]" /> Professional Certs
              </h3>
              <ul className="space-y-4">
                {certifications.map((cert, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-400 group"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#b331e9] group-hover:scale-150 transition-transform"></div>
                    <span className="text-sm group-hover:text-white transition-colors">
                      {cert}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#b331e9] p-8 rounded-3xl shadow-xl shadow-purple-950/20 text-white relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <Award size={150} />
              </div>
              <h4 className="text-xl font-black mb-2 italic">
                Ready to Contribute
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Strong foundation in Computer Applications and Practical Web
                Engineering.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
