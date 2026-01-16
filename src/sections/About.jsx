import React from "react";
import { motion } from "framer-motion";
import { User, Code2, GraduationCap, Award } from "lucide-react";

const About = () => {
  // Aapka data variables mein (Grounded in your files)
  const aboutData = {
    title: "About Me",
    subtitle: "Web Developer", //
    description:
      "I am a BCA student with a strong interest in web development. Currently focused on enhancing my skills in building and designing web applications, I am actively learning the latest web technologies to gain hands-on experience in the field.", //
    stats: [
      {
        label: "Years Coding",
        value: "3+",
        icon: <Code2 className="text-[#b331e9]" />,
      }, //
      {
        label: "Projects Completed",
        value: "5+",
        icon: <User className="text-[#b331e9]" />,
      }, //
      {
        label: "Certifications",
        value: "5+",
        icon: <Award className="text-[#b331e9]" />,
      }, //
      {
        label: "Current CGPA",
        value: "8.90",
        icon: <GraduationCap className="text-[#b331e9]" />,
      }, //
    ],
    image: "public/pictures/md-raza.jpeg", //
  };

  return (
    <section
      id="about"
      className="py-24 bg-[#121217] text-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter inline-block relative"
          >
            {aboutData.title}
            <span className="absolute -bottom-2 left-0 w-1/2 h-1.5 bg-gradient-to-r from-[#b331e9] to-[#8b31ff]"></span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Animated Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#b331e9] to-[#8b31ff] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-[#1a1a1f] rounded-2xl overflow-hidden border border-white/10">
              <img
                src={aboutData.image}
                alt="Md Raza Profile"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Right: Content & Stats */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-[#b331e9] uppercase tracking-widest text-sm">
                {aboutData.subtitle}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {aboutData.description}
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {aboutData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ translateY: -5 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
                >
                  <div className="mb-3">{stat.icon}</div>
                  <div className="text-2xl font-black text-white">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-xs uppercase font-bold tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button matched with Navbar/Hero */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="pt-4"
            >
              <a
                href="#contact"
                className="inline-block bg-white/5 border border-white/10 hover:border-[#b331e9] px-10 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all hover:text-[#b331e9]"
              >
                Let's Talk
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
