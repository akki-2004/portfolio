// import { useState } from 'react';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-secondary py-4">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           <a href="#" className="text-xl font-bold text-accent">Tirumani Satya Akshay</a>        
//           <button
//             className="md:hidden text-text"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
//               {isOpen ? (
//                 <path d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>

//           {/* Desktop menu */}
//           <div className="hidden md:flex space-x-8">
//             <a href="#about" className="text-text hover:text-accent">About</a>
//             <a href="#experience" className="text-text hover:text-accent">Experience</a>
//             <a href="#about" className="text-text hover:text-accent">Skills</a>
//             <a href="#projects" className="text-text hover:text-accent">Projects</a>
//             <a href="#contact" className="text-text hover:text-accent">Contact</a>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isOpen && (
//           <div className="md:hidden mt-4">
//             <a href="#about" className="block py-2 text-text hover:text-accent">About</a>
//             <a href="#experience" className="block py-2 text-text hover:text-accent">Experience</a>
//             <a href="#about" className="text-text hover:text-accent">Skills</a>

//             <a href="#projects" className="block py-2 text-text hover:text-accent">Projects</a>
//             <a href="#contact" className="block py-2 text-text hover:text-accent">Contact</a>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;




import { useState, useEffect } from 'react';
import { Menu, X, Code, Zap, Layers, User, Mail, GraduationCap, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Update active section based on scroll position
      const sections = ['about', 'experience', 'projects', 'education', 'testimonials', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
      
      // If at the top, set to home
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { name: "About", href: "#about", icon: <User size={16} /> },
    { name: "Experience", href: "#experience", icon: <Zap size={16} /> },
    { name: "Projects", href: "#projects", icon: <Code size={16} /> },
    { name: "Skills", href: "#skills", icon: <Layers size={16} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={16} /> }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${
        scrolled 
          ? "bg-background-dark/80 backdrop-blur-md border-accent-teal/30" 
          : "bg-transparent border-transparent"
      } fixed w-full z-50 top-0 transition-all duration-500`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a 
            href="#" 
            className="text-accent-teal font-bold text-xl relative z-10 flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="w-10 h-10 bg-background-card rounded-lg flex items-center justify-center mr-2 border border-accent-teal/20"
              whileHover={{ 
                rotate: [0, -10, 10, 0],
                borderColor: "rgba(45, 212, 191, 0.5)"
              }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-accent-teal font-bold">TSA</span>
            </motion.div>
            <span className="hidden sm:block">Akshay</span>
          </motion.a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <motion.a 
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 ${
                    isActive 
                      ? "text-accent-teal bg-background-card" 
                      : "text-text-muted hover:text-text-light hover:bg-background-card/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-accent-teal">{item.icon}</span>
                  <span>{item.name}</span>
                  
                  {isActive && (
                    <motion.span 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-teal"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
            
            <motion.a
              href="#contact"
              className="ml-4 px-5 py-2 bg-accent-teal text-background-dark rounded-lg font-medium"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#FB923C",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Hire Me
            </motion.a>
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-text-light bg-background-card p-2 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background-card/95 backdrop-blur-lg border border-accent-teal/10 py-4 px-6 mx-4 my-2 rounded-xl space-y-1 shadow-xl"
          >
            {navItems.map((item, index) => (
              <motion.a 
                key={item.name}
                href={item.href} 
                className="block py-3 px-4 text-text-muted hover:text-accent-teal rounded-lg flex items-center space-x-3 hover:bg-background-dark/50 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-accent-teal">{item.icon}</span>
                <span>{item.name}</span>
              </motion.a>
            ))}
            
            <motion.a
              href="#contact"
              className="block mt-4 py-3 px-4 bg-accent-teal text-background-dark rounded-lg font-medium text-center"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
