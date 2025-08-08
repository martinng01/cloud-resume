import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-darker-bg to-dark-bg"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple opacity-5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink opacity-5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="gradient-text neon-glow">Martin Ng</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl leading-relaxed"
            >
              NUS Computer Science student passionate about Artificial
              Intelligence. Eager to apply my skills in a professional
              environment.
            </motion.p>

            {/* University Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-accent-gray border border-neon-purple/20 mb-8"
            >
              <span className="text-neon-purple text-sm font-medium">
                🎓 National University of Singapore
              </span>
            </motion.div>
          </div>

          {/* Right side - Profile Picture */}
          <motion.div variants={itemVariants} className="flex-shrink-0">
            <div className="relative">
              {/* Profile Picture Container */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neon-purple/30 shadow-2xl shadow-neon-purple/20">
                <img
                  src="/images/profile.jpg"
                  alt="Martin Ng - Profile Picture"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.target.style.display = "none";
                    e.target.nextElementSibling.style.display = "flex";
                  }}
                />
                {/* Fallback placeholder */}
                <div
                  className="w-full h-full bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 flex items-center justify-center"
                  style={{ display: "none" }}
                >
                  <div className="text-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-dark-bg font-bold text-2xl md:text-3xl">
                        👤
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements around profile picture */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-purple rounded-full animate-pulse-slow"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-pink rounded-full animate-pulse-slow"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 -left-6 w-4 h-4 bg-neon-purple rounded-full animate-pulse-slow"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neon-purple rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neon-purple rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
