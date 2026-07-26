import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Github, Globe, Search } from "lucide-react";
import { projectsData } from "../constants/projects";

const AllProjects = ({ onBack }) => {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Personal", "Internship", "Academic"];

  // Filter and search logic
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = filter === "All" || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase()),
      ) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-screen py-24 bg-[#0a0a0f] text-white">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Back navigation and title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#b331e9] hover:text-white transition-colors mb-4 group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Home
            </button>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              All <span className="text-[#b331e9]">Projects</span>
            </h1>
            <p className="text-gray-400 mt-2">
              A comprehensive directory of my applications, systems, and
              experiments.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative max-w-md w-full">
            <input
              type="text"
              placeholder="Search projects (e.g. Laravel, React, ERP)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121217] border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-[#b331e9] transition-all placeholder:text-gray-500"
            />
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
          </div>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap gap-2 bg-[#121217]/50 p-1.5 rounded-2xl border border-white/10 mb-12 self-start w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                filter === cat
                  ? "bg-[#b331e9] text-white shadow-lg shadow-purple-500/20"
                  : "hover:bg-white/5 text-gray-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-[#121217] rounded-3xl overflow-hidden border border-white/10 hover:border-[#b331e9]/50 transition-colors flex flex-col h-full"
                >
                  {/* Project Image */}
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-bold uppercase tracking-tighter text-[#b331e9] bg-purple-500/10 px-2 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-[#b331e9] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-6 mt-auto">
                      {project.link && project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-[#b331e9] transition-colors"
                        >
                          <Globe size={14} /> Demo
                        </a>
                      )}
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-[#b331e9] transition-colors"
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
        ) : (
          <div className="text-center py-20 bg-[#121217] rounded-3xl border border-white/10">
            <p className="text-gray-400 mb-2">
              No projects found matching your query.
            </p>
            <button
              onClick={() => {
                setFilter("All");
                setSearchQuery("");
              }}
              className="text-[#b331e9] font-bold uppercase tracking-widest text-xs hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProjects;
