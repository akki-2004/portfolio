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

  // Optimized shapes config with reduced animations
  const shapes = [
    { size: 'w-64 h-64', color: 'bg-accent-teal/3', position: 'top-20 -left-32', delay: 0 },
    { size: 'w-96 h-96', color: 'bg-accent-coral/3', position: 'top-1/4 -right-48', delay: 0.5 },
    { size: 'w-80 h-80', color: 'bg-accent-gold/3', position: 'bottom-1/3 -left-40', delay: 1 },
    { size: 'w-72 h-72', color: 'bg-accent-teal/3', position: 'bottom-20 -right-36', delay: 1.5 },
  ];

  // Generate stable random positions for shapes only once
  const [shapePositions] = useState(() =>
    shapes.map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`
    }))
  );

  // Handle loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Reduced loading time

    return () => clearTimeout(timer);
  }, []);

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
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
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
          {/* Background noise texture */}
          <div className="fixed inset-0 bg-noise opacity-[0.02] mix-blend-soft-light pointer-events-none"></div>

          {/* Optimized background shapes with reduced animations */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {shapes.map((shape, index) => (
              <motion.div
                key={index}
                className={`absolute rounded-full blur-3xl ${shape.size} ${shape.color}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 0.6,
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  delay: shape.delay,
                  duration: 20,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
                style={shapePositions[index]}
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
                  { icon: <FaGithub size={24} />, href: 'https://github.com/akki-2004', label: 'GitHub' },
                  {
                    icon: <FaLinkedin size={24} />,
                    href: 'https://www.linkedin.com/in/tirumani-satya-akshay-bb4885284/',
                    label: 'LinkedIn',
                  },
                  { icon: <FaEnvelope size={24} />, href: 'mailto:naniakshay361@example.com', label: 'Email' },
                  { icon: <FaTwitter size={24} />, href: 'https://x.com/satya_akshay', label: 'Twitter' },
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
                      backgroundColor: 'rgba(45, 212, 191, 0.1)',
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
