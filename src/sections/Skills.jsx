import React from "react";
import { motion } from "framer-motion";
import { Server, Database, Wrench, Layout } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="text-purple-400" size={20} />,
      glowColor:
        "hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]",
      skills: [
        { name: "PHP & Laravel", level: "85%" },
        { name: "Express.js", level: "50%" },
        { name: "Node.js", level: "50%" },
        { name: "RESTful APIs", level: "80%" },
        { name: "Python", level: "60%" },
      ],
    },
    {
      title: "Frontend Development",
      icon: <Layout className="text-blue-400" size={20} />,
      glowColor:
        "hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]",
      skills: [
        { name: "React.js", level: "75%" },
        { name: "Tailwind CSS", level: "85%" },
        { name: "JavaScript (ES6+)", level: "70%" },
        { name: "Bootstrap", level: "90%" },
      ],
    },
    {
      title: "Database Management",
      icon: <Database className="text-emerald-400" size={20} />,
      glowColor:
        "hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]",
      skills: [
        { name: "MySQL", level: "85%" },
        { name: "PostgreSQL", level: "80%" },
        { name: "MongoDB", level: "75%" },
        { name: "Database Design", level: "75%" },
      ],
    },
    {
      title: "Tools & Version Control",
      icon: <Wrench className="text-amber-400" size={20} />,
      glowColor:
        "hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]",
      skills: [
        { name: "Git & GitHub", level: "92%" },
        { name: "Postman", level: "80%" },
        { name: "SDLC Practices", level: "75%" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-[#0a0a0f] text-white relative overflow-hidden"
    >
      {/* Background Glowing Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#b331e9]/5 rounded-full blur-[150px] pointer-events-none"></div>

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
              Capabilities
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
          >
            Technical <span className="text-[#b331e9]">Skills</span>
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`p-8 rounded-3xl bg-[#121217]/50 border border-white/5 backdrop-blur-md transition-all duration-300 group flex flex-col justify-between ${category.glowColor}`}
            >
              <div>
                {/* Icon Container with dynamic hover scales */}
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300 border border-white/10">
                  {category.icon}
                </div>

                <h3 className="text-lg font-bold mb-6 tracking-tight text-white">
                  {category.title}
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-gray-400 group-hover:text-gray-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-bold text-gray-500">
                          {skill.level}
                        </span>
                      </div>
                      {/* Thinner, glowing progress bar tracks */}
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-[#b331e9] to-[#8b31ff] rounded-full shadow-[0_0_8px_rgba(179,49,233,0.4)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience-based Tech Badges */}
        <div className="mt-20 pt-12 border-t border-white/5 text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500 block mb-6">
            Hands-on Experience with
          </span>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Laravel",
              "MySQL",
              "GitLab",
              "Tailwind CSS",
              "PostgreSQL",
              "RESTful APIs",
              "SDLC",
            ].map((tech) => (
              <div
                key={tech}
                className="px-6 py-2.5 rounded-full bg-white/[0.01] border border-white/10 text-gray-400 text-xs font-bold uppercase tracking-wider hover:text-white hover:border-[#b331e9] hover:bg-[#b331e9]/5 transition-all duration-300 cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
