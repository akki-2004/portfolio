function Projects() {
  const projects = [
    {
      title: 'Evidence Management System',
      description: " Designed and implemented a blockchain-powered evidence management system using Solidity and IPFS for immutable data storage. Built the frontend with React.js for an intuitive user interface and the backend with Node.js and Express.js for efficient API handling.Implemented MongoDB for secure credential storage and optimized case management features like FIR filing andlawyer hiring.",
      image: '',
      technologies: ['React', 'Node.js', 'MongoDB', 'BlockChain', 'Solidity'],
      // liveLink: '#',
      githubLink: 'https://github.com/akki-2004/EMS'
    },
    {
      title: 'Domain-Specific Intelligent Chatbot for SMEs',
      description: 'Developed an AI-powered chatbot for SMEs in education, hospitality, tourism, healthcare, and retail using fine- tuned Large Language Models(LLMs) and Retrieval - Augmented Generation(RAG). Integrated document processing capabilities to extract embeddings from PDFs and store them in a vector database for accurate, context - aware responses. Built using React.js (Frontend), Node.js / Express.js(Backend), MongoDB(Database), Unicorn(LLM Hosting), and JWT for secure authentication.',
      image: '',
      technologies: ['AI', 'Machine Learning', 'LLM','RAG','MERN'],
        // liveLink: '#',
          githubLink: 'https://github.com/akki-2004/ChatBot'
},
{
  title: 'Blog Page',
    description: 'Built a dynamic platform enabling users to create, edit, and manage blog posts using React.js for responsive frontend and Express.js with MongoDB for robust backend data management. Designed and implemented RESTful API’s for seamless integration of data between frontend and backend systems, optimizing user interaction and content management.',
      image: '',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
          // liveLink: '#',
            githubLink: 'https://github.com/akki-2004/Blog-Page'
},
{
  title: 'Mithra---Student-Application',
  description: "Developed a comprehensive platform using Django and JavaScript to manage student information, including attendance tracking, timetable management, and results. Integrated college APIs to fetch and display accurate student data, facilitating efficient academic management and enhancing user experience.",
  image: '',
  technologies: ['React', 'Node.js', 'MongoDB', 'BlockChain', 'Solidity'],
  // liveLink: '#',
  githubLink: 'https://github.com/akki-2004/Mithra---Student-Application'
},
{
  title: 'WeatherApp',
  description: 'This App provides real-time weather updates by integrating with a weather API. It allows users to search for weather conditions by city, displaying key details like temperature, humidity, wind speed, and weather conditions. The app may also support location-based weather updates, unit conversion between Celsius and Fahrenheit, and a responsive UI for both desktop and mobile users. Future improvements could include historical weather data, map integration, and push notifications for severe weather conditions.',
  image: '',
  technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    // liveLink: '#',
      githubLink: 'https://github.com/akki-2004/Weather_App'
},
{
title: 'AI Interview System',
description: 'AI Interview System is an intelligent platform that automates the hiring process by conducting AI-driven interviews. It uses advanced machine learning and NLP to evaluate candidates based on their responses, analyzing speech patterns, sentiment, and content relevance. Recruiters can create custom interview questions, and the system can assess candidates in real-time or asynchronously. It also generates performance reports, provides AI-driven feedback, and ranks candidates based on predefined criteria.',
  image: '',
  technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      // liveLink: '#',
        githubLink: 'https://github.com/akki-2004/Ai_Interview_System'
}
  ];

return (
  <section id="projects" className="py-20 text-white">
    <h2 className="text-center text-3xl font-bold mb-12">
      Projects
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
      {projects.map((project, index) => (
        <div key={index} className="bg-[#1a1a3a] p-6 rounded-xl transition-all duration-300 hover:scale-105">
          <div className="relative w-full h-10 mb-4">
            <span className="text-sm text-gray-400 absolute top-1 left-2">{project.title}</span>
          </div>
          <h3 className="text-lg font-bold text-white-400 mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-purple-500 bg-opacity-20 text-purple-400 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">

            <a
              href={project.githubLink}
              className="border border-purple-500 text-purple-400 px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);
}

export default Projects;
