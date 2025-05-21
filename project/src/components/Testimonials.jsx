import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Tann Mann Gaadi",
      role: "Startup Company",
      image: "https://via.placeholder.com/150",
      content: "Akshay is an exceptional developer who helped us build our web application from scratch. His expertise in the MERN stack was invaluable, and he consistently delivered high-quality work ahead of schedule. His problem-solving skills and attention to detail made him a valuable asset to our team.",
      rating: 5
    },
    {
      name: "WiseMango",
      role: "Tech Company",
      image: "https://via.placeholder.com/150",
      content: "Working with Akshay was a pleasure. He's a very good developer who helped us develop our platform with clean, maintainable code. His understanding of modern web technologies and best practices significantly improved our project's quality and performance.",
      rating: 5
    }
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

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-background-dark to-background-dark/90 -z-10"></div>
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-soft-light -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-coral/20 to-transparent"></div>
      
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
            <div className="h-px w-12 bg-accent-gold/50"></div>
            <span className="mx-4 text-accent-gold font-medium px-4 py-1 rounded-full border border-accent-gold/20 text-sm flex items-center">
              <Quote size={14} className="mr-2" />
              Testimonials
            </span>
            <div className="h-px w-12 bg-accent-gold/50"></div>
          </div>
          
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-4 text-text-light">
            What Clients Say
          </h2>
          
          <p className="text-center text-text-muted max-w-2xl mx-auto">
            Feedback from people I've worked with
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div 
          className="relative max-w-4xl mx-auto"
          variants={itemVariants}
        >
          {/* Decorative quotes */}
          <div className="absolute -top-10 -left-10 text-accent-gold/10 transform -scale-x-100">
            <Quote size={80} />
          </div>
          <div className="absolute -bottom-10 -right-10 text-accent-gold/10">
            <Quote size={80} />
          </div>
          
          {/* Testimonial Cards */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <motion.div 
                    className="bg-background-card border border-accent-gold/10 rounded-2xl p-8 md:p-10 shadow-lg relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {/* Background gradient */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-gold/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent-coral/5 rounded-full blur-3xl"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Rating */}
                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <motion.span 
                            key={i}
                            className={i < testimonial.rating ? "text-accent-gold" : "text-gray-400"}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + (i * 0.1) }}
                            viewport={{ once: true }}
                          >
                            <Star size={20} fill={i < testimonial.rating ? "currentColor" : "none"} />
                          </motion.span>
                        ))}
                      </div>
                      
                      {/* Testimonial text */}
                      <blockquote className="text-lg md:text-xl text-text-muted italic mb-8">
                        "{testimonial.content}"
                      </blockquote>
                      
                      {/* Client info */}
                      <div className="flex items-center">
                        <div className="mr-4 w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                          <span className="text-xl font-bold">{testimonial.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-text-light">{testimonial.name}</h4>
                          <p className="text-text-muted">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-10 space-x-4">
            <motion.button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-background-card border border-accent-gold/10 flex items-center justify-center text-text-muted hover:text-accent-gold transition-colors"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(251, 191, 36, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            
            <motion.button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-background-card border border-accent-gold/10 flex items-center justify-center text-text-muted hover:text-accent-gold transition-colors"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(251, 191, 36, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? "bg-accent-gold w-8" 
                    : "bg-accent-gold/30 hover:bg-accent-gold/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Testimonials;