import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Code, Zap } from "lucide-react";
import akshay from "./akshay1.jpg";

function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <motion.section 
      className="relative min-h-screen pt-32 pb-20 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="home"
    >
      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-accent-teal/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-[5%] w-80 h-80 rounded-full bg-accent-coral/5 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 270, 180, 90, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-[10%] left-[30%] w-72 h-72 rounded-full bg-accent-gold/5 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6bTggMGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xem0xMCAwaDJ2MWgtMnYtMXptLTIgMGgxdjFoLTF2LTF6bS04IDBoMXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptMCAxNGgxdjFoLTF2LTF6bTEwIDBIMzB2MWgtMXYtMXptMiAwaDFWNDhoLTF2LTJ6bTIgMGgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>

      <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left z-10"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-background-card border border-accent-teal/20 text-accent-teal mb-6"
            variants={itemVariants}
            whileHover={{ scale: 1.05, x: 5 }}
          >
            <span className="flex items-center">
              <Code size={14} className="mr-2" />
              <span className="text-sm font-medium">Full Stack Developer</span>
            </span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-teal"></span>
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            Hi, I'm <br className="md:hidden" />
            <span className="text-accent-teal inline-block">Tirumani</span> <br className="hidden md:block" />
            <span className="relative">
              <span className="relative z-10">Satya Akshay</span>
              <motion.span 
                className="absolute -bottom-2 left-0 right-0 h-3 bg-accent-coral/20 -z-10 rounded"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-text-muted mb-8 max-w-xl"
            variants={itemVariants}
          >
            I craft <span className="text-accent-coral">intuitive interfaces</span> and build <span className="text-accent-teal">robust applications</span> that solve real-world problems. Specializing in modern web technologies and creative solutions.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10"
            variants={itemVariants}
          >
            {[
              { number: "2+", label: "Years Experience" },
              { number: "10+", label: "Projects Completed" },
              { number: "5+", label: "Happy Clients" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <span className="block text-3xl font-bold text-accent-teal mb-1">{stat.number}</span>
                <span className="text-sm text-text-muted">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="bg-accent-teal text-background-dark px-8 py-4 rounded-lg font-medium shadow-lg flex items-center gap-2 group"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#FB923C",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.a>
            
            <motion.a
              href="#projects"
              className="border border-accent-teal/30 bg-background-card/50 backdrop-blur-sm text-text-light px-8 py-4 rounded-lg font-medium flex items-center gap-2"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(45, 212, 191, 0.1)",
                borderColor: "rgba(45, 212, 191, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image Section with Creative Design */}
        <motion.div
          className="lg:w-1/2 flex justify-center items-center relative"
          variants={itemVariants}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="w-72 h-72 md:w-80 md:h-80 rounded-full border border-accent-teal/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border border-accent-coral/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute w-64 h-64 md:w-72 md:h-72 rounded-full border border-accent-gold/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          {/* Profile image */}
          <motion.div
            className="relative z-10 w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {/* Image container with creative shape */}
            <div className="relative w-full h-full">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/20 via-background-dark to-accent-coral/20 z-0"></div>
              
              {/* Image with mask */}
              <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl border-2 border-accent-teal/30">
                <img
                  src={akshay}
                  alt="Tirumani Satya Akshay"
                  className="object-cover w-full h-full"
                />
                
                {/* Overlay gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-accent-teal/10 to-accent-coral/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Tech stack badges */}
              {[
                { icon: <Code size={14} />, text: "React", position: "top-2 -right-10", delay: 0.2 },
                { icon: <Zap size={14} />, text: "Node.js", position: "bottom-2 -left-10", delay: 0.4 }
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${badge.position} bg-background-card px-3 py-1 rounded-full text-xs flex items-center gap-1 border border-accent-teal/20 text-accent-teal shadow-lg`}
                  initial={{ opacity: 0, x: index === 0 ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: badge.delay + 1, duration: 0.5 }}
                >
                  {badge.icon}
                  <span>{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-accent-teal/30 rounded-full flex justify-center"
          animate={{ boxShadow: ["0 0 0 rgba(45, 212, 191, 0)", "0 0 10px rgba(45, 212, 191, 0.3)", "0 0 0 rgba(45, 212, 191, 0)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
