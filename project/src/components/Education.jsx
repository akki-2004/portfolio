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
  











import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from "lucide-react";

function Education() {
  const education = [
    {
      institution: "Keshav Memorial Institute of Technology",
      location: "Hyderabad, India",
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      gpa: "8.0",
      date: "2022 - 2026 (Expected)",
      achievements: [
        "Active member of the college coding club",
        "Participated in multiple hackathons",
        "Developed projects for college tech fest"
      ],
      courses: ["Data Structures & Algorithms", "Web Development", "Machine Learning", "Database Management"]
    },
    {
      institution: "The Narayana Junior College",
      location: "Hyderabad, India",
      degree: "Higher Secondary Education (SSC)",
      field: "Science with Computer Applications",
      percentage: "88%",
      date: "2020 – 2022",
      achievements: [
        "Secured top rank in computer science",
        "Participated in state-level science exhibition"
      ],
      courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
    },
    {
      institution: "The Hyderabad Public School",
      location: "Hyderabad, India",
      degree: "Secondary Education (ICSE)",
      field: "General Studies",
      percentage: "90%",
      date: "2010 – 2020",
      achievements: [
        "School topper in Mathematics",
        "Active participant in extracurricular activities"
      ],
      courses: ["Mathematics", "Science", "English", "Computer Applications"]
    },
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
    <section id="education" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-background-dark to-background-dark/90 -z-10"></div>
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-soft-light -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-coral/20 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent"></div>
      
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
              <GraduationCap size={14} className="mr-2" />
              Academic Journey
            </span>
            <div className="h-px w-12 bg-accent-coral/50"></div>
          </div>
          
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-4 text-text-light">
            Education & Learning
          </h2>
          
          <p className="text-center text-text-muted max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-accent-coral/20 transform md:-translate-x-px"></div>
          
          {/* Education Cards */}
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              className={`relative mb-16 md:mb-24 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0 md:mr-auto' : 'md:pl-12 md:ml-auto md:mr-0'
              } w-full md:w-1/2 pl-10 md:pl-0`}
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <motion.div 
                className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-background-card rounded-full border-4 border-accent-coral flex items-center justify-center transform -translate-x-1/2 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
              >
                <span className="text-accent-coral">
                  <GraduationCap size={14} />
                </span>
              </motion.div>
              
              {/* Card */}
              <motion.div 
                className="bg-background-card border border-accent-coral/10 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-accent-coral/5 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-text-light mb-2">{edu.institution}</h3>
                  <div className="flex flex-wrap items-center text-text-muted gap-3 mb-2">
                    <span className="flex items-center">
                      <MapPin size={14} className="mr-1 text-accent-coral" />
                      {edu.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1 text-accent-coral" />
                      {edu.date}
                    </span>
                  </div>
                </div>
                
                {/* Degree Info */}
                <div className="mb-6 p-4 bg-accent-coral/5 rounded-lg border border-accent-coral/10">
                  <div className="flex items-start">
                    <BookOpen size={18} className="text-accent-coral mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-text-light">{edu.degree}</h4>
                      <p className="text-text-muted">{edu.field}</p>
                      <div className="mt-2 flex items-center">
                        <Award size={14} className="text-accent-gold mr-2" />
                        <span className="text-accent-gold font-medium">
                          {edu.gpa ? `GPA: ${edu.gpa}` : `Percentage: ${edu.percentage}`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Achievements */}
                {edu.achievements && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-text-light mb-3">Achievements:</h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-start text-text-muted"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + 0.3 }}
                        >
                          <span className="text-accent-coral mr-2 mt-1">•</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Courses */}
                <div>
                  <h4 className="text-lg font-semibold text-text-light mb-3">Key Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <motion.span
                        key={i}
                        className="bg-accent-coral/10 text-accent-coral px-3 py-1 rounded-lg text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 + 0.5 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {course}
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

export default Education;
