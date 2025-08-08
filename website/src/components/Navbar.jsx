import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Linkedin, Github, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);

  // Contact information
  const contactInfo = {
    linkedin: "https://linkedin.com/in/martinng01",
    github: "https://github.com/martinng01",
    email: "martin.ng01@gmail.com",
  };

  // Handle dropdown toggle
  const toggleContactDropdown = () => {
    setShowContactDropdown(!showContactDropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showContactDropdown && !event.target.closest(".contact-dropdown")) {
        setShowContactDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showContactDropdown]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-effect" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#"
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg flex items-center justify-center">
              <span className="text-dark-bg font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold gradient-text">Portfolio</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-text-secondary hover:text-neon-purple transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            <div className="relative contact-dropdown">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleContactDropdown}
                className="neon-border px-6 py-2 rounded-full text-neon-purple hover:bg-neon-purple hover:text-dark-bg transition-all duration-300 font-medium"
              >
                Contact Me
              </motion.button>

              {/* Dropdown Menu */}
              {showContactDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-48 glass-effect rounded-xl border border-neon-purple/20 shadow-2xl shadow-neon-purple/10 overflow-hidden"
                >
                  <div className="py-2">
                    <motion.a
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        backgroundColor: "rgba(147, 51, 234, 0.1)",
                      }}
                      className="flex items-center px-4 py-3 text-text-secondary hover:text-neon-purple transition-colors duration-200"
                    >
                      <Linkedin size={18} className="mr-3" />
                      LinkedIn
                    </motion.a>
                    <motion.a
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        backgroundColor: "rgba(147, 51, 234, 0.1)",
                      }}
                      className="flex items-center px-4 py-3 text-text-secondary hover:text-neon-purple transition-colors duration-200"
                    >
                      <Github size={18} className="mr-3" />
                      GitHub
                    </motion.a>
                    <motion.a
                      href={`mailto:${contactInfo.email}`}
                      whileHover={{
                        backgroundColor: "rgba(147, 51, 234, 0.1)",
                      }}
                      className="flex items-center px-4 py-3 text-text-secondary hover:text-neon-purple transition-colors duration-200"
                    >
                      <Mail size={18} className="mr-3" />
                      Email
                    </motion.a>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-secondary hover:text-neon-purple transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass-effect rounded-lg mt-2 p-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-text-secondary hover:text-neon-purple transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
              <div className="space-y-2">
                <button
                  onClick={toggleContactDropdown}
                  className="neon-border px-6 py-2 rounded-full text-neon-purple hover:bg-neon-purple hover:text-dark-bg transition-all duration-300 font-medium text-left w-full"
                >
                  Contact Me
                </button>
                {showContactDropdown && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-4 space-y-2"
                  >
                    <a
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center text-text-secondary hover:text-neon-purple transition-colors duration-200"
                    >
                      <Linkedin size={16} className="mr-2" />
                      LinkedIn
                    </a>
                    <a
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center text-text-secondary hover:text-neon-purple transition-colors duration-200"
                    >
                      <Github size={16} className="mr-2" />
                      GitHub
                    </a>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center text-text-secondary hover:text-neon-purple transition-colors duration-200"
                    >
                      <Mail size={16} className="mr-2" />
                      Email
                    </a>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
