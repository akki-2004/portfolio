// function Experience() {
//   return (
//     <section id="experience" className="py-20 text-white">
//       <div className="container mx-auto px-6 lg:px-16">
      
//         <h2 className="text-center text-3xl font-bold mb-12">
//           Experience
//         </h2>

//         {/* Experience Card */}
//         <div className="relative p-8 rounded-lg shadow-lg">
//           {/* Timeline Dot & Line */}
//           <div className="absolute left-2 top-0 h-full w-1 bg-purple-500"></div>

//           {/* Job Details */}
//           <h3 className="text-2xl font-semibold">MERN Stack Developer Intern</h3>
//           <p className="text-gray-400">
//             The Tann Mann Gaadi, Bangalore <span className="ml-4">June 2024 – Sept 2024</span>
//           </p>

//           {/* Job Responsibilities */}
//           <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
//             <li>Developed dynamic and user-centric web pages using React.js, enhancing user experience with intuitive, responsive interfaces.</li>
//             <li>Optimized backend integration with Node.js and Express.js for efficient data retrieval and real-time updates, ensuring robust application performance.</li>
//             <li>Engineered and managed MongoDB database schemas, ensuring secure and efficient storage of critical information.</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Experience;




"use client";
import { motion } from "framer-motion";

function Experience() {
  return (
    <section id="experience" className="py-20 text-white">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-center text-3xl font-bold mb-12">Experience</h2>

        {/* Experience Card */}
        <div className="relative p-8 rounded-lg shadow-lg">
          {/* Timeline Dot & Line */}
          <div className="absolute left-2 top-0 h-full w-1 bg-purple-500"></div>

          {/* Job Details */}
          <h3 className="text-2xl font-semibold">MERN Stack Developer Intern</h3>
          <p className="text-gray-400">
            The Tann Mann Gaadi, Bangalore <span className="ml-4">June 2024 – Sept 2024</span>
          </p>

          {/* Job Responsibilities */}
          <motion.ul
            className="mt-4 space-y-2 text-gray-300 list-disc list-inside"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Ensures animation triggers when 20% of it is in view
            variants={{
              visible: {
                transition: { staggerChildren: 0.3 }, // Stagger effect
              },
            }}
          >
            {[
              "Developed dynamic and user-centric web pages using React.js, enhancing user experience with intuitive, responsive interfaces.",
              "Optimized backend integration with Node.js and Express.js for efficient data retrieval and real-time updates, ensuring robust application performance.",
              "Engineered and managed MongoDB database schemas, ensuring secure and efficient storage of critical information.",
            ].map((text, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                {text}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
