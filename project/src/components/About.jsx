// function About() {
//   const skills = {
//     "Languages": ["C", "C++", "Java", "Python", "Solidity (Basic)"],
//     "Web Technologies": ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "NodeJS", "Express JS", "React JS", "Next JS", "Django", "Blockchain (Basic)"],
//     "Databases": ["MongoDB", "MySQL"],
//     "Other Tools": ["GitHub", "Git", "Figma", "Data Structures", "Algorithms", "OOP Concepts"]
//   };

//   return (
//     <section id="about" className=" w-full py-24 bg-[#131517] text-white">
//       <div className="container mx-auto px-6 lg:px-20">
//         {/* About Me Section */}
//         <h2 className="text-center text-3xl font-bold mb-12 underline decoration-purple-500 decoration-4">
//           About Me
//         </h2>
//         <div className="w-full bg-gray-800 p-10 rounded-lg shadow-lg">
//           <h3 className="text-3xl font-semibold mb-6">My Journey</h3>
//           <p className="text-gray-300 text-lg leading-relaxed">
//             I'm a passionate Full Stack Developer with 2 years of experience in building web applications using the MERN stack. 
//             I specialize in creating intelligent process automation, tax management platforms, and appointment management systems. 
//             I love solving complex problems with elegant solutions and continuously explore new technologies, including blockchain and AI-powered chatbots.
//           </p>
//         </div>
//       <br />
//         {/* Technical Skills Section */}
//         <section className="mt-16">
//           <h2 className="text-center text-3xl font-bold mb-10 underline decoration-purple-500 decoration-3">
//             Technical Skills
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
//             {Object.entries(skills).map(([category, items]) => (
//               <div key={category} className="bg-gray-800 p-8 rounded-lg shadow-lg">
//                 <h3 className="text-2xl font-semibold mb-4">{category}</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {items.map((item) => (
//                     <span
//                       key={item}
//                       className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-lg"
//                     >
//                       {item}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </section>
//   );
// }

// export default About;





import { motion } from "framer-motion";
import { User, Code, Database, Wrench, Sparkles, Layers } from "lucide-react";
import React, { useMemo } from "react";

function About() {
  const skills = useMemo(() => ({
    Languages: ["C", "C++", "Java", "Python", "Solidity (Basic)"],
    "Web Technologies": [
      "HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "NodeJS",
      "Express JS", "React JS", "Next JS", "Django", "Blockchain (Basic)",
    ],
    Databases: ["MongoDB", "MySQL"],
    "Other Tools": ["GitHub", "Git", "Figma", "Data Structures", "Algorithms", "OOP Concepts"],
  }), []);

  const categoryIcons = {
    Languages: <Code size={20} />,
    "Web Technologies": <Layers size={20} />,
    Databases: <Database size={20} />,
    "Other Tools": <Wrench size={20} />,
  };

  // Animation variants (keep simple)
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const skillItemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 250, damping: 20 } },
    hover: { scale: 1.05, backgroundColor: "rgba(45, 212, 191, 0.3)", color: "#F3F4F6", transition: { duration: 0.15 } },
  };

  return (
    <section id="about" className="w-full py-24 relative">
      {/* Background and decorative elements can be simplified or removed if heavy */}
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
              <User size={14} className="mr-2" />
              About Me
            </span>
            <div className="h-px w-12 bg-accent-teal/50"></div>
          </div>
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-4 text-text-light">
            My Background & Skills
          </h2>
          <p className="text-center text-text-muted max-w-2xl mx-auto">
            A glimpse into my journey and the technologies I work with
          </p>
        </motion.div>

        {/* Journey Card */}
        <motion.div
          variants={itemVariants}
          className="w-full bg-background-card p-8 rounded-2xl border border-accent-teal/10 shadow-xl mb-20 relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <motion.div
                className="w-12 h-12 rounded-xl bg-accent-teal/10 flex items-center justify-center mr-4 text-accent-teal"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles size={24} />
              </motion.div>
              <motion.h3 className="text-3xl font-bold text-text-light" variants={itemVariants}>
                My Journey
              </motion.h3>
            </div>
            <motion.div className="space-y-6 text-text-muted text-lg leading-relaxed" variants={itemVariants}>
              <p>
                I'm a passionate <span className="text-accent-teal font-medium">Full Stack Developer</span> with 2 years of experience building web applications using the MERN stack.
              </p>
              <p>
                I specialize in creating <span className="text-accent-coral font-medium">intelligent process automation</span>, tax management platforms, and appointment management systems.
              </p>
              <p>
                I love solving complex problems with elegant solutions and explore new technologies like <span className="text-accent-gold font-medium">blockchain</span> and <span className="text-accent-gold font-medium">AI-powered chatbots</span>.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.section className="mt-20" variants={itemVariants} id="skills">
          <motion.div variants={itemVariants} className="mb-12 relative">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-accent-coral/50"></div>
              <span className="mx-4 text-accent-coral font-medium px-4 py-1 rounded-full border border-accent-coral/20 text-sm flex items-center">
                <Code size={14} className="mr-2" />
                My Expertise
              </span>
              <div className="h-px w-12 bg-accent-coral/50"></div>
            </div>
            <h2 className="text-center text-4xl font-bold mb-4 text-text-light">Technical Skills</h2>
            <p className="text-center text-text-muted max-w-2xl mx-auto">
              Technologies and tools I've mastered throughout my development journey
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-8" variants={itemVariants}>
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                className="bg-background-card/80 p-8 rounded-2xl border border-accent-teal/10 shadow-lg hover:shadow-accent-teal/5 transition-all duration-300 relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute transform rotate-45 bg-accent-teal/10 text-accent-teal w-28 h-28 -top-14 -right-14 flex items-end justify-start pb-2 pl-2">
                    {categoryIcons[category]}
                  </div>
                </div>

                <motion.div className="flex items-center mb-6">
                  <span className="text-accent-teal mr-3">{categoryIcons[category]}</span>
                  <h3 className="text-2xl font-bold text-text-light">{category}</h3>
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-2 relative z-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {items.map((item, index) => (
                    <motion.span
                      key={item}
                      className="bg-accent-teal/10 text-accent-teal px-4 py-2 rounded-lg text-sm font-medium cursor-pointer border border-accent-teal/5"
                      variants={skillItemVariants}
                      whileHover="hover"
                      transition={{ delay: index * 0.03 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </motion.div>
    </section>
  );
}

export default About;
