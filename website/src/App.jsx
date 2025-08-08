import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import VisitorCounter from "./components/VisitorCounter";

function App() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      fetch(
        "https://ql7clnksoqep7jixmf6ontlkxu0kyhnu.lambda-url.ap-southeast-1.on.aws/"
      )
        .then((res) => res.json())
        .then((data) => setVisitorCount(data))
        .catch((err) => {
          console.error("Error fetching visitor count:", err);
          setVisitorCount(0); // Fallback count
        });
    };

    fetchVisitorCount();
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      <Hero />
      <WorkExperience />
      <Projects />
      <VisitorCounter count={visitorCount} />

      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-neon-purple rounded-full animate-pulse-slow"></div>
        <div
          className="absolute top-40 right-20 w-1 h-1 bg-neon-pink rounded-full animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-neon-purple rounded-full animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-1 h-1 bg-neon-pink rounded-full animate-pulse-slow"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>
    </div>
  );
}

export default App;
