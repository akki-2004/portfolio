import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  Send, 
  MessageSquare,
  MapPin,
  Clock,
  ArrowRight
} from "lucide-react";

function Contact() {
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

  const contactMethods = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 6300584860",
      link: "tel:+916300584860",
      color: "accent-teal"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "naniakshay361@gmail.com",
      link: "mailto:naniakshay361@gmail.com",
      color: "accent-coral"
    },
    {
      icon: <Github size={24} />,
      title: "GitHub",
      value: "akki-2004",
      link: "https://github.com/akki-2004",
      color: "accent-gold"
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      value: "Akshay",
      link: "https://www.linkedin.com/in/akshay",
      color: "accent-teal"
    },
    {
      icon: <Twitter size={24} />,
      title: "Twitter",
      value: "@satya_akshay",
      link: "https://twitter.com/satya_akshay",
      color: "accent-coral"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-background-dark to-background-dark/90 -z-10"></div>
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-soft-light -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-teal/20 to-transparent"></div>
      
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
              <MessageSquare size={14} className="mr-2" />
              Get In Touch
            </span>
            <div className="h-px w-12 bg-accent-gold/50"></div>
          </div>
          
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-4 text-text-light">
            Contact Me
          </h2>
          
          <p className="text-center text-text-muted max-w-2xl mx-auto">
            Let's connect and discuss your project or opportunity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-background-card border border-accent-gold/10 rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-text-light mb-6">Send Me a Message</h3>
              
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-text-light mb-2 font-medium">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg bg-background-dark border border-accent-gold/10 text-text-light focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/50 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-text-light mb-2 font-medium">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg bg-background-dark border border-accent-gold/10 text-text-light focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/50 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-text-light mb-2 font-medium">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 rounded-lg bg-background-dark border border-accent-gold/10 text-text-light focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/50 outline-none transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-text-light mb-2 font-medium">Message</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      className="w-full px-4 py-3 rounded-lg bg-background-dark border border-accent-gold/10 text-text-light focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/50 outline-none transition-all resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full py-3 px-6 bg-accent-gold text-background-dark font-medium rounded-lg flex items-center justify-center group hover:bg-accent-gold/90 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <motion.span 
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                  >
                    <Send size={16} />
                  </motion.span>
                </motion.button>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="flex flex-col">
            {/* Contact Card */}
            <div className="bg-background-card border border-accent-teal/10 rounded-2xl p-6 md:p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-text-light mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg border border-accent-teal/10 bg-background-dark hover:border-accent-teal/30 transition-all group"
                    whileHover={{ x: 5 }}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-${method.color} bg-${method.color}/10 mr-4`}>
                      {method.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-text-light font-medium">{method.title}</h4>
                      <p className="text-text-muted group-hover:text-accent-teal transition-colors">{method.value}</p>
                    </div>
                    <ArrowRight size={16} className="text-text-muted group-hover:text-accent-teal opacity-0 group-hover:opacity-100 transition-all" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Availability Card */}
            <div className="bg-background-card border border-accent-coral/10 rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl font-bold text-text-light mb-4">Availability</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-accent-coral bg-accent-coral/10 mr-3">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="text-text-light font-medium">Location</h4>
                    <p className="text-text-muted">Hyderabad, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-accent-coral bg-accent-coral/10 mr-3">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h4 className="text-text-light font-medium">Working Hours</h4>
                    <p className="text-text-muted">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 rounded-lg bg-accent-coral/5 border border-accent-coral/10">
                <p className="text-text-muted text-sm">
                  <span className="text-accent-coral font-medium">Currently available</span> for freelance work and collaborations. Let's create something amazing together!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
