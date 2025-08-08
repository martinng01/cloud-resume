import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, TrendingUp } from "lucide-react";

const VisitorCounter = ({ count }) => {
  const [displayCount, setDisplayCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("visitor-counter");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && count > 0) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = count / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= count) {
          setDisplayCount(count);
          clearInterval(timer);
        } else {
          setDisplayCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, count]);

  return (
    <section id="contact" className="py-20 bg-darker-bg relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="visitor-counter" className="text-center">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-text-primary">Website</span>
              <br />
              <span className="gradient-text">Views</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              View counter implemented with AWS
            </p>
          </motion.div>

          {/* Counter Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="glass-effect rounded-2xl p-12 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full flex items-center justify-center mr-6">
                  <Users className="text-dark-bg" size={32} />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-text-primary">
                    Portfolio Views
                  </h3>
                  <p className="text-text-secondary">Total visits</p>
                </div>
              </div>

              <div className="text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={displayCount}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="text-6xl md:text-8xl font-bold gradient-text neon-glow mb-4"
                  >
                    {displayCount.toLocaleString()}
                  </motion.div>
                </AnimatePresence>

                <div className="flex items-center justify-center text-neon-purple">
                  <TrendingUp size={20} className="mr-2" />
                  <span className="text-sm font-medium">Updated regularly</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitorCounter;
