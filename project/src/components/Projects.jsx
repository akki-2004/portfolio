import { motion } from "framer-motion";
import { Code, Github, ExternalLink, Folder, ArrowUpRight } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: 'Evidence Management System',
      description: "Designed and implemented a blockchain-powered evidence management system using Solidity and IPFS for immutable data storage. Built the frontend with React.js for an intuitive user interface and the backend with Node.js and Express.js for efficient API handling.",
      image: 'https://via.placeholder.com/600x400/2DD4BF/FFFFFF?text=Evidence+Management',
      technologies: ['React', 'Node.js', 'MongoDB', 'Blockchain', 'Solidity'],
      category: 'Full Stack',
      githubLink: 'https://github.com/akki-2004/EMS'
    },
    {
      title: 'Domain-Specific Intelligent Chatbot',
      description: 'Developed an AI-powered chatbot for SMEs using fine-tuned Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG). Integrated document processing capabilities to extract embeddings from PDFs for accurate, context-aware responses.',
      image: 'https://via.placeholder.com/600x400/FB923C/FFFFFF?text=AI+Chatbot',
      technologies: ['AI', 'Machine Learning', 'LLM', 'RAG', 'MERN'],
      category: 'AI & ML',
      githubLink: 'https://github.com/akki-2004/ChatBot'
    },
    {
      title: 'Blog Platform',
      description: 'Built a dynamic platform enabling users to create, edit, and manage blog posts using React.js for responsive frontend and Express.js with MongoDB for robust backend data management. Designed and implemented RESTful APIs for seamless integration.',
      image: 'https://via.placeholder.com/600x400/FBBF24/FFFFFF?text=Blog+Platform',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      category: 'Web Development',
      githubLink: 'https://github.com/akki-2004/Blog-Page'
    },
    {
      title: 'Mithra Student Application',
      description: "Developed a comprehensive platform using Django and JavaScript to manage student information, including attendance tracking, timetable management, and results. Integrated college APIs to fetch and display accurate student data.",
      image: 'https://via.placeholder.com/600x400/2DD4BF/FFFFFF?text=Student+App',
      technologies: ['Django', 'JavaScript', 'Python', 'REST API'],
      category: 'Web Application',
      githubLink: 'https://github.com/akki-2004/Mithra---Student-Application'
    },
    {
      title: 'Weather Application',
      description: 'Created a real-time weather app that integrates with a weather API to provide current conditions by city. Features include temperature, humidity, wind speed data, location-based updates, and unit conversion between Celsius and Fahrenheit.',
      image: 'https://via.placeholder.com/600x400/FB923C/FFFFFF?text=Weather+App',
      technologies: ['React', 'API Integration', 'JavaScript', 'CSS'],
      category: 'Frontend',
      githubLink: 'https://github.com/akki-2004/Weather_App'
    },
    {
      title: 'AI Interview System',
      description: 'Developed an intelligent platform that automates the hiring process using AI-driven interviews. Uses advanced machine learning and NLP to evaluate candidates based on their responses, analyzing speech patterns and content relevance.',
      image: 'https://via.placeholder.com/600x400/FBBF24/FFFFFF?text=AI+Interview',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'ML'],
      category: 'AI & Full Stack',
      githubLink: 'https://github.com/akki-2004/Ai_Interview_System'
    }
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Filter categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  return (
    <section id="projects" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-background-dark to-background-dark/90 -z-10"></div>
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-soft-light -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-teal/20 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-coral/20 to-transparent"></div>
      
      <motion.div 
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16 relative">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-accent-teal/50"></div>
            <span className="mx-4 text-accent-teal font-medium px-4 py-1 rounded-full border border-accent-teal/20 text-sm flex items-center">
              <Code size={14} className="mr-2" />
              My Work
            </span>
            <div className="h-px w-12 bg-accent-teal/50"></div>
          </div>
          
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-4 text-text-light">
            Featured Projects
          </h2>
          
          <p className="text-center text-text-muted max-w-2xl mx-auto">
            A collection of my recent development work
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={itemVariants}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                index === 0 
                  ? "bg-accent-teal text-background-dark" 
                  : "bg-background-card text-text-muted hover:text-accent-teal border border-accent-teal/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={itemVariants}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="bg-background-card border border-accent-teal/10 rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-70"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent-teal/90 backdrop-blur-sm text-background-dark px-3 py-1 rounded-lg text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Links */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-background-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-text-light hover:text-accent-teal transition-colors"
                      whileHover={{ scale: 1.2, backgroundColor: "rgba(45, 212, 191, 0.2)" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={16} />
                    </motion.a>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-text-light mb-2 group-hover:text-accent-teal transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-muted mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="bg-accent-teal/10 text-accent-teal px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-accent-coral/10 text-accent-coral px-2 py-1 rounded-md text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* View Project Button */}
                <div className="px-6 pb-6">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-3 rounded-lg bg-background-dark border border-accent-teal/20 text-text-light hover:bg-accent-teal hover:text-background-dark transition-colors group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Project</span>
                    <motion.span
                      className="ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                    >
                      <ArrowUpRight size={16} />
                    </motion.span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View More Button */}
        <motion.div 
          className="flex justify-center mt-12"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/akki-2004"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-background-card border border-accent-teal/20 rounded-lg text-text-light hover:bg-accent-teal hover:text-background-dark transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;