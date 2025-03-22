import { motion } from "framer-motion";
import akshay from "./akshay1.jpg"
function Hero() {
  return (
    <section className="relative py-20 text-center bg-gradient-to-br text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#000000] backdrop-blur-md"></div>

      <div className="relative py-20 container mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
        {/* Image Section with Floating Animation */}
        <motion.div
          className="mb-8 md:mb-0 md:w-1/3 flex justify-center"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 2, ease: "easeInOut" }}
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg shadow-purple-500/30">
            <img
              src={akshay}
              alt="Tirumani Satya Akshay"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Text & CTA Section */}
        <motion.div
          className="md:w-2/3 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Hi, I'm <span className="text-purple-400">Tirumani Satya Akshay</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
          Full Stack Engineer | Crafting Intuitive Interfaces 
          </p>

          {/* Buttons with Slide-Up Animation */}
          <motion.div
            className="flex justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-purple-500/50"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="border border-purple-500 text-purple-500 px-6 py-3 rounded-lg hover:bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 hover:text-white transition-all duration-300"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
