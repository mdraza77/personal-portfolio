import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Layout,
  Terminal,
} from "lucide-react";

const Skills = () => {
  // Yasham Internship aur projects se synthesized data
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="text-purple-500" />,
      skills: [
        { name: "PHP & Laravel", level: "85%" }, //
        { name: "RESTful APIs", level: "80%" }, //
        { name: "Python", level: "60%" }, //
      ],
    },
    {
      title: "Frontend Development",
      icon: <Layout className="text-blue-500" />,
      skills: [
        { name: "React.js", level: "75%" }, // Modern update
        { name: "Tailwind CSS", level: "85%" }, // Modern update
        { name: "JavaScript (ES6+)", level: "70%" }, //
        { name: "Bootstrap", level: "90%" }, //
      ],
    },
    {
      title: "Database Management",
      icon: <Database className="text-green-500" />,
      skills: [
        { name: "MySQL", level: "85%" }, //
        { name: "Database Design", level: "75%" }, //
      ],
    },
    {
      title: "Tools & Version Control",
      icon: <Wrench className="text-orange-500" />,
      skills: [
        { name: "Git & GitHub", level: "92%" }, //
        { name: "Postman", level: "80%" }, //
        { name: "SDLC Practices", level: "75%" }, //
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0a0a0c] text-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
          >
            Technical <span className="text-[#b331e9]">Skills</span>
          </motion.h2>
          <p className="text-gray-500 mt-4 tracking-widest text-xs uppercase font-bold">
            Expertise gained through internships and projects
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#121217] border border-white/5 hover:border-[#b331e9]/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>

              <h3 className="text-xl font-bold mb-6 tracking-tight text-white">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-400">
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold text-gray-500">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-[#b331e9] to-[#8b31ff]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience-based Tech Badges */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-600 w-full text-center mb-4">
            Hands-on Experience with
          </span>
          {[
            "Laravel",
            "MySQL",
            "GitLab",
            "Bootstrap",
          ].map((tech) => (
            <div
              key={tech}
              className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-semibold hover:text-white transition-colors cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
