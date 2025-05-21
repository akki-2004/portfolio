import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

function Experience() {
  const experiences = [
    {
      title: "MERN Stack Developer Intern",
      company: "The Tann Mann Gaadi",
      location: "Bangalore",
      period: "June 2024 – Sept 2024",
      description: "Worked on developing and optimizing web applications using the MERN stack.",
      responsibilities: [
        "Developed dynamic and user-centric web pages using React.js, enhancing user experience with intuitive, responsive interfaces.",
        "Optimized backend integration with Node.js and Express.js for efficient data retrieval and real-time updates, ensuring robust application performance.",
        "Engineered and managed MongoDB database schemas, ensuring secure and efficient storage of critical information."
      ],
      skills: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
      companyUrl: "https://www.thetannmanngaadi.org/"
    },
    {
      title: "Full Stack Developer",
      company: "WiseMango",
      location: "Remote",
      period: "April 2025 – May 2025",
      description: "Contributed to building modern web interfaces and improving user experience.",
      responsibilities: [
        "Designed and implemented responsive user interfaces using React and Tailwind CSS.",
        "Collaborated with the design team to translate wireframes into functional components.",
        "Optimized application performance and loading times through code refactoring and best practices."
      ],
      skills: ["React", "Tailwind CSS", "JavaScript", "UI/UX", "Git"],
      companyUrl: "https://wisemango.io/"
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

  return (
    <section id="experience" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-background-dark to-background-dark/90 -z-10"></div>
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-soft-light -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-coral/20 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-teal/20 to-transparent"></div>

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
            <div className="h-px w-12 bg-accent-coral/50"></div>
            <span className="mx-4 text-accent-coral font-medium px-4 py-1 rounded-full border border-accent-coral/20 text-sm flex items-center">
              <Briefcase size={14} className="mr-2" />
              Work History
            </span>
            <div className="h-px w-12 bg-accent-coral/50"></div>
          </div>

          <h2 className="text-center text-4xl md:text-5xl font-bold mb-4 text-text-light">
            Professional Experience
          </h2>

          <p className="text-center text-text-muted max-w-2xl mx-auto">
            My journey through various roles and projects
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-accent-teal/20 transform md:-translate-x-px"></div>

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <motion.div 
    key={index}
    className={`relative mb-12 md:mb-24 w-full md:w-1/2 ${
      index % 2 === 0 ? 'md:pr-12 md:ml-0 md:mr-auto' : 'md:pl-12 md:ml-auto md:mr-0'
    }`}
    variants={itemVariants}
  >
              {/* Timeline dot */}
              <motion.div 
                className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-background-card rounded-full border-4 border-accent-teal flex items-center justify-center transform -translate-x-1/2 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
              >
                <span className="text-accent-teal">
                  <Briefcase size={14} />
                </span>
              </motion.div>

              {/* Card */}
              <motion.div 
                className="bg-background-card border border-accent-teal/10 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-accent-teal/5 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-text-light mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap items-center text-text-muted gap-3 mb-2">
                    <a 
                      href={exp.companyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-accent-coral hover:underline"
                    >
                      <span>{exp.company}</span>
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                    <span className="flex items-center">
                      <MapPin size={14} className="mr-1 text-accent-teal" />
                      {exp.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1 text-accent-teal" />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-text-muted">{exp.description}</p>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-text-light mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-start text-text-muted"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                      >
                        <span className="text-accent-teal mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-lg font-semibold text-text-light mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="bg-accent-teal/10 text-accent-teal px-3 py-1 rounded-lg text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 + 0.5 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
