import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Education from './components/Education';

function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-text">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education/>
        <Contact />
      </main>
      <footer className=" py-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/akki-2004" className="text-text hover:text-accent" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/tirumani-satya-akshay-bb4885284/" className="text-text hover:text-accent" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:naniakshay361@example.com" className="text-text hover:text-accent">
            <FaEnvelope size={24} />
          </a>
          <a href="https://x.com/satya_akshay" className="text-text hover:text-accent">
            <FaTwitter size={24} />
          </a>
        </div>
        <p className="text-sm">© 2025 Tirumani Satya Akshay. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;