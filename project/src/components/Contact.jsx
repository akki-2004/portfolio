import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  MessageSquare,
  MapPin,
  Clock
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
      link: "https://www.linkedin.com/in/tirumani-satya-akshay-bb4885284/",
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
        className="container mx-auto px-6 max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16 relative text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-accent-gold/50"></div>
            <span className="mx-4 text-accent-gold font-medium px-4 py-1 rounded-full border border-accent-gold/20 text-sm flex items-center">
              <MessageSquare size={14} className="mr-2" />
              Get In Touch
            </span>
            <div className="h-px w-12 bg-accent-gold/50"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-light">
            Contact Me
          </h2>
          
          <p className="text-text-muted max-w-2xl mx-auto">
            Let's connect and discuss your project or opportunity
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={itemVariants} className="flex flex-col space-y-8">
          {/* Contact Methods */}
          <div className="bg-background-card border border-accent-teal/10 rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-text-light mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {contactMethods.map(({ icon, value, link, color }, idx) => (
                <a 
                  href={link} 
                  key={idx}
                  target="_blank" 
                  rel="noreferrer"
                  className={`flex items-center space-x-4 group rounded-lg p-3 hover:bg-accent-gold/5 transition-colors cursor-pointer text-text-light`}
                >
                  <div className={`text-${color} group-hover:text-${color}/80`}>
                    {icon}
                  </div>
                  <div className="font-medium">{value}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="bg-background-card border border-accent-coral/10 rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-text-light mb-6">Availability</h3>
            <ul className="space-y-4 text-text-muted">
              <li className="flex items-center space-x-3">
                <MapPin size={20} className="text-accent-gold" />
                <span>Hyderabad, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={20} className="text-accent-teal" />
                <span>Mon – Fri, 10AM – 6PM</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
