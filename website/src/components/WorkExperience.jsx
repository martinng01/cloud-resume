import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      title: "AI Engineer Intern",
      company: "Proofpoint",
      location: "Singapore",
      period: "June 2025 - Present",
      description: "",
      technologies: [],
      achievements: [],
    },
    {
      id: 2,
      title: "AI/ML Transformation Intern",
      company: "Ventas Bio",
      location: "Singapore",
      period: "Sept 2024 - Jan 2025",
      description:
        "Worked on improving the accuracy of the company's knowledge retrieval chatbot.",
      technologies: ["Python", "RAG", "Docker", "HuggingFace"],
      achievements: [
        "Improved chatbot accuracy by 70% through better extraction and reranking",
        "Automated LLM evaluation to replace manual testing",
        "Fine-tuned Whisper with OCR data to boost speech recognition",
      ],
    },
    {
      id: 3,
      title: "Artificial Intelligence Intern",
      company: "A*STAR",
      location: "Singapore",
      period: "May 2024 - Aug 2024",
      description:
        "Researching on how to improve the accuracy of in-house translation models using RAG and LLMs.",
      technologies: ["Python", "RAG"],
      achievements: [
        "Enhanced the accuracy of in-house translation models using RAG and LLMs by 17%",
        "Implemented a web application to benchmark the accuracy of lightweight translation systems",
      ],
    },
    {
      id: 4,
      title: "Software Engineering Intern",
      company: "ANZElectric",
      location: "Singapore",
      period: "Dec 2023 - May 2024",
      description:
        "Created multiple cross-platform, user-facing applications using Flutter for various hardware devices.",
      technologies: ["Flutter", "Figma", "GitHub Actions"],
      achievements: [
        "Designed intuitive UI/UX using Figma",
        "Set up CI/CD pipelines with GitHub Actions for smooth deployment",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-darker-bg relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-text-primary">Work</span>
            <br />
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            My work experiences which have shaped my technical skills over the
            years.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-pink to-neon-purple transform md:-translate-x-1/2"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-neon-purple rounded-full border-4 border-dark-bg transform md:-translate-x-1/2 mt-6"></div>

              {/* Content */}
              <div
                className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="glass-effect rounded-xl p-6 hover:border-neon-purple/50 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-neon-purple font-medium">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="flex items-center space-x-4 mb-4 text-text-secondary text-sm">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {experience.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {experience.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-accent-gray border border-neon-purple/20 rounded-full text-xs text-neon-purple"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {experience.achievements.map(
                        (achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="text-sm text-text-secondary flex items-start"
                          >
                            <span className="text-neon-purple mr-2">•</span>
                            {achievement}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
