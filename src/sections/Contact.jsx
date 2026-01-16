import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Contact = () => {
  // Contact details variables mein
  const contactInfo = {
    email: "mdraza8397@gmail.com", //
    phone: "+91 74776 50108", //
    address: "Islampur, West Bengal, India", //
    socials: [
      { icon: <Github size={20} />, link: "https://github.com/mdraza77" }, //
      {
        icon: <Linkedin size={20} />,
        link: "https://www.linkedin.com/in/md-raza-web-developer",
      }, //
      { icon: <Twitter size={20} />, link: "https://x.com/MdRaza01" }, //
    ],
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0c] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
          >
            Get In <span className="text-[#b331e9]">Touch</span>
          </motion.h2>
          <p className="text-gray-500 mt-4 tracking-widest text-xs uppercase font-bold">
            Let's collaborate on your next big project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8 tracking-tight">
              Contact Information
            </h3>

            <div className="grid gap-4">
              {[
                {
                  icon: <Mail />,
                  label: "Email",
                  value: contactInfo.email,
                  href: `mailto:${contactInfo.email}`,
                },
                {
                  icon: <Phone />,
                  label: "Phone",
                  value: contactInfo.phone,
                  href: `tel:${contactInfo.phone.replace(/\s+/g, "")}`,
                },
                {
                  icon: <MapPin />,
                  label: "Location",
                  value: contactInfo.address,
                  href: "#",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="group flex items-center gap-6 p-6 rounded-3xl bg-[#121217] border border-white/5 hover:border-[#b331e9]/30 transition-all"
                >
                  <div className="p-4 bg-white/5 rounded-2xl text-[#b331e9] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold group-hover:text-white transition-colors text-gray-300">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Connection */}
            <div className="mt-12 p-8 rounded-[2rem] bg-gradient-to-br from-[#1a1a1f] to-[#121217] border border-white/5">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 text-center">
                Follow My Socials
              </p>
              <div className="flex justify-center gap-6">
                {contactInfo.socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#b331e9] hover:text-white transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Modern Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#121217] p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden"
          >
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-[#b331e9] transition-all text-white placeholder:text-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="hello@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-[#b331e9] transition-all text-white placeholder:text-gray-700"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-[#b331e9] transition-all text-white placeholder:text-gray-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-[#b331e9] transition-all text-white placeholder:text-gray-700 resize-none"
                ></textarea>
              </div>

              <button className="w-full group flex items-center justify-center gap-3 bg-gradient-to-r from-[#b331e9] to-[#8b31ff] py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all active:scale-95">
                Send Message{" "}
                <Send
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>

            {/* Background Decor */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#b331e9]/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
