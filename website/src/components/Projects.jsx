import React from "react";
import { motion } from "framer-motion";
import { Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sales Helper Project",
      description:
        "This video calling web app enhances sales calls by delivering real-time insights using relevant company data, audio transcription, and emotion detection.",
      technologies: [
        "OpenCV",
        "scikit-learn",
        "Langchain",
        "Huggingface",
        "RAG",
        "Flask",
      ],
      githubUrl: "https://github.com/martinng01/sales-helper",
      featured: true,
    },
    {
      id: 2,
      title: "Cloud Resume",
      description:
        "My portfolio website built on AWS with DevOps practices, as part of the Cloud Resume Challenge.",
      technologies: ["AWS", "Terraform", "Github Actions", "pytest", "ReactJS"],
      githubUrl: "https://github.com/martinng01/cloud-resume",
      featured: false,
    },
    {
      id: 3,
      title: "Hackathon Project - Forecasting Dashboard",
      description:
        "NextJS web application that utilizes AWS Sagemaker for model deployment and retraining",
      technologies: ["AWS SageMaker", "AWS StepFunctions", "NextJS"],
      githubUrl: "https://github.com/martinng01/demand-dashboard",
      featured: false,
    },
  ];

  const getProjectImage = (projectId) => {
    return `/images/projects/${projectId}.png`;
  };

  const handleImageError = (e, project) => {
    e.target.style.display = "none";
    const placeholder = e.target.nextElementSibling;
    if (placeholder) {
      placeholder.style.display = "flex";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="projects" className="py-20 bg-dark-bg relative">
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
            <span className="text-text-primary">Projects</span>
            <br />
            <span className="gradient-text">Overview</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A collection of projects from hackathons, and personal learning that
            demonstrate my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        {/* Featured Project */}
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="glass-effect rounded-2xl overflow-hidden hover:border-neon-purple/50 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={getProjectImage(project.id)}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      onError={(e) => handleImageError(e, project)}
                    />
                    {/* Fallback placeholder */}
                    <div
                      className="w-full h-full bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 flex items-center justify-center"
                      style={{ display: "none" }}
                    >
                      <div className="text-center p-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-dark-bg font-bold text-2xl">
                            💻
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-neon-purple/20 text-neon-purple text-xs font-medium rounded-full mb-4">
                        Featured Project
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-4">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-accent-gray border border-neon-purple/20 rounded-full text-xs text-neon-purple"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-6 py-3 neon-border text-neon-purple font-semibold rounded-full hover:bg-neon-purple hover:text-dark-bg transition-all duration-300"
                      >
                        <Github size={18} className="mr-2" />
                        Source Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group"
              >
                <div className="glass-effect rounded-xl overflow-hidden hover:border-neon-purple/50 transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={getProjectImage(project.id)}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => handleImageError(e, project)}
                    />
                    {/* Fallback placeholder */}
                    <div
                      className="w-full h-48 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 flex items-center justify-center"
                      style={{ display: "none" }}
                    >
                      <div className="text-center p-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-dark-bg font-bold text-lg">
                            💻
                          </span>
                        </div>
                        <h3 className="text-text-primary font-semibold text-sm mb-1">
                          {project.title}
                        </h3>
                        <p className="text-text-secondary text-xs">
                          Add {project.id}.jpg
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 bg-accent-gray border border-neon-purple rounded-full flex items-center justify-center text-neon-purple hover:bg-neon-purple hover:text-dark-bg transition-colors duration-200"
                        >
                          <Github size={18} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-neon-purple transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-accent-gray border border-neon-purple/20 rounded-full text-xs text-neon-purple"
                        >
                          {tech}
                        </span>
                      ))}
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

export default Projects;
