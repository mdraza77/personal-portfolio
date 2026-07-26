import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Loader2,
} from "lucide-react";

const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyqbb0xRxeJjsgI6zbt_0KTpwYlebdsJAr4r2zIkaeqgcS25beOlk0lBNkG65q8lUMp/exec";

  const contactInfo = {
    email: "mdraza8397@gmail.com",
    phone: "+91 74776 50108",
    address: "Islampur, West Bengal, India",
    socials: [
      { icon: <Github size={18} />, link: "https://github.com/mdraza77" },
      {
        icon: <Linkedin size={18} />,
        link: "https://www.linkedin.com/in/md-raza-web-developer",
      },
      { icon: <Twitter size={18} />, link: "https://x.com/MdRaza01" },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch(scriptURL, { method: "POST", body: new FormData(formRef.current) })
      .then((response) => {
        setIsSubmitting(false);

        Swal.fire({
          title: "Message Sent!",
          text: "Thank you, Md Raza will get back to you soon.",
          icon: "success",
          background: "#121217",
          color: "#fff",
          iconColor: "#b331e9",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          customClass: {
            popup: "rounded-[2rem] border border-white/10 shadow-2xl",
          },
        });

        formRef.current.reset();
      })
      .catch((error) => {
        setIsSubmitting(false);

        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          background: "#121217",
          color: "#fff",
          confirmButtonColor: "#b331e9",
        });

        console.error("Error!", error.message);
      });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#0a0a0f] text-white relative overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#b331e9]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#8b31ff]/5 rounded-full blur-3xl pointer-events-none"></div>

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
              Get In Touch
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
          >
            Get In <span className="text-[#b331e9]">Touch</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Contact Cards (Cols 1-5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-xl font-bold mb-6 tracking-tight text-white">
              Contact Information
            </h3>

            <div className="grid gap-4">
              {[
                {
                  icon: <Mail size={20} />,
                  label: "Email",
                  value: contactInfo.email,
                  href: `mailto:${contactInfo.email}`,
                },
                {
                  icon: <Phone size={20} />,
                  label: "Phone",
                  value: contactInfo.phone,
                  href: `tel:${contactInfo.phone.replace(/\s+/g, "")}`,
                },
                {
                  icon: <MapPin size={20} />,
                  label: "Location",
                  value: contactInfo.address,
                  href: "#",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="group flex items-center gap-6 p-6 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-[#b331e9]/30 hover:bg-white/[0.03] transition-all duration-300"
                >
                  {/* Icon Wrapper */}
                  <div className="p-4 bg-white/5 rounded-2xl text-[#b331e9] group-hover:bg-[#b331e9]/10 group-hover:scale-105 transition-all duration-300 border border-transparent group-hover:border-[#b331e9]/20">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold group-hover:text-white transition-colors text-gray-400">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials Card */}
            <div className="mt-12 p-8 rounded-[2rem] bg-white/[0.01] border border-white/5 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-[#b331e9]/5 rounded-full blur-2xl pointer-events-none"></div>

              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-6 text-center">
                Follow My Socials
              </p>
              <div className="flex justify-center gap-4">
                {contactInfo.socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#b331e9] hover:text-white hover:border-[#b331e9] transition-all duration-300 hover:scale-105"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form (Cols 6-12) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#121217]/40 p-8 md:p-12 rounded-[2.5rem] border border-white/5 backdrop-blur-xl relative overflow-hidden"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              name="contact-form"
              className="space-y-6 relative z-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500 ml-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="your-name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-[#b331e9] focus:ring-1 focus:ring-[#b331e9]/30 transition-all text-white placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500 ml-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="your-email"
                    required
                    placeholder="hello@example.com"
                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-[#b331e9] focus:ring-1 focus:ring-[#b331e9]/30 transition-all text-white placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500 ml-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="your-subject"
                  required
                  placeholder="Project Inquiry"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-[#b331e9] focus:ring-1 focus:ring-[#b331e9]/30 transition-all text-white placeholder:text-gray-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500 ml-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-[#b331e9] focus:ring-1 focus:ring-[#b331e9]/30 transition-all text-white placeholder:text-gray-600 resize-none h-32"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group flex items-center justify-center gap-3 bg-gradient-to-r from-[#b331e9] to-[#8b31ff] py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-purple-500/10 hover:shadow-purple-500/30 transition-all active:scale-95 duration-300 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    Processing... <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message{" "}
                    <Send
                      size={16}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </>
                )}
              </button>
            </form>

            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#b331e9]/5 rounded-full blur-3xl pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
