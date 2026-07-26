import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Github } from "lucide-react";
import { challengesData } from "../constants/challenges";

const FrontendMentor = () => {
  const [filter, setFilter] = useState("All");
  
  const difficulties = ["All", "Newbie", "Junior", "Intermediate", "Advanced"];

  const filteredChallenges = challengesData.filter((challenge) => {
    return filter === "All" || challenge.difficulty === filter;
  });

  return (
    <section
      id="challenges"
      className="py-24 bg-[#0c0c12] text-white relative overflow-hidden"
    >
      {/* Background Glowing Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b331e9]/5 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-2"
            >
              <span className="h-[2px] w-12 bg-[#b331e9]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#b331e9]">
                Frontend Mentor
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
            >
              Design <span className="text-[#b331e9]">Challenges</span>
            </motion.h2>
            <p className="text-gray-400 mt-4 max-w-xl leading-relaxed text-sm">
              A collection of pixel-perfect frontend implementations from Frontend Mentor, 
              focusing on responsiveness, clean layouts, custom UI logic, and API integrations.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 bg-[#121217]/50 p-1.5 rounded-2xl border border-white/10 self-start md:self-end">
            {difficulties.map((diff) => (
              <button
                key={diff}
                onClick={() => setFilter(diff)}
                className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === diff
                    ? "bg-[#b331e9] text-white shadow-lg shadow-purple-500/20"
                    : "hover:bg-white/5 text-gray-400 hover:text-white"
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        {/* Challenges Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredChallenges.map((challenge, idx) => (
              <motion.div
                layout
                key={challenge.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-[#121217]/50 border border-white/5 rounded-3xl overflow-hidden hover:border-[#b331e9]/40 hover:shadow-[0_0_40px_rgba(179,49,233,0.1)] transition-all duration-500 flex flex-col md:flex-row h-full"
              >
                {/* Image Container */}
                <div className="md:w-2/5 aspect-video md:aspect-auto overflow-hidden relative min-h-[220px]">
                  <img
                    src={challenge.image}
                    alt={challenge.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                  />
                  {/* Difficulty Tag */}
                  <div className={`absolute top-4 left-4 border backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${challenge.difficultyColor}`}>
                    {challenge.difficulty}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 md:w-3/5 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {challenge.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-black uppercase tracking-wider text-[#b331e9] bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-[#b331e9] transition-colors duration-300">
                      {challenge.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-xs leading-relaxed mb-6">
                      {challenge.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-6 mt-auto">
                    {challenge.link && (
                      <a
                        href={challenge.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-[#b331e9] transition-colors duration-300"
                      >
                        <Globe size={14} /> Live Demo
                      </a>
                    )}
                    {challenge.github && (
                      <a
                        href={challenge.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-[#b331e9] transition-colors duration-300"
                      >
                        <Github size={14} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredChallenges.length === 0 && (
          <div className="text-center py-20 bg-[#121217]/30 rounded-3xl border border-white/5">
            <p className="text-gray-400 mb-2">No challenges found matching this category.</p>
            <button
              onClick={() => setFilter("All")}
              className="text-[#b331e9] font-bold uppercase tracking-widest text-xs hover:underline"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FrontendMentor;
