import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Education from './components/Education';
import Testimonials from './components/Testimonials';

function App() {
  const [loading, setLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  // Handle loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle cursor position for custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animated shapes for background
  const shapes = [
    { size: 'w-64 h-64', color: 'bg-accent-teal/5', position: 'top-20 -left-32', delay: 0 },
    { size: 'w-96 h-96', color: 'bg-accent-coral/5', position: 'top-1/4 -right-48', delay: 0.2 },
    { size: 'w-80 h-80', color: 'bg-accent-gold/5', position: 'bottom-1/3 -left-40', delay: 0.4 },
    { size: 'w-72 h-72', color: 'bg-accent-teal/5', position: 'bottom-20 -right-36', delay: 0.6 },
  ];

  return (
    <AnimatePresence>
      {loading ? (
        // Loading screen
        <motion.div 
          className="fixed inset-0 flex items-center justify-center bg-background-dark z-50"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="w-24 h-24 border-4 border-t-accent-teal border-r-accent-coral border-b-accent-gold border-l-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.p 
              className="mt-6 text-text-light text-xl font-display"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Loading Portfolio...
            </motion.p>
          </motion.div>
        </motion.div>
      ) : (
        // Main content
        <div className="relative min-h-screen bg-background-dark text-text-light overflow-hidden">
          {/* Custom cursor */}
          <motion.div 
            className="fixed w-8 h-8 rounded-full border-2 border-accent-teal mix-blend-difference pointer-events-none z-50"
            animate={{ 
              x: cursorPosition.x - 16, 
              y: cursorPosition.y - 16,
              scale: [1, 1.2, 1],
              borderColor: ['#2DD4BF', '#FB923C', '#FBBF24', '#2DD4BF']
            }}
            transition={{ 
              x: { duration: 0.1, ease: "linear" },
              y: { duration: 0.1, ease: "linear" },
              scale: { duration: 4, repeat: Infinity },
              borderColor: { duration: 8, repeat: Infinity }
            }}
          />
          
          {/* Background noise texture */}
          <div className="fixed inset-0 bg-noise opacity-[0.03] mix-blend-soft-light pointer-events-none"></div>
          
          {/* Animated background shapes */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {shapes.map((shape, index) => (
              <motion.div
                key={index}
                className={`absolute rounded-full blur-3xl ${shape.size} ${shape.color}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 0.8, 
                  scale: [0.8, 1.2, 0.8],
                  x: [0, 20, 0],
                  y: [0, -20, 0]
                }}
                transition={{ 
                  delay: shape.delay,
                  duration: 15, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{ 
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
          
          <Navbar />
          
          <main className="relative z-10 container mx-auto px-4 py-16">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Education />
            <Testimonials />
            <Contact />
          </main>
          
          <footer className="relative z-10 py-12 text-center">
            {/* Decorative elements */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-teal/30 to-transparent"></div>
            
            {/* Social links */}
            <div className="mb-8">
              <motion.div 
                className="w-20 h-1 bg-gradient-to-r from-accent-teal to-accent-coral mx-auto rounded-full mb-8"
                animate={{ width: ['80px', '120px', '80px'] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="flex justify-center space-x-6 mb-6">
                {[
                  { icon: <FaGithub size={24} />, href: "https://github.com/akki-2004", label: "GitHub" },
                  { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/tirumani-satya-akshay-bb4885284/", label: "LinkedIn" },
                  { icon: <FaEnvelope size={24} />, href: "mailto:naniakshay361@example.com", label: "Email" },
                  { icon: <FaTwitter size={24} />, href: "https://x.com/satya_akshay", label: "Twitter" }
                ].map((social, index) => (
                  <motion.a 
                    key={social.label}
                    href={social.href} 
                    className="text-text-muted hover:text-accent-teal transform transition-all duration-300 p-3 rounded-full hover:bg-background-card"
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, 5, -5, 0],
                      backgroundColor: 'rgba(45, 212, 191, 0.1)'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-background-card pt-8 mx-auto max-w-4xl">
              <p className="text-text-muted mb-2">
                Designed and built with <span className="text-accent-coral">♥</span> by Tirumani Satya Akshay
              </p>
              <p className="text-sm text-text-muted/70">© 2025 Tirumani Satya Akshay. All rights reserved.</p>
            </div>
          </footer>
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;