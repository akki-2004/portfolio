import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-20 text-white text-center border-2 border-purple-500 rounded-lg p-6">
      <h2 className="text-3xl font-bold mb-12">Contact Me</h2>

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-center space-x-4">
          <FaPhone className="text-purple-400" size={20} />
          <span className="text-gray-300">+91 6300584860</span>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <FaEnvelope className="text-purple-400" size={20} />
          <span className="text-gray-300">naniakshay361@gmail.com</span>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <a href="https://github.com/akki-2004" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-purple-400" size={20} />
          </a>
          <span className="text-gray-300">akki-2004</span>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <a href="https://www.linkedin.com/in/akshay" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-purple-400" size={20} />
          </a>
          <span className="text-gray-300">Akshay</span>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <a href="https://twitter.com/satya_akshay" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-purple-400" size={20} />
          </a>
          <span className="text-gray-300">@satya_akshay</span>
        </div>

        <a
          href="mailto:naniakshay361@gmail.com"
          className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 mt-6"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Contact;
