// function Education() {
//     const education = [
//       {
//         institution: "Keshav Memorial Institute of Technology",
//         location: "Hyderabad, India",
//         degree: "BTech",
//         gpa: "8.0",
//         date: "Expected MAY 2026",
//       },
//       {
//         institution: "The Narayana Junior College",
//         location: "Hyderabad, India",
//         degree: "SSC",
//         percentage: "88",
//         date: "2020 – 2022",
//       },
//       {
//         institution: "The Hyderabad Public School",
//         location: "Hyderabad, India",
//         degree: "ICSE",
//         percentage: "90",
//         date: "2010 – 2020",
//       },
//     ];
  
//     return (
//       <section id="education" className="py-20 text-white">
//         <h2 className="text-center text-3xl font-bold mb-12 underline decoration-purple-500 decoration-2">
//           Education
//         </h2>
//         <div className="max-w-4xl mx-auto">
//           {education.map((edu, index) => (
//             <div key={index} className="relative pl-8 border-l-2 border-purple-500 mb-8">
//               <div className="absolute -left-3 top-0 bg-purple-500 w-4 h-4 rounded-full"></div>
//               <h3 className="text-xl font-semibold">{edu.institution}</h3>
//               <p className="text-gray-400">{edu.location}</p>
//               <p className="font-semibold">{edu.degree}</p>
//               {edu.gpa && <p>GPA: {edu.gpa}</p>}
//               {edu.percentage && <p>Percentage: {edu.percentage}</p>}
//               <p className="absolute right-0 top-0 text-gray-400">{edu.date}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }
  
//   export default Education;
  











"use client";
import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      institution: "Keshav Memorial Institute of Technology",
      location: "Hyderabad, India",
      degree: "BTech",
      gpa: "8.0",
      date: "Expected MAY 2026",
    },
    {
      institution: "The Narayana Junior College",
      location: "Hyderabad, India",
      degree: "SSC",
      percentage: "88",
      date: "2020 – 2022",
    },
    {
      institution: "The Hyderabad Public School",
      location: "Hyderabad, India",
      degree: "ICSE",
      percentage: "90",
      date: "2010 – 2020",
    },
  ];

  return (
    <section id="education" className="py-20 text-white">
      <h2 className="text-center text-3xl font-bold mb-12">
        Education
      </h2>

      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Ensures animation triggers when 20% is visible
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }} // Stagger effect
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="relative pl-8 border-l-2 border-purple-500 mb-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <div className="absolute -left-2 top-0 bg-purple-500 w-4 h-4 rounded-full"></div>
            <h3 className="text-xl font-semibold">{edu.institution}</h3>
            <p className="text-gray-400">{edu.location}</p>
            <p className="font-semibold">{edu.degree}</p>
            {edu.gpa && <p>GPA: {edu.gpa}</p>}
            {edu.percentage && <p>Percentage: {edu.percentage}</p>}
            <p className="absolute right-0 top-0 text-gray-400">{edu.date}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Education;
