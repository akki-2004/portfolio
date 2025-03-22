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

function About() {
  const skills = {
    "Languages": ["C", "C++", "Java", "Python", "Solidity (Basic)"],
    "Web Technologies": ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "NodeJS", "Express JS", "React JS", "Next JS", "Django", "Blockchain (Basic)"],
    "Databases": ["MongoDB", "MySQL"],
    "Other Tools": ["GitHub", "Git", "Figma", "Data Structures", "Algorithms", "OOP Concepts"]
  };

  return (
    <section id="about" className="w-full py-24 bg-[#000000] text-white">
      <div className="container w-11/12 mx-auto px-6 lg:px-20">
        {/* About Me Section */}
        <h2 className="text-center text-3xl font-bold mb-12">
          About Me
        </h2>

        {/* Animated div - Expands only when it comes into view for the first time */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }} // Animation triggers only the first time it enters view
          className="w-full border border-2 border-purple-500 bg-[#000000]  p-10 rounded-lg shadow-lg"
        >
          <h3 className="text-3xl font-semibold mb-6">My Journey</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a passionate Full Stack Developer with 2 years of experience in building web applications using the MERN stack. 
            I specialize in creating intelligent process automation, tax management platforms, and appointment management systems. 
            I love solving complex problems with elegant solutions and continuously explore new technologies, including blockchain and AI-powered chatbots.
          </p>
        </motion.div>

        <br />
        {/* Technical Skills Section */}
        <section className="mt-16">
          <h2 className="text-center text-3xl font-bold mb-10">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="border border-2 border-purple-500 bg-[#000000] p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="bg-purple-500 bg-opacity-20 text-purple-400 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
