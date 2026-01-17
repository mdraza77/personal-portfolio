import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code2, Globe } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web Apps", "Internship", "Academic"];

  const projectsData = [
    {
      title: "BGAI E-commerce",
      category: "Internship",
      description:
        "Australia-based Christmas tree e-commerce platform with a complete Admin Panel and RESTful APIs.", //
      tech: ["Laravel", "PHP", "MySQL", "REST API"], //
      link: "#",
      github: "#",
      image: "/project_images/bgai-australian-cristmas-tree-app.jpeg", //
    },
    {
      title: "Singhal Steel ERP",
      category: "Internship",
      description:
        "ERP system featuring secure authentication and role-based access control using Spatie.", //
      tech: ["Laravel", "Spatie", "MySQL"], //
      link: "#",
      github: "#",
      image: "/project_images/singhal-steel-erp-web-and-app.jpeg",
    },
    {
      title: "Mobile Store",
      category: "Academic",
      description:
        "A full-stack e-commerce platform inspired by Apple, built with user authentication and payment gateway.", //
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"], //
      link: "#",
      github: "https://github.com/mdraza77/mobile-shop-apple-store.git",
      image: "/project_images/mobile-shop-user.jpeg", //
    },
    // {
    //   title: "LAN Chat Application",
    //   category: "Academic",
    //   description:
    //     "Real-time messaging and file sharing application allowing users to join via a shared network URL.", //
    //   tech: ["Python", "Flask"], //
    //   link: "#",
    //   github: "#",
    //   image: "/project_images/default.png",
    // },
  ];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-[#121217] text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
            >
              Featured <span className="text-[#b331e9]">Projects</span>
            </motion.h2>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Selection of my best works, ranging from internship ERP systems to
              academic full-stack applications.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10">
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
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-[#1a1a1f] rounded-3xl overflow-hidden border border-white/10 hover:border-[#b331e9]/50 transition-colors"
              >
                {/* Project Image */}
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    {project.tech.slice(0, 3).map((t) => (
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

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-6">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-[#b331e9] transition-colors"
                    >
                      <Globe size={14} /> Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-[#b331e9] transition-colors"
                    >
                      <Github size={14} /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/mdraza77"
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-[#b331e9] px-10 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all group"
          >
            View All Projects
            <ExternalLink
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
